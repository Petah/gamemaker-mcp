---
title: "animcurve_point_new"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_point_new.htm"
converted: "2025-09-14T03:59:29.981Z"
---

# animcurve\_point\_new

This function creates a new points [struct](../../../GML_Overview/Structs.md) (posx, value) to be added to an animation curve channel.

When created a points struct is empty and you need to set the following variables to generate the point data:

| Animation Curve Point Struct |
| --- |
| Variable Name | Data Type | Description |
| posx | real | The position in time (normalised from 0 to 1) of the point. |
| value | real | The value of the point. |

Each point struct that you create should be added to an [array](../../../GML_Overview/Arrays.md) and this is the array that is added to the animation curve channel struct "channels" variable (as shown in the example below).

#### Syntax:

animcurve\_point\_new();

#### Returns:

[Animation Curve Point Struct](animcurve_point_new.md)

#### Example:

my\_curve = animcurve\_create();
my\_curve.name = "My\_Curve";
var \_channels = array\_create(1);
\_channels\[0\] = animcurve\_channel\_new();
\_channels\[0\].name = "alpha";
\_channels\[0\].type = animcurvetype\_catmullrom;
\_channels\[0\].iterations = 8;
var \_points = array\_create(3);
\_points\[0\] = animcurve\_point\_new();
\_points\[0\].posx = 0;
\_points\[0\].value = 0;
\_points\[1\] = animcurve\_point\_new();
\_points\[1\].posx = 0.5;
\_points\[1\].value = 1;
\_points\[2\] = animcurve\_point\_new();
\_points\[2\].posx = 1;
\_points\[2\].value = 0;
\_channels\[0\].points = \_points;
my\_curve.channels = \_channels;

The above code creates a new animation curve struct and stores it in the variable "my\_curve". This struct is then populated with a name and a channel array. The channel array contains a single channel with three points.