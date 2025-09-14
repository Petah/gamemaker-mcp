---
title: "If End Of Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/If_End_Of_Buffer.htm"
converted: "2025-09-14T03:59:23.794Z"
---

# ![If End Of Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_If_End_Of_Buffer.png) If End Of Buffer

This action can be used to check if the read/write position has reached the end of the buffer. You supply the unique buffer ID value as returned by the action [Create Buffer](Create_Buffer.md) and then the action will return true if the read/write position has reached the end of all the available data in the buffer, or false if it has not. You can flag "not" to make the action check if the read/write position is _not_ at the end of the buffer.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![End Of Buffer drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/If_End_Drop.png)

#### Action Syntax:

![End Of Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_If_End_Of_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) |

#### Example:

![End Of Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_If_End_Of_Buffer.png)The above action block code creates a DS list in the instance and then loops through the data within the given buffer reading out the data and adding it to the list. This continues until the end of the buffer is reached at which time the loop is broken.