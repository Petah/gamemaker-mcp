---
title: "alarm_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/alarm_set.htm"
converted: "2025-09-14T03:59:33.771Z"
---

# alarm\_set

This function can be used to set an alarm. You supply the alarm number from 0 to 11, and then the value to set the alarm to. The value must be an integer value, and you can set it to -1 to stop the alarm (non integer values will be rounded to the nearest integer). This is an alternative method to setting the [alarm array](Instance_Variables/alarm.md) directly.

#### Syntax:

alarm\_set(index, value);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The alarm index to set, from 0 to 11. |
| value | Real | The value (an integer) to set the alarm to. |

#### Returns:

N/A

#### Example:

for (var i = 0; i < 12; i++)
{
    if alarm\_get(i) > 0 alarm\_set(i, -1);
}

The above code checks all the alarms in the calling instance and if they are greater than 0 it sets them to -1, stopping them from counting down any further.