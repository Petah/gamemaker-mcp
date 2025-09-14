---
title: "exp"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/exp.htm"
converted: "2025-09-14T04:00:02.234Z"
---

# exp

This is the function power(e,n), where e is approximately 2.718281828 (also known as _Euler's Number_), and n is the number of times it should be multiplied by itself. This basically says "how much growth do I get after n units of time (and 100% continuous growth)?". So exp(3) would return 20.08, which means that after 3 time units we have 20.08 times the amount we started with.

#### Syntax:

exp(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The power of e. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

val = exp(2);

This will set val to e^2, around 7.4.