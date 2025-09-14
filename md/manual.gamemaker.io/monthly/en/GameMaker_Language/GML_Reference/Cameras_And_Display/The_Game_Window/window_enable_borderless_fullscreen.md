---
title: "window_enable_borderless_fullscreen"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_enable_borderless_fullscreen.htm"
converted: "2025-09-14T03:59:44.999Z"
---

# window\_enable\_borderless\_fullscreen

This function enables the use of a fullscreen borderless window when [window\_set\_fullscreen](window_set_fullscreen.md) is called, or the Alt + Enter key combination is used to switch to fullscreen.

When the game runs in a fullscreen borderless window, it still runs in a window, however GameMaker resizes the window so it covers the entire screen. With borderless fullscreen enabled, [window\_get\_fullscreen](window_get_fullscreen.md) also returns true.

IMPORTANT You should call this function _before_ switching to fullscreen using [window\_set\_fullscreen](window_set_fullscreen.md), as this function won't change anything when already running in fullscreen.

NOTE This function only works on Windows.

#### Syntax:

window\_enable\_borderless\_fullscreen(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to enable a borderless window when in fullscreen mode (true) or not (false) |

#### Returns:

N/A

#### Example:

window\_enable\_borderless\_fullscreen(true);
window\_set\_fullscreen(true);

The code above first enables the use of a borderless fullscreen window with a call to window\_enable\_borderless\_fullscreen. It then switches to fullscreen using [window\_set\_fullscreen](window_set_fullscreen.md).