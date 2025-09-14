---
title: "physics_raycast"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/physics_raycast.htm"
converted: "2025-09-14T04:00:07.132Z"
---

# physics\_raycast

This function casts a ray against (part of) the physics world and returns an array of structs with information on where the ray hit and what the normal is at the hitpoint.

You define the ray by providing its start and end points. Collisions are either checked between the start and end point, or from the start till a fraction of the ray (depending on the parameters passed).

The part of the physics world to check against can be a single object, a single instance or an [Array](../../GML_Overview/Arrays.md) containing objects and/or instances.

By default, the function only returns the closest hit, but it can return all hits if you set the all\_hits parameter to true. When the parameter is set to false, the function still returns an array on a collision being found, which only contains one element.

In the returned array, each struct will represent one hitpoint, holding the following information for any given hitpoint:

| Variable | Type | Description |
| --- | --- | --- |
| instance | Object Instance | The instance that was hit. |
| hitpointX | Real | The x coordinate of the hitpoint. |
| hitpointY | Real | The y coordinate of the hitpoint. |
| normalX | Real | The x component of the normal at the hitpoint. |
| normalY | Real | The y component of the normal at the hitpoint. |
| fraction | Real | The fraction of the line segment where the hit occurred, a value from 0 to 1. 0 is at the start point, 1 is at the end point, 0.5 is in the middle, etc. |

#### Syntax:

physics\_raycast(x\_start, y\_start, x\_end, y\_end, ids, \[all\_hits\], \[max\_fraction\]);

| Argument | Type | Description |
| --- | --- | --- |
| x_start | Real | The x coordinate of the ray's start point. |
| y_start | Real | The y coordinate of the ray's start point. |
| x_end | Real | The x coordinate of the ray's end point. |
| y_end | Real | The y coordinate of the ray's end point. |
| ids | Object Asset or Object Instance or Array | A single object asset, instance or an array containing a combination of them to check the ray against. All of them must have physics fixtures. Child objects that have physics enabled are also checked. |
| all_hits | Boolean | OPTIONAL Whether to return all the hits or only the closest. The default is false. |
| max_fraction | Real | OPTIONAL The maximum proportion of the ray to check. A value from 0 to 1. 0 is at the start point, 1 is at the end point. If this is set to, for example, 0.5 then the check is only performed from the ray's start point to its midpoint. The default is 1, meaning the ray is checked fully. |

#### Returns:

