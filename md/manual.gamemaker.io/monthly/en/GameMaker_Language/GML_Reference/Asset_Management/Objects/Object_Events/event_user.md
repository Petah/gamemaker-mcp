---
title: "event_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_user.htm"
converted: "2025-09-14T03:59:34.268Z"
---

# event\_user

With this function you tell the instance to run the actions or code that has been placed within one of the 16 user defined events. These events can _only_ be called in this way, or using the [event\_perform](event_perform.md) function.

See: [Other Events](../../../../../The_Asset_Editors/Object_Properties/Other_Events.md)

#### Syntax:

event\_user(numb);

| Argument | Type | Description |
| --- | --- | --- |
| numb | Real | The number of User Event to call, between 0 and 15. |

#### Returns:

N/A

#### Example:

event\_user(4);

This would call User Defined Event 4.