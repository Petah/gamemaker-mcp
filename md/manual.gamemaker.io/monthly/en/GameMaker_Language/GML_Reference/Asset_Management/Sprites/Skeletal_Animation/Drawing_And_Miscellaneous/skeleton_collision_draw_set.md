---
title: "skeleton_collision_draw_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/skeleton_collision_draw_set.htm"
converted: "2025-09-14T03:59:40.972Z"
---

# skeleton\_collision\_draw\_set

With this function, you can toggle on (true) or off (false) drawing the collision data for the current skeletal animation sprite being used by the instance. If this is switched on, the bounding box and the precise collision mask will be drawn as outlines around the sprite.

This function only works when the skeletal sprite drawing is being handled by the object. To draw the collision bounding box when drawing a skeletal sprite manually, use [draw\_skeleton\_collision()](draw_skeleton_collision.md).

NOTE The bounding box of a Spine sprite is set up in Spine itself, not in GameMaker.

#### Syntax:

skeleton\_collision\_draw\_set(flag);

| Argument | Type | Description |
| --- | --- | --- |
| flag | Boolean | Set to true to turn on drawing, and false to turn it off. |

#### Returns:

N/A

#### Example:

if (debug\_mode == true)
{
    skeleton\_collision\_draw\_set(true);
}

The above code checks to see if the game is being run in debug mode and if it is, it toggles the skeletal collision data for the instance to be shown.