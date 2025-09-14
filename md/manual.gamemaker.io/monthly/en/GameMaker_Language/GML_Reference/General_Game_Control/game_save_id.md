---
title: "game_save_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_save_id.htm"
converted: "2025-09-14T04:00:00.348Z"
---

# game\_save\_id

This **read-only** variable points to the area of local storage that is reserved for your game on the target device. See [Save Area Locations](../../../../../../Additional_Information/The_File_System.md).

In general, you do not need to use this to write or read files in the save area, as GameMaker automatically resolves paths to the save area when reading/writing files. For example, this:

buffer\_save(buf, game\_save\_id + "my\_file.dat");

would be better done as just this:

buffer\_save(buf, "my\_file.dat");

This directory may or may not be visible to other applications, depending on the platform.

NOTE On the HTML5 target it will return an empty string.

Read: [The File System](../../../../../../Additional_Information/The_File_System.md)

#### Syntax:

game\_save\_id

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

save\_dir = game\_save\_id;

This will store the directory for saving files to a variable for future use.