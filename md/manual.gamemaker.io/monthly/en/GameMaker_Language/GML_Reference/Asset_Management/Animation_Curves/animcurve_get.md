---
title: "animcurve_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_get.htm"
converted: "2025-09-14T03:59:29.860Z"
---

# animcurve\_get

This function returns a [struct](../../../GML_Overview/Structs.md) containing all the data for the given animation curve.

You supply the animation curve asset ID (as defined in the Asset Browser), and the function will return a struct with the following variables:

| Animation Curve Struct |
| --- |
| Variable Name | Data Type | Description |
| name | String | This is the name of the animation curve. |
| channels | Array of Animation Curve Channel Structs | This is an array, where each item in the array is a channel struct. |


The channels variable in the struct is an [array](../../../GML_Overview/Arrays.md) where each array item is an [Animation Curve Channel Struct](animcurve_get_channel.md) with data relating to a channel within the curve. The channel struct is explained [on this page](animcurve_channel_new.md).

As with channels, the points on a single channel are stored as structs in an array, where each item in the array is a single point struct. The point struct is explained [on this page](animcurve_point_new.md).

Note that if the function fails (e.g. the given Animation Curve asset does not exist) then the function will return -1.

#### Syntax:

animcurve\_get(curve\_id);

| Argument | Type | Description |
| --- | --- | --- |
| curve_id | Animation Curve Asset | The asset ID (index) of the animation curve to get. |

#### Returns:

[Animation Curve Struct](animcurve_get.md) or -1

#### Example:

var \_curve = animcurve\_get(ac\_ButtonTween);
var \_channel = \_curve.channels\[0\];
if (\_channel.type != animcurvetype\_linear)
{
    \_channel.type = animcurvetype\_linear;
}

The above code retrieves the animation curve struct for the curve asset "ac\_ButtonTween", then checks the curve type for the first channel, and if it's not linear it sets it to linear.