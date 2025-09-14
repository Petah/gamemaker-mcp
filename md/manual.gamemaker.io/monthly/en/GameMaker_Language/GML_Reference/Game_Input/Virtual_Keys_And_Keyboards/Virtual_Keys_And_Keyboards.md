---
title: "Virtual Keys And Virtual Keyboards"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Virtual_Keys_And_Keyboards/Virtual_Keys_And_Keyboards.htm"
converted: "2025-09-14T03:59:59.834Z"
---

# Virtual Keys And Virtual Keyboards

When developing games for touchscreen devices, it's often important to get keyboard input from the user. When using GameMaker this can be done in one of two ways:

-   Create your own on-screen **virtual keys** to get input
-   Pop up the OS **virtual keyboard** and get input from that

What you use will depend very much on the game and what you need, but in general you would use virtual keys when you want to have onscreen buttons for player control or for menus, while you'd use the virtual keyboard when you need player input, like getting a name or setting a value.

## Virtual Keys

In order for your games to work properly on mobile devices with a touch screen, you may need to be able to assign areas of the screen to respond to certain things when they are touched by the user. This is done by assigning a "virtual key" to an internally mapped standard keyboard key and then using the keyboard events that they generate to control your application. It is worth noting that these "virtual keys" are mapped to the _screen_ position rather than room position and so the x/y values are absolute, based on the display size. This means that you don't need to worry about the use of views or the relative room coordinates, and can simply define the keys in the Create Event of an object (you only need to define a virtual key once per-room), then draw your key sprites in the [Draw GUI Event](../../../../The_Asset_Editors/Object_Properties/Draw_Events.md), sizing the GUI layer to be the same as the screen.

NOTE These functions will not work on the Windows, Ubuntu (Linux), nor the MacOS, target platforms using a touch screen, although they will receive mouse clicks as "touches".

NOTE These functions are supported on the HTML5 and GX.games targets.

The available virtual key functions are:

-   [virtual\_key\_add](virtual_key_add.md)
-   [virtual\_key\_show](virtual_key_show.md)
-   [virtual\_key\_hide](virtual_key_hide.md)
-   [virtual\_key\_delete](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Virtual_Keys_And_Keyboards/virtual_key_delete.md)

## Virtual Keyboard

If you require text or numeric input in your game on a touchscreen device, then you can use the **virtual keyboard** functions provided to use the device OS keyboard. These functions will call up or hide the OS keyboard and accept input from it, however it will _not_ trigger the regular keyboard events, but rather update the [keyboard\_string](../Keyboard_Input/keyboard_string.md) variable with the user input (this is due to the fact that the virtual keyboard can input whole words and not just single characters).

Opening or closing the virtual keyboard will generate [System Asynchronous Events](../../../../The_Asset_Editors/Object_Properties/Async_Events.md), in which the [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map will be populated with the following key/value pairs:

-   "**event\_type**" - the type of system event received, which will be "virtual keyboard status" for virtual keyboards.
-   "**screen\_height**" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible.
-   "**keyboard\_status**" - the current status of the keyboard, returned as one of the following strings:
    -   "hiding"
    -   "hidden"
    -   "showing"
    -   "visible"

The available virtual keyboard functions are:

**NOTE** These functions are only valid for the **Xbox (GDK)**, **Android** (including **AndroidTV**), and **iOS** (including **tvOS**) target platforms. On **Windows**, they can be used to enable or disable the use of IMEs.

-   [keyboard\_virtual\_show](keyboard_virtual_show.md)
-   [keyboard\_virtual\_hide](keyboard_virtual_hide.md)
-   [keyboard\_virtual\_status](keyboard_virtual_status.md)
-   [keyboard\_virtual\_height](keyboard_virtual_height.md)