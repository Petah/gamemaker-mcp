---
title: "window_get_borderless_fullscreen"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_get_borderless_fullscreen.htm"
converted: "2025-09-14T03:59:45.014Z"
---

# window\_get\_borderless\_fullscreen

This function returns whether a [borderless window](window_enable_borderless_fullscreen.md) for fullscreen mode is enabled or not.

NOTE This function only works on Windows.

#### Syntax:

window\_get\_borderless\_fullscreen();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var \_borderless = window\_get\_borderless\_fullscreen();
show\_debug\_message($"Borderless Fullscreen Enabled: {\_borderless}");

The code above calls window\_get\_borderless\_fullscreen to find out if borderless fullscreen is currently enabled. It then shows a debug message.