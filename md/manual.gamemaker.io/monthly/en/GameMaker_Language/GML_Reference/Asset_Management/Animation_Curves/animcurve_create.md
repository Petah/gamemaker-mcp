---
title: "animcurve_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_create.htm"
converted: "2025-09-14T03:59:29.812Z"
---

# animcurve\_create

This function creates an empty animation curve [struct](../../../GML_Overview/Structs.md), ready for you to populate with channel data.

The function will return a pointer to the struct and this is then used to add channels and other data to the animation curve. You can also supply this to functions like [animcurve\_get()](animcurve_get.md) to later get the data from the curve.

When you use this function, the struct created will have no data in it, and to use it you should add at least one channel and the channel should have points added to it. To add a channel, see the function [animcurve\_channel\_new()](animcurve_channel_new.md), and to add points to the channel, see the function [animcurve\_point\_new()](animcurve_point_new.md). Additionally you can give the animation curve struct a name by setting the "name" variable (as shown in the example code, below). Channels added to a new animation curve should be added as an [array](../../../GML_Overview/Arrays.md), where each item in the array references a channel struct, and the points in a channel should also be added as an array, where each array item references a point struct.

Note that animation curves created in this way **must be deleted when no longer required** as they will take up space in memory otherwise, which may lead to a memory leak, slowing down and eventually crashing your game. You can remove an animation curve when no longer needed using the function [animcurve\_destroy()](animcurve_destroy.md). You do not need to to clean up any channel or point data within the curve, as this will be done by the garbage collector automatically when the curve itself is destroyed.

#### Syntax:

animcurve\_create();

#### Returns:

[Animation Curve Struct](animcurve_get.md)

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