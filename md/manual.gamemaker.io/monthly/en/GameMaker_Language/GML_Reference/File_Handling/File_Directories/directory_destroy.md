---
title: "directory_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Directories/directory_destroy.htm"
converted: "2025-09-14T03:59:56.111Z"
---

# directory\_destroy

This function will remove a directory with the given name in the save area.

**NOTE** This function will not work on HTML5 or GX.games as you cannot create or remove directories in the browser local storage.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

directory\_destroy(dname)

| Argument | Type | Description |
| --- | --- | --- |
| dname | String | The name of the directory to remove. |

#### Returns:

N/A

#### Example:

if (directory\_exists("DLC"))
{
    directory\_destroy("DLC");
}

This will check to see if the specified directory exists in the local data folder and, if it does, it is removed.