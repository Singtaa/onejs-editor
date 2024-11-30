import { Dom } from "OneJS/Dom";
import { DomWrapper } from "onejs-core/dom/dom";
import { h, render, VNode } from "onejs-preact"

export function window<T extends CS.UnityEditor.EditorWindow>(type: { new(): T }, Elem: ({ root }) => VNode<any>) {
    CS.OneJS.Editor.ElementRenderer.Register(puer.$typeof(type), (root: VisualElement) => {
        const dom = new DomWrapper(new Dom(root, document._doc));
        render(<Elem root={dom} />, dom)
    })
}