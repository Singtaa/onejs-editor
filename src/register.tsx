import { Dom } from "OneJS/Dom"
import { VisualElement } from "UnityEngine/UIElements"
import { DomWrapper } from "onejs-core/dom/dom"
import { h, render, VNode } from "onejs-preact"

type UObject = CS.UnityEngine.Object

export interface RegisterProps<T> {
    target: T
    root: Element
}

export function register<T extends UObject>(type: { new(): T }, Elem: ({ target, root }: RegisterProps<T>) => VNode<any>) {
    ___engineHost.RegisterRenderer(puer.$typeof(type), (targetObj, rootVE) => {
        const dom = new DomWrapper(new Dom(rootVE, document._doc));
        render(<Elem target={targetObj as T} root={dom} />, dom)
    })
}