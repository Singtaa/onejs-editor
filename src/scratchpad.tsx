import { Dom } from "OneJS/Dom"
import { MeshGenerationContext } from "UnityEngine/UIElements"
import { DomWrapper } from "onejs-core/dom/dom"
import { h, render, VNode } from "onejs-preact"
import { useEffect, useRef } from "onejs-preact/hooks"

interface ScratchpadProps {
    window: CS.OneJS.Editor.ScratchpadWindow
}

const Holder = ({ children }: any) => {
    const ref = useRef<Element>()

    useEffect(() => {
        ref.current!.style.width = "100%"
        ref.current!.style.height = ref.current!.parentNode.ve.resolvedStyle.height - 24
    }, [])

    return <div ref={ref}>
        {children}
    </div>
}

export function scratchpad(name: string, Elem: ({ window }: ScratchpadProps) => VNode<any>, focus: boolean = false) {
    var scratchpadWindow = CS.OneJS.Editor.ScratchpadWindow.Get(name, focus)
    ___engineHost.ApplyStyleSheets(scratchpadWindow.rootVisualElement)
    ___engineHost.add_onReload(() => {
        if (scratchpadWindow && scratchpadWindow.rootVisualElement)
            scratchpadWindow.rootVisualElement.Clear()
    })
    const rootDom = new DomWrapper(new Dom(scratchpadWindow.rootVisualElement, document._doc))
    render(<Holder><Elem window={scratchpadWindow} /></Holder>, rootDom)
}