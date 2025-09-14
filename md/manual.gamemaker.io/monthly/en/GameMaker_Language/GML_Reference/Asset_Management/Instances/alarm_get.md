---
title: "alarm_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/alarm_get.htm"
converted: "2025-09-14T03:59:33.758Z"
---

# alarm\_get

This function can be used to get the current value of the given alarm. You supply the alarm number from 0 to 11 and this function will return the value that the alarm is currently on. This is an alternative method to getting the [alarm array](Instance_Variables/alarm.md) value directly.

#### Syntax:

alarm\_get(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The alarm index to get, from 0 to 11. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (integer)

#### Example:

for (var i = 0; i < 12; i++)
{
    if alarm\_get(i) > 0 alarm\_set(i, -1);
}

The above code checks all the alarms in the calling instance and if they are greater than 0 it sets them to -1, stopping them from counting down any further.