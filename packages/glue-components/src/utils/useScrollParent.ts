type ScrollElement = HTMLElement | Window;

const overflowScrollReg = /scroll|auto/i;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  );
}

// https://github.com/youzan/vant/issues/3823
export function getScrollParent(el: Element, root: ScrollElement = window) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}

export function useScrollParent(el, root: ScrollElement = window) {
  let scrollParent = getScrollParent(el, root);
  return scrollParent;
}
