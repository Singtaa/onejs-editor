import { h } from "onejs-preact";
import {  MeshRenderer, Component } from "UnityEngine";

export function inspector<T extends Component>(type: { new(): T }, element: () => Element) {

}

inspector(MeshRenderer, () => {
    return <div>
        hh
    </div>
})