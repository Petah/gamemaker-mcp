---
title: "log10"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/log10.htm"
converted: "2025-09-14T04:00:02.337Z"
---

# log10

This function is similar to the [log2(n)](log2.md) function, only that log10(n) gets the number of 10's that we need to multiply together to get n. So log10(100) returns 2, as multiplying 10 by itself gives 100, log10(1000) returns 3 as 10x10x10=1000 etc... The number does _not_ have to be divisible by ten, however, but this will still return an appropriate value, for example if we have log10(101) we get 2.00432137... which is how many times you could divide 101 by 10.

#### Syntax:

log10(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The input value. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

logval = log10(num);

The above code gets the log10 of the value stored in "num".