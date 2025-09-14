---
title: "Write Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/Write_Buffer.htm"
converted: "2025-09-14T03:59:23.844Z"
---

# ![Write Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Write_Buffer.png) Write Buffer

This action can be used to write data to a buffer. You supply the unique buffer ID to write to (as returned by the action [Create Buffer](Create_Buffer.md)) and then the value to write, which can be either a real or a string, but note that **all values are stored as strings** so when you read from the buffer (using [Read Buffer](Read_Buffer.md)) you may need to use one of the [Data Type Actions](../Data_Types/Data_Type_Actions.md) to convert it from a string back to the original value. Keep in mind too that buffers are read and written to _sequentially_ and so writing to a buffer will move the "seek" position along one, meaning that to write various pieces of data you simply call this action the number of times required.

#### Action Syntax:

![Write Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_Write_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) |
| Value | The value to add into the buffer |

#### Example:

![Write Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_Create_Buffer.png)The above action block code creates a global variable and then a buffer, assigning the unique buffer ID to the variable. This buffer than has two pieces of data written to it.