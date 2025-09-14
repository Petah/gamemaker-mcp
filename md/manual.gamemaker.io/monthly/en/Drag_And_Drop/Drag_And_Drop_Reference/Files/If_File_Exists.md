---
title: "If File Exists"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/If_File_Exists.htm"
converted: "2025-09-14T03:59:25.504Z"
---

# ![If File Exists Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_If_File_Exists.png) If File Exists

With this action you can check to see if a file with the given name exists. You select the file to check for (as a sting and including the extension) and the function will return true if it exists, and false if it does not. Note that this will return true if the file exists in the game bundle as an Included File or if the file has been saved out while the game was running (see the section on [The File System](../../../Additional_Information/The_File_System.md) for more information).

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If File Exists drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/If_File_Exists_Drop.png)

#### Action Syntax:

![If File Exists Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/a_Files_If_File_Exists.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The type of data to read, either a string (enclosed in quotes ""), or a real number |

#### Example:

![If File Exists Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/e_Files_Load_Buffer.png)The above action block code will create a variable to hold buffer data and then check to see if a buffer save file has been made previously. If the file exists, then it is loaded into the buffer variable that we created, but if it doesn't exist, it is created, written to and then saved out ready for loading the next time.