---
title: "window_get_showborder"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_get_showborder.htm"
converted: "2025-09-14T03:59:45.098Z"
---

# window\_get\_showborder

This function gets whether the game is shown in a borderless window or not.

It corresponds to the **Borderless Window** option in the Windows [Graphics](../../../../../../../Settings/Game_Options/Windows.md) options; it gets the value of that checkbox _in-game_.

NOTE This function only works on Windows.

#### Syntax:

window\_get\_showborder();

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_border\_shown = window\_get\_showborder();

The above code gets whether the window border is shown and stores the result in a temporary variable \_border\_shown.