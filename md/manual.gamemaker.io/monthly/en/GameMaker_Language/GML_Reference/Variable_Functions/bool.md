---
title: "bool"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/bool.htm"
converted: "2025-09-14T04:00:10.356Z"
---

# bool

This function will attempt to convert a given value into a boolean data type, where the value will be returned as true if it is greater than 0.5, and false otherwise.

#### Syntax:

bool(n)

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The value to convert. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (!is\_bool(val))
{
    val = bool(val);
}

The above code checks the variable val to see if it is a boolean and if it's not converts it to one.