---
title: "Objects"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Objects.htm"
converted: "2025-09-14T03:59:34.283Z"
---

# Objects

In GameMaker you have objects and you have instances. Objects are essentially the base template for an instance, and as such are _never_ present in a room directly... Only _instances_ of the object are placed in the room. This means that if you want to change something for all instances you are going to create in the future, then you can do it by changing the _object_.

IMPORTANT Changing anything about an object will **not** change any instances currently present in the room, only those that are created after the change.

TIP See the [Objects vs. Instances](../../../../Additional_Information/Objects_vs_Instances.md) page for information regarding the differences between using object and instance handles.

You can also access information about a base object and use it to dictate behaviours or changes in the game. For example, you can do a check for a parent object ID, and in the following code if an instance with that parent is found you can then check its [object\_index](object_index.md) to decide what should be done.

GameMaker gives you a number of functions that permit you to get various details about an object. Note, an object is _not_ an instance (an in-game entity), it is purely a resource from which all instances are created. This means that the return values of these functions may be different to the actual values shown by instances in the room, as once an instance is created it can be changed through code and GML Visual actions.

-   [object\_index](object_index.md)
-   [object\_exists](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Objects/object_exists.md)
-   [object\_get\_name](object_get_name.md)
-   [object\_get\_mask](object_get_mask.md)
-   [object\_get\_parent](object_get_parent.md)
-   [object\_get\_persistent](object_get_persistent.md)
-   [object\_get\_solid](object_get_solid.md)
-   [object\_get\_sprite](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_sprite.md)
-   [object\_get\_visible](object_get_visible.md)
-   [object\_get\_physics](object_get_physics.md)
-   [object\_is\_ancestor](object_is_ancestor.md)

There are also a number of functions that permit you set the properties for an object. It should be noted that any instances of this object that already exist in the room _may not be affected by these functions_, but all new instances of this object created in the room will be, so it is recommend that you never change an objects properties when instances of that object are present in the current room.

-   [object\_set\_mask](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Objects/object_set_mask.md)
-   [object\_set\_persistent](object_set_persistent.md)
-   [object\_set\_solid](object_set_solid.md)
-   [object\_set\_sprite](object_set_sprite.md)
-   [object\_set\_visible](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Objects/object_set_visible.md)

You can also use certain functions to generate events from code from within a specific instance or object. These functions can be very useful, especially when dealing with [Parents and Children](../../../../The_Asset_Editors/Object_Properties/Parent_Objects.md), and are outlined in the following section:

-   [Generating Object Events](Object_Events/Generating_Object_Events.md)