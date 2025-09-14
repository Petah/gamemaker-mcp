---
title: "display_set_gui_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_gui_size.htm"
converted: "2025-09-14T03:59:45.823Z"
---

# display\_set\_gui\_size

This function will only affect things drawn in the [Draw GUI Event](../../../The_Asset_Editors/Object_Properties/Draw_Events.md) and from [UI layers](../../../The_Asset_Editors/Room_Properties/UI_Layers.md), and can be used to set a specific width and height for all GUI components in such events or layers, and no matter what size of display or window is used to display the GUI, it will be scaled to fit correctly.

Where the GUI is positioned (ie: the (0,0) position) will depend on whether you have used the function [display\_set\_gui\_maximise()](display_set_gui_maximise.md) or not. If you do not use this function (the default setting) then the GUI layer will be positioned with its (0,0) point at the same position as that for the application surface (the area where your game is being drawn) and the width and height will be stretched to fit the this surface, such that setting a GUI width of 256px with this function when the application surface is 512px would stretch those 256 pixels to fit, effectively making the pixels twice as large. This is ideal for those games that have aspect ratio correction set in the global Game Settings.

If you have used the display\_set\_gui\_maximise() function then the (0,0) position for the GUI layer will default to the top left corner of the game window, or display (when in fullscreen or on devices), with the scaling factor set by that function, and the width and height set by this one. You can reset the GUI layer at any time to the default configuration by calling this function using -1 as both the width and height - this will set the (0, 0) position to the application surface and the width and height will be reset to 1:1 with the surface too.

#### Syntax:

display\_set\_gui\_size(width, height);

| Argument | Type | Description |
| --- | --- | --- |
| width | Real | The width of the GUI |
| height | Real | The height of the GUI |

#### Returns:

N/A

#### Example:

display\_set\_gui\_size(768, 1024);

The above code will lock the draw GUI event to the given width and height, scaling all components to fit either the application surface, or the display, using that proportion.