---
title: "place_free"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/place_free.htm"
converted: "2025-09-14T04:00:02.920Z"
---

# place\_free

You can use this function to check and see if the calling instance would collide with any instance _flagged as **solid**_ in your game. Now, it should be noted that for this to work, the instance running the code must have a valid collision mask (either for the sprite itself, or through the [mask\_index](../../Asset_Management/Sprites/Sprite_Instance_Variables/mask_index.md)) and it will only register collisions with those solid flagged instances that also have a valid mask.

The function itself basically works by taking the instance and testing for collisions with only solid flagged instances when placed at the position specified by the x/y arguments. The collision checking can be either precise or based on the bounding box of the instance, depending on what kind of collision mask has been selected.

#### Syntax:

place\_free(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check. |
| y | Real | The y position to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (place\_free(mouse\_x, mouse\_y))
{
    x = mouse\_x;
    y = mouse\_y;
}

The above code will check for a collision with any solid flagged instance if the calling instance were to be placed at the same position as the mouse. If there is no collision detected, then the instance has its x/y coordinates set to those of the mouse.