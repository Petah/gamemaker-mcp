---
title: "window_set_fullscreen"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_fullscreen.htm"
converted: "2025-09-14T03:59:45.407Z"
---

# window\_set\_fullscreen

This function sets the game window to be full screen (true) or not (false).

### Usage Notes

-   For the **macOS** target, you _must_ have unchecked the [Start Fullscreen](../../../../Settings/Game_Options/macOS.htm#start_fullscreen) option and checked the [Allow window resize](../../../../Settings/Game_Options/macOS.htm#allow_window_resize) option in the [Game Options](../../../../Settings/Game_Options.md), otherwise this function will fail.
-   This function will _not_ work on HTML5 unless it's added in as a "clickable" callback (see [clickable\_add](../../Web_And_HTML5/clickable_add.md) for more details).
-   If you want to resize the game window after switching from fullscreen to windowed, you must do so after at least 10 steps of calling this function (for example, by using an [alarm](../../Asset_Management/Instances/Instance_Variables/alarm.md)) otherwise it may not work correctly.

#### Syntax:

window\_set\_fullscreen(full);

| Argument | Type | Description |
| --- | --- | --- |
| full | Boolean | Whether to set the screen to fullscreen (true) or not (false). |

#### Returns:

N/A

#### Example:

if mouse\_check\_button\_pressed(mb\_left)
{
    if window\_get\_fullscreen()
    {
        window\_set\_fullscreen(false);
    }
    else
    {
        window\_set\_fullscreen(true);
    }
}

The above code checks for a mouse button press and then sets the window to fullscreen if it is not already, or sets it to windowed if it is already.