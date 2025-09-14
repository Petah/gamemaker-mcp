---
title: "display_set_gui_maximise"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_gui_maximise.htm"
converted: "2025-09-14T03:59:45.803Z"
---

# display\_set\_gui\_maximise

This function sets the GUI layer's resolution to the size of the window, with optional scaling and offset parameters.

By default, the GUI layer is 1:1 with the application surface resolution and drawn at the (0,0) position of the surface too. However this is not always what you want and so you can use this function to set it to be drawn relative to the absolute (0,0) position of the game window.

Simply calling the function with no arguments will set the GUI layer to be drawn at the (0,0) position of the screen or game window, with the width and height being scaled to fit the window area:

display\_set\_gui\_maximise();

However, you can set the _scaling factor_ for the GUI layer, and the width and height will be divided by that amount. Remember that the GUI layer is always made to fit the size of the display or game window, or the application surface, so setting this value to anything other than 1 basically scales the pixel count along the width and height. If your display/window is 1024x768 and you set the scaling factor to 0.5, then your GUI layer will be double the resolution of the display/window, effectively doubling the pixel size:

display\_set\_gui\_maximise(0.5, 0.5);

Setting the values in this way will also set the draw position to the (0,0) of the display or game window, so you can provide offset values to "move" the (0,0) position:

var pos = application\_get\_position();
display\_set\_gui\_maximise(0.5, 0.5, pos\[0\], pos\[1\]);

Finally, you can reset the GUI layer using this function by setting the scaling factors to -1. This will set the GUI layer to have a 1:1 scale again and set the draw position to the (0,0) position of the application surface rather than the display or window.

display\_set\_gui\_maximise(-1, -1);

#### Syntax:

display\_set\_gui\_maximise(_xscale, yscale, xoffset, yoffset_);

| Argument | Type | Description |
| --- | --- | --- |
| xscale | Real | OPTIONAL The horizontal scaling factor (use -1 to reset to default). |
| yscale | Real | OPTIONAL The vertical scaling factor (use -1 to reset to default). |
| xoffset | Real | OPTIONAL The x offset position for drawing. |
| yoffset | Real | OPTIONAL The y offset position for drawing. |

#### Returns:

N/A

#### Example:

display\_set\_gui\_maximise(2, 2, 0, 0);

The above code will set the size of the GUI layer to half the size of the window, with a default offset.