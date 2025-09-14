---
title: "mouse_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_y.htm"
converted: "2025-09-14T03:59:59.813Z"
---

# mouse\_y

This **read-only** variable returns the current y axis position of the mouse within the room.

#### Syntax:

mouse\_y

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

y = median(64, mouse\_y, room\_height - 64);

The above code will maintain the instance at the mouse y position as long as it is within the limits of 64 pixels from the top and bottom of the room.