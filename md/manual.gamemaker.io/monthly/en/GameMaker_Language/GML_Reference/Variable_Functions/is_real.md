---
title: "is_real"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_real.htm"
converted: "2025-09-14T04:00:10.681Z"
---

# is\_real

This function returns whether a given variable is a real number (single, double or integer) or not. In some cases you want to check and see if a variable holds a real number, and that's when you would use this function. It does _not_ return the real number but rather true or false, so a value of, for example, "fish" would return false, however a value of 200 would return true.

NOTE This function will return false for any [enum](../../GML_Overview/Variables/Constants.htm#enumhead) values as they are stored as int64s. The correct function to check for that data type is [is\_int64()](is_int64.md).

#### Syntax:

is\_real(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The argument to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (is\_real(val))
{
    score += val;
}

The above code checks the variable "val" to see if it is a real number and if it is it then adds it to the score.