---
title: "game_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_id.htm"
converted: "2025-09-14T04:00:00.243Z"
---

# game\_id DEPRECATED

This **read only** variable returns the unique identifier for the game you have created. You can use this if you need a unique file name, or anything else that needs something to identify your game only. This can be set in the [Game Options](../../../Settings/Game_Options.md).

#### Syntax:

game\_id

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("Score.ini");
ini\_write\_real("Scores", "0", score + game\_id);
ini\_close();

The above code performs a very basic encryption on the score by adding the game\_id to it before saving. On reading it back into the game you would deduct the game\_id to get the correct value again.