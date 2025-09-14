---
title: "Rename File"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/Rename_File.htm"
converted: "2025-09-14T03:59:25.584Z"
---

# ![Rename File Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Rename_File.png) Rename File

With this action you can rename any file that has been saved by your game. You give the name of the file to change (as a string) and then the new name (also as a string and including the file extension), and the file will be renamed. Note that you _cannot_ rename any file that was bundled as an Included File with your game (see the section on [The File System](../../../Additional_Information/The_File_System.md) for more information).

#### Action Syntax:

![Rename File Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/a_Files_Rename_File.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Filename | The name (as a string) of the file to rename |
| New Name | The new name (as a string) for the file |

#### Example:

![Rename File Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/e_Files_Rename_File.png)The above action block code will check to see if the file "checkpoint.sav" exists, and if it does it then checks to see if the file "checkpoint\_OLD.sav" exists. If that file exists as well, then it is deleted, and then the original "checkpoint.sav" file is renamed to "checkpoint\_OLD.sav". Finally a buffer is saved as "checkpoint.sav" (essentially we are backing up a saved buffer file each time we save it, so that there is always a "current" save and an "old" save file).