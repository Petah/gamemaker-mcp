---
title: "The Game Window"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/The_Game_Window.htm"
converted: "2025-09-14T03:59:44.956Z"
---

# The Game Window

The game you create happens in a window (even when fullscreen), and this window has a number of properties, like position, size, whether it is fullscreen, etc. These details are normally set automatically for you based on the room size and view ports enabled in combination with the settings from [Game Options](../../../../../../../Settings/Game_Options.md) for the target platform, but you can change them during the game using the functions listed on this page.

NOTE These functions are for **Windows**, **Ubuntu**, **macOS**, **GX.games** and **HTML5** targets only and may not work on any other device.

The following image illustrates how some general window functions relate and interact with each other:

![Window Position example](../../../../assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/window_position.png)

IMPORTANT The above diagram shows the HTML5 runner. Even though the GX.games target runs in a browser, the [window\_get\_width()](window_get_width.md) and [window\_get\_height()](window_get_height.md) values returned on that target will be the same as [browser\_width](../../Web_And_HTML5/browser_width.md) and [browser\_height](../../Web_And_HTML5/browser_height.md) respectively.

The image above shows the game window drawn in a browser, but for the other targets, you can replace the browser with the display, so a function like [window\_get\_y](window_get_y.md) will return the position of the top of the game window relative to the display.

## Function Reference

### Window Info

-   [window\_device](window_device.md) DEPRECATED
-   [window\_handle](window_handle.md)
-   [window\_has\_focus](window_has_focus.md)
-   [window\_post\_message](window_post_message.md)

### Mouse & Cursor

-   [window\_mouse\_get\_x](window_mouse_get_x.md)
-   [window\_mouse\_get\_y](window_mouse_get_y.md)
-   [window\_mouse\_get\_delta\_x](window_mouse_get_delta_x.md)
-   [window\_mouse\_get\_delta\_y](window_mouse_get_delta_y.md)
-   [window\_mouse\_set](window_mouse_set.md)
-   [window\_view\_mouse\_get\_x](window_view_mouse_get_x.md)
-   [window\_view\_mouse\_get\_y](window_view_mouse_get_y.md)
-   [window\_views\_mouse\_get\_x](window_views_mouse_get_x.md)
-   [window\_views\_mouse\_get\_y](window_views_mouse_get_y.md)
-   [window\_set\_cursor](window_set_cursor.md)
-   [window\_get\_cursor](window_get_cursor.md)

### Mouse Lock

-   [window\_mouse\_set\_locked](window_mouse_set_locked.md)
-   [window\_mouse\_get\_locked](window_mouse_get_locked.md)

### Drawing

-   [window\_set\_colour](window_set_colour.md)
-   [window\_get\_colour](window_get_colour.md)

### Border & Caption

-   [window\_set\_caption](window_set_caption.md)
-   [window\_get\_caption](window_get_caption.md)
-   [window\_set\_showborder](window_set_showborder.md)
-   [window\_get\_showborder](window_get_showborder.md)
-   [window\_enable\_borderless\_fullscreen](window_enable_borderless_fullscreen.md)
-   [window\_get\_borderless\_fullscreen](window_get_borderless_fullscreen.md)

### Dimensions & Position

-   [window\_center](window_center.md)
-   [window\_get\_fullscreen](window_get_fullscreen.md)
-   [window\_get\_width](window_get_width.md)
-   [window\_get\_height](window_get_height.md)
-   [window\_get\_x](window_get_x.md)
-   [window\_get\_y](window_get_y.md)
-   [window\_get\_visible\_rects](window_get_visible_rects.md)
-   [window\_set\_fullscreen](window_set_fullscreen.md)
-   [window\_set\_position](window_set_position.md)
-   [window\_set\_size](window_set_size.md)
-   [window\_set\_rectangle](window_set_rectangle.md)
-   [window\_set\_min\_width](window_set_min_width.md)
-   [window\_set\_max\_width](window_set_max_width.md)
-   [window\_set\_min\_height](window_set_min_height.md)
-   [window\_set\_max\_height](window_set_max_height.md)
-   [window\_minimise](window_minimise.md)
-   [window\_restore](window_restore.md)