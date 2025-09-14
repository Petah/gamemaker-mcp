---
title: "If Buffer Exists"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/If_Buffer_Exists.htm"
converted: "2025-09-14T03:59:23.772Z"
---

# ![If Buffer Exists Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_If_Buffer_Exists.png) If Buffer Exists

This action can be used to check if a given buffer ID is valid and the buffer actually exists in memory. If the buffer ID is valid and exists, the action will return true otherwise it will return false. You can flag "not" to make the action check if a buffer does _not_ exist.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![Buffer Exists drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/If_Exists_Drop.png)

#### Action Syntax:

![Buffer Exists Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_If_Buffer_Exists.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) |

#### Example:

![Buffer Exists Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_Delete_Buffer.png)The above action block code checks to see if a buffer exists and if it does it is deleted.