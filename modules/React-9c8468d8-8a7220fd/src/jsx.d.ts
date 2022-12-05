/// <reference types="@rbxts/types" />

import React from "./index";

type Defaultize<P, D> = P extends any
  ? string extends keyof P
    ? P
    : Pick<P, Exclude<keyof P, keyof D>> &
    Partial<Pick<P, Extract<keyof P, keyof D>>> &
    Partial<Pick<D, Exclude<keyof D, keyof P>>>
  : never;

type JsxChild =
  | boolean
  | React.ReactElement
  | ReadonlyArray<React.ReactElement>
  | ReadonlyMap<string | number, React.ReactElement>
  | undefined;

type JsxNode = JsxChild | JsxChild[];

declare global {
  namespace JSX {
    type Element = React.ReactElement;

    interface ElementClass {
      render(): React.ReactElement | undefined;
    }

    interface ElementChildrenAttribute {
      _jsx_children: {};
    }

    interface IntrinsicAttributes extends React.PropsWithChildren {
      Key?: string | number;
      _jsx_children?: JsxNode;
    }

    interface IntrinsicClassAttributes extends React.PropsWithChildren {}

    type LibraryManagedAttributes<C, P> = C extends { defaultProps: infer D } ? Defaultize<P, D> : P;

    type IntrinsicElement<T extends Instance> = React.ReactInstance & IntrinsicAttributes;

    interface IntrinsicElements {
      billboardgui: IntrinsicElement<BillboardGui>;
      camera: IntrinsicElement<Camera>;
      canvasgroup: IntrinsicElement<CanvasGroup>;
      frame: IntrinsicElement<Frame>;
      imagebutton: IntrinsicElement<ImageButton>;
      imagelabel: IntrinsicElement<ImageLabel>;
      screengui: IntrinsicElement<ScreenGui>;
      scrollingframe: IntrinsicElement<ScrollingFrame>;
      surfacegui: IntrinsicElement<SurfaceGui>;
      textbox: IntrinsicElement<TextBox>;
      textbutton: IntrinsicElement<TextButton>;
      textlabel: IntrinsicElement<TextLabel>;
      uiaspectratioconstraint: IntrinsicElement<UIAspectRatioConstraint>;
      uicorner: IntrinsicElement<UICorner>;
      uigradient: IntrinsicElement<UIGradient>;
      uigridlayout: IntrinsicElement<UIGridLayout>;
      uilistlayout: IntrinsicElement<UIListLayout>;
      uipadding: IntrinsicElement<UIPadding>;
      uipagelayout: IntrinsicElement<UIPageLayout>;
      uiscale: IntrinsicElement<UIScale>;
      uisizeconstraint: IntrinsicElement<UISizeConstraint>;
      uistroke: IntrinsicElement<UIStroke>;
      uitablelayout: IntrinsicElement<UITableLayout>;
      uitextsizeconstraint: IntrinsicElement<UITextSizeConstraint>;
      viewportframe: IntrinsicElement<ViewportFrame>;
    }
  }
}