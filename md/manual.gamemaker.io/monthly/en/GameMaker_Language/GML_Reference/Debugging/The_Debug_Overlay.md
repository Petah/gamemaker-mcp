---
title: "The Debug Overlay"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/The_Debug_Overlay.htm"
converted: "2025-09-14T03:59:48.268Z"
---

# The Debug Overlay

The Debug Overlay is an in-game overlay that displays various real-time debug information about your game.

NOTE The Debug Overlay is not supported on the HTML5 target platform.

It includes the following three windows by default: **FPS** (open by default), **Log**, and **Audio**. Additionally, it displays the GameMaker version in the top-right corner, along with the version and name of the project.

The Debug Overlay can be accessed using the functions [show\_debug\_overlay](show_debug_overlay.md) and [show\_debug\_log](show_debug_log.md), the first opens the overlay with the **FPS** window open, the second with the **Log** window open.

You can define your own, custom debug views in The Debug Overlay using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md). Debug views can have sections added to them using [dbg\_section](dbg_section.md), which you can add controls to such as sliders, string input boxes, etc. These allow you to change the values of variables through references created using [ref\_create](../Variable_Functions/ref_create.md). The **DebugView** option under the **Debug** menu determines if custom views are visible. All debug views are listed under the **Views** menu and can have their visibility toggled here.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_1.png)

### Dragging and Docking Windows

All windows of the Debug Overlay can be dragged by clicking and holding ![Lmb](../../../assets/Images/Icons/Icon_LMB.png) on the title bar or by performing the same action anywhere else on empty window space.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_docking_builtin_merged.png)

The built-in windows moved into a single window

Clicking ![Lmb](../../../assets/Images/Icons/Icon_LMB.png) on the title bar and dragging the window allows you to "dock" the window to other windows in a variety of ways:

-   Dock it while splitting the other window in half.
-   Dock it as a tabbed window without splitting the other window.

This works with the built-in windows as well as with custom debug views that you create. The window that you drag onto another one is always added as a tabbed window. Dragging the tab moves a window back into a separate window.

See the [ImGUI documentation on Docking](https://github.com/ocornut/imgui/wiki/Docking#usage-guide) for more information.

## Debug

### FPS

The title bar for this window shows the current number of texture swaps, the number of vertex batches, the current FPS ([fps\_real](fps_real.md)) and a bar showing the stacked time values:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_fps.png)

NOTE Texture swaps and vertex batches will never be zero and will normally show values of 2 or 3, since even with an empty room and no objects GameMaker still has to draw and batch things.

Inside this window, you have two sections: a graph and a bar.

The graph displays the FPS ([fps\_real](fps_real.md)) by default, where the horizontal axis is the amount of time passed since the FPS menu was opened, and the vertical axis is the frame time in seconds.

![](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_graph_1.png)

The **FrameTime** value is the time each frame took to process, in seconds. This value should be less than the time a single frame can take. If the game speed is e.g. set to 60FPS, then every frame can take at most 1/60 = 0.0166... seconds. If it takes any longer than that, it means that GameMaker is still processing the current frame while it should already be processing the next one. The (real) FPS will drop below the game speed as a result.

Enable the **Stacked** option to display the time values for specific types of processing that GameMaker does:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_graph_2.png)

These are:

-   **Garbage Collector**: Time spent by the [Garbage Collector](../Garbage_Collection/Garbage_Collection.md)
-   **IO&YoYo**: Time spent for input/output ([keyboard](../Game_Input/Keyboard_Input/Keyboard_Input.md), [mouse](../Game_Input/Mouse_Input/Mouse_Input.md), [gamepads](../Game_Input/GamePad_Input/Gamepad_Input.md), [networking](../Networking/Networking.md)), and some OS processing
-   **Update**: Time spent in the update loop of the game (Step events, etc.)
-   **Draw**: Time spent drawing (Draw events)
-   **Text**: Time spent by the text in [Sequences](../Asset_Management/Sequences/Sequences.md)
-   **Scroll**: Time spent processing scrolling backgrounds in [rooms](../Asset_Management/Rooms/Rooms.md), and [video](../../../../../../GameMaker_Language/GML_Reference/Drawing/Videos/Videos.md)

You can click on each value in the top-right corner (next to their coloured boxes) to toggle their visibilities.

The **History** bar controls the horizontal range that is visible in the graph. You can set this between 1 and 30 seconds.

### Log

This window displays the Output Log, same as the one that appears in the IDE under [The Output Window](../../../Introduction/The_Output_Window.md).

All debug messages that you show using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md) and [show\_debug\_message\_ext](../Strings/show_debug_message_ext.md) are also shown here.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_console.png)

The text field at the bottom of the window allows you to provide basic console input:

-   You can write a global variable name to print its value, or a global function name to execute it, with space-separated arguments (e.g. func arg0 arg1)
-   The console stores a history of your last commands. Press the Up and Down arrow keys to go through the previous commands.
-   The console also supports autocomplete that you can access by pressing the Tab key, which will be shown when the cursor is on a word with more than 2 characters. Up and Down keys select the option in the dropdown box and Escape closes the autocomplete:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_console_autocomplete.png)

