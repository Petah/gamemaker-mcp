---
title: "position_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/position_empty.htm"
converted: "2025-09-14T04:00:03.051Z"
---

# position\_empty

This function will check to see if a given position enters into collision with _any instance_ with a valid collision mask at the given position.

#### Syntax:

position\_empty(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check. |
| y | Real | The y position to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var xx, yy;
xx = random(room\_width);
yy = random(room\_height);
if (position\_empty(xx, yy))
{
    instance\_create\_layer(xx, yy, "Bullets", obj\_Bomb);
}

This will check a random position somewhere in the room for a collision and if there is none it will create an instance of obj\_Bomb.