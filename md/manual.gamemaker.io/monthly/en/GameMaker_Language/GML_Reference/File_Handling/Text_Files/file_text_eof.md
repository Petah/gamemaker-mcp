---
title: "file_text_eof"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_eof.htm"
converted: "2025-09-14T03:59:56.735Z"
---

# file\_text\_eof

This function returns true when the end of a given opened text file has been reached or false if not.

#### Syntax:

file\_text\_eof(fileid);

| Argument | Type | Description |
| --- | --- | --- |
| fileid | Text File ID | The id of the file to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var num = 0;
var file = file\_text\_open\_read(working\_directory + "Game\_Data.txt");
while (!file\_text\_eof(file))
{
    str\[num++\] = file\_text\_readln(file);
}
file\_text\_close(file);

The above code opens a file for writing then loops through the lines of text already written to the file until it reaches the end, storing each line in the array "str".