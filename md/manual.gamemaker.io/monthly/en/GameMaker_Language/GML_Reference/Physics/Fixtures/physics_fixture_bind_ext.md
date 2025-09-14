---
title: "physics_fixture_bind_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_bind_ext.htm"
converted: "2025-09-14T04:00:04.875Z"
---

# physics\_fixture\_bind\_ext

Once we have defined our fixture it has to be bound to an instance. This means that its _properties_ are transferred to the selected instance, **not the actual fixture itself**, so that one fixture can be bound to multiple instances if all are to have the same properties. You can specify an object index for the target and all instances present in the room at the time will receive that fixtures properties (but not any new instances of the object created later), or you can use the special keywords _other_ and _all_. You can even specify a parent object and all children instances with that parent will also receive the fixture. Once the fixture has been bound to all the instances that you need, it can be deleted if no longer necessary and the instances with that fixtures properties will not be affected and maintain those properties.

Normally, the fixture will be bound to the instance with the center of mass being positioned at the origin of the instance, however this is not always what you require and so this function also permits you to offset the x and y position where the fixture is bound by a given amount (if you do not require this then use [physics\_fixture\_bind](physics_fixture_bind.md) instead).

IMPORTANT A fixture can only support a _single_ offset, as adding multiple offsets to a single fixture is not supported by Box2D.

![Extended physics fixture binding example](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_fixture_bind_ext_image.png)The function will also return a unique "id" value for the _bound_ fixture (**not the fixture itself**) which can then be used to remove ("un-bind") the physics properties from the instance using the function [physics\_remove\_fixture](physics_remove_fixture.md). This permits you to add and remove physical properties from an instance without destroying and re-creating objects.

NOTE Fixtures should be deleted when no longer needed as failure to do so may cause a memory leak which will slow down and eventually crash your game.

#### Syntax:

physics\_fixture\_bind\_ext(fixture, target, xoffset, yoffset)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | The fixture that is to be bound |
| target | Object Instance or Object Asset | The target instance that is to receive the fixture (can be an instance id, an object id, other, or all) |
| xoffset | Real | The offset along the x-axis |
| yoffset | Real | The offset along the y-axis |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var fix, inst;
fix = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(fix, 16);
physics\_fixture\_set\_density(fix, 1.0);
inst = instance\_create\_layer(x, y, "Instances", genericBodyObject);
my\_fix = physics\_fixture\_bind\_ext(fix, inst, sprite\_width / 2, -(sprite\_height / 2));
physics\_fixture\_delete(fix);

The code above will create a fixture and assign its index to the variable "fix". It then defines the shape and density of the fixture before binding it to the instance at an offset based on the width and height of the sprite. The index for the **bound** fixture is stored in the variable "my\_fix". Finally, the fixture itself is deleted to prevent memory leaks as it is no longer needed.