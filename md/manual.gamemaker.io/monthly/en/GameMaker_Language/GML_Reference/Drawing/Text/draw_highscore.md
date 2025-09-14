---
title: "draw_highscore"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_highscore.htm"
converted: "2025-09-14T03:59:54.706Z"
---

# draw\_highscore

This simple function will draw the current list of internally stored high scores using the currently set font, colour and alpha values within the specified rectangle. You provide the coordinates for the upper left corner and lower right corner of the rectangular area to draw the text, and GameMaker will take care of the rest, with spacing and position being done automatically.

#### Syntax:

draw\_highscore( x1, y1, x2, y2 );

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the left of the highscore rectangle. |
| y1 | Real | The y coordinate of the top of the highscore rectangle. |
| x2 | Real | The x coordinate of the right of the highscore rectangle. |
| y2 | Real | The y coordinate of the bottom of the highscore rectangle. |

#### Returns:

N/A

#### Example:

draw\_highscore(100, 100, room\_width - 100, room\_height - 100);

This would draw the highscore table in a rectangle in the middle of the room with a 100px border.