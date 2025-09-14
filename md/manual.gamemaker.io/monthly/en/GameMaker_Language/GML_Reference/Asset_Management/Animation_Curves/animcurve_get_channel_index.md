---
title: "animcurve_get_channel_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_get_channel_index.htm"
converted: "2025-09-14T03:59:29.964Z"
---

# animcurve\_get\_channel\_index

This function returns the index value for any given animation curve channel.

You supply the animation curve ID or struct, where the curve ID is the name of the animation curve as it was defined in the Asset Browser, or the struct pointer as returned by the function [animcurve\_create()](animcurve_create.md). You then supply the name of the channel, as a string, and the function will return the index value associated with that channel. Note that if the curve or channel does not exist then you will get an error.

#### Syntax:

animcurve\_get\_channel\_index(curve\_struct\_or\_id, channel\_name);

| Argument | Type | Description |
| --- | --- | --- |
| curve_struct_or_id | Animation Curve Struct | The ID or struct pointer of the animation curve to target |
| channel_name | String | The channel name (a string). |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_channelindex = animcurve\_get\_channel\_index(ac\_ButtonTween, "x\_pos")
var \_channeldata = animcurve\_get\_channel(ac\_ButtonTween, \_channelindex);
var \_points = \_channeldata.points;
for (var i = 0; i < array\_length(\_points); ++i;)
{
    \_points\[i\].value += 1;
}

The above code retrieves the channel struct for the channel named "x\_pos" in the curve asset "ac\_ButtonTween", then loops through the points on the channel curve and adds one to their value.