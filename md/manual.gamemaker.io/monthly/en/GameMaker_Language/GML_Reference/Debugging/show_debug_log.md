---
title: "show_debug_log"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/show_debug_log.htm"
converted: "2025-09-14T03:59:48.978Z"
---

# show\_debug\_log

This function opens [The Debug Overlay](The_Debug_Overlay.md) with only the **Log** window open. This overlay is disabled by default.

This window allows you to enter basic commands in the text input at the bottom. See the [Log](The_Debug_Overlay.md) section for more info.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_console.png)

NOTE All scripts are executed within the scope of the global struct.

NOTE To bring up [The Debug Overlay](The_Debug_Overlay.md) with the **FPS** window open, use [show\_debug\_overlay](show_debug_overlay.md) instead.

#### Syntax:

show\_debug\_log(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to show the debug log |

#### Returns:

N/A

#### Example:

show\_debug\_log(true);

The code above opens [The Debug Overlay](The_Debug_Overlay.md) with the **Log** window open.