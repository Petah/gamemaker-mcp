---
title: "animcurve_channel_new"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_channel_new.htm"
converted: "2025-09-14T03:59:29.800Z"
---

# animcurve\_channel\_new

This function creates a new animation curve channel [struct](../../../GML_Overview/Structs.md).

A channel struct has the following variables:

| Animation Curve Channel Struct |
| --- |
| Variable Name | Data Type | Description |
| name | string | This is the name of the channel. |
| type | Animation Curve Interpolation Type Constant | This will be one of the constants given in the table below. |
| iterations | integer | If the channel is using catmull-rom ("smooth") interpolation this holds how many points have been generated for each segment of the curve (note that these extra points are internal to the function and only used for the runtime calculations). If the channel is using linear interpolation, this value will still exist but can be ignored as it has no bearing on how the curve is interpolated. |
| points | array | This is an array, where each item in the array is an Animation Curve Point Struct. |

| Animation Curve Interpolation Type Constant |
| --- |
| Constant | Description |
| animcurvetype_linear | Used for linear interpolation between points. |
| animcurvetype_catmullrom | Used for smooth interpolation between points using Catmull-Rom interpolation. |
| animcurvetype_bezier | Used for Bezier interpolation between points. |


By default when you create a new channel struct, the "name" variable will be an empty string, the "type" will be animcurvetype\_linear and the "iterations" will be 16. All these variables can be set to the values that you require (note that the "iterations" value has no effect on linear curve types). Once created you need to add points to the curve, which is done by adding different point structs to the "points" [array](../../../GML_Overview/Arrays.md). These point structs can be created using the function [animcurve\_point\_new()](animcurve_point_new.md).

#### Syntax:

animcurve\_channel\_new();

#### Returns:

[Animation Curve Channel Struct](animcurve_get_channel.md)

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