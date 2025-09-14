---
title: "gamepad_set_vibration"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_set_vibration.htm"
converted: "2025-09-14T03:59:58.789Z"
---

# gamepad\_set\_vibration

With this function you can set the vibration of the gamepad motors, with either motor using a value from 0 (no vibration) to 1 (full vibration). Note that there is no time limit on this function, so you will need to use a variable or an alarm to switch off the vibration (set motors to 0) after a given time has passed, otherwise the gamepad will continue to vibrate indefinitely.

NOTE This function is currently only available for the standard **Windows**, **PS4** and **Xbox One** target modules.

NOTE **PlayStation**: [A note for this function is available.](https://github.com/GameMakerEnterprise/GMS2-Runner-PS4/wiki/Function-Notes#gamepad_set_vibration)

#### Syntax:

gamepad\_set\_vibration(device, left\_motor, right\_motor);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| left_motor | Real | The amount of vibration from the left motor from 0 to 1. |
| right_motor | Real | The amount of vibration from the right motor from 0 to 1. |

#### Returns:

N/A

#### Example:

if (lives == 0)
{
    gamepad\_set\_vibration(0, 1, 1);
    alarm\[0\] = game\_get\_speed(gamespeed\_fps) / 2;
}

The above code would be used (for example) in a collision event to make the gamepad plugged into "slot" 0 vibrate for half a second, with the alarm that is set being used to switch it off again once that time has passed.