---
title: "directory_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Directories/directory_exists.htm"
converted: "2025-09-14T03:59:56.127Z"
---

# directory\_exists

This function will return true if the indicated directory exists or false if it does not. The specified name must include the full path, not a relative path and by default you cannot access any directories from outside the game bundle as all games are sandboxed (see the section on the [File System](../../../../Additional_Information/The_File_System.md) for more information).

#### Syntax:

directory\_exists(dname)

| Argument | Type | Description |
| --- | --- | --- |
| dname | String | The name of the directory to look for. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (directory\_exists(working\_directory + "Saves/"))
{
    file = file\_find\_first(working\_directory + "Saves/\*.doc", fa\_readonly);
}

This will check to see if the specified directory exists then, if it does, go there and return the first "read only" doc file found.