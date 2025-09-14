---
title: "colour_get_red"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_red.htm"
converted: "2025-09-14T03:59:49.580Z"
---

# colour\_get\_red

This function returns the amount of red used to make the given colour, with the value being between 0 and 255, where 0 is no red and 255 is all red. The following image illustrates this:

![Red colour example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/get_red.png)

#### Syntax:

colour\_get\_red(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

r\_comp = colour\_get\_red(c\_teal);

The above code will get the red component of the colour constant "c\_teal" and store the value in the variable "r\_comp".