---
title: "filename_drive"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/filename_drive.htm"
converted: "2025-09-14T03:59:56.378Z"
---

# filename\_drive

This function returns the drive information of the filename.

#### Syntax:

filename\_drive(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The file to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

drive = filename\_drive(file\_find\_first(working\_directory + "\*.doc", 0));

The above code gets the drive information (as a string) of the specified file.