---
title: "colour_get_green"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_green.htm"
converted: "2025-09-14T03:59:49.548Z"
---

# colour\_get\_green

This function returns the amount of green used to make the given colour, with the value being between 0 and 255, where 0 is no green and 255 is all green. The following image illustrates this:

![Green colour example](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Drawing/get_green.png)

#### Syntax:

colour\_get\_green(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

g\_comp = colour\_get\_green(c\_teal);

The above code will get the green component of the colour constant "c\_teal" and store the value in the variable "g\_comp".