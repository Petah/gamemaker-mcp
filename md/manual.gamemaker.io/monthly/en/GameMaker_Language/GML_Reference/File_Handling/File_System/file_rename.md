---
title: "file_rename"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/file_rename.htm"
converted: "2025-09-14T03:59:56.340Z"
---

# file\_rename

This function will rename the specified file with the specified name. The function will return true if the file has successfully been renamed, or false in any other circumstances.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

file\_rename(oldname, newname);

| Argument | Type | Description |
| --- | --- | --- |
| oldname | String | The name of the file to change |
| newname | String | The new name to give the file |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (file\_exists("level1.txt"))
{
    file\_rename("level1.txt", "level.txt");
}

This would check for a file and if it exists it is renamed.