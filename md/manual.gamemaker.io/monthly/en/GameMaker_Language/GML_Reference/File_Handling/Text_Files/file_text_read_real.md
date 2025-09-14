---
title: "file_text_read_real"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_read_real.htm"
converted: "2025-09-14T03:59:56.827Z"
---

# file\_text\_read\_real

With this function you can read a real number value from a text file and the function returns that value to be used or stored in a variable.

#### Syntax:

file\_text\_read\_real(fileid);

| Argument | Type | Description |
| --- | --- | --- |
| fileid | Text File ID | The id of the file to read from. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var file = file\_text\_open\_read(working\_directory + "hiscore.txt");
for (var i = 0; i < 10; ++i;)
{
    scr\[i\] = file\_text\_read\_real(file);
    file\_text\_readln(file);
    scr\_name\[i\] = file\_text\_read\_string(file);
    file\_text\_readln(file);
}
file\_text\_close(file);

The above code opens a file for reading and then loops through the lines of the file reading alternately a real number value and a string into two different arrays for future use. The file is then closed when the loop has finished.