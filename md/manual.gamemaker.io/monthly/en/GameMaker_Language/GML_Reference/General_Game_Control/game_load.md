---
title: "game_load"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_load.htm"
converted: "2025-09-14T04:00:00.256Z"
---

# game\_load DEPRECATED

With this function you can load a game that has been previously saved using [game\_save](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save.md).

Note that it will restore the version of the game that was used to create the save, so any updates made after it will not be visible.

For more info, read the page on [game\_save](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save.md).

#### Syntax:

game\_load(filename);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The name of the file to load from. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("L")))
{
    if (global.Save) game\_load("Save.dat");
}

The above code will load a previously saved game if a global variable is true when the player presses the "L" key.