NOTE While you type commands in the console input, GameMaker continues to trigger events based on the [Keyboard Input](../Game_Input/Keyboard_Input/Keyboard_Input.md) that you provide, meaning your game still receives input.

The input follows a couple rules:

-   If the first word is a global function, then it will be executed with the arguments given.
-   If the first word is a built-in variable, then its value is printed.

All subsequent words following the first word are converted into values that are passed as arguments to the function, as follows:

-   First it tries to interpret it as a global scope value, if one is found, it is passed in as an argument
-   If it is an asset name then the reference to that asset is passed
-   true and false can be used for boolean values
-   If it is a number then a real number is passed
-   Any text surrounded by double quotes "" is treated as a string
-   Anything else not following the above rule is treated as a string

NOTE All scripts are executed within the scope of the [global](../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md) struct.

A simple command looks like this:

show\_debug\_message "Hello World!"

WARNING No parentheses should be added here. If you add them here like you normally would in GML Code, the function won't be executed and a line ERROR : unknown command will be shown in the output.

Finally, you can **Clear** the output and **Copy** its contents to the clipboard.

### Audio

This window shows debug information related to the audio playing in your game.

The graph displays the most recent output buffer on the audio thread. This is the output signal that GameMaker sends to the audio device, after all mixing and processing.

The horizontal axis in this graph is the frame number in the buffer, and the vertical axis is the amplitude, typically ranging between -1 and 1.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_audio.png)The list at the bottom shows you each sound "source" that is currently playing or may potentially play a sound (including individual sources from [sync groups](../Asset_Management/Audio/Audio_Synchronisation/Audio_Synchronisation.md)). These appear coloured depending on the state of the source:

-   **White**: Sources that are currently playing.
-   **Red**: Sources that have finished playing.
-   **Yellow**: Sources that are paused.
-   **Magenta**: Sources that are preparing to be played, waiting on internal conditions. This is a transient state and will not be visible for more than some milliseconds.
-   **Cyan**: Sources that are stopping. This is a transient state and will not be visible for more than some milliseconds.

The columns display the following values:

-   **source**: The ID of the source
-   **buffer**: The ID of the buffer attached to this source
-   **syncSource**: The source that this source is synchronised to. This will be -1 for sources that are not synchronising to any source and for sources that are being synchronised to by others.
-   **numQueued**: The number of buffers that are queued on this source (including processed ones)
-   **gain**: The source gain as a 16-bit value (0-65535)
-   **name**: The name of the asset. Dynamically created assets (such as buffer sounds) will not show a name.
-   **pos**: The current playback position of the source in frames (as a hex value)

These sources are limited by the [audio\_channel\_num](../Asset_Management/Audio/audio_channel_num.md) value.

This window can also be opened with the [audio\_debug](../Asset_Management/Audio/audio_debug.md) function.

### Memory

This window shows various info related to GameMaker's memory usage.

![](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_memory.png)

The **Memory** section shows the **Allocated memory** by the OS for your game and the **Free memory** that currently remains of it, along with a graph of the evolution through time of both (expressed in game frames).

Then there is a section on the [Garbage Collector](../Garbage_Collection/Garbage_Collection.md), which mostly corresponds to the info returned by [gc\_get\_stats](../Garbage_Collection/gc_get_stats.md). At the top are two buttons: the **Force Collection** button forces the garbage collector to run, and the **Toggle GC** button enables/disables it. At the bottom of the section is the **GC graph**, which shows the number of objects touched and collected as a function of time (expressed in game frames).

### Texture

This window shows all [Texture Pages](../../../Settings/Texture_Information/Texture_Pages.md) used by your game.

It shows the textures generated by GameMaker for all [Texture Groups](../../../Settings/Texture_Groups.md), as well as couple of other textures, such as the fallback texture. Custom [Surfaces](../Drawing/Surfaces/Surfaces.md) that you create as well as the [application\_surface](../Drawing/Surfaces/application_surface.md) are also shown here.

IMPORTANT When you access [Dynamic Textures](../../../Settings/Texture_Information/Dynamic_Textures.md) in the texture viewer that are unloaded and still on disk they will be loaded into memory and VRAM so they can be displayed.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_texture.png)

Drag the **Texture Index** slider to select the texture. For every texture, the following information is shown:

-   **width**: The width of the texture in pixels.
-   **height**: The height of the texture in pixels.
-   **group**: The name of the texture group this texture belongs to. Shows <unknown> if the texture doesn't belong to a texture group.
-   **index in group**: The index of the texture page in its texture group. A texture group can be stored on multiple texture pages when all the visual assets in it don't fit on a single texture page. Sprites marked as on a [Separate Texture Page](../../../Settings/Texture_Information/Texture_Pages.htm#h) also go on their own texture page.
-   **num mips**: The number of mipmap levels used by this texture. See [Mipmapping](../Drawing/Mipmapping/Mipmapping.md) for more info.

