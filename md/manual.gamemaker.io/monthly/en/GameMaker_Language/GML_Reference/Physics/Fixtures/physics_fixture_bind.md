---
title: "physics_fixture_bind"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_bind.htm"
converted: "2025-09-14T04:00:04.857Z"
---

# physics\_fixture\_bind

Once we have defined our fixture it has to be bound to an instance. This means that its _properties_ are transferred to the selected instance, **not the actual fixture itself**, so that one fixture can be bound to multiple instances if all are to have the same properties. You can specify an object index for the target and all instances of that object present in the room at the time will receive that fixture's properties (but not any new instances of the object created later), or you can use the special keywords [other](../../../GML_Overview/Instance%20Keywords/other.md) and [all](../../../GML_Overview/Instance%20Keywords/all.md). You can even specify a parent object and all children instances with that parent will also receive the fixture. Once the fixture has been bound to all the instances that you need, it can be deleted if no longer necessary and the instances with that fixture's properties will not be affected and maintain those properties.

The fixture will be bound to the instance with the centre of mass being positioned at the origin of the instance, and polygon fixtures are bound based on the position of the points _relative_ to the origin. If you require your fixture to be bound to a point other than the origin then you should be using [physics\_fixture\_bind\_ext](physics_fixture_bind_ext.md).

![Physics fixture binding example](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_fixture_bind_image.png)The function will also return a unique "id" value for the _bound_ fixture (**not the fixture itself**) which can then be used to remove ("un-bind") the physics properties from the instance using the function [physics\_remove\_fixture](physics_remove_fixture.md). This permits you to add and remove physical properties from an instance without destroying and re-creating objects.

NOTE Fixtures should be deleted when no longer needed as failure to do so may cause a memory leak which will slow down and eventually crash your game.

#### Syntax:

physics\_fixture\_bind(fixture, target)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | The fixture that is to be bound |
| target | Object Instance or Object Asset | The target instance that is to receive the fixture (can be an instance, an object, other or all) |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_fix, \_inst;
\_fix = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(\_fix, 16);
physics\_fixture\_set\_density(\_fix, 1.0);
inst = instance\_create\_layer(x, y, "Instances", genericBodyObject);
my\_fix = physics\_fixture\_bind(\_fix, inst);
physics\_fixture\_delete(\_fix);

The code above will create a fixture and assign its index to the temporary variable \_fix. It then defines the shape and density of the fixture before binding it to the instance that was created with the index for the **bound** fixture stored in the variable my\_fix. Finally, the fixture is deleted to prevent memory leaks as it is no longer needed.