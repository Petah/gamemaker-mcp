---
title: "keyboard_get_numlock"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_get_numlock.htm"
converted: "2025-09-14T03:59:59.441Z"
---

# keyboard\_get\_numlock

You can use this function to find the status of the keypad number lock with **true** being returned for on, and **false** returned for off.

**NOTE** This functionality is only available in the Windows exe builds and will not function on any other device.

#### **Syntax:**

keyboard\_get\_numlock();

#### **Returns:**

[Boolean](../../../GML_Overview/Data_Types.md)

#### **Example:**

if (keyboard\_get\_numlock())
{
    keyboard\_set\_numlock(false);
}
else
{
    keyboard\_set\_numlock(true);
}

The above example code will get the state of the numberlock key and if it is on (true) it will set it to off (false) and vice versa.