---
title: "timeline_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_position.htm"
converted: "2025-09-14T03:59:42.648Z"
---

# timeline\_position

This variable holds the current position (moment) a time line is currently at. You can change this value to skip parts of the time line, or to repeat parts or to start the time line again from the beginning.

#### Syntax:

timeline\_position;

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (!timeline\_running)
{
    timeline\_position = 0;
    timeline\_running = true;
}

The above code will check to see if the instance is running a time line, and if it is not then it resets the assigned time line to start at the first moment and then starts it.