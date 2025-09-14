---
title: "gamepad_get_guid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_guid.htm"
converted: "2025-09-14T03:59:58.594Z"
---

# gamepad\_get\_guid

With this function you can retrieve the GUID for the gamepad connected to the given slot index. You supply the gamepad slot to check (from 0 - 11), and the function will return one of the following strings:

-   "**none**" if no GUID is available or no gamepad is connected
-   "**device index out of range**" if the gamepad slot index is out of range
-   The GUID string, something like "050000005e040000fd020000ffff3f00", if the slot has a gamepad assigned and can get the GUID for it

This function would usually be used in conjunction with [gamepad\_get\_description()](gamepad_get_description.md) to generate part of the SDL string required for remapping controllers on Windows, Android and macOS.

| Platform-Specific Notes |
| --- |
| Platform | Note |
| GX.games | On the GX.games target platform, this function will always return "none" for non-DirectInput devices |

#### Syntax:

gamepad\_get\_guid(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | Which gamepad "slot" index to check |

#### Returns:

[String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_guid = gamepad\_get\_guid(global.PadIndex);
var \_desc = gamepad\_get\_description(global.PadIndex);
global.GamepadID = \_guid + "," + \_desc;

The above code gets the GUID and name description strings, then concatenates them and stores the final string in a global variable for future reference.