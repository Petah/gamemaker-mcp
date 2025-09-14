---
title: "timeline_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_speed.htm"
converted: "2025-09-14T03:59:42.686Z"
---

# timeline\_speed

Normally, in each step the position in the time line is increased by 1, however you can change this amount by setting this variable to a different value. You can use real numbers (like 0.5, or 2.4 for example) and if the value is larger than one, several moments can happen within the same time step (they will all be performed in the same order as defined for the time line, so no actions will be skipped).

#### Syntax:

timeline\_speed;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (!timeline\_running)
{
    timeline\_running = true;
    timeline\_speed = 0.5;
}

The above code will check and see if the instance is running its associated time line and if it is not, it will start the time line running at half speed.