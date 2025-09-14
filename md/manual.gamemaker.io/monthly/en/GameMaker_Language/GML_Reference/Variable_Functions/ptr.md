---
title: "ptr"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/ptr.htm"
converted: "2025-09-14T04:00:10.831Z"
---

# ptr

This function will attempt to convert a given value into a pointer data type, where the value _must_ be either a real, a string, an int64, an int32, or a ptr. Anything else will cause the game to crash with an error message.

#### Syntax:

ptr(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real, String, or Pointer | The value to convert. |

#### Returns:

[Pointer](../../GML_Overview/Data_Types.md)

#### **Example:**

if (!is\_ptr(val))
{
    val = ptr(application\_surface);
}

The above code checks the variable "val" to see if it contains a pointer and if it does not then one is assigned to it.