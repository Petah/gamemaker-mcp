---
title: "game_change"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_change.htm"
converted: "2025-09-14T04:00:00.189Z"
---

# game\_change

This function ends the current game and launches another game that's included in the [Included Files](../../../../../../Settings/Included_Files.md).

It allows you to have a main game from which you can launch other games that you keep in a different GameMaker project. The function can be called again in the launched game to return back to the main game.

The function is supported on the Windows, macOS, PS4, PS5 and Switch platforms.

IMPORTANT This function only works in **VM** builds.

IMPORTANT GameMaker names the .win file differently depending on whether your game is running from the IDE or from the final executable (created using **Create Executable** in [The Build Menu](../../../../../../IDE_Navigation/Menus/The_Build_Menu.md)). When running from the IDE the name will be $"{game\_project\_name}.win", if not it will be "data.win". You should always make sure to refer to the right name, e.g. by setting up a different [configuration](../../../../../../Settings/Configurations.md).

NOTE Since the child games' external files are included in the main game's datafiles, they can be accessed from the main game as well.

### Usage Notes

-   Each of the games to be launched by the main game should be included in a subdirectory of the [Included Files](../../../../../../Settings/Included_Files.md): the game's data.win file and other external included files should go into this folder. This folder structure could look as follows (essentially a copy of the contents in the final game's directory, without the executable file):
    -   game1
        -   game1.win
        -   bgm\_groovy.ogg
        -   texgroup1\_0.yytex
        -   options.ini
    -   game2
        -   game2.win
        -   game\_data.json
        -   options.ini
    -   ...
-   This function only works on certain platforms, and on some platforms it will only work in a packaged build.
-   All saves, achievements, etc. will be done under the title ID set by the launcher project.
-   As this function _ends the current game before launching the new one_, the **Game End event** is triggered for the current game and the **Game Start event** is triggered for the game that is being launched.

[Argument Values Per PlatformArgument Values Per Platform](game_change.htm#)

The table below provides an example of the working directory and launch parameters to be provided on each of the supported platforms:

| Platform | Working Directory | Launch Parameters |
| --- | --- | --- |
| Windows | "/game2" | "-game game2.win" |
| macOS | "game2" | "" |
| PS4/PS5 | "" | "-game /app0/games/game2/game.win" |
| Switch | "rom:/game2/" | "" |

#### Syntax:

game\_change(working\_directory, launch\_parameters);

| Argument | Type | Description |
| --- | --- | --- |
| working_directory | String | The working directory of the game to be launched |
| launch_parameters | String | The command-line parameters to pass to the game to be launched |

#### Returns:

N/A

#### Example 1: Launching an Included Game (on Windows)

game\_change("/chapter3", "-game chapter3.win");

The above code runs from the launcher game and launches the "Chapter 3" game, which is stored in a subdirectory "chapter3"  under [Included Files](../../../../../../Settings/Included_Files.md).

#### Example 2: Returning to the Main/Launcher Game (on Windows)

game\_change("/../", "-game main\_game.win");

The code above runs from a game that was launched from the launcher game and returns to the main/launcher game. The double dots .. indicate that the game's working directory is one above the current working directory.