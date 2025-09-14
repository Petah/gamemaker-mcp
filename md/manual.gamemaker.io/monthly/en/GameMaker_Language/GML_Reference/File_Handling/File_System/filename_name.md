---
title: "filename_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/filename_name.htm"
converted: "2025-09-14T03:59:56.409Z"
---

# filename\_name

Using this function returns the name part of the indicated file, _with_ the extension but _without_ the path.

#### Syntax:

filename\_name(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The file to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

name = filename\_name(file\_find\_first("C:/Games/\*.doc", 0));

The above code gets the name (as a string) of the first "doc" type file found in the specified directory.