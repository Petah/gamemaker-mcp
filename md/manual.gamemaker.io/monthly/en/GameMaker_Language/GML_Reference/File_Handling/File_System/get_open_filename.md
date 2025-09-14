---
title: "get_open_filename"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/get_open_filename.htm"
converted: "2025-09-14T03:59:56.451Z"
---

# get\_open\_filename

This function opens a dialogue and asks the player for a filename to open with the given filter. The filter has the form "_name1|mask1|name2|mask2|..._", where the mask may contain the different options with a semicolon between them and you can also use a "\*" to mean any string. For example: "_bitmaps|\*.bmp;\*.wmf_", would ask the user to select the name of a bitmap file from the system, but only those that have the two specified extensions (bmp and png). this function does **not** open the file itself! It only returns a string with the full name and path of the file. If the user presses "**Cancel**" an empty string "" is returned.

An important thing to note when using this function is that it grants you certain permissions for that file, for the duration of your game. So, once you get the file path from the user, you can access it again and again without having to ask. However, since this function is for reading a file, the permissions granted are _only for reading_ and saving will not be permitted by the OS. Should you need to read and write to the file, you can get permission using the function [get\_save\_filename()](get_save_filename.md).

**NOTE**: This function is only valid on the Windows and macOS targets.

#### Syntax:

get\_open\_filename(filter, fname);

| Argument | Type | Description |
| --- | --- | --- |
| filter | String | The file type filter and/or name. |
| fname | String | The suggested filename to use. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var file;
file = get\_open\_filename("text file|\*.txt", "");
if (file != "")
{
    file\_text\_open\_read(file);
}

The above code will ask the user to select a text file for opening and then check the returned file name and path, and if it exists will open the file for reading.