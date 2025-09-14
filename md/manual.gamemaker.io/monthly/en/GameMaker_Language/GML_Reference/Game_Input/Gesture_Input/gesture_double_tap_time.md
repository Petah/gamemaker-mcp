---
title: "gesture_double_tap_time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_double_tap_time.htm"
converted: "2025-09-14T03:59:58.885Z"
---

# gesture\_double\_tap\_time

This function is used to set the time it takes between two touches/clicks to trigger a [Double Tap Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) event. The time is measured in seconds and has a default value of 0.16.

#### **Syntax:**

gesture\_double\_tap\_time(time);

| Argument | Type | Description |
| --- | --- | --- |
| time | Real | The time (in seconds) to set for double tap gesture event detection. |

#### Returns:

N/A

#### Example:

if (gesture\_get\_double\_tap\_time() != 0.16)
{
    gesture\_get\_double\_tap\_time(0.16);
}

The above code checks to see if double tap time for gestures is set to 0.16 seconds and if it is not it sets it to that value.