---
title: "file_find_first"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/file_find_first.htm"
converted: "2025-09-14T03:59:56.312Z"
---

# file\_find\_first

This function returns the name of the first file that satisfies the mask and attributes. If no such file exists, an empty string "" is returned.

The mask can contain a path with wildcards, for example C:/temp/\*.doc.

The attributes give the additional files you want to see, so the normal files are always returned when they satisfy the mask. You can add up the following constants to see the type of files you want (using |). If you do not wish to add any attributes, use 0 or fa\_none.

| File Attribute Constant |
| --- |
| Constant | Description |
| fa_none | No file attributes |
| fa_readonly | Read-only files |
| fa_hidden | Hidden files |
| fa_sysfile | System files |
| fa_volumeid | Volume-id files |
| fa_directory | Directories |
| fa_archive | Archived files |

Attributes can only be used on Windows. For all other platforms, use 0 or fa\_none.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

NOTE This function will not work on the HTML5 and GX.games targets.

#### Syntax:

file\_find\_first(mask, attr)

| Argument | Type | Description |
| --- | --- | --- |
| mask | String | The mask to use for searching |
| attr | File Attribute Constant(s) | The specific file attribute(s) to look for |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

if (directory\_exists("/User Content"))
{
    fileA = file\_find\_first("/User Content/\*.doc", fa\_readonly);
    fileB = file\_find\_next();
    fileC = file\_find\_next();
    file\_find\_close();
}

This code checks if the specified directory exists and if it does, goes there and returns the first "read-only" .doc file found. It then looks for two more files and closes the file finder.

You can look for any number of files using a [while](../../../GML_Overview/Language_Features/while.md) loop:

var \_files = \[\];
var \_file\_name = file\_find\_first("/User Content/\*.doc", fa\_readonly);

while (\_file\_name != "")
{
    array\_push(\_files, \_file\_name);

    \_file\_name = file\_find\_next();
}

file\_find\_close();

The above code creates an empty array to store all the file names that were found, and starts looking for read-only .doc files. If that file name is not an empty string, it pushes it into the \_files array, and then attempts to find the next file. The loop will keep repeating until an empty string is returned (meaning there are no more matching files), which is when it ends the loop and closes the file finder at the end.