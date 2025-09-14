---
title: "window_has_focus"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_has_focus.htm"
converted: "2025-09-14T03:59:45.182Z"
---

# window\_has\_focus

With this function you can poll the window (or tab) state and if it loses focus the function will return false otherwise it will return true. In most cases you can simply use the [os\_is\_paused()](../../OS_And_Compiler/os_is_paused.md) function to test this, but in some very specific cases (for example games on Chrome Apps) that function will not trigger, in which case you should use this function instead.

**NOTE** This function is only valid on the HTML5, Windows, and macOS platforms.

#### Syntax:

window\_has\_focus();

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (!window\_has\_focus())
{
    PauseGame();
}

The above code will check to see if the game window is in focus or not, and if the function returns false a function will be called.