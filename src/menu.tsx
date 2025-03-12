const DynamicMenuHelper = CS.OneJS.Editor.DynamicMenuHelper;

export function menu(name: string, action: () => void, priority: number = 0, shortcut: string = "", isChecked: boolean = false) {
    DynamicMenuHelper.AddMenuItem(name, action, priority, shortcut, isChecked);
}

___engineHost.add_onReload(() => {
    DynamicMenuHelper.ClearAllMenuItems();
})