---
title: "file_find_close"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/file_find_close.htm"
converted: "2025-09-14T03:59:56.284Z"
---

# file\_find\_close

This function must be called after handling files opened using [file\_find\_first](file_find_first.md) and [file\_find\_next](file_find_next.md) functions to free memory. The file find functions open handles into the file directory and these take up a minimal amount of memory, which (over time) adds up. Therefore you should always call this function after you have found the files you require to "close" these handles.

NOTE This function will not work on the HTML5 and GX.games targets.

#### Syntax:

file\_find\_close();

#### Returns

N/A

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