---
title: "is_ptr"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_ptr.htm"
converted: "2025-09-14T04:00:10.595Z"
---

# is\_ptr

This function returns whether a given variable is a pointer or not. In some cases you want to check and see what data type a variable holds in GameMaker and that's when you would use this function. It returns true or false depending on whether the value is a pointer or not.

#### Syntax:

is\_ptr(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The argument to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (!is\_ptr(val))
{
    show\_debug\_message("Not a valid texture!");
}

The above code checks the variable "val" to see if it contains a pointer and if it is not then it shows a message in the debug console.