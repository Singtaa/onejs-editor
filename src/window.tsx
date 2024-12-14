import { Dom } from "OneJS/Dom";
import { DomWrapper } from "onejs-core/dom/dom";
import { h, render, VNode } from "onejs-preact"

type EditorWindow = CS.UnityEditor.EditorWindow

interface Props<T> {
    window: T
    root: Element
}

export function window<T extends EditorWindow>(type: { new(): T }, Elem: ({ window, root }: Props<T>) => VNode<any>) {
    CS.OneJS.Editor.ElementRenderer.Register(puer.$typeof(type), (window: T) => {
        const dom = new DomWrapper(new Dom(window.rootVisualElement, document._doc));
        render(<Elem window={window} root={dom} />, dom)
    })
}