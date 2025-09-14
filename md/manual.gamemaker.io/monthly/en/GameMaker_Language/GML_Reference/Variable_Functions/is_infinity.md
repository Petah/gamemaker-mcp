---
title: "is_infinity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_infinity.htm"
converted: "2025-09-14T04:00:10.479Z"
---

# is\_infinity

This function returns whether a given variable is infinity (an infinite number) or not, returning true if it is, and false if it is not.

#### Syntax:

is\_infinity(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The argument to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (is\_infinity(global.value))
{
    show\_debug\_message("Value is infinite!");
}

The above code checks the global variable "value" to see if it is infinite or not and shows a debug message if it is.