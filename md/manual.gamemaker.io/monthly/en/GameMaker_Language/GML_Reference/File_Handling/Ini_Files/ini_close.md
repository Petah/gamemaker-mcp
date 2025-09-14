---
title: "ini_close"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_close.htm"
converted: "2025-09-14T03:59:56.537Z"
---

# ini\_close

This function should be called the moment you are finished reading from or writing to any open INI file.

If you do not use the function after you have used any of the INI write functions, then nothing will be written to disk, as the file information is held in memory until this function is called, which forces the write. Note that, even if you don't call this function, a next call to [ini\_open](ini_open.md) will close the currently open INI file.

The function will also return a string with the INI file encoded into it. This string can then be saved to a server and/or used again along with the function [ini\_open\_from\_string](ini_open_from_string.md) to re-create the INI.

#### Syntax:

ini\_close();

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("savedata.ini");
score = ini\_read\_real("save1", "score", 0);
ini\_close();

This will open "savedata.ini" and read a value from the section "save1" with the key "score", then close the INI file. If there is no value under "save1" called "score" or there is no "savedata.ini" file present, 0 will be returned and a new INI file created.