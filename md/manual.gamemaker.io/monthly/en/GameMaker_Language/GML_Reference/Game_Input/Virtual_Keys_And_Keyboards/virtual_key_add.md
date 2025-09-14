---
title: "virtual_key_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Virtual_Keys_And_Keyboards/virtual_key_add.htm"
converted: "2025-09-14T03:59:59.933Z"
---

# virtual\_key\_add

This function enables you to map "touches" of a screen area to keyboard events. This means that once you have assigned an area to a virtual key, all touches on that area will trigger the keyboard event corresponding to the key you have mapped to the area. You can assign each virtual key you define to a variable too, which can then be used in the further virtual key functions to show, hide and delete them. These keys are assigned on a _per room_ basis and will be automatically removed by GameMaker when changing rooms.

The actual position of the virtual key is based on the _screen_ position rather than room position and so the x/y values are absolute on the screen. This means that you don't need to worry about the use of views or the relative room coordinates, and can simply define the keys in the **Create Event** of an object (you only need to define a virtual key once per-room), then draw your key sprites in the [Draw GUI Event](../../../../The_Asset_Editors/Object_Properties/Draw_Events.md), sizing the GUI layer to be the same as the screen.

#### Syntax

virtual\_key\_add(x, y, w, h, keycode);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate (left side) of the virtual key on the screen |
| y | Real | The y coordinate (top side) of the virtual key on the screen |
| w | Real | The width of the virtual key |
| h | Real | The height of the virtual key |
| keycode | Virtual Key Constant (vk_*) | Which keyboard key event should be triggered by touching this area |

#### Returns:

[Virtual Key ID](virtual_key_add.md)

#### Example:

global.Left = virtual\_key\_add(32, 32, 64, 64, vk\_left);

The above code creates a virtual key 64x64 pixels square, positioned on the screen at (32, 32) which will trigger the vk\_left event when touched and assigns the index of this virtual key to a global variable.