---
title: "window_handle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_handle.htm"
converted: "2025-09-14T03:59:45.169Z"
---

# window\_handle

With this function you can get the internal Windows id value (the HWND, a _pointer_). This function is really only useful for extension writers who need the window handle to call Windows API's in DLL code (the returned pointer should be cast into a string and then in the C++ just cast it to an HWND). The table below shows the platforms supported along with what they return:

| Platform | Returns |
| --- | --- |
| Windows | Window HWND |
| macOS | NSWindow class |
| Ubuntu (Linux) | XWindow handle |
| HTML5 | Canvas ID |

#### Syntax:

window\_handle();

#### Returns:

[Pointer](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

win\_id = windows\_handle();

The above code will store the game window id in a variable.