---
title: "keyboard_lastchar"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_lastchar.htm"
converted: "2025-09-14T03:59:59.500Z"
---

# keyboard\_lastchar

This variable stores a string of the last key pressed. This variable is _not_ read-only and you can change it, for example to set it to "" (an empty string) if you handled it already.

NOTE On Xbox GDK, this variable will not contain any input. See [this Helpdesk article](https://help.gamemaker.io/hc/en-us/articles/15111170357149) for more info.

#### **Syntax:**

keyboard\_lastchar

#### **Returns:**

[String](../../../GML_Overview/Data_Types.md)

#### **Example:**

if (keyboard\_lastkey != vk\_nokey)
{
    str += keyboard\_lastchar;
    keyboard\_lastkey = vk\_nokey;
}

The above code checks to see if the [keyboard\_lastkey](keyboard_lastkey.md) variable stores a valid key, and if it is it adds whatever the last key was as a string to the variable str.