---
title: "device_is_keypad_open"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Device_Input/device_is_keypad_open.htm"
converted: "2025-09-14T03:59:58.197Z"
---

# device\_is\_keypad\_open

This does a check of the device for a keypad and if one is available it returns true otherwise it returns false. Please note that this function is mainly for use with Android devices

For those users with a _Sony Xperia Play_, there is a set button/key map setup within GameMaker, so you can use the [keyboard constants](../Keyboard_Input/Keyboard_Input.md) **vk\_up**, **vk\_down**, **vk\_left**, **vk\_right** for the joypad keys and _Triangle_ is ord("T"), _Square_ is ord("S"), _Circle_ is **vk\_alt** + **vk\_backspace** while the _back_ button is simply vk\_backspace, _Cross_ is **vk\_space**, _Select_ is **vk\_return** and _Start_ is **vk\_rshift**, the _L Trigger_ is ord("L") and _R Trigger_ is ord("R").

#### Syntax:

device\_is\_keypad\_open

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (device\_is\_keypad\_open())
{
     global.Setting = 2;
}
else
{
     global.Setting = 1;
}

The above code checks for a keypad then changes a global variable depending on the returned value.