---
title: "device_get_tilt_z"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Device_Input/device_get_tilt_z.htm"
converted: "2025-09-14T03:59:58.184Z"
---

# device\_get\_tilt\_z

This function returns a value between -1 and 1 depending on the angle of "tilt" of the device. The actual correlation between degrees of tilt and the value returned depends on the device and OS that it uses, but generally a value of 1 or -1 is the same as +/-90°. The image below shows how each if the available functions relates to the device:

![Tilt X/Y/Z on mobile devices](../../../../assets/Images/Scripting_Reference/GML/Reference/Game_Input/Tilt_Image.png)

#### Syntax:

device\_get\_tilt\_z()

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

y += sign(device\_get\_tilt\_z());

The above code uses the tilt value to move the player along the y axis.