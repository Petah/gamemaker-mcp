---
title: "GM_is_sandboxed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/GM_is_sandboxed.htm"
converted: "2025-09-14T04:00:04.188Z"
---

# GM\_is\_sandboxed

This boolean constant holds true when the game is running sandboxed or false when it isn't. Its value is determined by [the Compiler](../../../Introduction/Compiling.md) at compile time.

When your game is running sandboxed (the default), the writable area on the file system is limited to the **Save Area**. See [The File System](../../../Additional_Information/The_File_System.md) for more information on the sandbox.

IMPORTANT It is possible to turn off sandboxing on the Desktop targets (Windows, macOS, and Ubuntu) by checking the **Disable file system sandbox** option in the [Game Options](../../../Settings/Game_Options.md) for the target platform. You do this at your own risk, and while this will open up file saving and loading and permit you to access files anywhere on the given system, it may still be limited by the OS permissions.

#### Syntax:

GM\_is\_sandboxed

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

draw\_text(5, 5, $"Running sandboxed: {(GM\_is\_sandboxed ? "yes" : "no")}");

The code above displays text in the top-left corner of the room indicating if the game is running sandboxed.