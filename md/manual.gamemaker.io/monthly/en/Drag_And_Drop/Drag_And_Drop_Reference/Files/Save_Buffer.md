---
title: "Save Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/Save_Buffer.htm"
converted: "2025-09-14T03:59:25.596Z"
---

# ![Save Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Save_Buffer.png) Save Buffer

With this action you can save a file containing the data from a buffer. You supply the unique buffer ID (as returned when you created the buffer with [Create Buffer](../Buffers/Create_Buffer.md)) and give a name for the file (as a string, with the extension of your choice) and the buffer will be written out to this file ready to be loaded again using [Load Buffer](Load_Buffer.md).

#### Action Syntax:

![Save Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/a_Files_Save_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The unique buffer ID value of the buffer to save |
| Filename | The name (as a string) of the file to save |

#### Example:

![Save Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/e_Files_Load_Buffer.png)The above action block code will create a variable to hold buffer data and then check to see if a buffer save file has been made previously. If the file exists, then it is loaded into the buffer variable that we created, but if it doesn't exist, it is created, written to and then saved out ready for loading the next time.