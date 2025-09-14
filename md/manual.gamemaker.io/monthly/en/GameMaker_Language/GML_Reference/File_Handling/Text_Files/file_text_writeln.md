---
title: "file_text_writeln"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_writeln.htm"
converted: "2025-09-14T03:59:56.902Z"
---

# file\_text\_writeln

With this function you can write a new line to an opened text file. In this way you can skip lines or write information on a line by line basis (see example code below).

#### Syntax:

file\_text\_writeln(fileid);

| Argument | Type | Description |
| --- | --- | --- |
| fileid | Text File ID | The id of the file to edit. |

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