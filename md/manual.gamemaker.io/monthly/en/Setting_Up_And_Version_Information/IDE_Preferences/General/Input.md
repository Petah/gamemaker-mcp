---
title: "Input"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/General/Input.htm"
converted: "2025-09-14T04:00:13.520Z"
---

# Input Preferences

![Input Window Prefs](../../../assets/Images/Setup_And_Version/Preferences/General_Input_Prefs.png)

The [**Input** preferences](../../../IDE_Navigation/IDE_Input.md) control certain aspects of the mouse and keyboard input within the IDE. The available options are:

-   **Slow double click time (ms)**: Some areas of the IDE require a slower double click to work correctly, for example when renaming a resource (a fast double click will open the resource editor, while a slow double click will permit you to rename it). This option permits you to set the detection speed, with a default value of 500ms.
-   **Scroll lock time (ms)**: This option deals with the time that GameMaker should wait between scrolling windows that are overlapping. Essentially, When you're scrolling in window "A", the cursor might hover over another scrollable area in window "B", so this preference defines how long you have to wait after you stop scrolling "A" before you can then scroll "B", so you don't accidentally start scrolling different panels. The default value is 500ms.
-   **Wrap cursor around the screen when panning**: When enabled, this will wrap the cursor around the screen bounds when panning workspaces. Default is enabled.
-   **Scroll speed**: This controls the scrolling speed within the different workspaces. The default value is 1.
-   **Tab drag distance to un-maximise desktop (px)**: When you drag a workspace tab away from its default position within the IDE, if there is only one workspace active at that time then the GameMaker window will un-maximise and move with the mouse (if you have more than one workspace active a new instance of the IDE will be created to hold the workspace). This setting controls how far you have to drag the tab before the workspace recognises it, and the default value is 50px.
-   **Minimum zoom level for interacting with window contents (%)**: This option controls the zoom cut-off point at which the mouse will no longer be able to interact with workspace windows (i.e.: add nodes, drag windows, etc.). The default value is 40.
-   **Mouse wheel zoom requires Ctrl key**: When this is checked all editors (and the main workspace) will have zoom enabled with ![CONTROL Icon](../../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../../assets/Images/Icons/Icon_Cmd.png) + the mouse wheel ![MMB Icon](../../../assets/Images/Icons/Icon_MMB.png), while un-checking it will enable zoom with only the mouse wheel MMB Icon.
-   **Ctrl + MMB to open the inherited event instead of the manual**: When this is checked, holding ![CONTROL Icon](../../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../../assets/Images/Icons/Icon_Cmd.png) + the middle mouse button ![MMB Icon](../../../assets/Images/Icons/Icon_MMB.png) in an object will open the objects inherited event (if it has one) rather than the manual.
-   **Add bias to text selection to prevent line jumping**: When this is checked, the conceived line height while selecting a single line in any text window will be padded, making it less prone to vertical imprecision. This is enabled by default.
-   **Enable laptop mode on all devices**: Checking this will show the [Laptop Mode](../../../IDE_Navigation/IDE_Input.md) button on the IDE, enabling you to switch it on or off as required regardless of whether the device running GameMaker is a laptop or not. This is unchecked by default.
-   **Force Laptop mode**: This setting changes whether Laptop Mode is usable or not, and is enabled by default. You can disable this to ensure that Laptop Mode does not automatically get enabled when you start the IDE on a laptop.
-   _(macOS only)_ **Enable pinch to zoom**: Enable or disable trackpad pinch to zoom behaviour.
-   _(macOS only)_ **Pinch to zoom sensitivity (%)**: Change the sensitivity of the trackpad pinch to zoom behaviour.