---
title: "file_text_write_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_write_string.htm"
converted: "2025-09-14T03:59:56.883Z"
---

# file\_text\_write\_string

With this function you can write a string to a previously opened text file. If the file already contains information, this information will be erased and the string will be written at the beginning of the file, unless you have opened the file with the [file\_text\_open\_append()](file_text_open_append.md). You can also avoid this by using the [file\_text\_readln()](file_text_readln.md) function along with the [file\_text\_eof()](file_text_eof.md) function to loop through the contents of the file until you get to the end and then start writing.

#### Syntax:

file\_text\_write\_string(fileid, str);

| Argument | Type | Description |
| --- | --- | --- |
| fileid | Text File ID | The id of the file to edit. |
| str | String | The string to write to the file. |

#### Returns:

N/A

#### Example:

var file = file\_text\_open\_write(working\_directory + "hiscore.txt");
for (var i = 0; i < 10; ++i;)
{
    file\_text\_write\_real(file, scr\[i\]);
    file\_text\_writeln(file);
    file\_text\_write\_string(file, scr\_name\[i\]);
    file\_text\_writeln(file);
}
file\_text\_close(file);

The above code opens a file for writing and then loops through two arrays, writing each array value to a new line of the file. The file is then closed when the loop has finished.