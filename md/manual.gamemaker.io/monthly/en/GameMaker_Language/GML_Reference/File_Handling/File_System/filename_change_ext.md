---
title: "filename_change_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/filename_change_ext.htm"
converted: "2025-09-14T03:59:56.354Z"
---

# filename\_change\_ext

This function returns the indicated file name with the extension (including the dot) changed to the new extension. By using an empty string as the new extension you can remove the extension part all together.

#### Syntax:

filename\_change\_ext(fname, newext);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The file to use. |
| newext | String | The new extension to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ext = filename\_change\_ext(file\_find\_first(working\_directory + "\*.\*", 0), "");

The above code gets the name of the file (as a string) with the extension part removed.