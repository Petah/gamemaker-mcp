---
title: "window_center"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_center.htm"
converted: "2025-09-14T03:59:44.972Z"
---

# window\_center

With this function you can center the game window in the display when the target module is Windows, Ubuntu (Linux) or macOS, or you can center it in the browser if the target module is HTML5. This function has no effect on any other device.

**NOTE** If you have resized the game window in the current step (for example, by switching from full screen to windowed or using [window\_set\_size()](window_set_size.md)), and wish to centre the new window, this function should be called at least 10 steps later (for example, by using an [alarm](../../Asset_Management/Instances/Instance_Variables/alarm.md)) otherwise it may not work correctly.

#### Syntax:

window\_center();

#### Returns:

N/A

#### Example:

if (!window\_get\_fullscreen())
{
    window\_center();
}

The above code will center the game window within the display if it is not in full screen mode.