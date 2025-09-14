---
title: "game_load_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_load_buffer.htm"
converted: "2025-09-14T04:00:00.272Z"
---

# game\_load\_buffer

This function loads a game state that has been saved previously. The game is loaded from a previously created "grow" buffer (see [Buffers](../Buffers/Buffers.md)) and the buffer must have had a game state saved to it using the [game\_save\_buffer](game_save_buffer.md) function.

#### Syntax:

game\_load\_buffer(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to load from. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("L")))
{
    if (global.Checkpoint) game\_load\_buffer(save\_buff);
}

The above code will load a previously saved game state from the buffer stored in the variable save\_buff, only if the global variable is true, when the player presses the "L" key.