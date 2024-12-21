declare global {
    export namespace JSX {
        interface ColorField extends BaseField<Color> {
            showEyeDropper?: boolean
            showAlpha?: boolean
            hdr?: boolean
            gg?: boolean
        }

        interface IntrinsicElements {
            colorfield: ColorField
        }
    }
    export const ___engineHost: CS.OneJS.Editor.EditorEngineHost
}

export type IntrinsicElements = JSX.IntrinsicElements;

export { menu } from './menu'
export { register } from './register'