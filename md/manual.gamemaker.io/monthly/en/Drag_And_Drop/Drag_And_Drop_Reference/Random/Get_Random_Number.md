---
title: "Get Random Number"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Random/Get_Random_Number.htm"
converted: "2025-09-14T03:59:27.550Z"
---

# ![Get Random Number Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/i_Mathematics_Get_Random_Number.png) Get Random Number

This action will generate a random number within the bounds of a set of minimum and maximum values. You can choose the type of number to generate (either a decimal or an integer) and then set the range for the number to be generated within by supplying a minimum and maximum value. The random value generated will be returned to the target variable (which can be flagged as a temporary local variable).

NOTE When generating a random integer the action will return an integer value between the minimum and maximum value **inclusive**, so a range of 5 - 10 could return 5 or 10 as well as any integer in between. However generating a random decimal will not ever return the maximum value so the range 5 to 10 can return 5 but will not return 10 (although it could return 9.999999999999).

#### Action Syntax:

![Get Random Number Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/a_Mathematics_Get_Random_Number.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The type of numbers to use (integer or decimal) |
| Minimum | The minimum number for the random range |
| Maximum | The maximum number for the random range |
| Target | The target variable to store the returned value |

#### Example:

![Get Random Number Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/e_Mathematics_Get_Random_Number.png)The above action block code generates a random value and assigns it to a temporary local variable. This value is then used in a repeat loop where further random calls are made to generate positions within the room. These positions are then used to create a number instances.