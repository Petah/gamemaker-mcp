---
title: "colour_get_hue"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_hue.htm"
converted: "2025-09-14T03:59:49.564Z"
---

# colour\_get\_hue

This function will return the hue of the given colour. This is the "pure" colour tone which is part of the hue, saturation and value (luminosity) method for defining a colour. The following image illustrates how this value corresponds to the HSV scale of colour:

![Get hue example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/get_hue.png)

#### Syntax:

colour\_get\_hue(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

col = merge\_colour(colour\_get\_hue(c\_teal), c\_white, 0.5);

The above code gets the hue used to make the colour constant "c\_teal" and then merges it with white at a 50:50 ratio, storing the resulting colour in the variable "col".