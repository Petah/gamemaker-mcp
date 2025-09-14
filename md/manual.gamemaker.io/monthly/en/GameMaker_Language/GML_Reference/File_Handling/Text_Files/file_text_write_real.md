---
title: "file_text_write_real"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_write_real.htm"
converted: "2025-09-14T03:59:56.870Z"
---

# file\_text\_write\_real

With this function you can write a number to the previously opened text file. Note that as the value to be written can be a real number, all decimals will be written with a "." point as separator. If the file already contains information, this information will be erased and the string will be written at the beginning of the file, unless you have opened the file with the [file\_text\_open\_append()](file_text_open_append.md). You can also avoid this by using the [file\_text\_readln()](file_text_readln.md) function along with the [file\_text\_eof()](file_text_eof.md) function to loop through the contents of the file until you get to the end and then start writing.

It is important to note that when writing very large numbers to a text file using this function, it may be translated into a standard simplified format, like "6.6624e+003", which cannot be read back in to GameMaker correctly. To prevent issues like this, you should instead convert the value to a string and use the function [file\_text\_write\_string()](file_text_write_string.md) instead.

#### Syntax:

file\_text\_write\_real(fileid, val);

| Argument | Type | Description |
| --- | --- | --- |
| fileid | Text File ID | The id of the file to edit. |
| val | Real | The real value to write to the file. |

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