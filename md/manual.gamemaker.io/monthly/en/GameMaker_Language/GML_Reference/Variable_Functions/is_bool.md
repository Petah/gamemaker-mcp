---
title: "is_bool"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_bool.htm"
converted: "2025-09-14T04:00:10.434Z"
---

# is\_bool

This function returns whether a given variable is a boolean (true ior false) or not. In some cases you want to check and see if a variable in GameMaker holds a boolean value, and that's when you would use this function.

#### Syntax:

is\_bool(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The argument to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (is\_bool(val))
{
    global.Sound = val;
}
else
{
    global.Sound = true;
}

The above code checks the variable "val" to see if it is a real number and if it is it then uses it to set a global variable.