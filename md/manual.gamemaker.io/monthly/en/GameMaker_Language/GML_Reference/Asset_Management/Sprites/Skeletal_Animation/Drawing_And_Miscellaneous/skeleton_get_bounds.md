---
title: "skeleton_get_bounds"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/skeleton_get_bounds.htm"
converted: "2025-09-14T03:59:40.987Z"
---

# skeleton\_get\_bounds

This function will return an array of values associated with any given bounding box for the currently assigned skeleton animation sprite. You supply the index number for the bounding box to get the details of (you can retrieve the total number of bounding boxes for the sprite using the function [skeleton\_get\_num\_bounds()](skeleton_get_num_bounds.md)) and the function will return an array with the following elements:

-   \[0\] - the number of points on the bounding box (a real)
-   \[1\] - the name of the bounding box (a string)
-   \[2\] - the x position of the first point
-   \[3\] - the y position of the first point
-   \[etc...\] - further x/y position data up to the number of points on the bounding box

NOTE The bounding box of a Spine sprite is set up in Spine itself, not in GameMaker.

#### Syntax:

skeleton\_get\_bounds(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The bounding box index to get the values of. |

#### Returns:

[Array](../../../../../../../../../GameMaker_Language/GML_Overview/Arrays.md) (minimum 2 elements: numPoints, name \[, xPos, yPos, etc...\])

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