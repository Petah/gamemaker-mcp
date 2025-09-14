---
title: "device_mouse_dbclick_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Device_Input/device_mouse_dbclick_enable.htm"
converted: "2025-09-14T03:59:58.260Z"
---

# device\_mouse\_dbclick\_enable

This function can be used to set the device to detect a double tap of the mb\_left (left mouse button) as an mb\_right (right mouse button) input.

By default this is set to true, meaning that every time the user taps the device screen twice quickly and consecutively, the return value is the same as if the right mouse button had been clicked. When this is on, the first tap will be detected as mb\_left, and the second as mb\_right, so make sure that any code you use takes this into account.

#### Syntax:

device\_mouse\_dbclick\_enable(bool);

| Argument | Type | Description |
| --- | --- | --- |
| bool | Boolean | Set double-click detection on (true) or off (false). |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if os\_type == os\_windows || os\_type == os\_mac
{
    device\_mouse\_dbclick\_enable(false);
}

The above code checks to see if the device running the game is a Windows PC or a Mac and if it is either of them, it disables the double tap function.