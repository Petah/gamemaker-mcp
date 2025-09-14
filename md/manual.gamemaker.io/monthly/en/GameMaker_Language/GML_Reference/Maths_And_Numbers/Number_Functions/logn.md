---
title: "logn"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/logn.htm"
converted: "2025-09-14T04:00:02.370Z"
---

# logn

This function is similar to the [log2(n)](log2.md) and [log10(n)](log10.md) functions, only you stipulate the log base value. For example, logn(5,25) will return how many 5's we need to multiply to get 25 (which is 2).

#### Syntax:

logn(n, val);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The log base. |
| val | Real | The input value. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

logval = logn(5, num);

The above code gets the log5 of the value stored in "num".