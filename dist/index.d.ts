/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
export function append(element: Element, node: SVGElement): typeof element;

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the appended node
 */
export function appendTo(element: Element, target: SVGElement): typeof element;

/**
 * Prepend a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
export function prepend(element: Element, node: SVGElement): typeof element;

/**
 * Prepend a node to a target element and return the prepended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the prepended node
 */
export function prependTo(element: Element, target: SVGElement): typeof element;

export interface KeyValue {
  [key: string]: any;
}

export function attr(node: SVGElement, name: string): string;
export function attr(node: SVGElement, name: string, value: number | string): typeof node;
export function attr(node: SVGElement, attrs: KeyValue): typeof node;
export function attr(node: SVGElement, name: string, value: number | string): typeof node | string;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */
export function classes<T extends Element>(el: T): ClassList<T>;

export class ClassList<T extends Element> {
  public list: T["classList"];
  public el: T;
  constructor(el: T);

  add(name: string): this;
  remove(name: string | RegExp): this;

  removeMatching(re: RegExp): this;

  toggle(name: string, force?: boolean): this;

  array(): string[];

  has(name: string): boolean;
  contains(name: string): boolean;
}

/**
 * Removes all children from the given element
 *
 * @param  {DOMElement} element
 * @return {DOMElement} the element (for chaining)
 */
export function clear<T extends Element>(element: T): T;

export function clone<T extends Node>(element: T): T;

/**
 * Create a specific type from name or SVG markup.
 *
 * @param name the name or markup of the element
 * @param attrs attributes to set on the element
 *
 * @return
 */
export function create(name: "a", attrs?: KeyValue): SVGAElement;
export function create(name: "circle", attrs?: KeyValue): SVGCircleElement;
export function create(name: "clipPath", attrs?: KeyValue): SVGClipPathElement;
export function create(name: "componentTransferFunction", attrs?: KeyValue): SVGComponentTransferFunctionElement;
export function create(name: "defs", attrs?: KeyValue): SVGDefsElement;
export function create(name: "desc", attrs?: KeyValue): SVGDescElement;
export function create(name: "ellipse", attrs?: KeyValue): SVGEllipseElement;
export function create(name: "feBlend", attrs?: KeyValue): SVGFEBlendElement;
export function create(name: "feColorMatrix", attrs?: KeyValue): SVGFEColorMatrixElement;
export function create(name: "feComponentTransfer", attrs?: KeyValue): SVGFEComponentTransferElement;
export function create(name: "feComposite", attrs?: KeyValue): SVGFECompositeElement;
export function create(name: "feConvolveMatrix", attrs?: KeyValue): SVGFEConvolveMatrixElement;
export function create(name: "feDiffuseLighting", attrs?: KeyValue): SVGFEDiffuseLightingElement;
export function create(name: "feDisplacementMap", attrs?: KeyValue): SVGFEDisplacementMapElement;
export function create(name: "feDistantLight", attrs?: KeyValue): SVGFEDistantLightElement;
export function create(name: "feFlood", attrs?: KeyValue): SVGFEFloodElement;
export function create(name: "feFuncA", attrs?: KeyValue): SVGFEFuncAElement;
export function create(name: "feFuncB", attrs?: KeyValue): SVGFEFuncBElement;
export function create(name: "feFuncG", attrs?: KeyValue): SVGFEFuncGElement;
export function create(name: "feFuncR", attrs?: KeyValue): SVGFEFuncRElement;
export function create(name: "feGaussianBlur", attrs?: KeyValue): SVGFEGaussianBlurElement;
export function create(name: "feImage", attrs?: KeyValue): SVGFEImageElement;
export function create(name: "feMerge", attrs?: KeyValue): SVGFEMergeElement;
export function create(name: "feMergeNode", attrs?: KeyValue): SVGFEMergeNodeElement;
export function create(name: "feMorphology", attrs?: KeyValue): SVGFEMorphologyElement;
export function create(name: "feOffset", attrs?: KeyValue): SVGFEOffsetElement;
export function create(name: "fePointLight", attrs?: KeyValue): SVGFEPointLightElement;
export function create(name: "feSpecularLighting", attrs?: KeyValue): SVGFESpecularLightingElement;
export function create(name: "feSpotLight", attrs?: KeyValue): SVGFESpotLightElement;
export function create(name: "feTile", attrs?: KeyValue): SVGFETileElement;
export function create(name: "feTurbulence", attrs?: KeyValue): SVGFETurbulenceElement;
export function create(name: "filter", attrs?: KeyValue): SVGFilterElement;
export function create(name: "foreignObject", attrs?: KeyValue): SVGForeignObjectElement;
export function create(name: "g", attrs?: KeyValue): SVGGElement;
export function create(name: "image", attrs?: KeyValue): SVGImageElement;
export function create(name: "gradient", attrs?: KeyValue): SVGGradientElement;
export function create(name: "line", attrs?: KeyValue): SVGLineElement;
export function create(name: "linearGradient", attrs?: KeyValue): SVGLinearGradientElement;
export function create(name: "marker", attrs?: KeyValue): SVGMarkerElement;
export function create(name: "mask", attrs?: KeyValue): SVGMaskElement;
export function create(name: "path", attrs?: KeyValue): SVGPathElement;
export function create(name: "metadata", attrs?: KeyValue): SVGMetadataElement;
export function create(name: "pattern", attrs?: KeyValue): SVGPatternElement;
export function create(name: "polygon", attrs?: KeyValue): SVGPolygonElement;
export function create(name: "polyline", attrs?: KeyValue): SVGPolylineElement;
export function create(name: "radialGradient", attrs?: KeyValue): SVGRadialGradientElement;
export function create(name: "rect", attrs?: KeyValue): SVGRectElement;
export function create(name: "svg", attrs?: KeyValue): SVGSVGElement;
export function create(name: "script", attrs?: KeyValue): SVGScriptElement;
export function create(name: "stop", attrs?: KeyValue): SVGStopElement;
export function create(name: "style", attrs?: KeyValue): SVGStyleElement;
export function create(name: "switch", attrs?: KeyValue): SVGSwitchElement;
export function create(name: "symbol", attrs?: KeyValue): SVGSymbolElement;
export function create(name: "tspan", attrs?: KeyValue): SVGTSpanElement;
export function create(name: "textContent", attrs?: KeyValue): SVGTextContentElement;
export function create(name: "text", attrs?: KeyValue): SVGTextElement;
export function create(name: "textPath", attrs?: KeyValue): SVGTextPathElement;
export function create(name: "textPositioning", attrs?: KeyValue): SVGTextPositioningElement;
export function create(name: "title", attrs?: KeyValue): SVGTitleElement;
export function create(name: "use", attrs?: KeyValue): SVGUseElement;
export function create(name: "view", attrs?: KeyValue): SVGViewElement;
export function create(name: string, attrs?: KeyValue): SVGElement;


