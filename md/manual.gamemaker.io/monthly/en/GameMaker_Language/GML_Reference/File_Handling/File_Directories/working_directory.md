---
title: "working_directory"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Directories/working_directory.htm"
converted: "2025-09-14T03:59:56.170Z"
---

# working\_directory

This returns a path that points to where the game's files are stored.

In most cases, this is the same as the [program\_directory](program_directory.md), which is the path to the game's runner (executable). However if the game's files happen to be in a different directory than the runner (say you use [game\_change](../../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_change.md) to use a different working directory or use command line to run a runner in a different location), then this will point to where the game files are, not the runner.

It may also be a different directory when testing your project through the IDE, as then the game files and the runner are in different locations as well.

When using this directory to write out a file, GameMaker will redirect it to the [game\_save\_id](../../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save_id.md) location if the [file system sandbox](../../../../Additional_Information/The_File_System.md) does not allow writing to the working directory (this is the default behaviour, which can be disabled in the [Game Options](../../../../Settings/Game_Options.md) for Desktop targets only).

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

WARNING GameMaker doesn't limit writing to this directory so whether this is possible depends on OS permissions. It is however discouraged that you write to working\_directory, as it is possible to damage the game installation this way.

NOTE The working\_directory variable stores the path **including** the final slash.

#### Syntax:

working\_directory

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open(working\_directory + "temp\_ini.ini");

This will open an INI file from the working directory of the game (creating it if it does not already exist). This could be the save area or the program directory depending on the sandbox level.