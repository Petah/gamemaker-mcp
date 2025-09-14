---
title: "gamepad_get_mapping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_mapping.htm"
converted: "2025-09-14T03:59:58.609Z"
---

# gamepad\_get\_mapping

This function can be used to retrieve the mapping string for the gamepad. This string will be either:

-   The current map string for the gamepad, for example:

    "050000005e040000fd020000ffff3f00,Xbox Wireless Controller,a:b0,b:b1,start:b4,dpdown:h0.4,dpleft:h0.8,dpright:h0.2,dpup:h0.1,guide:b6,leftshoulder:b9,leftstick:b7,lefttrigger:a4,leftx:a0,lefty:a1,rightshoulder:b10,rightstick:b8,righttrigger:a5,rightx:a2,righty:a3,x:b2,y:b3,platform:android"

-   A string with "no mapping" if there is no mapping set (this is _not_ the same as when no mapping is available)
-   A string with "device index out of range" if the slot index is not a valid gamepad index
-   An empty string "" if no mapping is available for the connected gamepad

For more information on the formatting of the returned map string, please see the function [gamepad\_test\_mapping](gamepad_test_mapping.md).

#### Syntax:

gamepad\_get\_mapping(index)

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The gamepad index "slot" to get the mapping from |

#### Returns:

[String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_gpMap = gamepad\_get\_mapping(global.PadIndex);
show\_debug\_message("Gamepad Mapping = " + \_gpMap);

The above code get the map string for the given gamepad slot, and then output it to the console for debugging.