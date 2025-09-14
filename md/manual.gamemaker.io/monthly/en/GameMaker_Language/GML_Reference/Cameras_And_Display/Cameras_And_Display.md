---
title: "Cameras And Display"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Display.htm"
converted: "2025-09-14T03:59:43.968Z"
---

# Cameras And Display

The **window** is where GameMaker displays your game, and, depending on the target device, there are different things that can be done with it, like set it to fullscreen or not, for example. **Cameras** (and **viewports**), however, govern _what_ you see within that window, and so have another series of functions dedicated to them. The following two sections deal with these two aspects of displaying your game:

-   [The Game Window](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/The_Game_Window.md)
-   [Cameras And View Ports](Cameras_And_Viewports/Cameras_And_View_Ports.md)

### Display

However, sometimes it's not enough to get information about the game window and views only, and you really need to know things about the **display** itself (essentially the screen that the game window is being displayed on). The following functions all give you details about the size and orientation of the display, details about the GUI layer, and information on the mouse:

-   [display\_reset](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_reset.md)
-   [display\_get\_width](display_get_width.md)
-   [display\_get\_height](display_get_height.md)
-   [display\_get\_orientation](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_orientation.md)
-   [display\_get\_dpi\_x](display_get_dpi_x.md)
-   [display\_get\_dpi\_y](display_get_dpi_y.md)
-   [display\_get\_gui\_width](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_gui_width.md)
-   [display\_get\_gui\_height](display_get_gui_height.md)
-   [display\_get\_timing\_method](display_get_timing_method.md)
-   [display\_get\_sleep\_margin](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_sleep_margin.md)
-   [display\_get\_frequency](display_get_frequency.md)
-   [display\_mouse\_get\_x](display_mouse_get_x.md)
-   [display\_mouse\_get\_y](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_mouse_get_y.md)
-   [display\_mouse\_set](display_mouse_set.md)
-   [display\_set\_gui\_size](display_set_gui_size.md)
-   [display\_set\_gui\_maximise](display_set_gui_maximise.md)
-   [display\_set\_ui\_visibility](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_ui_visibility.md)
-   [display\_set\_timing\_method](display_set_timing_method.md)
-   [display\_set\_sleep\_margin](display_set_sleep_margin.md)

### Screen Saves

There are also a few special functions that can be used to save the display, or part of it, to an image file, either as \*.png or \*.gif:

-   [screen\_save](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/screen_save.md)
-   [screen\_save\_part](screen_save_part.md)
-   [gif\_open](gif_open.md)
-   [gif\_add\_surface](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/gif_add_surface.md)
-   [gif\_save](gif_save.md)
-   [gif\_save\_buffer](gif_save_buffer.md)