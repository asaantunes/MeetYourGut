// Replace interface arrow characters with consistent, accessible line icons.
function renderLinkIcons() {
  const paths = {
    '↗': 'M5 19 19 5M8 5h11v11',
    '→': 'M4 12h15M13 6l6 6-6 6',
    '↓': 'M12 4v15M6 13l6 6 6-6'
  };
  document.querySelectorAll('a').forEach(link => {
    const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      if (!/[↗→↓]/.test(node.nodeValue)) return;
      const fragment = document.createDocumentFragment();
      node.nodeValue.split(/([↗→↓])/).forEach(part => {
        if (!paths[part]) { fragment.append(document.createTextNode(part)); return; }
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('class', 'ui-icon');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '1.7');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', paths[part]);
        svg.append(path);
        fragment.append(svg);
      });
      node.replaceWith(fragment);
    });
  });
}
renderLinkIcons();
document.querySelector('#language').addEventListener('change', renderLinkIcons);
