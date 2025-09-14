---
title: "is_struct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_struct.htm"
converted: "2025-09-14T04:00:10.719Z"
---

# is\_struct

This function checks if the supplied value is a struct. It returns true if it is, otherwise it returns false.

Note that [method variables](../../GML_Overview/Method_Variables.md) will also return true, and [object instances](../Asset_Management/Instances/Instances.md) will return false.

#### Syntax:

is\_struct(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Any | The value to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (is\_struct(a))
{
    delete(a);
}

The above code checks a variable to see if it is a struct, and if the function returns true, the struct is deleted.