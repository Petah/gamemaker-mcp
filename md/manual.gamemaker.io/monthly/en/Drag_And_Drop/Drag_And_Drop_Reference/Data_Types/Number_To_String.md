---
title: "Number To String"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Types/Number_To_String.htm"
converted: "2025-09-14T03:59:24.870Z"
---

# ![Number To String Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/i_Types_Number_To_String.png) Number To String

This action will convert a real number into a string. If the number is not an integer value and has decimal places, these will be rounded to the nearest two places, so, for example, the number 123.45678 would return the string "123.46".

#### Action Syntax:

![Number To String Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/a_Types_Number_To_String.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Value | The real number to convert |
| Target | The target variable to hold the returned value |

#### Example:

![Number To String Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/e_Types_Decimal_To_Integer.png)The above action block code takes a decimal value and converts it to an integer, storing the returned value in a temporary local variable. This value is then turned into a string and drawn to the screen.