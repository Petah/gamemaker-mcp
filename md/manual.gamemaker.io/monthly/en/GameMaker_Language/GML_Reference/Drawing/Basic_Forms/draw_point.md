---
title: "draw_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_point.htm"
converted: "2025-09-14T03:59:49.300Z"
---

# draw\_point

With this function you can draw a single pixel anywhere on the screen, using the currently set draw colour and alpha.

#### Syntax:

draw\_point(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the point to be drawn. |
| y | Real | The y coordinate of the point to be drawn. |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_yellow);
draw\_point(100,100);

This will draw a yellow pixel at position (100,100).