---
title: "Mouse And Keyboard Actions"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Mouse_And_Keyboard/Mouse_And_Keyboard_Actions.htm"
converted: "2025-09-14T03:59:26.661Z"
---

# Mouse And Keyboard Action Library

![Mouse And Keyboard Action Library](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/Lib_KeyboardMouse.png)

The **Mouse and Keyboard** action library is where you can find the actions required to poll and process input from the keyboard or mouse devices. The available actions are all listed below:

|  | If Mouse Pressed |
| --- | --- |
|  | If Mouse Down |
|  | If Mouse Released |
|  | If Key Pressed |
|  | If Key Down |
|  | If Key Released |

The rest of the actions here refer to the **virtual keyboard**. If you require text or numeric input in your game on a touchscreen device, then you can use the virtual keyboard actions provided to use the device OS keyboard. These actions will call up or hide the OS keyboard and accept input from it just the same as a physical keyboard, so the regular GameMaker keyboard actions should all work with virtual keyboards (for example, the "If Key Released" action), and any input from the virtual keyboard will be stored in the different keyboard variables, like [keyboard\_string](../../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_string.md) or [keyboard\_last\_char](../../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_lastchar.md), etc...).

Opening or closing the virtual keyboard will generate [System Asynchronous Events](../../../The_Asset_Editors/Object_Properties/Async_Events.md), in which the [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md)  [DS map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) will be populated with the following key/value pairs:

-   "**event\_type**" - the type of system event received, which will be "**virtual keyboard status**" for virtual keyboards.
-   "**screen\_height**" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible.
-   "**keyboard\_status**" - the current status of the keyboard, returned as one of the following strings:
    -   "hiding"
    -   "hidden"
    -   "showing"
    -   "visible"

The available virtual keyboard actions are:

|  | Show Virtual Keyboard |
| --- | --- |
|  | Hide Virtual Keyboard |
|  | Get Virtual Keyboard Height |
|  | If Virtual Keyboard Showing |