---
title: "Exit"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Exit.htm"
converted: "2025-09-14T03:59:24.174Z"
---

# ![Exit Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Exit.png) Exit

This action will do one of two things depending on the context within which it is called. If it is called from within an event, then it will exit the event and move on to the next one, skipping any action block code that may be placed after it. However if it is used within an [Action Block Function](../../Drag_And_Drop_Overview/Action_Block_Functions.md), then it will exit the function only and return to the event that called the function, running any subsequent actions.

NOTE Calling this in the middle of a function will _not_ return any value (for that you should use the [Return](Return.md) action).

#### Action Syntax:

![Exit Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Exit.png)

#### Example:

![Exit Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Exit.png)The above action block code checks a variable and if it is greater than or equal to 100, the event is exited, otherwise the variable is incremented by one and the instance sprite is given a random scale.