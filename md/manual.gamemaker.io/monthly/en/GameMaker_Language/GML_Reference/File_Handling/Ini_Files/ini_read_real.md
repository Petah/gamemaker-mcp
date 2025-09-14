---
title: "ini_read_real"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_read_real.htm"
converted: "2025-09-14T03:59:56.607Z"
---

# ini\_read\_real

You can use this function to read a number from an ini data file. Ini Files are split into **sections** and then each section is subsequently split into **key** - **value** pairs. So a typical ini file would look something like this:

![Ini file contents example](../../../../assets/Images/Scripting_Reference/GML/Reference/Files/IniExample.png)

#### Syntax:

ini\_read\_real(section, key, default);

| Argument | Type | Description |
| --- | --- | --- |
| section | String | The section of the .ini to read from. |
| key | String | The key within the relevant section of the .ini to read from. |
| default | Real | The value to return if a value is not found in the defined place (or the .ini file does not exist). Must be a real number. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("savedata.ini");
score = ini\_read\_real("save1", "score", 0 );
ini\_close();

This will open "savedata.ini" and set score to the value under "save1" > "score" in it, then close the .ini again. Should there be no value under "save1" > "score", or there no "savedata.ini" file present, score will be set to 0.