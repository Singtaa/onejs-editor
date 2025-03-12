declare namespace CS.UnityEngine.UIElements {
    interface VisualElement {
        Bind(obj: CS.UnityEditor.SerializedObject): void
        Unbind(): void
        TrackSerializedObjectValue(obj: CS.UnityEditor.SerializedObject, callback?: CS.System.Action$1<CS.UnityEditor.SerializedObject>): void
    }
    interface IBindable {
        BindProperty(obj: CS.UnityEditor.SerializedObject): CS.UnityEditor.SerializedProperty
        BindProperty(property: CS.UnityEditor.SerializedProperty): void
    }
}