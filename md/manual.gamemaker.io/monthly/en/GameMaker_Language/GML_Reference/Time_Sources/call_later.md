---
title: "call_later"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/call_later.htm"
converted: "2025-09-14T04:00:08.099Z"
---

# call\_later

This function triggers a callback function after the specified time or after a certain interval. It does this by creating a Time Source (see [Time Sources](Time_Sources.md)).

Note that you do not need to clean up this Time Source yourself as GameMaker will remove it from memory when it is no longer needed.

To cancel the callback function, see [call\_cancel](call_cancel.md).

IMPORTANT While this function returns an actual time source, it cannot be used with the time source functions, as the time sources used by [call\_later](call_later.md) and [call\_cancel](call_cancel.md) are "invisible" - they will not appear as children of any built-in time sources and cannot be used with other time source functions. They are, however, included in the time source count returned by [debug\_event("ResourceCounts")](../Debugging/debug_event.md).

## Arguments

The following is a breakdown of this function's arguments:

### [PeriodPeriod](call_later.htm#)

This is a period of time that may be expressed in seconds or frames, depending on the unit specified in the next argument.

When using frames as the unit, the period must be an integer. Non-integer values are rounded down (floored), with the exception of values lower than 1, which are rounded up to 1.

### [UnitUnit](call_later.htm#)

This is the unit that the period is expressed in, and may be time\_source\_units\_seconds or time\_source\_units\_frames.

See: [Time Source Units](Time_Source_Units.md)

You can use a beats-per-minute value by using [time\_bpm\_to\_seconds()](time_bpm_to_seconds.md).

### [CallbackCallback](call_later.htm#)

You must specify a "callback" [method](../../GML_Overview/Method_Variables.md) that is called when the Time Source expires.

[LoopLoop](call_later.htm#)

Whether the time source should loop.

#### Syntax:

call\_later(period, unit, callback, \[loop=false\]);

| Argument | Type | Description |
| --- | --- | --- |
| period | Real | The period that the Time Source runs for, in the given units |
| units | Time Source Unit Constant | The units that the given period is in |
| callback | Method or Script Function | The method or script function to call after the specified time |
| loop | Boolean | OPTIONAL Whether to loop the Time Source (default is false) |

#### Returns:

[Time Source](time_source_create.md)

#### Example 1:

var \_callback = function()
{
    show\_debug\_message("Five seconds have passed!");
}

var \_handle = call\_later(5, time\_source\_units\_seconds, \_callback);

In this example, we create a callback function that shows a debug message after five seconds have passed. After that, the underlying Time Source is destroyed.

#### Example 2:

var \_create\_enemy = function()
{
    var \_x = random(room\_width);
    var \_y = random(room\_height);
    instance\_create\_depth(\_x, \_y, depth, obj\_enemy);
}

var \_handle = call\_later(10, time\_source\_units\_seconds, \_create\_enemy, true);

In this example, we create a callback function that creates a new enemy at a random position in the room. This function is then executed every 10 seconds by passing it to [call\_later](call_later.md). The last argument is set to true so the function keeps getting called every 10 seconds.

Use [call\_cancel](call_cancel.md) with the handle returned by [call\_later](call_later.md) to stop the Time Source and the calls to the callback.