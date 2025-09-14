---
title: "window_minimise"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_minimise.htm"
converted: "2025-09-14T03:59:45.193Z"
---

# window\_minimise

This function minimises the game window. You can restore it with [window\_restore](window_restore.md).

NOTE This is only supported on Windows, macOS and Linux. On macOS the game will not restore with [window\_restore](window_restore.md) as execution is paused in minimised state.

#### Syntax:

window\_minimise();

#### Returns:

N/A

#### Example:

Key Press - Space event:

window\_minimise();

alarm\_set(0, 300);

Alarm 0 event:

window\_restore();

On pressing space, this will minimise the game window and set Alarm 0 to 300 steps. When the alarm is called, the game window will be automatically restored.