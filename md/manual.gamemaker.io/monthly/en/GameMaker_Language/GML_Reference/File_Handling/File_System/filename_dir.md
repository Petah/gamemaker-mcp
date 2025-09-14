---
title: "filename_dir"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/filename_dir.htm"
converted: "2025-09-14T03:59:56.367Z"
---

# filename\_dir

This function returns the directory part of the indicated file name, which normally is the same as the path except for the final backslash.

#### Syntax:

filename\_dir(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The file to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

dir = filename\_dir("Test.ini");

The above code gets the directory (as a string) of the specified file.