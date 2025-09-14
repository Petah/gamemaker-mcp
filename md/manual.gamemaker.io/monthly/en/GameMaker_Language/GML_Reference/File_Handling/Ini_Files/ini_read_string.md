---
title: "ini_read_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_read_string.htm"
converted: "2025-09-14T03:59:56.629Z"
---

# ini\_read\_string

You can use this function to read a string (text) from an INI data file.

INI files are split into **sections** and then each section is subsequently split into **key** - **value** pairs. So a typical INI file would look something like this:

![Ini file contents example](../../../../assets/Images/Scripting_Reference/GML/Reference/Files/IniExample.png)

#### Syntax:

ini\_read\_string(section, key, default);

| Argument | Type | Description |
| --- | --- | --- |
| section | String | The section of the .ini to read from. |
| key | String | The key within the relevant section of the .ini to read from. |
| default | String | The string to return if a string is not found in the defined place (or the .ini file does not exist). Must be a string. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("savedata.ini");
global.name = ini\_read\_string("player", "name", "Player1");
ini\_close();

This will open "savedata.ini" and set global.name to the string under "save1" > "Name" in it, then close the .ini again. If there is no string under "save1" > "Name", or no file named "savedata.ini" is present, global.name will be set to "Player1".