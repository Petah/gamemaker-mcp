---
title: "window_get_caption"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_get_caption.htm"
converted: "2025-09-14T03:59:45.025Z"
---

# window\_get\_caption

This function returns the caption of the window (this is the text that appears on the top of the window, beside its icon) and by default this shows the caption of the room you're currently in.

#### Syntax:

window\_get\_caption();

#### Returns:

[String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (window\_get\_caption() != "")
{
    window\_set\_caption("");
}

The above code will check the windows caption to see if it has text or not, and if it does it sets it to an empty string so as no caption is displayed.