---
title: "Read Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/Read_Buffer.htm"
converted: "2025-09-14T03:59:23.808Z"
---

# ![Read Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Read_Buffer.png) Read Buffer

This action can be used to read data from a previously created buffer. You supply the unique buffer ID value (as returned by the action [Create Buffer](Create_Buffer.md)) and give a variable to store the returned value. If you flag the variable as a temporary local variable then it will be created for you and discarded again at the end of the event or action script. All data is returned as a **string** so if you have stored any real numbers you will have to use one of the [Data Type Actions](../Data_Types/Data_Type_Actions.md) to convert it from the string to the value. Keep in mind too that buffers are read and written to _sequentially_ and so reading from a buffer will move the "seek" position to the next entry, meaning that to read various pieces of data you simply call this action the number of times required and store each returned piece of data to a variable.

#### Action Syntax:

![Read Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_Read_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) |
| Target | The target variable to hold the returned data |

#### Example:

![Read Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_Read_Buffer.png)The above action block code sets the buffer read/write position to the start of the buffer and then reads back two pieces of data, storing them (as strings) in temporary local variables. These variables are then used to draw the data to the screen.