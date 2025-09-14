---
title: "keyboard_virtual_status"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Virtual_Keys_And_Keyboards/keyboard_virtual_status.htm"
converted: "2025-09-14T03:59:59.916Z"
---

# keyboard\_virtual\_status

This function gets the status of the virtual keyboard on the device running the game. The function will return true if the OS virtual keyboard is visible/being shown or false if it is hidden/hiding.

On Windows, this returns whether the runner has disabled IMEs or not (through the functions [keyboard\_virtual\_hide](keyboard_virtual_hide.md) and [keyboard\_virtual\_show](keyboard_virtual_show.md)).

**NOTE** This function is only valid for the **Windows**, **Xbox (GDK)**, **Android** (including **AndroidTV**), and **iOS** (including **tvOS**) target platforms.

#### Syntax

keyboard\_virtual\_status()

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var \_status = keyboard\_virtual\_status();
if (\_status == false)
{
    keyboard\_virtual\_show(kbv\_type\_numbers, kbv\_returnkey\_default, kbv\_autocapitalize\_none, false);
}

The above code will show the OS virtual keyboard if the current status is false.