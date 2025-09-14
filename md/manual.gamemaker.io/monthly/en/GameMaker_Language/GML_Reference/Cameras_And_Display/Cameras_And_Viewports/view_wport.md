---
title: "view_wport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_wport.htm"
converted: "2025-09-14T03:59:44.910Z"
---

# view\_wport

This variable can be used to get or to set the width of the specified view port. The width of the view port (or combined view ports if more than one are active) define the width of the game window or background canvas _at the start of the game_, so changing this value after the game has started will have no visible effect on the game window size unless called along with the function [window\_set\_size()](../The_Game_Window/window_set_size.md). If you have a larger or smaller port size than that assigned to the camera, then the camera view will be scaled down - or up - to fit, as illustrated by the image below.

NOTE This variable does not hold a real GML array, so you cannot run any [array functions](../../Variable_Functions/Array_Functions.md) on it or serialise it (convert it to a string). The only operation you can run on it is accessing a value at an index, with the view\_wport\[index\] syntax.

![view_wport example](../../../../assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/View_wh.png)

#### Syntax:

view\_wport\[0 ... 7\]

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

camera\_set\_view\_size(view\_camera\[0\], view\_wport\[0\], view\_hport\[0\]);

The above code sets the width and height of the camera view to be the same as the width and height of the view port.