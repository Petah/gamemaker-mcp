---
title: "file_text_close"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_close.htm"
converted: "2025-09-14T03:59:56.722Z"
---

# file\_text\_close

Once you have finished working with a given file (whether reading from it or writing to it), you must close the file again, or else you risk losing the information contained within. This also prevents memory leaks and makes sure that you never go over the file limit by having more than 32 files open.

The function will return true if the operation was a success, however if there was a failure in closing the file or when the file was first [opened](file_text_open_write.md), this will return false.

#### Syntax:

file\_text\_close(fileid);

| Argument | Type | Description |
| --- | --- | --- |
| fileid | Text File ID | The id of the file to close. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var file = file\_text\_open\_write(working\_directory + "Game\_Data.txt");
while (!file\_text\_eof(file))
{
    file\_text\_readln(file);
}
file\_text\_write\_string(file, level\_data);
file\_text\_close(file);

The above code opens a file for writing then loops through the lines of text already written to the file until it reaches the end. At this point it writes a string and then closes the file again.