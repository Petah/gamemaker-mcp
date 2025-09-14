---
title: "Load Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/Load_Buffer.htm"
converted: "2025-09-14T03:59:25.528Z"
---

# ![Load Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Load_Buffer.png) Load Buffer

With this action you can load a buffer that was previously saved with the action [Save Buffer](Save_Buffer.md). The action will create a new buffer, load the data file into it, and return the unique ID value to identify the buffer to the variable. You supply the name of the file to load (as a string) and a variable to store the returned buffer ID in. Note that if you flag the variable as a temporary local variable, you need to make sure to delete the buffer this function creates before the end of the action script or event, otherwise you will lose the reference to it and get a memory leak when the variable is discarded.

#### Action Syntax:

![Load Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/a_Files_Load_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Filename | The name (as a string) of the file to open |
| Target | The target variable to hold the unique ID value for the buffer created on load |

#### Example:

![Load Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/e_Files_Load_Buffer.png)The above action block code will create a variable to hold buffer data and then check to see if a buffer save file has been made previously. If the file exists, then it is loaded into the buffer variable that we created, but if it doesn't exist, it is created, written to and then saved out ready for loading the next time.