export function on(node: Node, event: string, listener: Function, useCapture?: boolean): void;
export function off(node: Node, event: string, listener: Function, useCapture?: boolean): void;

export function createPoint(): SVGPoint;
export function createPoint(x: number, y: number): SVGPoint;

export function createMatrix(): SVGMatrix;
export function createMatrix(a: number, b: number, c: number, d: number, e: number, f: number): SVGMatrix;

export function createTransform(matrix?: SVGMatrix): SVGTransform;

export function innerSVG(element: Element, svg: string): typeof element;
export function innerSVG(element: Element): string;
export function innerSVG(element: Element, svg?: string): typeof element | string;

export function select(node: Node, selector: string): Node | null;

export function select<K extends keyof HTMLElementTagNameMap>(node: K, selector: string): HTMLElementTagNameMap[K] | null;
export function select<K extends keyof SVGElementTagNameMap>(node: K, selector: string): SVGElementTagNameMap[K] | null;
export function select<E extends Element = Element>(node: E, selector: string): E | null;

export function selectAll<K extends keyof HTMLElementTagNameMap>(node: K, selector: string): HTMLElementTagNameMap[K][];
export function selectAll<K extends keyof SVGElementTagNameMap>(node: K, selector: string): SVGElementTagNameMap[K][];
export function selectAll<E extends Element = Element>(node: E, selector: string): E[];

export function remove(el: Node): void;

export function replace(element: Node, replacement: Node): typeof replacement;

export function transform(node: Node): SVGTransform;
export function transform(node: Node, transforms?: SVGTransform | SVGTransform[]): SVGTransform | void;
