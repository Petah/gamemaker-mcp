---
title: "gamepad_is_supported"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_is_supported.htm"
converted: "2025-09-14T03:59:58.686Z"
---

# gamepad\_is\_supported

With this function you can find out whether the target platform supports game pads (returns true) or not (returns false).

#### Syntax:

gamepad\_is\_supported();

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

global.GP = gamepad\_is\_supported();

The above code checks to see if a gamepad is supported and stores the return value in a global variable for future checks.