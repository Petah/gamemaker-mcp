---
title: "round"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/round.htm"
converted: "2025-09-14T04:00:02.568Z"
---

# round

Just as it says, round() takes a real number and rounds it up or down to the nearest integer. In the special case where the number supplied is exactly a half-integer (1.5, 17.5, -2.5, etc), the number will be rounded to the nearest _even_ value, for example, 2.5 would be rounded to 2, while 3.5 will be rounded to 4. This type of rounding is called _bankers rounding_ and over large numbers of iterations or when using floating point maths, it gives a statistically better rounding than the more traditional "round up if over .5 and round down otherwise" approach.

What this means is that if the fraction of a value is 0.5, then the rounded result is the _even integer_ nearest to the input value. So, for example, 23.5 becomes 24, as does 24.5, while -23.5 becomes -24, as does -24.5. This method treats positive and negative values symmetrically, so is therefore free of sign bias, and, more importantly, for reasonable distributions of values, the expected (average) value of the rounded numbers is the same as that of the original numbers.

#### Syntax:

round(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The number to round. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

score += round(hp / 5);

The above code will add a rounded integer onto the score value.