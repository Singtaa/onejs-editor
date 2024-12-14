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
}

export type IntrinsicElements = JSX.IntrinsicElements;

export { inspector } from './inspector'
export { window } from './window'
export { menu } from './menu'