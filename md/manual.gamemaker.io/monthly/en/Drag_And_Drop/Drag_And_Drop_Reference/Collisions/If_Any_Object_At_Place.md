---
title: "If Any Object At Place"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Collisions/If_Any_Object_At_Place.htm"
converted: "2025-09-14T03:59:23.934Z"
---

# ![If Any Object At Place Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/i_Collision_Any.png) If Any Object At Place

This action is used to check and see if there is an instance of _any_ object placed at a position based on the collision mask of the calling instance. You give the position, which can be an absolute position or a position relative to the instance, and the action will return true if there is a collision or false if there is not. You can also check the "Not" flag to check if there is _not_ a collision at the given position, and the action will then return true if no collisions are found and false otherwise. Collisions are calculated based on the collision mask of the calling instance overlapping the collision mask of any instance at the position (as if it was being "placed" at the position).

IMPORTANT Collisions will only register for those instances that have a valid collision mask, ie: they have a sprite assigned to the sprite\_index, or a sprite assigned to the mask\_index. If **either** of the instances in the collision have no collision mask then the collision will not be detected, regardless of what the instance is drawing at the time.

Note that to add actions into an "if" block, they should be dropped to the _side_ of the action, as shown in the image below:

![If Any Object At Place drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/If_Collision_Any.png)

#### Action Syntax:

![If Any Object At Place Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/a_Collision_Any.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| x | The x position to check |
| y | The y position to check |

#### Example:

![If Any Object At Place Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/e_Collision_Any.png)The above action block code checks for a collision at the position where the instance is placed and if one is found it blends the instance with red, otherwise it leaves the blending as normal (white).