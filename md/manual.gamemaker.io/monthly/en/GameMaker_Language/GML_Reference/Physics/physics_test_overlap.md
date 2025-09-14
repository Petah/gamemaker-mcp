---
title: "physics_test_overlap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/physics_test_overlap.htm"
converted: "2025-09-14T04:00:07.150Z"
---

# physics\_test\_overlap

This function can be used to check and see if the physical body of the calling instance (i.e. any of its fixtures) overlaps, or _will_ overlap, when rotated and placed at a given position in the room.

The angle argument is the angle of rotation that the calling instance has (or will have) at the position to be checked, and the obj argument can be either a single instance ID, an object index or the _[keywords](../../GML_Overview/Instance_Keywords.md)_ all or other.

#### Syntax:

physics\_test\_overlap(xpos, ypos, angle, obj);

| Argument | Type | Description |
| --- | --- | --- |
| xpos | Real | The x position in the room to check |
| ypos | Real | The y position in the room to check |
| angle | Real | The angle to check (of the calling instance) |
| obj | Object Asset or Object Instance | The object to check for |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if physics\_test\_overlap(x+20, y-35, 0, obj\_Bomb)
{
    alarm\[0\] = game\_get\_speed(gamespeed\_fps);
    ignited = true;
}

The above code will check a position for a physics fixture overlap, and if there is one, it sets a variable and an alarm.