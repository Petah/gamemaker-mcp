---
title: "device_mouse_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Device_Input/device_mouse_y.htm"
converted: "2025-09-14T03:59:58.336Z"
---

# device\_mouse\_y

This function returns the y position of a touch on the device. If you are running this on a the HTML5 or PC and Mac modules then this value is updated constantly, as long as the device (usually a mouse) is plugged in, however for mobile devices, this will only be updated while the screen is being touched and note that the maximum number of touches that can be detected will depend very much on the device being used and the OS it runs.

#### Syntax:

device\_mouse\_y(device);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | The device (from 0 - n) that is being checked. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (device\_mouse\_check\_button(0, mb\_left))
{
    if (device\_mouse\_y(0) > y-32 && device\_mouse\_y(0) < y+32)
    {
        pressed = true;
    }
    else
    {
        pressed = false;
    }
}

The above code checks to see if the device is being pressed and if so it then polls the device y position to see if it is within the parameters. If it is it sets the variable "pressed" to true, other wise it sets it to false.