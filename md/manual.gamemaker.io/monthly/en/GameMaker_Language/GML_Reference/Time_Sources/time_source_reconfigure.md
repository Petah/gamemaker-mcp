---
title: "time_source_reconfigure"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_reconfigure.htm"
converted: "2025-09-14T04:00:08.344Z"
---

# time\_source\_reconfigure

This function is used to modify the core properties of a Time Source, without having to create an entirely new one.

You specify an existing Time Source, and then set the properties that are also set in [time\_source\_create()](time_source_create.md), except the parent. Read that page for detailed information on these properties.

The specified Time Source will be reset and deactivated, and will need to be [started](time_source_start.md) again.

#### Syntax:

time\_source\_reconfigure(id, period, units, callback, \[args, repetitions, expiry\_type\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to reconfigure |
| period | Real | The period that the Time Source runs for, in the given units |
| units | Time Source Unit Constant | The units that the given period is in |
| callback | Method | The method to call when the Time Source expires |
| args | Array | OPTIONAL An array containing the arguments to pass into the method |
| repetitions | Real | OPTIONAL The number of times the Time Source should repeat, or -1 for indefinite repetition |
| expiry_type | Time Source Expiry Constant | OPTIONAL Whether the Time Source expires on the frame nearest to its expiry, or on the next frame |

#### Returns:

N/A

#### Example:

function change\_spawn\_delay(new\_delay)
{
    time\_source\_reconfigure(obj\_game.spawn\_time\_source, new\_delay, time\_source\_units\_frames, obj\_game.spawn\_method, \[\], -1);
    time\_source\_start(obj\_game.spawn\_time\_source);
}

This creates a new function that changes the spawn delay used for in-game enemies.

Assuming the game uses a Time Source called obj\_game.spawn\_time\_source to spawn enemies, that Time Source will need to be updated once the spawn delay changes.

This function does exactly that, reconfiguring the Time Source with the new delay and then [starting it](time_source_start.md) again.