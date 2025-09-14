---
title: "Create Buffer"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/Create_Buffer.htm"
converted: "2025-09-14T03:59:23.706Z"
---

# ![Create Buffer Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Create_Buffer.png) Create Buffer

This action can be used to allocate a portion of memory as a buffer in your game, with the function returning the unique _buffer id_ value that should be stored in a variable and used for all further function calls to the buffer. You can supply a global variable, an instance variable or have the action create a temporary local variable for storing the buffer ID. Note that you can create additional buffers by clicking the plus icon  ![Expand Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png)beside the action, and selecting another variable to hold the buffer ID.

NOTE It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using [Delete Buffer](Delete_Buffer.md) action (in the [Other - Clean Up](../../../The_Asset_Editors/Object_Properties/Object_Events.md) event, for example). This is especially important to remember when using a temporary local variable, as if you do not remove the buffer again before the end of the event or action script then you will no longer be able access it and can have issues later.

#### Action Syntax:

![Create Buffer Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/a_Buffers_Create_Buffer.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Buffer | The buffer index (stored in a variable) |
| Value | The value to add into the list |

#### Example:

![Create Buffer Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/e_Buffers_Create_Buffer.png)The above action block code creates a global variable and then a buffer, assigning the unique buffer ID to the variable. This buffer than has two pieces of data written to it.