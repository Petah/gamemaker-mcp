---
title: "If Room Is First"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Rooms/If_Room_Is_First.htm"
converted: "2025-09-14T03:59:27.641Z"
---

# ![If Room Is First Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/i_Rooms_If_Room_Is_First.png) If Room Is First

This action will check to see if the current room is the first room as listed in the [Room Manager](../../../Settings/The_Room_Manager.md). The action will return true if the current room is the first in the Room Manager and false if it is not. You can flag the _not_ checkbox to turn this into "If Room Is NOT first".

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![Room Is First drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/Room_Is_First_Drop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Room Is First Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/a_Rooms_If_Room_Is_First.png)

#### Example:

![If Room Is First Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Rooms/e_Rooms_If_Room_Is_Last.png)The above action block code checks to see if the current room is the first room as listed in the Room Manager and if it is it sets a number of global variables.