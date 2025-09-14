---
title: "vertex_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_colour.htm"
converted: "2025-09-14T03:59:53.062Z"
---

# vertex\_colour

If your defined vertex format takes a colour value you can use this function to add that data to the vertex being defined for the current primitive.

The function needs a buffer to store the data in and will take either a [colour constant](../Colour_And_Alpha/Colour_And_Alpha.md), or a hex value (using the standard GameMaker format of BGR, e.g.: $FF0000 for blue) as well as an alpha value from 0 (transparent) to 1 (fully opaque).

#### Syntax:

vertex\_colour(buffer, colour, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| colour | Colour | The colour for this vertex (can be a constant or a hex value). |
| alpha | Real | The alpha value for the vertex (from 0 to 1). |

#### Returns:

N/A

#### Example:

vertex\_colour(b, c\_white, 1);

The above code will set the colour of the current vertex being defined to white with an alpha value of 1.