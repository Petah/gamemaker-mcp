---
title: "ini_section_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_section_exists.htm"
converted: "2025-09-14T03:59:56.656Z"
---

# ini\_section\_exists

This function checks to see if a section exists in the currently open ini and will return true if it does or false otherwise. This is not a necessary check to prevent errors as, when a section does not exist, reading from a non-existent section will just return a default value, however it can be useful to see if an ini file has saved specific data.

#### Syntax:

ini\_section\_exists(section);

| Argument | Type | Description |
| --- | --- | --- |
| section | String | The section in the open .ini file to check for. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("savedata.ini");
if (!ini\_section\_exists("save1"))
{
    global.savegame = "1";
}
ini\_close();

This will set variable global.savegame to "1" if "save1" is NOT found. With a for loop, this could be used as a basic way of working out how many save games there are for a game (ie: creating a system for multiple simultaneous save games for one game).