---
title: "colour_get_blue"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_blue.htm"
converted: "2025-09-14T03:59:49.536Z"
---

# colour\_get\_blue

This function returns the amount of blue used to make the given colour, with the value being between 0 and 255, where 0 is no blue and 255 is all blue. The following image illustrates this:

![Blue colour example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/get_blue.png)

#### Syntax:

colour\_get\_blue(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

b\_comp = colour\_get\_blue(c\_teal);

The above code will get the blue component of the colour constant "c\_teal" and store the value in the variable "b\_comp".