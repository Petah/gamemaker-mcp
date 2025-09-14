---
title: "time_source_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_create.htm"
converted: "2025-09-14T04:00:08.161Z"
---

# time\_source\_create

This function creates a new Time Source. Read [Time Sources](Time_Sources.md) for an overview.

Creating a new Time Source does not start it automatically; you must call [time\_source\_start()](time_source_start.md) to activate it.

A new Time Source only runs once, unless the repetitions argument is specified (read below).

You must destroy a Time Source using [time\_source\_destroy()](time_source_destroy.md) when you no longer need it.

## Arguments

Here is a breakdown of the function's arguments:

### [Parent Time SourceParent Time Source](time_source_create.htm#)

This is the parent Time Source which controls the new Time Source. This may be time\_source\_global, time\_source\_game or a custom Time Source that already exists.

See: [Built-In Time Sources](Built_In_Time_Sources.md)

### [PeriodPeriod](time_source_create.htm#)

This is a period of time that may be expressed in seconds or frames, depending on the unit specified in the next argument.

When using frames as the unit, the period must be an integer. Non-integer values are rounded down (floored), with the exception of values lower than 1, which are rounded up to 1.

### [UnitUnit](time_source_create.htm#)

This is the unit that the period is expressed in, and may be time\_source\_units\_seconds or time\_source\_units\_frames.

See: [Time Source Units](Time_Source_Units.md)

You can use a beats-per-minute value by using [time\_bpm\_to\_seconds()](time_bpm_to_seconds.md).

### [Callback & ArgsCallback & Args](time_source_create.htm#)

You must specify a "callback" [method](../../GML_Overview/Method_Variables.md) that is called when the Time Source expires.

You can optionally specify an array containing the arguments that should be passed into the method when it's called.

The array itself will not be passed into the method, rather each element of the array will be passed as a separate argument.

For example, if your function expects the arguments (x, y, object), then your args array may look like this: \[30, 600, obj\_player\].

### [RepetitionsRepetitions](time_source_create.htm#)

You can optionally specify how many times your Time Source should repeat. A value of 1 means it only runs once, which is the default value.

You can specify the total number of times it should repeat, or \-1 to make it repeat indefinitely.

For example, if you set this to 3, and your Time Source period is "4 seconds", then the Time Source will be active for a total of 12 seconds and will call the callback method every 4 seconds.

### [Expiry TypeExpiry Type](time_source_create.htm#)

This may be time\_source\_expire\_nearest or time\_source\_expire\_after.

See: [Time Source Expiry Types](Time_Source_Expiry_Types.md)

#### Syntax:

time\_source\_create(parent, period, units, callback, \[args, repetitions, expiry\_type\]);

| Argument | Type | Description |
| --- | --- | --- |
| parent | Time Source | The parent Time Source that controls the new Time Source |
| period | Real | The period that the Time Source runs for, in the given units |
| units | Time Source Unit Constant | The units that the given period is in |
| callback | Method or Script Function | The method or script function to call when the Time Source expires |
| args | Array | OPTIONAL An array containing the arguments to pass into the method |
| repetitions | Real | OPTIONAL The number of times the Time Source should repeat, or -1 for indefinite repetition |
| expiry_type | Time Source Expiry Constant | OPTIONAL Whether the Time Source expires on the frame nearest to its expiry, or on the next frame |

#### Returns:

[Time Source](time_source_create.md)

#### Example 1:

var \_my\_method = function()
{
    instance\_destroy();
}

time\_source = time\_source\_create(time\_source\_game, 300, time\_source\_units\_frames, \_my\_method);

time\_source\_start(time\_source);

In this example, we want the instance to destroy itself 300 frames later.

The code first creates a method that simply calls [instance\_destroy()](../Asset_Management/Instances/instance_destroy.md).

It then creates a Time Source, inheriting from the Game Time Source. It sets its period to **300 frames**.

Finally, it starts the Time Source.

Make sure to destroy the Time Source when you no longer need it, using [time\_source\_destroy](time_source_destroy.md), e.g. in the Room End event.

#### Example 2:

var \_my\_method = function()
{
    show\_debug\_message("A second has passed!");
}

global.time\_per\_second = time\_source\_create(time\_source\_game, 1, time\_source\_units\_seconds, \_my\_method, \[\], -1, time\_source\_expire\_after);

time\_source\_start(global.time\_per\_second);

In this example, we're creating a global Time Source that expires once every second. This code would be placed at the root of a [script](../../../The_Asset_Editors/Scripts.md).

The code first creates a method that prints a message to the output log, saying **"A second has passed!"**.

It then creates a new Time Source, inheriting from the Game Time Source. It sets its period to **1 second**.

The method is passed into the Time Source so it can be called each time it expires. An empty array is given for the arguments.

The repetition count is set to -1, so the Time Source never stops and keeps repeating forever. Its expiry type is set so the callback runs on the first frame after its expiry.

Finally, the Time Source is started.