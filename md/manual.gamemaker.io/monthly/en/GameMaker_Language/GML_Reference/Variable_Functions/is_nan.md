---
title: "is_nan"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_nan.htm"
converted: "2025-09-14T04:00:10.560Z"
---

# is\_nan

This function returns whether a given variable is NaN (not a number) or not, returning true if it is, and false if it is not.

#### Syntax:

is\_nan(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The argument to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (is\_nan(global.value))
{
    show\_debug\_message("Value is not a number");
}

The above code checks the global variable "value" to see if it is a number or not and shows a debug message if it isn't.