---
title: "Event Order"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Event_Order.htm"
converted: "2025-09-14T04:00:15.803Z"
---

# Event Order

When considering Events in GameMaker, it should be noted that **the exact order that ALL the events are going to occur in each step cannot be clearly stated**, simply because it depends on the internal workings of GameMaker and this is subject to change as the software develops or based on the platform where the game is running. However, there are certain events that will _always_ run in the same order.

## Upon Entering a Room

The first set of events that will always happen the same way are those that occur when a room is first entered. The order that the different events will fire is:

-   All instances are created one after the other, according to the room's [Instance Creation Order](../Room_Properties/Room_Properties.htm#creation_order). More specifically, for every instance:
    -   It is created:
        -   The instance's [Object Variables](Object_Variables.md) are initialised ([Pre-creation Code](Object_Variables.htm#h)).
        -   The **Create Event** is executed for the instance.
    -   It executes its **Instance Creation Code**, if it has any.
-   **Game Start Event** - this event is triggered once in the very first room of the game for all instances placed in the room from [The Room Editor](../Rooms.md) (note that calling [game\_restart](../../GameMaker_Language/GML_Reference/General_Game_Control/game_restart.md) will trigger this event again).
-   **Room Creation Code** - this is the one-off code written in [The Room Editor](../Rooms.md) for when a room is first entered.
-   **Room Start Event of all instances** - one of the "Other" category of events and will fire for all instances, [persistent](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/persistent.md) or otherwise.

## Every Step/Frame

Other than those specific events, events in a game step also always occur in the same order. However, the order of the instances within an event is not always guaranteed, it may vary between different Event Order versions and target platforms and may also not correspond to the order in which the instances were created (see [Instance Creation Order](../Room_Properties/Room_Properties.htm#creation_order)).

As a general rule, you can rely on the order of the events listed below, but not on the order in which the instances in the room execute one event.

For example, you will see below that the "Step" event always executes after the "Begin Step" event, however you cannot guarantee that, for example, Object2 will always execute its Step event after Object1. If you require such an execution order, then making use of a different event is recommended (e.g. putting Object2's Step code in End Step, if you need it to execute after Object1's Step).

So when you have code that relies on specific timing during each step of your game, make use of the events as listed below. To put it simply, first all Begin Step events are executed, then all Step events are executed, after that all End Step events are executed, then all Draw events, etc.

-   **Begin Step Event**
-   [**Timelines**](../Timelines.md)
-   [**Time Sources**](../../GameMaker_Language/GML_Reference/Time_Sources/Time_Sources.md)
    -   **"Ticks" (updates)**
    -   **Callbacks**
        -   Children of time\_source\_global (see [Built-In Time Sources](../../GameMaker_Language/GML_Reference/Time_Sources/Built_In_Time_Sources.md))
        -   Time sources spawned by [call\_later](../../GameMaker_Language/GML_Reference/Time_Sources/call_later.md)
        -   Children of time\_source\_game (see [Built-In Time Sources](../../GameMaker_Language/GML_Reference/Time_Sources/Built_In_Time_Sources.md))
-   [**Alarms**](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/alarm.md)
-   **Step Event**
-   All instances are moved their new positions (based on their [hspeed](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/hspeed.md) and [vspeed](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/vspeed.md)), also when following a path
-   Collisions are checked
    -   If  a collision is detected and one of the colliding instances is solid then both instances are moved back to their previous frame's position (if not solid they are left at their new positions) and their collision events are called.

        NOTE In [Collision Compatibility Mode](../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/Collision_Compatibility_Mode.md) the instances are moved back to their previous position before _and_ after the Collision events instead.

-   **End Step Event**

After all Step events are complete, GameMaker executes the Draw events for all instances, in the same game step. Within a particular event (e.g. Draw End), the order in which instances run that event depends on the layer order, e.g. the layer with the highest depth has its instances drawn first, and the layer with the lowest depth is drawn last.

NOTE The layer with the highest depth (which draws first) is displayed at the bottom of the Room Editor's [layer list](../Room_Properties/Layer_Properties.md), while the lowest depth layer is at the top (as it is "closer" to the viewer).

Each Draw event draws instances in this order (based on the [depth](../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) value), and then moves on to the next event, repeating the same instance order (e.g. Draw Begin moving to Draw and then Draw End).

This is the order of the Draw events:

-   **Pre-Draw Event**
-   **Draw Begin Event**
-   **Draw Event**
-   **Draw End Event**
-   **Post-Draw Event**
-   **Draw GUI Begin Event**
-   **Draw GUI Event**
-   **Draw GUI End Event**

For more detailed information on how these events are related to GameMaker's drawing, see [Draw Events](Draw_Events.md).