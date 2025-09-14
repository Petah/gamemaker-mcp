---
title: "Instance Keywords"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Instance_Keywords.htm"
converted: "2025-09-14T03:59:29.019Z"
---

# Instance Keywords

To make certain things easier in GameMaker, you can use one of several **instance keywords** in your code (whether GML Code or GML Visual). These keywords are used to identify instances and structs.

-   [self](Instance%20Keywords/self.md)
-   [other](Instance%20Keywords/other.md)
-   [all](Instance%20Keywords/all.md)
-   [noone](Instance%20Keywords/noone.md)

## Legacy Values

These variables have historically stored negative integer values which helps GameMaker identify which keyword is being used. This is referenced in the following table:

| Variable | Value |
| --- | --- |
| self | -1 |
| other | -2 |
| all | -3 |
| noone | -4 |

Due to compatibility reasons, these variables still refer to these values before the actual struct or instance it refers to is resolved. These values may appear in some cases, e.g. converting self into a [string](../GML_Reference/Strings/string.md) will result in "-1" and inversely, using \-1 in places where a scope is expected will refer to self.

This can be seen in a [with](Language_Features/with.md) block, where if you pass \-1 the block is executed on self. This may be unintentional when a [Handle](Data_Types.md) is passed with a value of \-1, where the expectation would be the [with](Language_Features/with.md) block not executing however it executes on self due to this legacy behaviour.

IMPORTANT You **should not** use the numeric values of these keywords directly, always reference each keyword by its name.