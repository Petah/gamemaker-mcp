---
title: "ds_set_precision"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/ds_set_precision.htm"
converted: "2025-09-14T03:59:48.195Z"
---

# ds\_set\_precision

When comparing values, for example when searching in a map or sorting a list, GameMaker must decide when two values are equal. For strings and integer values this is clear but for real numbers, due to floating point round-off errors, seemingly equal numbers can easily become unequal. For example, it's possible that (5 / 3) \* 3 will _not_ be equal to 5! To help avoid this, a precision value is used on all real number functions, and when the _difference between two numbers is smaller_ than this precision they are considered equal. The default precision of 0.0000001 is used for all data structure functions unless changed by this function.

NOTE This precision is used in all data structures but not in other comparisons in GML!

#### Syntax:

ds\_set\_precision(prec);

| Argument | Type | Description |
| --- | --- | --- |
| prec | Real | The precision value (default 0.0000001) |

#### Returns:

N/A

#### Example:

ds\_set\_precision(0.0001);

The above code will change the default precision setting for all data structure functions.