
declare namespace CS {
    // const __keep_incompatibility: unique symbol;
    // 
    // interface $Ref<T> {
    //     value: T
    // }
    // namespace System {
    //     interface Array$1<T> extends System.Array {
    //         get_Item(index: number):T;
    //         
    //         set_Item(index: number, value: T):void;
    //     }
    // }
    // interface $Task<T> {}
    namespace OneJS.Editor {
        class PairMappingDrawer extends UnityEditor.PropertyDrawer
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class PlainStringDrawer extends UnityEditor.PropertyDrawer
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class BaseEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public static Instance : OneJS.Editor.BaseEditor
            public static Register ($type: System.Type, $renderer: System.Action$3<UnityEngine.UIElements.VisualElement, any, UnityEditor.SerializedObject>) : void
            public static Clear () : void
            public Refresh () : void
            public constructor ()
        }
        class WeakSet$1<T> extends System.Object implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            public get Count(): number;
            public Add ($item: T) : void
            public Contains ($item: T) : boolean
            public Remove ($item: T) : void
            public Clear () : void
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            public constructor ()
            public [Symbol.iterator]() : IterableIterator<T>
        }
        class EditorDocument extends System.Object implements OneJS.Dom.IDocument
        {
            protected [__keep_incompatibility]: never;
            public Dispose () : void
            public createElement ($tagName: string) : OneJS.Dom.Dom
            public createElement ($tagName: string, $options: OneJS.Dom.ElementCreationOptions) : OneJS.Dom.Dom
            public createElementNS ($ns: string, $tagName: string, $options: OneJS.Dom.ElementCreationOptions) : OneJS.Dom.Dom
            public createTextNode ($text: string) : OneJS.Dom.Dom
            public createTextNode ($text: string, $selectable: boolean) : OneJS.Dom.Dom
            public ApplyRuntimeStyleSheets ($ve: UnityEngine.UIElements.VisualElement) : void
            public addRuntimeUSS ($uss: string) : void
            public BuildStyleSheet ($uss: string) : UnityEngine.UIElements.StyleSheet
            public clearRuntimeStyleSheets () : void
            public removeRuntimeStyleSheet ($uss: string) : void
            public removeRuntimeStyleSheet ($sheet: UnityEngine.UIElements.StyleSheet) : void
            public clearCache () : void
            public loadRemoteImage ($url: string, $callback: System.Action$1<UnityEngine.Texture2D>) : UnityEngine.Coroutine
            public loadImage ($path: string, $filterMode?: UnityEngine.FilterMode) : UnityEngine.Texture2D
            public loadFont ($path: string) : UnityEngine.Font
            public loadFontDefinition ($path: string) : UnityEngine.UIElements.FontDefinition
            public AddCachingDom ($dom: OneJS.Dom.Dom) : void
            public RemoveCachingDom ($dom: OneJS.Dom.Dom) : void
            public static GenerateShortHash ($input: string) : string
            public constructor ($scriptEngine: OneJS.IScriptEngine)
        }
        class EditorEngineHost extends System.Object implements System.IDisposable, OneJS.IEngineHost
        {
            protected [__keep_incompatibility]: never;
            public add_onReload ($value: System.Action) : void
            public remove_onReload ($value: System.Action) : void
            public add_onDispose ($value: System.Action) : void
            public remove_onDispose ($value: System.Action) : void
            public Dispose () : void
            public DoReload () : void
            public Execute ($jsCode: string) : void
            public RegisterRenderer ($type: System.Type, $render: System.Action$2<UnityEngine.Object, UnityEngine.UIElements.VisualElement>) : void
            public SandboxExecute ($jsCode: string) : void
            public constructor ($engine: OneJS.Editor.EditorScriptEngine)
        }
        class EditorScriptEngine extends UnityEngine.ScriptableObject implements OneJS.IScriptEngine, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public folderName : string
            public defaultFiles : System.Array$1<OneJS.DefaultFileMapping>
            public scriptEnginePrefab : OneJS.ScriptEngine
            public editorStyleSheet : UnityEngine.UIElements.StyleSheet
            public packageJsonOverride : UnityEngine.TextAsset
            public tasksJsonOverride : UnityEngine.TextAsset
            public appJsOverride : UnityEngine.TextAsset
            public preloads : System.Array$1<UnityEngine.TextAsset>
            public globalObjects : System.Array$1<OneJS.ObjectMappingPair>
            public styleSheets : System.Array$1<UnityEngine.UIElements.StyleSheet>
            public dtsGenerator : OneJS.DTSGenerator
            public devMode : boolean
            public extraLogging : boolean
            public initialized : boolean
            public get WorkingDir(): string;
            public get ScriptFilePath(): string;
            public get document(): OneJS.Editor.EditorDocument;
            public get jsEnv(): Puerts.JsEnv;
            public add_OnReload ($value: System.Action) : void
            public remove_OnReload ($value: System.Action) : void
            public add_OnDispose ($value: System.Action) : void
            public remove_OnDispose ($value: System.Action) : void
            public Init () : void
            public Dispose () : void
            public Reload () : void
            public Run () : void
            public Execute ($code: string) : void
            public RegisterRenderer ($type: System.Type, $render: System.Action$2<UnityEngine.Object, UnityEngine.UIElements.VisualElement>) : void
            public ApplyStyleSheets ($ve: UnityEngine.UIElements.VisualElement) : void
            public CreateInspectorVE ($filePath: string, $target: any) : UnityEngine.UIElements.VisualElement
            public constructor ()
        }
        class EditorScriptEngineEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class RendererWrapper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public type : System.Type
            public render : System.Action$1<UnityEditor.EditorWindow>
            public window : UnityEditor.EditorWindow
            public engine : OneJS.Editor.EditorScriptEngine
            public constructor ()
        }
        class ElementRenderer extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Register ($type: System.Type, $render: System.Action$1<UnityEditor.EditorWindow>) : void
            public static Clear () : void
            public static RefreshAll () : void
            public Refresh ($type: System.Type) : void
            public static TryRender ($window: UnityEditor.EditorWindow, $engine: OneJS.Editor.EditorScriptEngine) : boolean
            public constructor ()
        }
        class RendererInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public type : System.Type
            public render : System.Action$1<UnityEngine.UIElements.VisualElement>
            public engine : OneJS.Editor.EditorScriptEngine
            public roots : OneJS.Editor.WeakSet$1<UnityEngine.UIElements.VisualElement>
            public constructor ()
        }
        class RendererRegistry extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public Dispose () : void
            public Register ($type: System.Type, $render: System.Action$1<UnityEngine.UIElements.VisualElement>) : void
            public GetRendererInfo ($type: System.Type) : OneJS.Editor.RendererInfo
            public TryGetRendererInfo ($type: System.Type, $renderer: $Ref<OneJS.Editor.RendererInfo>) : boolean
            public ReRenderAll () : void
            public constructor ()
        }
        class DynamicMenuHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static AddMenuItem ($name: string, $executeAction: System.Action, $priority?: number, $shortcut?: string, $isChecked?: boolean) : void
            public static ClearAllMenuItems () : void
        }
        class OneJSEditorWindow extends UnityEditor.EditorWindow
        {
            protected [__keep_incompatibility]: never;
            public add_OnTeardown ($value: System.Action) : void
            public remove_OnTeardown ($value: System.Action) : void
            public constructor ()
        }
        class TabCreator extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public CreateNewTab () : UnityEditor.EditorWindow
            public constructor ()
        }
        class BundlerEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class RunnerEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class ScriptEngineEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class SerializedPropertyExts extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ToStringArray ($property: UnityEditor.SerializedProperty) : System.Array$1<string>
        }
        class DTSGen extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static GetTypes ($assemblies: System.Array$1<System.Reflection.Assembly>, $namespaces: System.Array$1<string>) : System.Array$1<System.Type>
            public static GetTypes ($assemblies: System.Array$1<System.Reflection.Assembly>) : System.Array$1<System.Type>
            public static Generate ($assemblies: System.Array$1<System.Reflection.Assembly>, $namespaces: System.Array$1<string>) : string
            public static Generate ($types: System.Array$1<System.Type>) : string
            public static Generate ($types: System.Array$1<System.Type>, $exact: boolean) : string
            public static Generate ($types: System.Array$1<System.Type>, $strictAssemblies: System.Array$1<System.Reflection.Assembly>) : string
            public static Generate ($types: System.Array$1<System.Type>, $strictAssemblies: System.Array$1<System.Reflection.Assembly>, $strictNamespaces: System.Array$1<string>) : string
            public static Generate ($types: System.Array$1<System.Type>, $exact: boolean, $strictAssemblies: System.Array$1<System.Reflection.Assembly>, $strictNamespaces: System.Array$1<string>) : string
            public static Generate ($genInfo: any) : string
            public constructor ()
        }
        class DTSGeneratorEditor extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Generate ($globals: System.Array$1<OneJS.ObjectMappingPair>, $workingDir: string) : void
            public constructor ($dtsGenerator: OneJS.DTSGenerator)
        }
        class NamespaceNode extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Name(): string;
            public set Name(value: string);
            public get FullName(): string;
            public set FullName(value: string);
            public get Children(): System.Collections.Generic.List$1<OneJS.Editor.NamespaceNode>;
            public get FullContent(): string;
            public set FullContent(value: string);
            public get IndentLevel(): number;
            public set IndentLevel(value: number);
            public constructor ()
        }
        class NamespaceTreeParser extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ParseNamespaces ($tsDefs: string) : OneJS.Editor.NamespaceNode
            public static PrintNamespaceTree ($node: OneJS.Editor.NamespaceNode, $indent?: number) : void
            public constructor ()
        }
        class NamespaceTreeFilter extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static FilterNamespaces ($root: OneJS.Editor.NamespaceNode, $namespacesToKeep: System.Array$1<string>) : string
            public constructor ()
        }
        class TypeCollector extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetAllTypes ($asm: System.Reflection.Assembly) : System.Collections.Generic.List$1<System.Type>
            public constructor ()
        }
        class OneJSBuildProcessor extends System.Object implements UnityEditor.Build.IPreprocessBuildWithReport, UnityEditor.Build.IOrderedCallback
        {
            protected [__keep_incompatibility]: never;
            public get callbackOrder(): number;
            public OnPreprocessBuild ($report: UnityEditor.Build.Reporting.BuildReport) : void
            public constructor ()
        }
        class OneJSMenuItems extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class OneJSEditorUtil extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static OpenDir ($path: string) : void
            public static VSCodeOpenDir ($path: string) : void
            public constructor ()
        }
    }
}
