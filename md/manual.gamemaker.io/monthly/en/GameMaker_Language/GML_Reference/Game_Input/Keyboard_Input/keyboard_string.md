---
title: "keyboard_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_string.htm"
converted: "2025-09-14T03:59:59.558Z"
---

# keyboard\_string

This variable holds a string containing the last (at most) 1024 characters typed on the keyboard. This string will only contain printable characters typed, but it _will_ correctly respond to pressing the backspace key by erasing the last character. This variable is _not_ read only and you can change it, for example to set it to "" (an empty string) if you handled it already, and you can use the [String Functions](../../Strings/Strings.md) to manipulate it.

NOTE When using the on-screen [Virtual Keyboard](../Virtual_Keys_And_Keyboards/Virtual_Keys_And_Keyboards.md), _only_ this variable will be updated with the keyboard input.

NOTE On Xbox GDK, this variable will only function when using the [virtual keyboard](../Virtual_Keys_And_Keyboards/keyboard_virtual_show.md). See [this Helpdesk article](https://help.gamemaker.io/hc/en-us/articles/15111170357149) for more info.

#### **Syntax:**

keyboard\_string

#### **Returns:**

[String](../../../GML_Overview/Data_Types.md)

#### **Example:**

if string\_length(keyboard\_string) > 15
{
    keyboard\_string = string\_copy(keyboard\_string, 1, 15);
}

The above code will limit the length of the keyboard string to 15 characters, removing those that are over that limit by copying the first fifteen characters back into the variable.