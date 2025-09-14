---
title: "game_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_save.htm"
converted: "2025-09-14T04:00:00.318Z"
---

# game\_save DEPRECATED

This is a legacy function that can be used to save the current state of the game, and is not recommended for use anymore. Use the [file functions](../File_Handling/File_Handling.md) or [buffer functions](../Buffers/Buffers.md) instead to create a custom save system where you only save and load specific game data.

This function will save the game's state as it is, however it will not save any dynamic resources being used at that time, such as data structures, surfaces, assets added at runtime, etc. If such a save file is loaded, any game updates that were made after the save will not be visible, as it will restore the version of the game that was used to create the save.

DEPRECATED Save files created using this function may not be supported by updated Runtime versions, so replacing this function with a new save system is essential to ensure compatibility with future GameMaker updates, and for the reasons listed above, updates made to your own game.

#### Syntax:

game\_save(filename);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The name of the file to save the game to. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("S")))
{
    global.Saved = true;
    game\_save("Save.dat");
}

The above code will set a global variable to true and then save the game to the file "Save.dat" when the key "S" is pressed.