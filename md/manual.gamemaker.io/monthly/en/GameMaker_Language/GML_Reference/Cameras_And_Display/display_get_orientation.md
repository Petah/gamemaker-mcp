---
title: "display_get_orientation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_orientation.htm"
converted: "2025-09-14T03:59:45.682Z"
---

# display\_get\_orientation

This function will return one of four constants GameMaker has to tell you whether the device running the game is being held in landscape or portrait mode (see the table below).

Note that this function may not correctly detect the orientation of the device when used in the HTML5 target module. However this is easily mimicked by the use of the following script:

return (browser\_width < browser\_height);

Such a function would return true for portrait and false for landscape.

#### Syntax:

display\_get\_orientation()

#### Returns:

[Display Orientation Constant](display_get_orientation.md)

| Display Orientation Constant |
| --- |
| Constant | Description |
| display_landscape | The device is being held horizontally ie: The longest edge is from left to right, and the menu button is on the right. |
| display_landscape_flipped | As above, only now the menu button is on the left. |
| display_portrait | The device is being held vertically ie: The longest edge is from top to bottom, and the menu button is at the bottom. |
| display_portrait_flipped | As above, only now the menu button is at the top. |

#### Example:

if (display\_get\_orientation() == display\_landscape)
{
    global.Config = 0;
}
else
{
    global.Config = 1;
}

The above code checks the orientation of the device and sets a global variable depending on the value returned.