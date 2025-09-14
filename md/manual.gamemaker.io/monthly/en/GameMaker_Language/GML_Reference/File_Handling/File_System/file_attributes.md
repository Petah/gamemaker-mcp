---
title: "file_attributes"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/file_attributes.htm"
converted: "2025-09-14T03:59:56.221Z"
---

# file\_attributes

You can use this function to check the attributes of a given file. You can add up the following constants to check the type of files you want:

| Constant | Description |
| --- | --- |
| fa_readonly | Read-only files |
| fa_hidden | Hidden files |
| fa_sysfile | System files |
| fa_volumeid | Volume-id files |
| fa_directory | Directories |
| fa_archive | Archived files |

**NOTE** This is a Windows only function.

#### Syntax:

file\_attributes(fname, attr)

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The name of the file to check |
| attr | File Attribute Constant | The attributes to check for |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!file\_attributes(file, fa\_hidden))
{
    file\_delete(file);
}

This would check a file to see if it is hidden or not, and if not it is deleted.