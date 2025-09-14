---
title: "Get Buffer Size"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/Get_Buffer_Size.htm"
converted: "2025-09-14T03:59:23.757Z"
---

# ![Get Buffer Size Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Get_Buffer_Size.png) Get Buffer Size

This action can be used to retrieve the size of a buffer, in bytes. You supply the unique buffer ID value as returned by the action [Create Buffer](Create_Buffer.md) and then give a target variable to return the size value to. The target variable can be flagged as being a temporary local variable, in which case it will be created for you and removed from memory again at the end of the current action script or event.

#### Action Syntax:

![Get Buffer Size Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_Get_Buffer_Size.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) |
| Target | The target variable to hold the returned value |

#### Example:

![Get Buffer Size Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_Seek_Buffer.png)The above action block code gets the size of the buffer and then uses that value to set the read/write position to the end of the currently stored data.