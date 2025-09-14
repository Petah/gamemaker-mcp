---
title: "game_display_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_display_name.htm"
converted: "2025-09-14T04:00:00.200Z"
---

# game\_display\_name

This **read only** variable returns the display name of your game for the target platform, as set in the [Game Options](../../../Settings/Game_Options.md).

#### Syntax:

game\_display\_name

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

var name = game\_display\_name;
var ver = string(GM\_version);
draw\_text(32, 32, name + ":" + ver);

The above code gets the display name and the version number of the game and draws them.