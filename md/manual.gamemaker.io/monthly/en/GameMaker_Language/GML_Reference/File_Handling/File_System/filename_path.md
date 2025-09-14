---
title: "filename_path"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/filename_path.htm"
converted: "2025-09-14T03:59:56.420Z"
---

# filename\_path

Using this function returns the path part of the indicated file path, including the final backslash.

#### Syntax:

filename\_path(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The file name and path to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

path = filename\_path(working\_directory + "Test.ini");

The above code gets the path (as a string) of the specified file.