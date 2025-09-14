---
title: "physics_fixture_set_edge_shape"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_edge_shape.htm"
converted: "2025-09-14T04:00:05.065Z"
---

# physics\_fixture\_set\_edge\_shape

This function defines an "edge" fixture shape. An edge shape is simply a line that will generate a collision when other fixtures over lap it, and can be very useful for generating (for example) terrain, or for creating borders around a room. The position of the edge is defined using _local_ space, ie: the x/y position of the instance is considered (0,0), so this should be taken into consideration when creating them (in the code example below, the instance would have been placed at (0,0) in the room to avoid complications).

#### Syntax:

physics\_fixture\_set\_edge\_shape(fixture, local\_x1, local\_y1, local\_x2, local\_y2)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |
| local_x1 | Real | start x position for the edge |
| local_y1 | Real | start y position for the edge |
| local_x2 | Real | end x position for the edge |
| local_y2 | Real | end y position for the edge |

#### Returns:

N/A

#### Example:

var xx = 0;
var y1 = room\_height - 100;
var y2 = room\_height - 50 - irandom(100);
for (var i = 0; i < 10; i++;)
{
    var fix = physics\_fixture\_create();
    physics\_fixture\_set\_edge\_shape(fix, xx, y1, xx + 50, y2);
    physics\_fixture\_bind(fix, id);
    physics\_fixture\_delete(fix);
    xx += 50;
    y1 = y2;
    y2 = room\_height - 50 - irandom(100);
}

The above code will create a line of "edge" fixtures with a variety of heights over the length of the room.