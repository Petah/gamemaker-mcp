---
title: "gc_is_enabled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/gc_is_enabled.htm"
converted: "2025-09-14T04:00:00.079Z"
---

# gc\_is\_enabled

With this function you can check to see if the garbage collector is enabled or not. The function will return true if it is enabled or false otherwise.

#### Syntax:

gc\_is\_enabled();

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (!gc\_is\_enabled())
{
    gc\_enable(true);
}

The above code checks to see if the garbage collector is enabled and if it isn't it enables it.