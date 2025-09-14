---
title: "colour_get_saturation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_saturation.htm"
converted: "2025-09-14T03:59:49.593Z"
---

# colour\_get\_saturation

This function will return the saturation of the given colour. This is the amount of the colour tone that is mixed into the final colour and is part of the hue, saturation and value (luminosity) method for defining a colour. The following image illustrates how this value corresponds to the HSV scale of colour:

![Get saturation example](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Drawing/get_sat.png)

#### Syntax:

colour\_get\_saturation(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

col = make\_colour\_hsv(random(255), colour\_get\_sat(c\_teal), 255);

The above code gets the saturation used to make the colour constant "c\_teal" and then uses that value to set a random colour to have the same saturation, storing the resulting colour in the variable "col".