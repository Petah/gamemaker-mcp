---
title: "Seek Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/Seek_Buffer.htm"
converted: "2025-09-14T03:59:23.822Z"
---

# ![Seek Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Seek_Buffer.png) Seek Buffer

This action can be used to move (seek) to a position within a buffer. You supply the unique buffer ID value as returned by the action [Create Buffer](Create_Buffer.md) and then the offset value in bytes to move to. The offset value will be applied from the _start_ of the buffer, so calling this function will move the read/write position to the start of the buffer then move the number of bytes given along and position the new read/write position there. However, if you flag the offset as relative, it will move the read/write position forward (or backwards if the offset is a negative value) from the current position.

#### Action Syntax:

![Seek Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_Seek_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) |
| offset | The offset (in bytes) relative to the current seek position |

#### Example:

![Seek Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_Seek_Buffer.png)The above action block code gets the size of the buffer and then uses that value to set the read/write position to the end of the currently stored data.