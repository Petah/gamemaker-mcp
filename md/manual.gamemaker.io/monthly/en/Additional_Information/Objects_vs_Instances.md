---
title: "Objects vs. Instances"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Objects_vs_Instances.htm"
converted: "2025-09-14T03:59:22.758Z"
---

# Objects vs. Instances

One of the first assets you work with in GameMaker are [Objects](../The_Asset_Editors/Objects.md). An object lets you define how something in your game behaves (e.g. a player or enemy).

Then in [The Room Editor](../The_Asset_Editors/Rooms.md), you drag an object into a room, so it actually appears in-game. That's where an **object** stops and an **instance** begins.

An instance is created from an object and you can have multiple instances of an object in a room. Each instance can go its own way and you can modify each instance of an object separately.

## Difference At Runtime

Understanding the difference between objects and instances is important as they both exist as resources at runtime.

[Instances](../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instances.md) are prominent at runtime as they are the primary drivers of your game: they are the ones executing your code and interacting with other instances to form gameplay. [Objects](../GameMaker_Language/GML_Reference/Asset_Management/Objects/Objects.md) on the other hand continue to exist as _background resources_, and they can be modified and used to create new instances.

There are functions and language features that operate on both objects (the background resource) and instances (its actual presence in the room), and as such it becomes important to understand the differences between using either resource in such functions.

### Accessing Variables

You can access variables from an instance via dot notation, i.e. instance.variable. You can also use an object in place of the instance (object.variable) which is fine if there is only one instance of that object, however it is not recommended if there are more than one, as it would just return the value from the first instance created for that object (which may change).

To understand how the dot accessor works with objects and instances, see [Addressing Variables In Other Instances](../GameMaker_Language/GML_Overview/Addressing_Variables_In_Other_Instances.md).

You can also access the scope of an instance or all instances of an object using with(). See the [with](../GameMaker_Language/GML_Overview/Language_Features/with.md) page for details on how it works using objects and instances.

### Functions Taking Only Objects or Instances

There are built-in GML functions that operate on either an **object handle** or an **instance handle**, depending on the function.

Functions that only take an object handle usually return information on all of its instances, such as [instance\_number](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_number.md), on the object itself, such as [object\_get\_name](../GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_name.md), and on one particular instance of the object, such as [instance\_nearest](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_nearest.md) and [instance\_create\_layer](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_create_layer.md) (in this case, creating a new one). Another example is the function [instance\_change](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_change.md) which operates on the current instance and changes it to use a different object (and hence use its events).

Functions that only operate on instances mostly do so without arguments, as they operate on the instance executing the code. For example, [instance\_change](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_change.md) as previously mentioned, [instance\_copy](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_copy.md), [motion\_add](../GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/motion_add.md) and various other functions will operate on the current instance. There are functions that operate on instances via arguments, but they also accept object handles and are covered in the next section.

### Functions Taking Both Objects and Instances

There are built-in GML functions that take both an **instance handle** and an **object handle**.

The difference in most use cases is simple: passing an instance handle only modifies that **one instance**, and passing an object handle modifies **all instances** of the given object.

Pages for functions that take both types of values will explain the difference between passing either. Here are some common examples of functions that take both:

-   **Functions that may affect multiple instances**: There are functions that may operate on multiple [instances](../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instances.md) that take both instance and object handles. For example, [instance\_destroy](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_destroy.md) will destroy a single instance, but if you pass it an object handle, it will destroy all instances of that object. Similarly, [instance\_exists](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_exists.md) checks if a particular instance still exists in the room, however passing an object makes it check whether _any_ instance of the object exists. Most other similar functions mirror this kind of behaviour.
-   **Collision functions**: Common collision functions such as [place\_meeting](../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/place_meeting.md), [instance\_place](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_place.md), [collision\_circle](../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_circle.md), etc. take both instance and object handles. As you can guess, passing an instance makes them check for collisions only against that _specific_ instance, while passing an object makes them check for collisions against _all_ instances of the passed object.
-   ****Functions that affect a s**ingle instance**: There are functions that operate on single instances only, like the [variable functions](../GameMaker_Language/GML_Reference/Variable_Functions/Variable_Functions.md) that let you get or set variables on an instance using function calls. However these will let you pass object handles, which will only make the function operate on the first instance that was created for the object in the room (affected by the [Instance Creation Order](../The_Asset_Editors/Room_Properties/Room_Properties.htm#creation_order) if the instances were set up in the IDE). For such functions, passing object handles is **NOT recommended** as this behaviour only exists for legacy support.

### Parents

Using a [parent object](../The_Asset_Editors/Object_Properties/Parent_Objects.md) in any of the functions above is the same as passing all its child objects as well. The operation will include all instances of the given object and all instances of its child objects (and _their_ child objects if they have any, and so on).