---
title: "Debugging"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/Debugging.htm"
converted: "2025-09-14T03:59:48.220Z"
---

# Debugging

While making a game, it is often very important that you know certain details of the game mechanics at specific points in time, or to be able to input certain key values for some functions to test out different methods and ideas for your game.

GameMaker provides the following functionality for this:

-   A number of basic debug functions that show messages and ask for input while in debug mode (or on a Windows target). This will be ignored when compiled for other target modules due to the fact that these functions put the game in a closed loop until the input is resolved.
-   [The Debug Overlay](The_Debug_Overlay.md), an in-game overlay where you can view the **FPS**, **Log** and **Audio** windows, as well as create your own [custom debug views](The_Debug_Overlay.htm#creating_debug_views).

NOTE Although these functions may work on certain platforms they are not to be used for anything other than debugging.

NOTE You can find further information on how to debug your game in the section on [The Debugger](../../../../../../IDE_Tools/The_Debugger.md).

## Debug Functions (Basic)

The following functions offer basic functionality to debug your game:

-   [debug\_mode](debug_mode.md)
-   [debug\_event](debug_event.md)
-   [debug\_get\_callstack](../../../../../../GameMaker_Language/GML_Reference/Debugging/debug_get_callstack.md)
-   [exception\_unhandled\_handler](exception_unhandled_handler.md)
-   [get\_integer](get_integer.md)
-   [get\_string](get_string.md)
-   [show\_error](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_error.md)
-   [show\_message](show_message.md)
-   [show\_question](show_question.md)
-   [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md)
-   [show\_debug\_message\_ext](../Strings/show_debug_message_ext.md)
-   [show\_debug\_overlay](show_debug_overlay.md)
-   [code\_is\_compiled](../../../../../../GameMaker_Language/GML_Reference/Debugging/code_is_compiled.md)
-   [fps](fps.md)
-   [fps\_real](fps_real.md)

## Input Recording & Playback

The following functions allow you to record various types of input received by your game and play it back for testing purposes.

WARNING These functions are meant for debugging purposes only and should not be used in a final game.

-   [debug\_input\_record](debug_input_record.md)
-   [debug\_input\_save](debug_input_save.md)
-   [debug\_input\_playback](../../../../../../GameMaker_Language/GML_Reference/Debugging/debug_input_playback.md)

## The Debug Overlay

GameMaker also has more advanced functionality for debugging that is accessible from [The Debug Overlay](The_Debug_Overlay.md).

## Debug Macros

GameMaker also has a couple of built-in macros that you can use to make it easier to debug your game:

-   \_GMLINE\_ - This is the line number as shown in [The Script Editor](../../../The_Asset_Editors/Scripts.md) (you can enable these in the [Code Editor](../../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_Preferences.htm#h) preferences).
-   \_GMFILE\_ - This is the name of the current code file this macro is used in. This will look like e.g. "gml\_GlobalScript\_Script1" for a [Script Asset](../../../The_Asset_Editors/Scripts.md), "gml\_Object\_Object1\_Create\_0" for [Object Events](../../../The_Asset_Editors/Object_Properties/Object_Events.md) and "gml\_Room\_Room1\_Create" for the [Room\_Creation\_Code](../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#Room_Creation_Code).
-   \_GMFUNCTION\_ - This is the name of the innermost function this macro is used in. This holds the same value as \_GMFILE\_ if it is used outside of any function definition, i.e. directly inside an object event or script.

![](../../../assets/Images/Scripting_Reference/Additional_Information/GM_Macros_Example.png)

The debug output will be the following in case of the above screenshot:

gml\_GlobalScript\_Macros
3
show\_macros
gml\_GlobalScript\_Macros
10
gml\_GlobalScript\_Macros

## Errors

Apart from those specialist functions and macros, to help you out when creating your game, GameMaker also has a long list of error messages that can be shown either when writing your game code, compiling your game, or when the game itself is running. These messages point to the specific error in question and can be used to pinpoint a problem within a specific object or script function, helping greatly with the process of debugging your game. However, it may not always be obvious exactly what the error message means and so the following sections list all of the possible messages and explain what they mean to make life easier for you:

-   [Syntax Errors (Feather Messages)](../../../Additional_Information/Errors/Syntax_Errors.md)
-   [Compiler Errors](../../../Additional_Information/Errors/Compiler_Errors.md)
-   [Runner Errors](../../../Additional_Information/Errors/Runner_Errors.md)