---
title: "animcurve_get_channel"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_get_channel.htm"
converted: "2025-09-14T03:59:29.889Z"
---

# animcurve\_get\_channel

This function returns the [struct](../../../GML_Overview/Structs.md) containing the channel data for the channel specified in an animation curve asset or struct (as returned by [animcurve\_get](animcurve_get.md)).

You supply the animation curve ID or struct as well as the channel name or index, and the function will return a struct with the following format:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| name | String | This is the name of the channel. |
| type | Animation Curve Interpolation Type Constant | This will be one of the constants animcurvetype_linear for linear interpolation between points, animcurvetype_catmullrom for "smooth" interpolation between the points using catmull-rom interpolation, or animcurvetype_bezier for Bezier interpolation. |
| iterations | Real | If the channel is using catmull-rom ("smooth") interpolation this holds how many points have been generated for each segment of the curve (note that these extra points are internal to the function and only used for the runtime calculations). If the channel is using linear interpolation, this value will still exist but can be ignored as it has no bearing on how the curve is interpolated. |
| points | Array pointer | This is an array, where each item in the array is a point struct. |

The first required argument is the Animation Curve as it was defined in the Asset Browser, or the struct pointer as returned by the function [animcurve\_create()](animcurve_create.md).

The second required argument is a string that refers to the channel as it was defined in the Animation Curve asset, or you can supply an index value, which is from 0 to _n_, where _n_ is the last channel in the curve asset (eg: if an animation curve has 4 channels, they will be indexed from 0 to 3).

Note that passing an index value will require less processing than passing in a channel name. If the function fails (ie: no channel exists with the given name or index) then you will get an error.

### 'points' Array

The points member of the returned struct contains an array, which contains all of the channel's points as structs.

One point struct has the following variables:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| posx | Real | The position in time (normalised from 0 to 1) of the point. |
| value | Real | The value of the point. |

The points member only allows you to get and set the array variable. You cannot run   on the points array to modify it.

To modify the points array, store it in a variable, which will create a copy. Then modify that copy with the array functions, and apply that copy back to the points member in the struct.

var \_points\_copy = channel\_struct.points;

array\_delete(\_points\_copy, 0, 1);

channel\_struct.points = \_points\_copy;

#### Syntax:

animcurve\_get\_channel(curve\_struct\_or\_id, channel\_name\_or\_index);

| Argument | Type | Description |
| --- | --- | --- |
| curve_struct_or_id | Animation Curve Struct or Animation Curve Asset | The ID or struct pointer of the animation curve to target |
| channel_name_or_index | String or Real | The channel name (a string) or the channel index (an integer). |

#### Returns:

[Animation Curve Channel Struct](animcurve_get_channel.md)

#### Example:

var \_channeldata = animcurve\_get\_channel(ac\_ButtonTween, 0);
var \_points = \_channeldata.points;
for (var i = 0; i < array\_length(\_points); ++i;)
{
    \_points\[i\].value += 1;
}

The above code retrieves the channel struct for channel 0 in the curve asset "ac\_ButtonTween", then loops through the points on the channel curve and adds one to their value.