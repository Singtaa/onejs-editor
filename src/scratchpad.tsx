import { Dom } from "OneJS/Dom"
import { DomWrapper } from "onejs-core/dom/dom";
import { h, render, VNode } from "onejs-preact"

interface ScratchpadProps {
    window: CS.OneJS.Editor.ScratchpadWindow
}

export function scratchpad(name: string, Elem: ({ window }: ScratchpadProps) => VNode<any>, focus: boolean = false) {
    var scratchpadWindow = CS.OneJS.Editor.ScratchpadWindow.Get(name, focus);
    ___engineHost.ApplyStyleSheets(scratchpadWindow.rootVisualElement);
    const rootDom = new DomWrapper(new Dom(scratchpadWindow.rootVisualElement, document._doc));
    render(<Elem window={scratchpadWindow} />, rootDom)
}