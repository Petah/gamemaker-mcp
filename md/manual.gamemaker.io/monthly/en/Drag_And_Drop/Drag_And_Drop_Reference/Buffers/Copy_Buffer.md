---
title: "Copy Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/Copy_Buffer.htm"
converted: "2025-09-14T03:59:23.690Z"
---

# ![Copy Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Copy_Buffer.png) Copy Buffer

This action can be used to copy all of the data stored in one buffer to another. When using two buffers and copying from one to the other, both buffers must have previously been created using the [Create Buffer](Create_Buffer.md) action, and you supply the unique buffer ID returned as the from/to arguments.

NOTE You cannot copy to the same buffer.

#### Action Syntax:

![Copy Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_Copy_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) to copy from |
| Copy To | The buffer index (stored in a variable) to copy to |

#### Example:

![Copy Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_Copy_Buffer.png)The above action block code will create a new buffer and store its ID in a temporary variable. It then checks to see if the buffer indexed in the given global variable exists, and if it does then it is copied to the temporary buffer and the read/write position reset back to the start, and if it doesn't exists then it is created.