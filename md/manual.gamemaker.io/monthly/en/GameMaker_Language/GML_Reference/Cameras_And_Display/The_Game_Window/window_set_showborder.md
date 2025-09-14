---
title: "window_set_showborder"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_showborder.htm"
converted: "2025-09-14T03:59:45.513Z"
---

# window\_set\_showborder

This function sets whether the game is shown in a borderless window or not.

It corresponds to the **Borderless Window** option in the Windows [Graphics](../../../../../../../Settings/Game_Options/Windows.md) options; it changes the value of that checkbox _in-game_.

NOTE This function only works on Windows.

#### Syntax:

window\_set\_showborder(show);

| Argument | Type | Description |
| --- | --- | --- |
| show | Boolean | Whether to show the window border |

#### Returns:

N/A

#### Example:

window\_set\_showborder(!window\_get\_showborder());

The above line of code toggles the window border.