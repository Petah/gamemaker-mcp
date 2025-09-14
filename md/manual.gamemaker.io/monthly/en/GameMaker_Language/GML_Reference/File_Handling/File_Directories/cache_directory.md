---
title: "cache_directory"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Directories/cache_directory.htm"
converted: "2025-09-14T03:59:56.079Z"
---

# cache\_directory

This function returns the cache directory for your game. Use this directory to store cached data that is not permanently needed for your game.

On some consoles, certain options may need to be enabled for this to hold a valid path.

NOTE The cache\_directory variable stores the path **including** the final slash.

#### Syntax:

cache\_directory

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open(cache\_directory + "\\cache\_ini.ini");

This will open an INI file in the cache directory of the game (creating it if it does not already exist).