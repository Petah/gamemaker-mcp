---
title: "file_text_eoln"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_eoln.htm"
converted: "2025-09-14T03:59:56.747Z"
---

# file\_text\_eoln

With this function you can get GameMaker to check the currently opened file to see if the line being read has finished. The function returns true if the end of the line has been reached and false otherwise.

#### Syntax:

file\_text\_eoln(fileid);

| Argument | Type | Description |
| --- | --- | --- |
| fileid | Text File ID | The id of the file to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var file = file\_text\_open\_read(working\_directory + "Game\_Data.txt");
var num = 0; while (!file\_text\_eoln(file))
{
    score\_array\[num\] = file\_text\_read\_real(file);
    num++;
}
file\_text\_close(file);

The above code opens a file for reading then reads the values from a single line into an array.