---
title: "make_colour_rgb"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/make_colour_rgb.htm"
converted: "2025-09-14T03:59:49.755Z"
---

# make\_colour\_rgb

GameMaker provides this function (as well as others) to permit the user to make their own colours. This particular function takes three component parts, the _red_, the _green_ and the _blue_ components of the colour that you wish to make. These values are taken as being between 0 and 255 so you can make 16,777,216 (256\*256\*256) colours with this! Below you can see an image of how these components look when separated:

![Make RGB colour example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/RGB.png)The image on the left is a break-down of the individual components of the function, and then on the right is an illustration of how changing these components affects the end colour.

#### Syntax:

make\_colour\_rgb(red, green, blue);

| Argument | Type | Description |
| --- | --- | --- |
| red | Real | The red component of the colour |
| green | Real | The green component of the colour |
| blue | Real | The blue component of the colour |

#### Returns:

[Colour](Colour_And_Alpha.md)

#### Example:

col = make\_colour\_rgb(100, 145, 255);

The above code uses the function to create a colour and store its value in the variable "col" for later use.