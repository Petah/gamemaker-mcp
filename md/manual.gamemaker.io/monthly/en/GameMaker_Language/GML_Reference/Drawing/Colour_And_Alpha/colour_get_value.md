---
title: "colour_get_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_value.htm"
converted: "2025-09-14T03:59:49.605Z"
---

# colour\_get\_value

This function will return the value (luminosity) of the given colour. This is the amount of the "light" that is mixed into the final colour and is part of the hue, saturation and value method for defining a colour. The following image illustrates how this value corresponds to the HSV scale of colour:

![Get vcalue example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/get_val.png)

#### Syntax:

colour\_get\_value(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

col = make\_colour\_hsv(random(255), 255, colour\_get\_value(c\_teal));

The above code gets the value used to make the colour constant "c\_teal" and then uses that value to set a random colour to have the same luminosity, storing the resulting colour in the variable "col".