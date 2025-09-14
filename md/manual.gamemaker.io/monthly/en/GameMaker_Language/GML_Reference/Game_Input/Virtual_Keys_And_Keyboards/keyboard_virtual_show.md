---
title: "keyboard_virtual_show"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Virtual_Keys_And_Keyboards/keyboard_virtual_show.htm"
converted: "2025-09-14T03:59:59.901Z"
---

# keyboard\_virtual\_show

This function can be used to show the virtual keyboard on the device running the game. See [Virtual Keyboard](Virtual_Keys_And_Keyboards.htm#h) for information on platform support.

On Windows, this function is used to enable the use of IMEs after they have been disabled with [keyboard\_virtual\_hide](keyboard_virtual_hide.md). In that case, none of the arguments are used and you can pass undefined to all of them.

**NOTE** This function is only valid for the **Windows**, **Xbox (GDK)**, **Android** (including **AndroidTV**), and **iOS** (including **tvOS**) target platforms.

For virtual keyboard use, you need to provide one of the following constants for each of the first three arguments:

-   **Keyboard type**: This constant is used to set which keyset will be available on the virtual keyboard. The available keyboard types are:

| Virtual Keyboard Type Constant |
| --- |
| Keyboard Type | Description |
| kbv_type_default | The default keyboard type for the current system. |
| kbv_type_ascii | An ASCII-only keyboard. |
| kbv_type_url | A normal keyboard optimized for URL entry. Usually features a ".com" or other domain keys, as well as "/" and "." keys. |
| kbv_type_email | A normal keyboard optimized for e-mail entry. Usually features "@" and "." characters. |
| kbv_type_numbers | A numbers-only keyboard, usually displayed as a number pad. |
| kbv_type_phone | A phone pad keyboard. Usually numbers-only with the "*" and "#" keys. |
| kbv_type_phone_name | A keyboard optimized for entering both a phone number and a name. Usually similar to an ASCII keyboard, but with a limited special characters selection. |

-   **Return type**: This constant is used to set what is shown on the return/action key of the virtual keyboard. The available return types are:

| Virtual Keyboard Return Type Constant |
| --- |
| Return Type | Description |
| kbv_returnkey_default | The default return key title for the current system. |
| kbv_returnkey_go | Sets the return key title to "Go". |
| kbv_returnkey_google | Sets the return key title to "Google", or to a generic search icon in some cases. |
| kbv_returnkey_join | Sets the return key title to "Go". |
| kbv_returnkey_next | Sets the return key title to "Next". |
| kbv_returnkey_route | Sets the return key title to "Route". |
| kbv_returnkey_search | Sets the return key title to "Search", or to a generic search icon in some cases. |
| kbv_returnkey_send | Sets the return key title to "Send". |
| kbv_returnkey_yahoo | Sets the return key title to "Yahoo", or to a generic search icon in some cases. |
| kbv_returnkey_done | Sets the return key title to "Done". |
| kbv_returnkey_continue | Sets the return key title to "Continue". |
| kbv_returnkey_emergency | Sets the return key title to "Emergency Call". |

-   **Autocapitalization type**: This constant is used to determine how the words typed via the virtual keyboard should be autocapitalized. The available autocapitalization types are:

| Virtual Keyboard Autocapitalization Type Constant |
| --- |
| Autocapitalization Type | Description |
| kbv_autocapitalize_none | Autocapitalization is disabled. |
| kbv_autocapitalize_words | Words will be auto-capitalized. |
| kbv_autocapitalize_sentences | Sentences will be auto-capitalized. |
| kbv_autocapitalize_characters | All characters will be capitalized. |

The last argument is to enable/disable predictive text, and this would be set to true to permit it, and false otherwise, but note that just because it is permitted doesn't mean that it will be used as that will depend on the preferences of the user on the device. When in predictive text mode, the virtual keyboard will not generate normal GameMaker keypress events. Instead, it will only update the _last_ character pressed and keyboard string variables. This is due to the inability to detect whether a change in the internal text field used for detecting key presses came from an actual virtual keyboard key, or a text suggestion. In these cases you would want to read the keyboard\_string input as opposed to reading any kind of raw key input.

It is important to note too that the user will get different keyboards with different capabilities depending on the platform OS, with the following caveats for use per target:

-   **Android**: On Android, the keyboard type kbv\_type\_phone\_name is not supported and will display an ASCII keyboard instead, and the return key type can only be kbv\_returnkey\_go, kbv\_returnkey\_search, kbv\_returnkey\_next, kbv\_returnkey\_send or kbv\_returnkey\_done. If other return key types are used on that platform, the system will default to the replacement return keys listed below:

| Unavailable return key | Replacement key |
| --- | --- |
| kbv_returnkey_googlekbv_returnkey_yahoo | kbv_returnkey_search |
| kbv_returnkey_joinkbv_returnkey_routekbv_returnkey_emergency | kbv_returnkey_go |
| kbv_returnkey_continue | kbv_returnkey_next |

-   **AndroidTV / FireTV**: Custom return key types are _not_ supported on ASCII keyboards - the default return key will always be displayed.

-   **tvOS**: Predictive text and auto-capitalization are not supported on tvOS, and the height of the keyboard returned by system events and the function keyboard\_virtual\_height() will default to the screen height due to it spanning the entire screen and due to keyboard rect dimension functions being disabled on tvOS. Also note that physical (Bluetooth) keyboard events will not be broadcast unless the virtual keyboard has been opened.
-   **Xbox GDK**: See [this Helpdesk article](https://help.gamemaker.io/hc/en-us/articles/15111170357149)

Calling this function will generate a [System Asynchronous Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md), in which the async\_load DS map will be populated with the following key/value pairs:

-   "**event\_type**" - this will be "**virtual keyboard status**" when triggered by virtual keyboard functions.

-   "**screen\_height**" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible.

-   "**keyboard\_status**" - the current status of the keyboard, returned as one of the following strings:
    -   "hiding"
    -   "hidden"
    -   "showing"
    -   "visible"

#### Syntax

keyboard\_virtual\_show(keyboard\_type, return\_key\_type, autocapitalization\_type, predictive\_text\_enabled);

| Argument | Type | Description |
| --- | --- | --- |
| keyboard_type | Virtual Keyboard Type Constant | Determines the keyset available on the virtual keyboard (see tables at the top). |
| return_key_type | Virtual Keyboard Return Type Constant | Determines what is shown on the return/action key of the virtual keyboard (see tables at the top). |
| autocapitalization_type | Virtual Keyboard Autocapitalization Type Constant | Determines how/if the words typed via the virtual keyboard will be autocapitalized (see tables at the top). |
| predictive_text_enabled | Boolean | Set to true/false to enable/disable predictive text input. |

#### Returns:

N/A

#### Example:

if (input == false)
{
    input = true;
    keyboard\_virtual\_show(kbv\_type\_numbers, kbv\_returnkey\_default, kbv\_autocapitalize\_none, false);
}

The above code will bring up the OS virtual keyboard if the given variable is not set to true.