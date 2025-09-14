---
title: "If Lives"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance_Vars/If_Lives.htm"
converted: "2025-09-14T03:59:26.248Z"
---

# ![If Lives Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/i_IV_If_Lives.png) If Lives

This action is used to check the value of the instance variable lives using a specific expression. You give the type of expression to check with and the value to check the current lives against, and the "if" statement will always return either true or false depending on the expressions and values used. The available expressions are:

-   **Equals to** - The variable and the value are both exactly equal
-   **Less than** - The variable is less than the value
-   **Greater than** - The variable is greater than the value
-   **Less than or Equal to** - The variable is less than _or_ equal to the value
-   **Greater than or Equal to** - The variable is greater than _or_ equal to the value

If you flag the **Not** argument, then the above will be _negated expressions_, for example "equals to" becomes "_not_ equals to", so you would be checking if the lives value is not equals to the given value.

IMPORTANT Due to [floating point precision issues](https://floating-point-gui.de/formats/fp/), checking to see if two values are exactly equal may return false, since one may be exactly 1, while the other may be 1.00000000000001. This can be avoided by using the [Decimal To Integer](../Data_Types/Decimal_To_Integer.md) action before checking or using the "greater than" or "less than" expressions.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Lives drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/a_IV_Drop_If_Lives.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Lives Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/a_IV_If_Lives.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Not | Set to check if the expression does not evaluate to true. |
| Expression | The type of expression to use for the check. |
| Value | The value to check the lives against. |

#### Example:

![If Lives Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/e_IV_If_Lives.png)The above action block code will check the value of lives to see if it is less than or equal to 0 and if it is then the room will be restarted.