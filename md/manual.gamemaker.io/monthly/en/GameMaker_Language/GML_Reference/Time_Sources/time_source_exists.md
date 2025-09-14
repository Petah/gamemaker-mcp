---
title: "time_source_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_exists.htm"
converted: "2025-09-14T04:00:08.190Z"
---

# time\_source\_exists

This function returns whether the given variable holds a Time Source.

If the Time Source was [destroyed](time_source_destroy.md), this will return false, however if the Time Source was [stopped](time_source_stop.md) or it merely expired, it will continue to exist, meaning this function returns true.

#### Syntax:

time\_source\_exists(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to check |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (time\_source\_exists(global.spawn\_time\_source))
{
    if (keyboard\_check\_pressed(vk\_space))
    {
        time\_source\_destroy(global.spawn\_time\_source);
    }
}

This code checks if a Time Source exists. If it does, it checks if the Space key was pressed.

In that case, it destroys the Time Source.