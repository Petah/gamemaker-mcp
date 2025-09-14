---
title: "keyboard_virtual_hide"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Virtual_Keys_And_Keyboards/keyboard_virtual_hide.htm"
converted: "2025-09-14T03:59:59.860Z"
---

# keyboard\_virtual\_hide

This function can be used to hide the virtual keyboard on the device running the game.

On Windows, this function disables the use of IMEs, which can then be re-enabled by calling [keyboard\_virtual\_show](keyboard_virtual_show.md).

**NOTE** This function is only valid for the **Windows**, **Xbox (GDK)**, **Android** (including **AndroidTV**), and **iOS** (including **tvOS**) target platforms.

For virtual keyboard use, calling this function will generate a [System Asynchronous Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md), in which the async\_load DS map will be populated with the following key/value pairs:

-   "**event\_type**" - this will be "**virtual keyboard status**" when triggered by virtual keyboard functions.
-   "**screen\_height**" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible.
-   "**keyboard\_status**" - the current status of the keyboard, returned as one of the following strings:
    -   "hiding"
    -   "hidden"
    -   "showing"
    -   "visible"

#### Syntax

keyboard\_virtual\_hide();

#### Returns:

N/A

#### Example:

if (input == true)
{
    input = false;
    keyboard\_virtual\_hide();
}

The above code will hide the OS virtual keyboard if the given variable is not set to false.