---
title: "is_int64"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_int64.htm"
converted: "2025-09-14T04:00:10.527Z"
---

# is\_int64

This function returns whether a given variable is a 64bit integer or not.

In some cases you want to check and see what data type a variable holds in GameMaker and that's when you would use this function. It returns true or false depending on whether the value is an int64 or not.

#### Syntax:

is\_int64(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The argument to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (!is\_int64(val))
{
    show\_debug\_message("Not a 64bit integer!");
}

The above code checks the variable "val" to see if it contains an int64 and if it is not then it shows a message in the debug console.