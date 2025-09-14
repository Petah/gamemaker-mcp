---
title: "General Game Control"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/General_Game_Control.htm"
converted: "2025-09-14T04:00:00.150Z"
---

# General Game Control

This page lists all functions and variables that are related to game specific functionality, like loading/saving, restarting and so on.

## Variable Reference

The following [global scope](../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md) **built-in** variables are useful for debugging your game - they can be used as the output to a log file in the case of issues, for example - as well as for showing the current build ID, etc. to the user:

-   [game\_id](game_id.md) DEPRECATED
-   [game\_save\_id](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save_id.md)
-   [game\_display\_name](game_display_name.md)
-   [game\_project\_name](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_project_name.md)

## Function Reference

### General Game Control

-   [game\_end](game_end.md)
-   [game\_restart](game_restart.md)
-   [game\_change](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_change.md)
-   [game\_load](game_load.md) DEPRECATED
-   [game\_load\_buffer](game_load_buffer.md)
-   [game\_save](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save.md) DEPRECATED
-   [game\_save\_buffer](game_save_buffer.md)
-   [game\_set\_speed](game_set_speed.md)
-   [game\_get\_speed](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_get_speed.md)

### Highscores

To help you create and maintain highscores for your games, GameMaker creates a global high score [array](../../GML_Overview/Arrays.md) of 10 places which you can access, add to, and change to create your own custom high score lists without too much fuss. This functionality is local to the game and works on all platforms, so you can easily store and maintain a basic high score table using these functions along with the [File Handling Functions](../File_Handling/File_Handling.md).

The following functions exist that deal with the internal high score list.

-   [highscore\_add](highscore_add.md)
-   [highscore\_name](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/highscore_name.md)
-   [highscore\_value](highscore_value.md)
-   [highscore\_clear](highscore_clear.md)

GameMaker also includes a very basic function for drawing the highscores out on the screen as a list. This is meant for debugging more than anything else as making your own high score table is easy and will give you far more control over how it is displayed:

-   [draw\_highscore](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_highscore.md)

### Cursor

-   [cursor\_sprite](cursor_sprite.md)