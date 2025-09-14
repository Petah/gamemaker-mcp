---
title: "Repeat"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Loops/Repeat.htm"
converted: "2025-09-14T03:59:26.420Z"
---

# ![Repeat Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/i_Loops_Repeat.png) Repeat

This action will repeat any actions added to it the number of times specified. You give the number of times that the actions are to be repeated and then add the action to the repeat loop, much as you would add an action to an "if", ie: dropping it to the side of the action rather than under it:

![Repeat drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/Repeat_Drop.png)All actions added to the side will be included in the repeat and will be performed before the event or script continues with the actions added under (as shown in the example below). Note that you can end any loop prematurely if you call the [Break](Break.md) action.

#### Action Syntax:

![Repeat Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/a_Loops_Repeat.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Times | The number of times to repeat (a whole integer value) |

#### Example:

![Repeat Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/e_Loops_Repeat.png)The above action block code gets the number of items in a list and stores the value in a temporary local variable. This variable is then used to set the number of times that a repeat loop is run, and in the repeat loop the entries from the list are read into another temporary variable which then used to destroy the instances that they reference. After the loop has finished the data structure is freed.