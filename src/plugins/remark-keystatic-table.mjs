/**
 * remark-keystatic-table
 *
 * Transforms Keystatic's Markdoc table syntax into HTML table elements.
 *
 * Keystatic serialises tables as:
 *
 *   {% table %}
 *   - Header 1
 *   - Header 2
 *   ---
 *   - Cell 1
 *   - Cell 2
 *   {% /table %}
 *
 * remark parses this as:
 *   paragraph  → "{% table %}"
 *   list       → header cells
 *   thematicBreak
 *   list       → row cells
 *   ...
 *   list       → last row cells (may include "{% /table %}" as a trailing item
 *                if there is no blank line before the closing tag)
 *
 * The closing tag is stripped from any list node that contains it, so the
 * table is complete regardless of trailing whitespace in the source file.
 */

function getNodeText(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value ?? '';
  if (node.children) return node.children.map(getNodeText).join('');
  return '';
}

function isTableOpen(node) {
  return node.type === 'paragraph' && getNodeText(node).trim() === '{% table %}';
}

/** Returns true if node is a standalone close-tag paragraph. */
function isTableClose(node) {
  return node.type === 'paragraph' && getNodeText(node).trim() === '{% /table %}';
}

/**
 * Returns true if the last list item of a list node contains "{% /table %}".
 * Removes that item (or the trailing text) in place so the list only
 * contains real cell data.
 */
function stripTrailingCloseTag(listNode) {
  if (listNode.type !== 'list') return false;
  const items = listNode.children;
  if (items.length === 0) return false;

  const last = items[items.length - 1];
  const text = getNodeText(last);
  if (!text.includes('{% /table %}')) return false;

  // The close tag is the entire last item — remove it
  if (text.trim() === '{% /table %}') {
    items.pop();
    return true;
  }

  // The close tag is appended to a real cell — strip just the tag from the
  // last paragraph-child of that list item
  const paragraphs = last.children ?? [];
  for (const p of paragraphs) {
    if (p.type === 'paragraph') {
      const textChild = p.children?.find((c) => c.type === 'text' && c.value?.includes('{% /table %}'));
      if (textChild) {
        textChild.value = textChild.value.replace(/\s*\{%\s*\/table\s*%\}/, '').trimEnd();
        return true;
      }
    }
  }

  return false;
}

function listToCells(listNode) {
  return listNode.children.map((item) => getNodeText(item).trim());
}

function buildTableHtml(rows) {
  if (rows.length === 0) return '';
  const [headerRow, ...bodyRows] = rows;

  const thead =
    '<thead><tr>' +
    headerRow.map((c) => `<th>${c}</th>`).join('') +
    '</tr></thead>';

  const tbody =
    bodyRows.length > 0
      ? '<tbody>' +
        bodyRows
          .map((row) => '<tr>' + row.map((c) => `<td>${c}</td>`).join('') + '</tr>')
          .join('') +
        '</tbody>'
      : '';

  return `<table>${thead}${tbody}</table>`;
}

export default function remarkKeystakicTable() {
  return (tree) => {
    const children = tree.children;
    let i = 0;

    while (i < children.length) {
      if (!isTableOpen(children[i])) {
        i++;
        continue;
      }

      // Scan forward for the closing tag — either as a standalone paragraph
      // or embedded in the trailing list item
      let closeIndex = -1;
      let closedViaListStrip = false;

      for (let j = i + 1; j < children.length; j++) {
        if (isTableClose(children[j])) {
          closeIndex = j;
          break;
        }
        if (children[j].type === 'list' && stripTrailingCloseTag(children[j])) {
          closeIndex = j; // include this list node in the table; close tag already removed
          closedViaListStrip = true;
          break;
        }
      }

      if (closeIndex === -1) {
        i++;
        continue;
      }

      // Collect list nodes between open and close
      const rows = [];
      for (let k = i + 1; k <= closeIndex; k++) {
        if (children[k].type === 'list' && children[k].children.length > 0) {
          rows.push(listToCells(children[k]));
        }
      }

      const htmlNode = { type: 'html', value: buildTableHtml(rows) };

      // Replace open tag through close tag (inclusive) with the HTML node
      children.splice(i, closeIndex - i + 1, htmlNode);
    }
  };
}
