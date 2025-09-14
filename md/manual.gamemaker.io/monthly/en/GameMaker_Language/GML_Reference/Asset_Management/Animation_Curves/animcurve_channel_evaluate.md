---
title: "animcurve_channel_evaluate"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_channel_evaluate.htm"
converted: "2025-09-14T03:59:29.776Z"
---

# animcurve\_channel\_evaluate

This function gets the value at a specific point in time from a channel [struct](../../../GML_Overview/Structs.md).

You supply the struct pointer for the channel (as returned by the function [animcurve\_get\_channel()](animcurve_get_channel.md), or as returned in the animation curve struct from the function [animcurve\_get()](animcurve_get.md)) and the "x" (time) position along the curve channel to evaluate. This position should be between 0 and 1, and the function will return the curve value at that position, or it will return 0 if the channel struct supplied is invalid.

#### Syntax:

animcurve\_channel\_evaluate(channel\_struct, posx);

| Argument | Type | Description |
| --- | --- | --- |
| channel_struct | Animation Curve Channel Struct | The struct pointer for the channel to evaluate. |
| posx | Real | The position in time to check (from 0 to 1). |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_channel = animcurve\_get\_channel(ac\_AlphaCurve, 0);
var \_val = animcurve\_channel\_evaluate(\_channel, sin(current\_time/1000));
image\_alpha = \_val;

The above code gets the channel struct for the animation curve asset "ac\_AlphaCurve". It then uses the returned evaluation value to set the image alpha for the instance.