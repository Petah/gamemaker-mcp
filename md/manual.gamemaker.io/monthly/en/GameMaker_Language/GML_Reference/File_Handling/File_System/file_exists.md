---
title: "file_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/file_exists.htm"
converted: "2025-09-14T03:59:56.272Z"
---

# file\_exists

This function will return true if the specified file exists and false if it does not. Note that the function can only be used to check _local_ files, but not any files stored on a remote server.

NOTE On HTML5, some web hosts may have security measures in place that make this function unreliable (such as it returning true when the file does not exist), so this will have to be accounted for and tested before final use.

#### Syntax:

file\_exists(fname)

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The name of the file to check for |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (file\_exists("level.txt"))
{
    file = file\_text\_open\_read("level.txt");
}

This would check for a file and if it exists it is opened for reading.