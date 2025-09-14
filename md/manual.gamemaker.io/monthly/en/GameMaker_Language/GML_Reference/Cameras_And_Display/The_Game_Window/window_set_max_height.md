---
title: "window_set_max_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_max_height.htm"
converted: "2025-09-14T03:59:45.421Z"
---

# window\_set\_max\_height

This function can be used to set a maximum window height for your game. If you enable the window resize option in the Game Options for the target platform, then the player can resize the game window to any size they wish, however by using this function you can limit the maximum height to the size you specify. If you wish to go back to the default behaviour (ie: no minimum), then use a value of -1.

NOTE This function is only available on the **Windows**, **macOS** and **Linux** platforms.

#### Syntax:

window\_set\_max\_height(height);

| Argument | Type | Description |
| --- | --- | --- |
| height | Real | The maximum height in pixels for the game window. |

#### Returns:

N/A

#### Example:

window\_set\_min\_width(640);
window\_set\_min\_height(480);
window\_set\_max\_width(1280);
window\_set\_max\_height(960);

The above code will set the minimum and maximum width and height for the game window.