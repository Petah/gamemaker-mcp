---
title: "While Loop"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Loops/While.htm"
converted: "2025-09-14T03:59:26.436Z"
---

# ![While Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/i_Loops_While.png) While Loop

The **While Loop** action is used to perform loops that only terminate when a specific condition returns true. For example, you can use a variable and set it to false then run the While loop and have it checking this variable, then at some time in the loop you set the variable to true and the loop will terminate. Note that no matter where you set the condition within the while loop, _all_ actions within the loop will be run to the end before the rest of the script or event continues, changing the condition does not instantly break out of the loop.

When you add a While Loop action into your code, you need to supply the variable to check, what kind of check to perform (less than, greater than, equals, etc.), and the value to check the variable against (you can also flag _not_ to have the While Loop check to see if the condition is _not_ true). You then add the actions to be performed within the While loop, much as you would add an action to an "if", ie: dropping it to the side of the action rather than under it:

![While drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/While_Drop.png)All actions added to the side will be included in the While and will be performed before the event or script continues with the actions added under (as shown in the example below). Note that you can end any loop prematurely if you call the [Break](Break.md) action.

#### Action Syntax:

![While Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/a_Loops_While.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The variable to use in the check |
| Is | The type of evaluation to perform (less than, greater than, equal to, greater than or equal to and less than or equal to) |
| Value | The value to check the variable against |

#### Example:

![While Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/e_Loops_While.png)The above action block code creates a temporary local variable and sets it to false. This variable is then checked in the While Loop action and while it returns false the loop will run. In the loop we get two temporary local variables for a random x/y position in the room then we check that position for a collision. If no collision is found, the initial variable is set to true, ending the loop. After the loop has ended an new instance is created at the random position that we discovered to have no collisions.