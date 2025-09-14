---
title: "game_project_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_project_name.htm"
converted: "2025-09-14T04:00:00.284Z"
---

# game\_project\_name

This **read only** variable returns the name of your GameMaker project.

#### Syntax:

game\_project\_name

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var file = game\_project\_name + ".ini";
ini\_open(file);
ini\_write\_real("Scores", "Highscore", score);
ini\_close();

The above code gets the project name and uses it to open (or create) an ini file which is then written to.