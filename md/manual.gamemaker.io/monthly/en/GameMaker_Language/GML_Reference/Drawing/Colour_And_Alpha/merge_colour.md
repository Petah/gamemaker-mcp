---
title: "merge_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/merge_colour.htm"
converted: "2025-09-14T03:59:49.772Z"
---

# merge\_colour

With this function you can take two colours and then merge them together to make a new colour. The amount of each of the component colours can be defined by changing the "amount" argument, where a value of 0 will return the first colour (col1), a value of 1 will return the second colour (col2) and a value in between will return the corresponding mix. For example, a value of 0.5 will mix the two colours equally. The following image illustrates how this works by merging the colours red and blue together:

![Mege colour example](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Drawing/merge_colour.png)

#### Syntax:

merge\_colour(col1, col2, amount);

| Argument | Type | Description |
| --- | --- | --- |
| col1 | Colour | The first colour to merge |
| col2 | Colour | The second colour to merge |
| amount | Real | How much of each colour should be merged. For example, 0 will return col1, 1 will return col2, and 0.5 would return a merge of both colours equally |

#### Returns:

[Colour](Colour_And_Alpha.md)

#### Example:

col = merge\_colour(c\_lime, c\_orange, 0.5);

The above code uses the function to create a colour by merging lime and orange 50/50 and then stores its value in the variable "col" for later use.