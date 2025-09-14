---
title: "Time Sources"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/Time_Sources.htm"
converted: "2025-09-14T04:00:08.060Z"
---

# Time Sources

A "Time Source" is a custom timer you create. It runs for a given period of time, and at the end, it expires.

A Time Source (TS) has the ability to call a custom method ("callback") on expiring.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Time_Sources/time_sources_flow.png)It's also able to repeat a certain of amount of times, or forever. Each repetition of a Time Source is known as a "rep".

## How to Use Time Sources?

Create and start a Time Source that calls a custom method:

-   Call [time\_source\_create()](time_source_create.md) / [Create Time Source](../../../Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Create_Time_Source.md) to create a Time Source
    -   Specify whether this inherits from the Global Time Source, the Game Time Source or a custom Time Source
    -   Specify the period of time it runs for, and the units used (seconds or frames)
    -   Specify a custom method or script function, with an argument array to pass into that method
    -   Optionally, specify the number of times it should repeat
        -   By default it runs only once
-   Call [time\_source\_start()](time_source_start.md) / [Start Time Source](../../../Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Start_Time_Source.md) to start that Time Source immediately, or call it later when you need it to start

Doing this will cause the Time Source to run, and after the specified period, it will expire and call your specified method.

When you no longer need a Time Source, use [time\_source\_destroy](time_source_destroy.md) to remove it from memory.

IMPORTANT Even though Time Sources can expire at any moment, GameMaker will only "know" about this when the Time Sources are updated/"ticked", which happens between the Begin Step and Step event for all Time Sources. At this moment the callback functions will also be executed for those Time Sources that have expired or are about to expire (depending on their [expiry type](Time_Source_Expiry_Types.md)). See [Event Order](../../../The_Asset_Editors/Object_Properties/Event_Order.md) for more details.

## Built-In Time Sources

A Time Source can inherit from either of the two built-in Time Sources, or from a custom Time Source.

See: [Built-In Time Sources](Built_In_Time_Sources.md)

## Simple Timers

While setting up a time source doesn't take many lines of code, it can be convenient to quickly set up and manage a timer using a single function.

The following two functions provide a simpler, shorthand way of creating a Time Source and stopping it:

-   [call\_later](call_later.md)
-   [call\_cancel](call_cancel.md)

NOTE You cannot use the Time Source functions with the Time Source IDs used by these functions. See [call\_later](call_later.md) for more information.

## Function List

The following functions are used to create and modify Time Sources:

-   [time\_source\_create](time_source_create.md)
-   [time\_source\_destroy](time_source_destroy.md)
-   [time\_source\_start](time_source_start.md)
-   [time\_source\_stop](time_source_stop.md)
-   [time\_source\_pause](time_source_pause.md)
-   [time\_source\_resume](time_source_resume.md)
-   [time\_source\_reconfigure](time_source_reconfigure.md)
-   [time\_source\_reset](time_source_reset.md)
-   [time\_source\_get\_children](time_source_get_children.md)
-   [time\_source\_get\_parent](time_source_get_parent.md)
-   [time\_source\_get\_period](time_source_get_period.md)
-   [time\_source\_get\_reps\_completed](time_source_get_reps_completed.md)
-   [time\_source\_get\_reps\_remaining](time_source_get_reps_remaining.md)
-   [time\_source\_get\_state](time_source_get_state.md)
-   [time\_source\_get\_time\_remaining](time_source_get_time_remaining.md)
-   [time\_source\_get\_units](time_source_get_units.md)
-   [time\_source\_exists](time_source_exists.md)

Each get\_\* function will return undefined if the specified Time Source doesn't exist.

The following helper functions are provided for converting time periods:

-   [time\_seconds\_to\_bpm](time_seconds_to_bpm.md)
-   [time\_bpm\_to\_seconds](time_bpm_to_seconds.md)

Also see: [GML Visual - Time Sources](../../../Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Time_Sources_(GML_Visual).md)

## Constants

The following constants are used with Time Source functions:

-   [Built-In Time Sources](Built_In_Time_Sources.md)
-   [Time Source Units](Time_Source_Units.md)
-   [Time Source Expiry Types](Time_Source_Expiry_Types.md)
-   [Time Source States](Time_Source_States.md)