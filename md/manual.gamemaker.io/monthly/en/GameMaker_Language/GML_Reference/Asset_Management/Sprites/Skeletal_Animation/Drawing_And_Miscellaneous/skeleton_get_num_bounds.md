---
title: "skeleton_get_num_bounds"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/skeleton_get_num_bounds.htm"
converted: "2025-09-14T03:59:41.014Z"
---

# skeleton\_get\_num\_bounds

This function will return the number of bounding boxes associated with the skeleton animation sprite assigned to the instance running the code. This can then be used along with the function [skeleton\_get\_bounds()](skeleton_get_bounds.md) to retrieve data about each of the bounding boxes.

NOTE The bounding box of a Spine sprite is set up in Spine itself, not in GameMaker.

#### Syntax:

skeleton\_get\_num\_bounds();

#### Returns:

[Real](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var num = skeleton\_get\_num\_bounds();
var yy = 60;
for(var i = 0; i < num; i++)
{
    var b\_info = skeleton\_get\_bounds(i);
    if b\_info\[0\] > 0
    {
        var data = b\_info\[1\] + ":";
        for(var j = 0; j < b\_info\[0\]; j++)
        {
            data += " (" + string(b\_info\[(j \* 2) + 2\]) + ", " + string(b\_info\[(j \* 2) + 2 + 1\]) + ")";
        }
        draw\_text(20, yy, data);
        yy += 20;
    }
}

The above code will loop through each of the bounding boxes associated with the currently assigned sprite and then draw that data as a string to the screen.