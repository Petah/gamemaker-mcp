---
title: "directory_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Directories/directory_create.htm"
converted: "2025-09-14T03:59:56.094Z"
---

# directory\_create

This function creates a directory with the given name in the save area.

**NOTE** This function will not work on HTML5 or GX.games as you cannot create or remove directories in the browser local storage.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

directory\_create(dname)

| Argument | Type | Description |
| --- | --- | --- |
| dname | String | The name of the directory to create. |

#### Returns:

N/A

#### Example:

if (!directory\_exists("Games"))
{
    directory\_create("Games");
}

This will check to see if the specified directory exists in the local data folder and, if it does not, it creates it for you.