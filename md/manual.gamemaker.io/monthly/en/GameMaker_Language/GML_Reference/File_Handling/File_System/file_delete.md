---
title: "file_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/file_delete.htm"
converted: "2025-09-14T03:59:56.258Z"
---

# file\_delete

This function will delete the specified file from the system. It should be noted that this function will only delete those files that GameMaker is able to create and parse: INI files, text files and binary files, or those files made to store game created resources like sprites or surfaces. However, it will _not_ delete any other file. The function will also return true if the file has successfully been removed, or false in any other circumstances.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

file\_delete(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The name of the file to delete |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (file\_exists("level.txt"))
{
    file\_delete("level.txt");
}

This would check for a file and if it exists it is deleted.