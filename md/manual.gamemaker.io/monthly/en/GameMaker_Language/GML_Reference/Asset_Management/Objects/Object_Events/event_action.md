---
title: "event_action"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_action.htm"
converted: "2025-09-14T03:59:34.089Z"
---

# event\_action DEPRECATED

This **read-only** variable returns the index of the action currently being executed, starting at 0 on previous versions of GameMaker. However, this is **now an obsolete variable** in GameMaker. It has been left in for legacy support only, and will **always return 0** as all actions are concatenated together to improve execution speed.

#### Syntax:

event\_action;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

num = event\_action;

The above code stores the current action number in the variable "num".