[Array](../../GML_Overview/Arrays.md) of [Raycast Hitpoint Struct](physics_raycast.md) if there are collisions (or [undefined](../../GML_Overview/Data_Types.md) if the room doesn't have a physics world, when there are no physics instances or when no collisions are detected)

#### Example 1: Basic Use

Create Event

physics\_world\_create(0.1);
fixtures = \[\];

var \_fix = physics\_fixture\_create();
physics\_fixture\_set\_density(\_fix, 0);
repeat(100)
{
    var \_angle = random(360);
    var \_x = random(room\_width), \_y = random(room\_height);
    physics\_fixture\_set\_edge\_shape(\_fix, \_x, \_y, \_x + lengthdir\_x(40, \_angle), \_y + lengthdir\_y(40, \_angle));
    var \_fix\_bound = physics\_fixture\_bind(\_fix, id);
    array\_push(fixtures, \_fix\_bound);
}
physics\_fixture\_delete(\_fix);

x1 = room\_width / 2; y1 = room\_height / 2;
x2 = mouse\_x; y2 = mouse\_y;

hits = undefined;

Step Event

x2 = mouse\_x; y2 = mouse\_y;
hits = physics\_raycast(x1, y1, x2, y2, id, true);

Draw Event

physics\_world\_draw\_debug(phy\_debug\_render\_shapes);
draw\_line\_colour(x1, y1, x2, y2, c\_red, c\_blue);

if (is\_undefined(hits)) { exit; }

for(var i = 0;i < array\_length(hits);i++)
{
    var \_hit = hits\[i\];
    draw\_line(\_hit.hitpointX, \_hit.hitpointY, \_hit.hitpointX + \_hit.normalX \* 40, \_hit.hitpointY + \_hit.normalY \* 40);
}

Clean Up Event

for(var i = 0;i < array\_length(fixtures);i++) { physics\_remove\_fixture(id, fixtures\[i\]); }

The example above shows how to use the physics\_raycast function.

First, in an object's Create event, a physics world is set up using [physics\_world\_create](The_Physics_World/physics_world_create.md) and 100 [edge-shaped](Fixtures/physics_fixture_set_edge_shape.md "physics_fixture_set_edge_shape()") fixtures are bound to it using [physics\_fixture\_bind](Fixtures/physics_fixture_bind.md). After that, the fixture is deleted since it's no longer needed once the fixtures have been bound to the instance. The start and end point are initialised to the room center and the mouse position respectively, the coordinates are stored in variables x1, y1, x2 and y2. The variable hits that will hold the result of the function call is set to undefined.

In the Step event, the ray's end point is first updated and then the physics\_raycast function is called. A ray is cast in the physics world from (x1, y1) to (x2, y2), checking for hits with the current instance of the object, i.e. its [id](../Asset_Management/Instances/Instance_Variables/id.md). The all\_hits parameter is set to true so that all hits are returned.

In the Draw event, the physics world's shapes are drawn with a call to [physics\_world\_draw\_debug](The_Physics_World/physics_world_draw_debug.md) and the ray itself is drawn with a call to [draw\_line\_colour](../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_colour.md). If physics\_raycast returned undefined, the Draw event is exited. If it returned results, a line is drawn for every hitpoint returned: a line 40 pixels long is drawn from the hitpoint in the direction of the normal at the hitpoint.

In the Clean Up event all bound fixtures are removed.

#### Example 2: Using the Fraction Value

Step Event

x2 = mouse\_x; y2 = mouse\_y;
hits = physics\_raycast(x1, y1, x2, y2, id, false);

Draw Event

physics\_world\_draw\_debug(phy\_debug\_render\_shapes);
draw\_line\_colour(x1, y1, x2, y2, c\_red, c\_blue);

if (is\_undefined(hits)) { exit; }

var \_fract = hits\[0\].fraction;
draw\_line\_colour(x1, y1, x1 + \_fract \* (x2 - x1), y1 + \_fract \* (y2 - y1), c\_yellow, c\_yellow);

The above code shows how to use the fraction value to draw a line from the ray's start point to the hitpoint. (the object's Create and Clean Up events are the same as in Example 1)

In the Step event, the end point's coordinates are set to the mouse position. The function physics\_raycast is called and casts a ray against the object, the all\_hits parameter is set to false so that only the closest hit is returned.

In the Draw event, the physics world's shapes are drawn with a call to [physics\_world\_draw\_debug](The_Physics_World/physics_world_draw_debug.md) and the ray itself is drawn. If the function returned undefined, the Draw event is exited. If the function returned a result, it will only be one result since the all\_hits parameter was set to false. So the fraction can be found in hits\[0\].fraction. A second, yellow line is then drawn over the ray from the start point to the point that's the fraction of the distance between the two points away from the start point. This point is at the same coordinates as the hitpoint itself, i.e. hits\[0\].hitpointX and hits\[0\].hitpointY.

#### Example 3: Checking against Multiple Objects & Instances

Step Event

hits = physics\_raycast(x1, y1, x2, y2, \[obj\_physics\_parent, obj\_physics\_circle, ins\_physics\_unique\], true);

The above code shows how to call physics\_raycast with an array of objects and instances. The ray is checked against all [instances](../../../Quick_Start_Guide/Objects_And_Instances.md) of child objects of obj\_physics\_parent, against all instances of obj\_physics\_circle and against the one unique instance ins\_physics\_unique.