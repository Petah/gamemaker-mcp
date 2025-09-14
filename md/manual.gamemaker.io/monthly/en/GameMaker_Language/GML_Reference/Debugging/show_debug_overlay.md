---
title: "show_debug_overlay"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/show_debug_overlay.htm"
converted: "2025-09-14T03:59:49.016Z"
---

# show\_debug\_overlay

This function toggles [The Debug Overlay](The_Debug_Overlay.md). This overlay is disabled by default.

The debug overlay enables a menu with three options: **FPS** (open by default), **Log**, and **Audio**. It displays the GameMaker version in the top-right corner, along with the version and name of the project:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_1.png)If the optional minimised parameter is set to false, the overlay is opened with the **FPS** window minimised, only showing basic info in the header.

To create custom debug views that will appear under the **Views** menu, see [Creating Debug Views](The_Debug_Overlay.htm#creating_debug_views).

NOTE This function will not work on the HTML5 target due to the different way it works compared to all the other targets.

NOTE To bring up [The Debug Overlay](The_Debug_Overlay.md) with the **Log** window open, use [show\_debug\_log](show_debug_log.md) instead.

#### Syntax:

show\_debug\_overlay(enable\[, minimised, scale, alpha\]);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable (true) or disable (false) the debug overlay |
| minimised | Boolean | OPTIONAL Whether to open the FPS window minimised (doesn't apply to any other windows or debug views) |
| scale | Real | OPTIONAL The scale factor to draw the overlay with (default is 1) |
| alpha | Real | OPTIONAL The alpha value to draw the overlay with (default is 0.8) |

#### Returns:

N/A

#### **Example 1: Basic Use**

if (keyboard\_check\_pressed(ord("O")))
{
    global.debug = !global.debug;
    show\_debug\_overlay(global.debug);
}

The above code toggles the debug on or off whenever the "O" key is pressed.

#### Example 2: Additional Parameters

show\_debug\_overlay(true, true, 2, 0.5);

The above code opens the debug overlay minimised and draws it with a scale factor of 2 and an alpha of 0.5.