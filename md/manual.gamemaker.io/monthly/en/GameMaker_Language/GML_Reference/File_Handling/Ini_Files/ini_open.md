---
title: "ini_open"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_open.htm"
converted: "2025-09-14T03:59:56.582Z"
---

# ini\_open

This function opens a new INI file for reading/writing, closing the currently open INI file, if there is any.

If no INI file with the given name exists at the location you are checking, GameMaker may create it, but only if you write data to it. If you have only read information from the INI file, then the default values for the read function will be returned, but the INI file will _not_ actually be created.

You can only have **one** INI file open at any one time and remember to use [ini\_close](ini_close.md) once you're finished reading from/writing to the INI file as the information is not actually saved to disk until then (it is also stored in memory until the file is closed). Note, however, that calling ini\_open with an INI file still open will close that file.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

ini\_open(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The filename for the INI file |

#### Returns:

N/A

#### Example:

ini\_open("Settings/savedata.ini");
score = ini\_read\_real("save1", "score", 0);
ini\_close();

This will open "savedata.ini" and read the score value under the section "save1" with the key "score" in it, then close the INI again. Should there be no value under "save1", "score" or there is no "savedata.ini" file present, score will be set to 0 (the default value). Note that the INI file has been placed in the sub-directory "Settings", which is the folder that holds the INI file in the Asset Browser included files.