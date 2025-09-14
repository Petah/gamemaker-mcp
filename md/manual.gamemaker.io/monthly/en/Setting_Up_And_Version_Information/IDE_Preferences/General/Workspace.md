---
title: "Workspace"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/General/Workspace.htm"
converted: "2025-09-14T04:00:13.605Z"
---

# Workspace Preferences

![Workspace Prefs](../../../assets/Images/Setup_And_Version/Preferences/General_Workspace_Prefs.png)

The preferences here will affect how you move around within the different GameMaker [**workspaces**](../../../Introduction/Workspaces.md). The options are:

-   **Workspace keyboard navigation degree range**: Within a workspace you can have multiple windows open for different objects and resources, and so to move around quickly between them you can use the keyboard shortcut Ctrl / Command + Alt + <Arrow Keys> to move between them. Given that the windows within a workspace are not grid aligned the IDE has to choose which window you mean when you press any of the possible 4 directions, and this option permits you to set the "look angle" that is used. The default value is 40°.
-   **Workspace chain column padding (px)**: Workspace elements are often "chained" to each other (for example, the Code Editor is chained to the Event Editor is chained to the Object Editor), and this option permits you to set the horizontal distance between any two chained windows. The default value is 30px.
-   **Workspace chain row padding (px)**: As mentioned above, workspace elements are often "chained" to each other and this option permits you to set the vertical distance between any two chained windows. The default value is 20px.
-   **Workspace chain rendering segment count**: Here you can set the maximum number of segments for render chains. Lowering this value may help performance on lower end machines. The default value is 20.
-   **Workspace chain link colour**: This is the colour that will be used to display chains between workspace elements. Default colour is ARGB $99DD00.
-   **Workspace keyboard navigation resets zoom**: As mentioned above, you can skip from window to window within the workspace using keyboard shortcuts. You can also zoom the workspace in and out using the Ctrl / Command + the mouse wheel ![Mmb](../../../assets/Images/Icons/Icon_MMB.png). Setting this option will mean that if you have the workspace zoomed and use the shortcuts to skip to another window, then the workspace will be returned to a 1:1 view and centered on the selected window. This option is off by default.
-   **Workspace chains can overlap**: When enabled this option will permit workspace chains to cross and overlap. This is off by default.