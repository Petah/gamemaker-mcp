---
title: "draw_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_clear.htm"
converted: "2025-09-14T03:59:49.617Z"
---

# draw\_clear

This function can be used to clear the entire screen (with no alpha blend) to the given colour, and is only for use in the draw event of an instance (it will not show if used in any other event). It can also be useful for clearing [surfaces](../Surfaces/Surfaces.md) when they are newly created.

#### Syntax:

draw\_clear(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour with which the screen will be cleared |

#### Returns:

N/A

#### Example:

draw\_clear(c\_blue);

This will clear the screen with the colour blue.