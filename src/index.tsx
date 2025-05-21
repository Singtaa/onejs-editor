declare global {
    export namespace JSX {
        interface BasePopupField<T> extends BaseField<T> {

        }
        interface PopupField<T> extends BasePopupField<T> {
            index?: number
            values?: T
        }
        interface BaseMaskField<T> extends BaseField<T> {
            choices?: CS.System.Collections.Generic.List$1<string>
            choicesMasks?: CS.System.Collections.Generic.List$1<number>
        }


        interface BoundsField extends BaseField<CS.UnityEngine.Bounds> {

        }
        interface BoundsIntField extends BaseField<CS.UnityEngine.BoundsInt> {

        }
        interface ColorField extends BaseField<Color> {
            showEyeDropper?: boolean
            showAlpha?: boolean
            hdr?: boolean
        }
        enum RenderMode {
            Default,
            Texture,
            Mesh
        }
        interface CurveField extends BaseField<CS.UnityEngine.AnimationCurve> {
            ranges?: CS.UnityEngine.Rect
            renderMode?: RenderMode
        }
        interface DoubleField extends TextValueField<number> {

        }
        interface EnumField extends BaseField<number> {

        }
        interface FloatField extends TextValueField<number> {

        }
        enum GradientColorSpace {
            Uninitialized,
            Gamma,
            Linear
        }
        interface GradientField extends BaseField<CS.UnityEngine.Gradient> {
            colorSpace?: GradientColorSpace
            value?: CS.UnityEngine.Gradient
        }
        interface IntegerField extends TextValueField<number> {

        }
        interface LayerField extends PopupField<number> {

        }
        interface LayerMaskField extends BaseField<CS.UnityEngine.LayerMask> {

        }
        interface LongField extends TextValueField<number> {

        }
        interface MaskField extends BaseMaskField<number> {

        }
        interface ObjectField extends BaseField<CS.UnityEngine.Object> {
            allowSceneObjects?: boolean
            objectType?: CS.System.Type
        }

        interface IntrinsicElements {
            boundsfield: BoundsField
            boundsintfield: BoundsIntField
            colorfield: ColorField
            curvefield: CurveField
            doublefield: DoubleField
            enumfield: EnumField
            floatfield: FloatField
            gradientfield: GradientField
            integerfield: IntegerField
            layerfield: LayerField
            layermaskfield: LayerMaskField
            longfield: LongField
            maskfield: MaskField
            objectfield: ObjectField
        }
    }
    export const ___engineHost: CS.OneJS.Editor.EditorEngineHost
}

export type IntrinsicElements = JSX.IntrinsicElements;

export { menu } from './menu'
export { register, RegisterProps } from './register'
export { scratchpad } from './scratchpad'

// puer.$extension(CS.UnityEngine.UIElements.VisualElement, CS.UnityEditor.UIElements.BindingExtensions)