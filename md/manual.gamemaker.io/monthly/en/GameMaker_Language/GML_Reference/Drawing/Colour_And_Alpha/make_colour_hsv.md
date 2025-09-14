---
title: "make_colour_hsv"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/make_colour_hsv.htm"
converted: "2025-09-14T03:59:49.739Z"
---

# make\_colour\_hsv

GameMaker provides this function (as well as others) to permit the user to make their own colours. This particular function takes three component parts, the _hue_, the _saturation_ and the _value_ (also know as "luminosity") to create the colour desired. These values are taken as being between 0 and 255 so you can make 16,777,216 (256\*256\*256) colours with this! Below you can see an image of how these components look when separated:

![Make HSV colour example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/HSV.png)The image on the left is a break-down of the individual components of the function, and then on the right is an illustration of how changing these components affects the end colour. As you can see, even without changing the hue (it stays at 0, red), we can dramatically change the colour with the other two settings, with saturation making the colour tone go from grey (0) to a pure tone (255), and with the value making it go from darker (0) to lighter (255).

#### Syntax:

make\_colour\_hsv(hue, sat, val);

| Argument | Type | Description |
| --- | --- | --- |
| hue | Real | The hue of the colour |
| sat | Real | How saturated the colour is |
| val | Real | How dark the colour is |

#### Returns:

[Colour](Colour_And_Alpha.md)

#### Example:

col = make\_colour\_hsv(100, 145, 255);

The above code uses the function to create a colour and store its value in the variable "col" for later use.