### FlexPanel

This shows the [Flex Panel Preview](../Flex_Panels/Flex_Panels.htm#h1) window, with a JSON editor on the left and a preview of the generated layout on the right.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_flexpanel.png)

### DebugView

This toggles the visibility of all custom debug views created using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md).

## Views

This menu lists all the custom debug views that you've created using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md).

Each menu item shows the name of the debug view with a check mark on the right if the view is set to be visible. Clicking the menu item toggles the visibility of this debug view.

NOTE The Debug menu's [DebugView](The_Debug_Overlay.htm#debug_view) setting must be enabled for any custom debug views to be shown.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_custom_views.png)

### Creating Debug Views

A custom debug view is created using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md):

custom\_dbgview = dbg\_view("Custom Debug View", true);

The first argument is its name, the second is its visibility. Optional parameters can be passed to customise its position and size.

Within debug views, you create sections using [dbg\_section](dbg_section.md):

custom\_section = dbg\_section("Custom Section");

To these sections you add controls that display and/or modify the value that they're linked to via a reference created with [ref\_create](../Variable_Functions/ref_create.md).

References can be created to all kinds of variables. Each control supports a reference to one or more datatypes.

IMPORTANT Variables must exist within a [struct](../../GML_Overview/Structs.htm#struct) or [instance](../Asset_Management/Instances/Instances.md) as a debug view is declared once, so local variables _cannot_ be displayed.

Visually, controls are laid out in a grid that has two columns: most controls span two columns, some only a single. Two single column controls can be placed on a single line by calling [dbg\_same\_line](dbg_same_line.md):

button1 = function()
{
    show\_debug\_message("Button1 clicked!");
}

ref = ref\_create(self, "button1");
dbg\_text("This text will go here");
dbg\_same\_line();
dbg\_button("Button1", ref);

NOTE A debug control created before a section is created will be added to a new section named "Default". A debug section that's created before a debug view is created will be added to a debug view "Default".

The above lines of code will show the following window in The Debug Overlay:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_custom_debug_view.png)

## System

This menu contains two settings related to the debug overlay:

-   **Scale** - the scale factor of the debug overlay, default is **x1**
-   **Alpha** - the alpha value to use to draw the overlay, default is **0.8**

## Keyboard & Mouse Events

When the mouse is over any menu or window of the Debug Overlay or when the Debug Overlay expects keyboard input, GameMaker will not trigger any keyboard or mouse events. Functions such as [keyboard\_check](../Game_Input/Keyboard_Input/keyboard_check.md) and [mouse\_check\_button](../Game_Input/Mouse_Input/mouse_check_button.md) still work the same, however. If you want to get the same result in this case, you can use the values returned by [is\_keyboard\_used\_debug\_overlay](../../../../../../GameMaker_Language/GML_Reference/Debugging/is_keyboard_used_debug_overlay.md) and/or [is\_mouse\_over\_debug\_overlay](is_mouse_over_debug_overlay.md):

if (!is\_keyboard\_used\_debug\_overlay() && keyboard\_check(vk\_up))
{
    // Execute code here
}

NOTE The keyboard is considered "used" by the Debug Overlay when the cursor is on a textbox control and also when you drag a window (by clicking and holding the left mouse button).

## Function Reference

### General

-   [show\_debug\_overlay](show_debug_overlay.md)
-   [show\_debug\_log](show_debug_log.md)
-   [is\_debug\_overlay\_open](is_debug_overlay_open.md)
-   [dbg\_add\_font\_glyphs](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_add_font_glyphs.md)

### Views

-   [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md)
-   [dbg\_view\_exists](dbg_view_exists.md)
-   [dbg\_view\_delete](dbg_view_delete.md)
-   [dbg\_section](dbg_section.md)
-   [dbg\_section\_exists](dbg_section_exists.md)
-   [dbg\_section\_delete](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_section_delete.md)

### Controls

-   [dbg\_button](dbg_button.md)
-   [dbg\_checkbox](dbg_checkbox.md)
-   [dbg\_colour](dbg_colour.md)
-   [dbg\_drop\_down](dbg_drop_down.md)
-   [dbg\_same\_line](dbg_same_line.md)
-   [dbg\_slider](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_slider.md)
-   [dbg\_slider\_int](dbg_slider_int.md)
-   [dbg\_sprite](dbg_sprite.md)
-   [dbg\_sprite\_button](dbg_sprite_button.md)
-   [dbg\_text](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_text.md)
-   [dbg\_text\_input](dbg_text_input.md)
-   [dbg\_text\_separator](dbg_text_separator.md)
-   [dbg\_watch](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_watch.md)

### Keyboard & Mouse

-   [is\_mouse\_over\_debug\_overlay](is_mouse_over_debug_overlay.md)
-   [is\_keyboard\_used\_debug\_overlay](../../../../../../GameMaker_Language/GML_Reference/Debugging/is_keyboard_used_debug_overlay.md)