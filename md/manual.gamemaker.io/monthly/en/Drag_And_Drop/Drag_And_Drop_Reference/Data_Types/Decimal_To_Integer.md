---
title: "Decimal To Integer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Types/Decimal_To_Integer.htm"
converted: "2025-09-14T03:59:24.848Z"
---

# ![Decimal To Integer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/i_Types_Decimal_To_Integer.png) Decimal To Integer

This action will take a decimal number and convert it into an integer. You give the value to convert and then select the type of rounding that should be done to turn it into an integer value. The types of rounding available are:

-   **Round**: This takes a decimal number and rounds it up _or_ down to the nearest integer number. In the special case where the number supplied is exactly half an integer (for example, 1.5, 17.5, -2.5, etc...) the number will be rounded to the nearest **even** value, for example, 2.5 would be rounded to 2, while 3.5 would be rounded to 4. This type of rounding is called _bankers rounding_ and over large numbers of iterations or when using floating point maths, it gives a statistically better rounding than the more traditional "round up if over .5 and round down otherwise" approach.
-   **Ceil**: This will take a decimal value and round it _up_ to the nearest integer. Unlike round (above) this does not take into consideration the decimal part of the value, so a number like 5.0000001 would still be rounded up to 6. It is worth noting that if you are using the Random action [Get Random Number](../Random/Get_Random_Number.md) to generate a random decimal value and then calling this action to round it up, then you _may_ get unexpected results. The random action could potentially return 0, and using "Ceil" on that will not give 1 but 0, so if you get a random decimal from 0 to 9 and use this function you may expect to get integers from 1 to 10, but in reality you could get integers from 0 to 10. This is a remote possibility but should be taken into account when using this action.
-   **Floor**: This will take a decimal value and round it _down_ to the nearest integer value. Unlike round (above) this does not take into consideration the decimal part of the value, so a number like 5.9999999 would still be floored down to 5.

Once you have selected the rounding type, you must supply the number to round (this can be a variable), and then give a target variable to return the new integer value to (which can be flagged as a temporary local variable).

#### Action Syntax:

![Decimal To Integer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/a_Types_Decimal_To_integer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Rounding | The type of rounding to use to get the integer (see description above) |
| Number | The decimal number to round to an integer |
| Target | The target variable to store the returned integer |

#### Example:

![Decimal To Integer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/e_Types_Decimal_To_Integer.png)The above action block code takes a decimal value and converts it to an integer, storing the returned value in a temporary local variable. This value is then turned into a string and drawn to the screen.