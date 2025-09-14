---
title: "gc_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/gc_enable.htm"
converted: "2025-09-14T04:00:00.020Z"
---

# gc\_enable

With this function you can enable or disable the garbage collector. Calling the function with true as the argument enables it and using false disables it (not recommended). It is enabled by default.

#### Syntax:

gc\_enable(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | enable (true) or disable (false) the garbage collector. |

#### Returns:

N/A

#### Example:

if (global.debug == true)
{
    gc\_enable(false);
}

The above code disables garbage collection if the given global variable is true.