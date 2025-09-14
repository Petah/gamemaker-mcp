---
title: "event_data"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/event_data.htm"
converted: "2025-09-14T03:59:58.857Z"
---

# event\_data

This variable is **global** in scope and is used to hold a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) when used in the appropriate event (e.g. [Gesture Events](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) and [Broadcast Messages](../../../../The_Asset_Editors/Sequence_Properties/Broadcast_Messages.md)), and an invalid DS map handle (-1) at all other times. The actual contents of the DS map will depend on the type of event that triggered it, so refer to the individual sections for those events.

#### Syntax:

event\_data

#### Returns:

[DS Map](../../Data_Structures/DS_Maps/ds_map_create.md)

#### Example:

isFlick = event\_data\[?"isflick"\];

if (isFlick)
{
    flickVelX = event\_data\[?"diffX"\];
    flickVelY = event\_data\[?"diffY"\];
}
else
{
    flickVelX = 0;
    flickVelY = 0;
}

The above code is taken from the **Drag End** gesture event and checks to see if the event is a "flick" event, and if it is it extracts the required data from the event\_data DS map and uses it to set some variables. If a "flick" event is not detected, then the same variables are set to 0.