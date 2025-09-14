---
title: "Break"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Loops/Break.htm"
converted: "2025-09-14T03:59:26.362Z"
---

# ![Break Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/i_Loops_Break.png) Break

This action can only be used within a loop action (for example, [Repeat](Repeat.md) or [While](While.md)), and calling it will break out of the loop in that moment. Normally a loop will run either a fixed number of times or until a specific condition is met, but you can use the Break action to prematurely end a loop at any moment (actions within the loop _after_ the Break will not be run).

#### Action Syntax:

![Break Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/a_Loops_Break.png)

#### Example:

![Break Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Loops/e_Loops_Break.png)The above action block code performs a Repeat loop 1000 times. In the loop it checks to see if a List data structure is empty and if it is _not_ it removes an item from the list, and if it _is_ it breaks the loop.