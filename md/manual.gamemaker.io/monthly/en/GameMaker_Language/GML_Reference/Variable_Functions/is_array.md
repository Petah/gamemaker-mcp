---
title: "is_array"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_array.htm"
converted: "2025-09-14T04:00:10.421Z"
---

# is\_array

This function can be used to check and see if a variable holds an array (it will return true) or not (in which case it will return false).

#### Syntax:

is\_array(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The variable to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (is\_array(a))
{
    a = -1;
}

The above code checks a variable to see if it is an array, and if the function returns true, the array is deleted by setting the variable to -1.