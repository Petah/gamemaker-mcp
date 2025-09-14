---
title: "program_directory"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Directories/program_directory.htm"
converted: "2025-09-14T03:59:56.141Z"
---

# program\_directory

This function returns the directory where the game's runner (executable) is stored. However, this may not always be useful, particularly as some devices run the executable from a \*.zip file, so this would return that location no matter where the extracted executable is actually running from.

This is different from [working\_directory](working_directory.md), which stores where the game's files are stored, however by default they are in the same location.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

WARNING GameMaker doesn't limit writing to this directory so whether this is possible depends on OS permissions. It is however discouraged that you write to program\_directory, as it is possible to damage the game installation this way.

NOTE The program\_directory variable stores the path **including** the final slash.

#### Syntax:

program\_directory

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

dir = program\_directory;

This will store the directory where the executable is stored in a variable.