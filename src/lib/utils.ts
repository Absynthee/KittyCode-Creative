// @/lib/utils.ts

// HTML Element Type Helpers
export function getHTMLElement(
  selector: string,
  parent?: Document | HTMLElement
): HTMLElement | null {
  const container = parent || document;
  return container.querySelector(selector) as HTMLElement;
}

export function getHTMLElements(
  selector: string,
  parent?: Document | HTMLElement
): HTMLElement[] {
  const container = parent || document;
  return Array.from(container.querySelectorAll(selector)) as HTMLElement[];
}

export function getImageElement(
  selector: string,
  parent?: Document | HTMLElement
): HTMLImageElement | null {
  const container = parent || document;
  return container.querySelector(selector) as HTMLImageElement;
}

export function getInputElement(
  selector: string,
  parent?: Document | HTMLElement
): HTMLInputElement | null {
  const container = parent || document;
  return container.querySelector(selector) as HTMLInputElement;
}

export function getTextAreaElement(
  selector: string,
  parent?: Document | HTMLElement
): HTMLTextAreaElement | null {
  const container = parent || document;
  return container.querySelector(selector) as HTMLTextAreaElement;
}

export function getButtonElement(
  selector: string,
  parent?: Document | HTMLElement
): HTMLButtonElement | null {
  const container = parent || document;
  return container.querySelector(selector) as HTMLButtonElement;
}

// Utility functions for common DOM operations
export function setElementStyle(
  element: HTMLElement | null,
  property: string,
  value: string
): void {
  if (element && element.style) {
    element.style.setProperty(property, value);
  }
}

export function toggleElementClass(
  element: HTMLElement | null,
  className: string,
  force?: boolean
): void {
  if (element && element.classList) {
    element.classList.toggle(className, force);
  }
}

export function addElementClass(
  element: HTMLElement | null,
  ...classNames: string[]
): void {
  if (element && element.classList) {
    element.classList.add(...classNames);
  }
}

export function removeElementClass(
  element: HTMLElement | null,
  ...classNames: string[]
): void {
  if (element && element.classList) {
    element.classList.remove(...classNames);
  }
}

// Image loading utilities
export function isImageLoaded(img: HTMLImageElement | null): boolean {
  return img ? img.complete && img.naturalWidth > 0 : false;
}

export function isImageError(img: HTMLImageElement | null): boolean {
  return img ? img.complete && img.naturalWidth === 0 : false;
}

// Event listener utilities with proper typing
export function addElementEventListener<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | null,
  type: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void {
  if (element) {
    element.addEventListener(type, listener, options);
  }
}

// Form element utilities
export function getFormValue(
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null
): string {
  return element ? element.value || "" : "";
}

export function setFormValue(
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null,
  value: string
): void {
  if (element) {
    element.value = value;
  }
}

// Attribute utilities
export function setElementAttribute(
  element: HTMLElement | null,
  name: string,
  value: string
): void {
  if (element) {
    element.setAttribute(name, value);
  }
}

export function getElementAttribute(
  element: HTMLElement | null,
  name: string
): string | null {
  return element ? element.getAttribute(name) : null;
}

export function removeElementAttribute(
  element: HTMLElement | null,
  name: string
): void {
  if (element) {
    element.removeAttribute(name);
  }
}

// Animation and transition utilities
export function waitForTransition(
  element: HTMLElement | null,
  property?: string
): Promise<void> {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (!property || event.propertyName === property) {
        element.removeEventListener("transitionend", handleTransitionEnd);
        resolve();
      }
    };
    element.addEventListener("transitionend", handleTransitionEnd);
  });
}

// Focus management utilities
export function focusElement(
  element: HTMLElement | null,
  options?: FocusOptions
): void {
  if (element && typeof element.focus === "function") {
    element.focus(options);
  }
}

export function blurElement(element: HTMLElement | null): void {
  if (element && typeof element.blur === "function") {
    element.blur();
  }
}

// Array filtering helpers for DOM collections
export function filterHTMLElements(elements: Element[]): HTMLElement[] {
  return elements.filter((el): el is HTMLElement => el instanceof HTMLElement);
}

export function filterImageElements(elements: Element[]): HTMLImageElement[] {
  return elements.filter(
    (el): el is HTMLImageElement => el instanceof HTMLImageElement
  );
}

// Validation helpers
export function isHTMLElement(element: unknown): element is HTMLElement {
  return element instanceof HTMLElement;
}

export function isImageElement(element: unknown): element is HTMLImageElement {
  return element instanceof HTMLImageElement;
}

export function isInputElement(element: unknown): element is HTMLInputElement {
  return element instanceof HTMLInputElement;
}

export function isTextAreaElement(
  element: unknown
): element is HTMLTextAreaElement {
  return element instanceof HTMLTextAreaElement;
}

// Generic element finder with type assertion
export function findElement<T extends HTMLElement>(
  selector: string,
  parent?: Document | HTMLElement,
  type?: new () => T
): T | null {
  const container = parent || document;
  const element = container.querySelector(selector);

  if (!element) return null;

  if (type && !(element instanceof type)) {
    console.warn(`Element found but not of expected type: ${selector}`);
    return null;
  }

  return element as T;
}

export function findElements<T extends HTMLElement>(
  selector: string,
  parent?: Document | HTMLElement,
  type?: new () => T
): T[] {
  const container = parent || document;
  const elements = Array.from(container.querySelectorAll(selector));

  if (type) {
    return elements.filter((el): el is T => el instanceof type);
  }

  return elements as T[];
}
