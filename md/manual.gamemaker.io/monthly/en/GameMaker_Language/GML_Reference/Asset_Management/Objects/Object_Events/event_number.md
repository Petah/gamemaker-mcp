---
title: "event_number"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_number.htm"
converted: "2025-09-14T03:59:34.118Z"
---

# event\_number

This **read-only** variable returns the number of the event currently being called, where the number is actually referring to the "sub event" of the event, i.e.: for the step event the event number could be any one of the constants **ev\_step\_normal**, **ev\_step\_begin**, or **ev\_step\_end**. For a full list of constants that are available for the specific sub-events see [event\_perform](event_perform.md), and if you should need to know the main event itself, you should be checking the [event\_type](event_type.md).

#### Syntax:

event\_number;

#### Returns:

[Event Number Constant](event_perform.md)

#### Example:

switch (event\_number)
{
    case ev\_step\_normal: show\_debug\_message("Step event!"); break;
    case ev\_game\_start: show\_debug\_message("Game Start""); break;
    case ev\_room\_start: show\_debug\_message("Room Start!"); break;
}

The above code could be called form a script and used to show debug messages informing you which event is currently being triggered.