import { h, render, VNode } from "onejs-preact"
import { Dom } from "OneJS/Dom"
import { VisualElement } from "UnityEngine/UIElements"
import { DomWrapper } from "onejs-core/dom/dom"


export function inspector<T extends CS.UnityEngine.Component>(type: { new(): T }, InspectorElem: (props: { target: T }) => VNode<any>) {
    CS.OneJS.Editor.BaseEditor.Register(puer.$typeof(type), (root: VisualElement, target: any) => {
        const dom = new DomWrapper(new Dom(root, document._doc));
        render(<InspectorElem target={target} />, dom)
    })
}