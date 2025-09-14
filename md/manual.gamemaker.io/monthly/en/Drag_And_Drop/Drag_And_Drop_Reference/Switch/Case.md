---
title: "Case"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Switch/Case.htm"
converted: "2025-09-14T03:59:27.916Z"
---

# ![Case Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/i_Switches_Case.png) Case

This action will create a new Case within a [Switch](Switch.md). You give the value for the case and it will be compared with the input value for the Switch, and if they match the actions added under the Case will be performed. Actions that are added to a Case to be performed _only_ in that Case should be dropped to the side of the action, much as you would add an action to an "if":

![Case drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/Case_Drop.png)Note that a Case value _must be a constant_, which can be any data type (real, string, etc...), as long as it evaluates to a single value on compile - so you can't use expressions that depend on variables. Also note that Case cannot be used outside of a Switch and trying to do so will give you an error.

#### Action Syntax:

![Case Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/a_Switches_Case.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Constant | The constant value to be evaluated against the Switch input value |

#### Example:

![Case Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/e_switches.png)The above action block code gets the value stored in a variable and then compares it to the different possible cases. If any one of the cases is the same as the value, then the action under that case will be performed, otherwise the next case will be evaluated. After the switch has run, an alarm is set to 30.