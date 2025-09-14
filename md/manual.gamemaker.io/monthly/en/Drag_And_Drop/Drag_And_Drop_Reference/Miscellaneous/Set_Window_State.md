---
title: "Set Window State"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Miscellaneous/Set_Window_State.htm"
converted: "2025-09-14T03:59:26.469Z"
---

# ![Set Window State Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Miscellaneous/i_Misc_Set_Window_State.png) Set Window State

With this action you can set the state of the game window to either fullscreen or windowed. There are three options here:

-   **Toggle** - When this option is selected, each time you call the action it will toggle the window between fullscreen and windowed states
-   **Fullscreen** - This will make the window go fullscreen from a windowed state
-   **Windowed** - This will make the window return to a windowed state if in fullscreen

Note that how the game looks while in a fullscreen state will depend on the [Game Options - Graphics](../../../Settings/Game_Options/Windows.md) settings for you target platforms, since if the game does not have some mechanism for adjusting to different aspect ratios and resolutions you can get stretching (if the game option is set to **Full Scale**), or you can get black bars added (if the game option is set to **Keep Aspect Ratio**). In general if you have nothing in place to deal with different resolutions, you should be using **Keep Aspect Ratio** for the target platforms you want to compile to.

#### Action Syntax:

![Set Window State Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Miscellaneous/a_Misc_Set_Window_State.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| State | The window state to set (see above for options) |

#### Example:

![Set Window State Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Miscellaneous/e_Misc_Set_Window_State.png)The above action block code will toggle the window state between fullscreen and windowed every time the F4 key is pressed.