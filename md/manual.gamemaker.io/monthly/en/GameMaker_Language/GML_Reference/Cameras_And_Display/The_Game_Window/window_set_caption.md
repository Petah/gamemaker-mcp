---
title: "window_set_caption"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_caption.htm"
converted: "2025-09-14T03:59:45.346Z"
---

# window\_set\_caption

With this function you can change or set the windows caption for the room that you are currently in. This caption appears at the top of the window, beside the game icon, when the game is not in full screen mode.

#### Syntax:

window\_set\_caption(caption);

| Argument | Type | Description |
| --- | --- | --- |
| caption | String | The new caption. |

#### Returns:

N/A

#### Example:

if (window\_get\_caption() != "")
{
    window\_set\_caption("");
}

The above code will check the windows caption to see if it has text or not, and if it does it sets it to an empty string so as no caption is displayed.