---
title: "gamepad_get_option"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_option.htm"
converted: "2025-09-14T03:59:58.629Z"
---

# gamepad\_get\_option

This function can be used to retrieve the given option value. You supply the gamepad "slot" to check, as well as the option string and the function will return the associated value. The available option string will depend on the platform that the project is being run on, as listed below:

| Option | Platform | Description | Returns |
| --- | --- | --- | --- |
| "allow_rotation" | tvOS | Returns whether the Siri Remote will be rotation locked (ie: can only be used vertically) or not. When unlocked, rotating the control will change the input, such that a rotation of 90º to the left will make the "right" side of the touch pad return "up", etc... such that all input will be relative to the orientation of the device | Boolean |
| "dpad_absolute" | tvOS | Returns whether the Siri Remote touchpad accepts absolute input, or relative input. In absolute mode, the center of the touch pad is considered the (0,0) position - ie: where the analog stick is at rest or where the center of the dpad would be - and movement around this position will generate input. When set to relative, then the (0,0) position will be considered as being wherever the initial touch on the pad is made and all input will be generated from that position, not the center of the pad. | Boolean |

#### Syntax:

gamepad\_get\_option(device, option\_name);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| option_name | String | The name of the option to get the value from (a string, see the table above) |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md), [Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md), [String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md), or N/A (depends on platform and option)

#### Example:

for(var i = 0; i < 12; ++i;)
{
    if (gamepad\_is\_connected(i) && gamepad\_get\_description(i) == "tvOS Siri Remote")
    {
        if (gamepad\_get\_option(i, "allow\_rotation") == false)
        {
            gamepad\_set\_option(i, "allow\_rotation", true);
        }
    }
}

The above code loops through all the gamepad slots and checks for the "Siri Remote" on the tvOS platform. If one is detected, it then sets the remote to allow input rotation.