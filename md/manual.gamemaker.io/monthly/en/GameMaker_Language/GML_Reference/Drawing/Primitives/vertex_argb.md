---
title: "vertex_argb"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_argb.htm"
converted: "2025-09-14T03:59:53.037Z"
---

# vertex\_argb

This function sets the ARGB values for the vertex currently being defined for the custom primitive.

You supply the vertex buffer to write the data into as well as the red, green, blue and alpha values that you wish to use as a single 32-bit unsigned integer - alpha sample in the highest 8 bits, followed by the red sample, green sample and finally the blue sample in the lowest 8 bits. You can use hex notation ($AARRGGBB), a real number or use any of the make\_colour\_\* functions to define the colour value.

#### Syntax:

vertex\_argb(buffer, argb);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| argb | Colour | The ARGB value to set. |

#### Returns:

N/A

#### Example:

vertex\_argb(buff, $FFFFFFFF);

The above code sets the ARGB values of the vertex being defined to white.