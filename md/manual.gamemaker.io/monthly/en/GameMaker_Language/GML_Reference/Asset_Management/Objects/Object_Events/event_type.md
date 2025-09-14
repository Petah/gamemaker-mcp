---
title: "event_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_type.htm"
converted: "2025-09-14T03:59:34.254Z"
---

# event\_type

This **read-only** variable returns the type of event currently being executed, which can be one of the following constants:

-   **ev\_create**
-   **ev\_destroy**
-   **ev\_step**
-   **ev\_alarm**
-   **ev\_keyboard**
-   **ev\_keypress**
-   **ev\_keyrelease**
-   **ev\_mouse**
-   **ev\_collision**
-   **ev\_other**
-   **ev\_gesture**
-   **ev\_draw**


For a full list of the constants that are related to the different events see [event\_perform](event_perform.md), and if you should need the event number (i.e. the sub event), you should be checking the [event\_number](event_number.md).

#### Syntax:

event\_type;

#### Returns:

[Event Type Constant](event_perform.md)

#### Example:

show\_debug\_message("Current Event = " + string(event\_type));

The above code will show a debug message with the event type currently being performed.