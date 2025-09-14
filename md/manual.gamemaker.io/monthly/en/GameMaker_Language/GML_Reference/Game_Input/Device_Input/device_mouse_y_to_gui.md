---
title: "device_mouse_y_to_gui"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Device_Input/device_mouse_y_to_gui.htm"
converted: "2025-09-14T03:59:58.350Z"
---

# device\_mouse\_y\_to\_gui

This function returns the y position of the touch on the device in relation to the GUI layer. Since the GUI layer can be set to be a different size independently of the screen resolution _and_ the room size, it can sometimes be complicated to get the exact point on the GUI layer that a user has touched the screen. With this function you can get that position based on the actual GUI size, making GUI buttons and HUD elements easier to create and interact with. If you are running this on a the HTML5 or PC and Mac modules then this value is updated constantly, as long as the device (usually a mouse) is plugged in, however for mobile devices, this will only be updated while the screen is being touched, and note that the maximum number of touches that can be detected will depend very much on the device being used and the OS it runs.

#### Syntax:

device\_mouse\_y\_to\_gui(device);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | The device (from 0 - n) that is being checked. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (device\_mouse\_check\_button(0, mb\_left))
{
    if (device\_mouse\_y\_to\_gui(0) > 0 && device\_mouse\_y\_to\_gui(0) < 32)
    {
        pressed = true;
    }
    else
    {
        pressed = false;
    }
}

The above code checks to see if the device mouse is being pressed and if so it then polls the device x position on the GUI layer to see if it is within the parameters. If it is it sets the variable "pressed" to true, other wise it sets it to false.