---
title: "gesture_flick_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_flick_speed.htm"
converted: "2025-09-14T03:59:58.933Z"
---

# gesture\_flick\_speed

This function is used to set the speed required for a [Flick Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) event to be triggered when a touch or click is released. The speed is measured in inches per second and has a default value of 2.0.

#### **Syntax:**

gesture\_flick\_speed(speed);

| Argument | Type | Description |
| --- | --- | --- |
| speed | Real | The speed (in inches per second) to set for flick gesture event detection. |

#### Returns:

N/A

#### Example:

if (gesture\_get\_flick\_speed() != 2)
{
    gesture\_flick\_speed(2);
}

The above code checks to see if the flick speed for gestures is set to 2 inches per second and if it is not it sets it to that value.