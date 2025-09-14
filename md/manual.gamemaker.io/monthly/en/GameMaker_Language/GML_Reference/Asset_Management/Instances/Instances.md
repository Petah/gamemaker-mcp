---
title: "Instances"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instances.htm"
converted: "2025-09-14T03:59:33.741Z"
---

# Instances

**Instances** are created from [Objects](../../../../The_Asset_Editors/Objects.md) and, once created, they can be changed, manipulated and destroyed through GML Code and GML Visual actions. This page lists the main functions related to instances that are available in GameMaker.

### Creating Instances

You can create an instance of an object in a few ways:

-   Drag it on an Instance Layer in [The Room Editor](../../../../The_Asset_Editors/Rooms.md).
-   Create it at runtime, using the functions [instance\_create\_depth](instance_create_depth.md) and [instance\_create\_layer](instance_create_layer.md).
-   Add it to a sequence in [The Sequence Editor](../../../../The_Asset_Editors/Sequences.md) and add the sequence in [The Room Editor](../../../../The_Asset_Editors/Rooms.md) or through code.
-   Add it to a room that's not the current [room](../Rooms/room.md) using [room\_instance\_add](../Rooms/room_instance_add.md).

### Deactivating Instances

You also have the possibility of **deactivating** instances, which means they won't process any of their events, although they will still exist within the game. You can read about how this works and the functions you can use on the [Deactivating Instances](Deactivating_Instances/Deactivating_Instances.md) page.

### Objects vs. Instances

For the general difference between using object and instance handles in functions, see [Objects vs. Instances](../../../../Additional_Information/Objects_vs_Instances.md).

## Function Reference

### General

-   [instance\_create\_layer](instance_create_layer.md)
-   [instance\_create\_depth](instance_create_depth.md)
-   [instance\_destroy](instance_destroy.md)
-   [instance\_exists](instance_exists.md)
-   [instance\_change](instance_change.md)
-   [instance\_copy](instance_copy.md)
-   [instance\_find](instance_find.md)
-   [instance\_furthest](instance_furthest.md)
-   [instance\_nearest](instance_nearest.md)
-   [instance\_number](instance_number.md)
-   [instance\_place](instance_place.md)
-   [instance\_place\_list](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_place_list.md)
-   [instance\_position](instance_position.md)
-   [instance\_position\_list](instance_position_list.md)
-   [instance\_id\_get](instance_id_get.md)

### Alarms

Instances have a built-in array variable [alarm](Instance_Variables/alarm.md) that can be use to get or set Alarm Event values, but there are also two functions that can be used to do the same thing:

-   [alarm\_get](alarm_get.md)
-   [alarm\_set](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/alarm_set.md)

## Variable Reference

### Global

-   [instance\_id](instance_id.md)
-   [instance\_count](instance_count.md)

### Instance

There are a number of built-in variables available within each instance of an object that can be used to control different aspects of how the instance is displayed, how it uses other assets, and how it reacts to collisions, etc., which are all listed here:

-   [Built-In Instance Variables](Instance_Variables/Instance_Variables.md)