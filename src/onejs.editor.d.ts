
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
        class BaseEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public static Register ($type: System.Type, $veMaker: System.Action$2<UnityEngine.UIElements.VisualElement, any>) : void
            public static Clear () : void
            public constructor ()
        }
        class ElementRenderer extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Register ($type: System.Type, $renderer: System.Action$1<UnityEngine.UIElements.VisualElement>) : void
            public static Clear () : void
            public static Has ($type: System.Type) : boolean
            public static Get ($type: System.Type) : System.Action$1<UnityEngine.UIElements.VisualElement>
            public static TryGet ($type: System.Type, $renderer: $Ref<System.Action$1<UnityEngine.UIElements.VisualElement>>) : boolean
            public constructor ()
        }
        class DynamicMenuHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static AddMenuItem ($name: string, $executeAction: System.Action, $priority: number, $shortcut?: string, $isChecked?: boolean) : void
        }
        class EditorScriptEngine extends UnityEngine.ScriptableObject implements OneJS.IScriptEngine
        {
            protected [__keep_incompatibility]: never;
            public folderName : string
            public defaultFiles : System.Array$1<OneJS.DefaultFileMapping>
            public scriptEnginePrefab : OneJS.ScriptEngine
            public packageJsonOverride : UnityEngine.TextAsset
            public tasksJsonOverride : UnityEngine.TextAsset
            public appJsOverride : UnityEngine.TextAsset
            public preloads : System.Array$1<UnityEngine.TextAsset>
            public globalObjects : System.Array$1<OneJS.ObjectMappingPair>
            public styleSheets : System.Array$1<UnityEngine.UIElements.StyleSheet>
            public get WorkingDir(): string;
            public get ScriptFilePath(): string;
            public Run () : void
            public CreateInspectorVE ($filePath: string, $target: any) : UnityEngine.UIElements.VisualElement
            public constructor ()
        }
        class EditorEngineHost extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Dispose () : void
            public Execute ($jsCode: string) : void
            public SandboxExecute ($jsCode: string) : void
            public constructor ($engine: OneJS.Editor.EditorScriptEngine)
        }
        class EditorScriptEngineEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class BundlerEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class DTSGeneratorEditor extends UnityEditor.Editor implements UnityEditor.IToolModeOwner, UnityEditor.IPreviewable
        {
            protected [__keep_incompatibility]: never;
            public Generate () : void
            public constructor ()
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
            public static Generate ($genInfo: OneJS.Editor.Generator.DTS.TypingGenInfo) : string
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
        class OneJSEditorUtil extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static OpenDir ($path: string) : void
            public static VSCodeOpenDir ($path: string) : void
            public constructor ()
        }
    }
    namespace OneJS.Editor.Generator.DTS {
        class TypingGenInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public NamespaceInfos : System.Array$1<OneJS.Editor.Generator.DTS.TsNamespaceGenInfo>
            public TaskDef : string
            public static FromTypes ($types: System.Collections.Generic.IEnumerable$1<System.Type>) : OneJS.Editor.Generator.DTS.TypingGenInfo
            public constructor ()
        }
        class TsNamespaceGenInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Name : string
            public Types : System.Array$1<OneJS.Editor.Generator.DTS.TsTypeGenInfo>
            public constructor ()
        }
        class TsTypeGenInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public CSharpType : System.Type
            public Name : string
            public Document : string
            public Methods : System.Array$1<OneJS.Editor.Generator.DTS.TsMethodGenInfo>
            public Properties : System.Array$1<OneJS.Editor.Generator.DTS.TsPropertyGenInfo>
            public IsGenericTypeDefinition : boolean
            public GenericParameters : System.Array$1<string>
            public IsDelegate : boolean
            public DelegateDef : string
            public IsInterface : boolean
            public IteratorReturnName : string
            public Namespace : string
            public BaseType : OneJS.Editor.Generator.DTS.TsTypeGenInfo
            public interfaces : System.Array$1<OneJS.Editor.Generator.DTS.TsTypeGenInfo>
            public IsEnum : boolean
            public EnumKeyValues : string
            public ExtensionMethods : System.Array$1<OneJS.Editor.Generator.DTS.TsMethodGenInfo>
            public IsCheckOk : boolean
            public get FullName(): string;
            public static FromType ($type: System.Type, $genTypeSet: any) : OneJS.Editor.Generator.DTS.TsTypeGenInfo
            public constructor ()
        }
        class TsParameterGenInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Name : string
            public IsByRef : boolean
            public TypeName : string
            public IsParams : boolean
            public IsOptional : boolean
            public static FromParameterInfo ($parameterInfo: System.Reflection.ParameterInfo, $isGenericTypeDefinition: boolean) : OneJS.Editor.Generator.DTS.TsParameterGenInfo
            public constructor ()
        }
        class TsMethodGenInfoComparer extends System.Object implements System.Collections.Generic.IEqualityComparer$1<OneJS.Editor.Generator.DTS.TsMethodGenInfo>
        {
            protected [__keep_incompatibility]: never;
            // public Equals ($x: OneJS.Editor.Generator.DTS.TsMethodGenInfo, $y: OneJS.Editor.Generator.DTS.TsMethodGenInfo) : boolean
            // public GetHashCode ($obj: OneJS.Editor.Generator.DTS.TsMethodGenInfo) : number
            public constructor ()
        }
        class TsMethodGenInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Name : string
            public Document : string
            public ParameterInfos : System.Array$1<OneJS.Editor.Generator.DTS.TsParameterGenInfo>
            public TypeName : string
            public IsConstructor : boolean
            public IsStatic : boolean
            public static FromMethodBase ($methodBase: System.Reflection.MethodBase, $isGenericTypeDefinition: boolean, $skipExtentionMethodThis: boolean) : OneJS.Editor.Generator.DTS.TsMethodGenInfo
            public static FromType ($type: System.Type, $genTypeSet: any) : System.Array$1<OneJS.Editor.Generator.DTS.TsMethodGenInfo>
            public static FromTsGenTypeInfos ($tsGenTypeInfos: System.Collections.Generic.Dictionary$2<string, OneJS.Editor.Generator.DTS.TsTypeGenInfo>, $info: OneJS.Editor.Generator.DTS.TsTypeGenInfo, $getBaseMethods: boolean) : System.Array$1<OneJS.Editor.Generator.DTS.TsMethodGenInfo>
            public constructor ()
        }
        class TsPropertyGenInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Name : string
            public Document : string
            public TypeName : string
            public IsStatic : boolean
            public HasGetter : boolean
            public HasSetter : boolean
            public static FromTsTypeGenInfo ($tsGenTypeInfos: System.Collections.Generic.Dictionary$2<string, OneJS.Editor.Generator.DTS.TsTypeGenInfo>, $info: OneJS.Editor.Generator.DTS.TsTypeGenInfo, $getBaseMethods: boolean) : System.Array$1<OneJS.Editor.Generator.DTS.TsPropertyGenInfo>
            public constructor ()
        }
    }
}
