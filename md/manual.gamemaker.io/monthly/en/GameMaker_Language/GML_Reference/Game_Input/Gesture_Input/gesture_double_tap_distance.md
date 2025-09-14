---
title: "gesture_double_tap_distance"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_double_tap_distance.htm"
converted: "2025-09-14T03:59:58.870Z"
---

# gesture\_double\_tap\_distance

This function is used to set the distance within which you have to touch/click the screen again after a single tap in order to trigger a [Double Tap Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md). The distance is measured in inches and has a default value of 0.1.

#### Syntax:

gesture\_double\_tap\_distance(distance);

| Argument | Type | Description |
| --- | --- | --- |
| distance | Real | The distance (in inches) to set for double tap gesture event detection. |

#### Returns:

N/A

#### Example:

if (gesture\_get\_double\_tap\_distance() != 0.1)
{
    gesture\_get\_double\_tap\_distance(0.1);
}

The above code checks to see if double tap distance for gestures is set to 0.1 inches and if it is not it sets it to that value.