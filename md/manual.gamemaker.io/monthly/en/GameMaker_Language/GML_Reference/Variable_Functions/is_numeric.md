---
title: "is_numeric"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_numeric.htm"
converted: "2025-09-14T04:00:10.573Z"
---

# is\_numeric

This function returns whether a given variable is a numeric value (real, int32, int64 or boolean) or not. In some cases you want to check and see if a variable in GameMaker holds any numeric value, and that's when you would use this function. The function will return true if the given input is numeric, and false otherwise.

#### Syntax:

is\_numeric(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The input to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### **Example:**

if (is\_numeric(val))
{
    current\_val += val;
}

The above code checks the variable "val" to see if it is a numeric value and if it is it then adds it to the given variable.