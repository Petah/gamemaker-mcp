---
title: "filename_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/filename_ext.htm"
converted: "2025-09-14T03:59:56.396Z"
---

# filename\_ext

This function returns the extension part of the indicated file name, including the leading dot.

#### Syntax:

filename\_ext(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The file to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ext = filename\_ext(file\_find\_first("\*.\*", 0));

The above code gets the extension (as a string) of the specified file.