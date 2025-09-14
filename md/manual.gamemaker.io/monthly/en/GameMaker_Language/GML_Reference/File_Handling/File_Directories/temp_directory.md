---
title: "temp_directory"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Directories/temp_directory.htm"
converted: "2025-09-14T03:59:56.154Z"
---

# temp\_directory

This function returns the temporary directory created for your game each time it is run.

This directory will hold files and can be accessed while the game is running, but it will be removed (along with all files that it contains) when the game is closed.

NOTE The temp\_directory variable stores the path **including** the final slash.

#### Syntax:

temp\_directory

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open(temp\_directory + "\\temp\_ini.ini");

This will open an INI file in the temporary directory of the game (creating it if it does not already exist).