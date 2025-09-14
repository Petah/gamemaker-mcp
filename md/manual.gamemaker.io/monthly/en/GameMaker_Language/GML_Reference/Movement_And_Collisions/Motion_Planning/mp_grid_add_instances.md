---
title: "mp_grid_add_instances"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_add_instances.htm"
converted: "2025-09-14T04:00:03.234Z"
---

# mp\_grid\_add\_instances

This function uses the instance collision mask (decided by the sprite properties or the mask index of the calling instance) to mark cells as forbidden or not in an MP grid, where forbidden cells cannot be crossed by any of the pathfinding functions. You can specify in the function whether to consider precise collisions or not and the forbidden cells marked will change depending on this setting. This image illustrates this behaviour:

![Add instances example](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/mp_grid_add_instance_image.png)The two instances above have been added into the MP grid using the mp\_grid\_add\_instances() function with precise being set as true. As you can see the, green instance has only marked the grid squares it "touches" as forbidden, due to the fact that its sprite mask is also set to precise. However the second instance has marked other cells too which don't _appear_ to be touching. This is because the sprite mask is **not** set to precise, meaning that even if you are using the precise setting in the function, only the bounding box of the sprite will be considered. This is also what would happen if you set the precise argument of the function to false - even instances with a precise sprite mask will be added into the grid based on their bounding boxes.

#### Syntax:

mp\_grid\_add\_instances(id, obj, prec);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be used |
| obj | Object Asset or Object Instance | Object index, or instance id, of the instances to be added into the mp_grid |
| prec | Boolean | Whether the check is based on pixel-perfect collisions (true = slow) or its bounding box in general (false = fast). |

#### Returns:

N/A

#### Example:

mp\_grid\_add\_instances(grid, obj\_Wall, true);

The above code will add all instances of "obj\_Wall" into the mp\_grid indexed in the variable "grid" using the precise collision mask rather than the bounding box.