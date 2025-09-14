---
title: "Dialog"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/Dialog/Dialog.htm"
converted: "2025-09-14T03:59:42.788Z"
---

# Dialog

Most modern computers and mobile devices do not like it when a game is stopped while a dialog window is shown. They tend to interpret this as game runner having stopped, and may consider it an error and close the app prematurely. To prevent this GameMaker has **asynchronous** dialog functions that permit you to request certain forms of user feedback or input, but without blocking the game runner at any time, meaning that - when called - the game will run as normal in the background while the user responds to the shown dialog window. Once the user has responded, a [Dialog Asynchronous Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/Dialog.md) will be called so that you can deal with the results.

NOTE With the exception of [shop\_leave\_rating](shop_leave_rating.md), these functions are for **debugging and testing use only** and should not be used in released games on desktop OSes and HTML5. For that purpose you should create a custom user interface to receive input from players so that you have complete control over how the dialogs look and behave. On console and mobile platforms the system UI is used to show dialogs instead.

NOTE These functions don't work in regular fullscreen mode on Windows as your game "owns" the entire screen. You can use them with borderless fullscreen instead, see [window\_enable\_borderless\_fullscreen](../../Cameras_And_Display/The_Game_Window/window_enable_borderless_fullscreen.md).

Below is a list of all the available asynchronous dialog functions:

-   [get\_login\_async](get_login_async.md)
-   [get\_string\_async](get_string_async.md)
-   [get\_integer\_async](get_integer_async.md)
-   [show\_message\_async](show_message_async.md)
-   [show\_question\_async](show_question_async.md)
-   [shop\_leave\_rating](shop_leave_rating.md)