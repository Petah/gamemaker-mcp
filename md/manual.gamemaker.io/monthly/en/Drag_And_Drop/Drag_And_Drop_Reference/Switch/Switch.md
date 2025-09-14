---
title: "Switch"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Switch/Switch.htm"
converted: "2025-09-14T03:59:27.961Z"
---

# ![Switch Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/i_Switches_Switch.png) Switch

This action will create a new Switch statement to which you can then add further cases for evaluation. You give the value that is to be used for comparing to the cases in the Switch and then add the different [Case](Case.md) actions, much as you would add an action to an "if", ie: dropping it to the side of the action rather than under it:

![Swiitch drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/Switch_Drop.png)Note that you cannot add any other type of action into a switch without first having added at least one Case to contain it.

#### Action Syntax:

![Switch Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/a_Switches_Switch.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Value | The value to be used by the switch for evaluation |

#### Example:

![Switch Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Switch/e_switches.png)The above action block code gets the value stored in a variable and then compares it to the different possible cases. If any one of the cases is the same as the value, then the action under that case will be performed, otherwise the next case will be evaluated. After the switch has run, an alarm is set to 30.