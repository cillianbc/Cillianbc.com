import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    insights: collection({
      label: 'Insights',
      slugField: 'title',
      path: 'src/content/insights/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: { label: 'Slug', description: 'URL-friendly identifier, auto-generated from title' },
        }),
        description: fields.text({
          label: 'Description',
          description: 'Meta description and article summary (150–160 characters ideal)',
          multiline: true,
        }),
        pubDate: fields.date({
          label: 'Published Date',
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: 'Updated Date',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'SEO', value: 'SEO' },
            { label: 'GEO', value: 'GEO' },
            { label: 'AEO', value: 'AEO' },
            { label: 'AI Workflows', value: 'AI Workflows' },
          ],
          defaultValue: 'GEO',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          description: 'Show this article in featured slots on the Insights index',
          defaultValue: false,
        }),
        readingTime: fields.number({
          label: 'Reading Time (minutes)',
          validation: { isRequired: true, min: 1 },
        }),
        keyTopics: fields.array(
          fields.text({ label: 'Topic' }),
          {
            label: 'Key Topics',
            description: 'Used for structured data and topic tagging',
            itemLabel: (props) => props.value || 'Topic',
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
  },
});
