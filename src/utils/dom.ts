/* 
  Those utilities are necessary to make components work inside a form when encapsulated in Shadow DOM.
  Brought them from https://github.com/Esri/calcite-components/blob/master/src/utils/form.tsx ❤
 */

export interface FormOwner {
  formEl: HTMLFormElement;
}

export interface FormComponent<T = any> extends FormOwner {
  disabled: boolean;
  required?: boolean;
  readonly el: HTMLElement;
  name: string;
  value: T;
  defaultValue: T;
  onFormReset?(): void;
  syncHiddenFormInput?(input: HTMLInputElement): void;
}

export interface CheckableFormCompoment<T = any> extends FormComponent<T> {
  checked: boolean;
  defaultChecked: boolean;
}

export function getRootNode(el: Element): Document | ShadowRoot {
    return el.getRootNode() as Document | ShadowRoot;
  }

export function getHost(root: Document | ShadowRoot): Element | null {
  return (root as ShadowRoot).host || null;
}

const onFormResetMap = new WeakMap<HTMLElement, FormComponent["onFormReset"]>();
const formComponentSet = new WeakSet<HTMLElement>();

function isCheckable(component: FormComponent): component is CheckableFormCompoment {
  return "checked" in component;
}

function onFormReset<T>(this: FormComponent<T>): void {
  if (isCheckable(this)) {
    this.checked = this.defaultChecked;
    return;
  }

  this.value = this.defaultValue;
}

export function submitForm(component: FormOwner): void {
  const { formEl } = component;

  if (!formEl) {
    return;
  }

  "requestSubmit" in formEl ? formEl.requestSubmit() : formEl.submit();
}

export function resetForm(component: FormOwner): void {
  component.formEl?.reset();
}

export function connectForm<T>(component: FormComponent<T>): void {
  const { el, value } = component;

  const form = closestElementCrossShadowBoundary<HTMLFormElement>(el, "form");
  component.formEl = form;
  component.defaultValue = value;

  if (isCheckable(component)) {
    component.defaultChecked = component.checked;
  }

  const boundOnFormReset = (component.onFormReset || onFormReset).bind(component);
  form.addEventListener("reset", boundOnFormReset);
  onFormResetMap.set(component.el, boundOnFormReset);
  formComponentSet.add(el);
}

export function disconnectForm<T>(component: FormComponent<T>): void {
  const { el, formEl } = component;

  if (!formEl) {
    return;
  }

  const boundOnFormReset = onFormResetMap.get(el);
  formEl.removeEventListener("reset", boundOnFormReset);
  onFormResetMap.delete(el);
  component.formEl = null;
  formComponentSet.delete(el);
}

export function closestElementCrossShadowBoundary<T extends Element = Element>(element: Element, selector: string): T | null {
  function closestFrom<T extends Element = Element>(el: Element): T | null {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }

  return closestFrom(element);
}