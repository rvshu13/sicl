export function getRootNode(el: Element): Document | ShadowRoot {
    return el.getRootNode() as Document | ShadowRoot;
  }

export function getHost(root: Document | ShadowRoot): Element | null {
  return (root as ShadowRoot).host || null;
}

export function closestElementCrossShadowBoundary<T extends Element = Element>(element: Element, selector: string): T | null {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom<T extends Element = Element>(el: Element): T | null {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }

  return closestFrom(element);
}
