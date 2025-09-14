---
title: "mouse_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_x.htm"
converted: "2025-09-14T03:59:59.803Z"
---

# mouse\_x

This **read-only** variable returns the current x axis position of the mouse within the room.

#### Syntax:

mouse\_x

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

x = median(64, mouse\_x, room\_width - 64);

The above code will maintain the instance at the mouse x position as long as it is within the limits of 64 pixels from either side of the room.