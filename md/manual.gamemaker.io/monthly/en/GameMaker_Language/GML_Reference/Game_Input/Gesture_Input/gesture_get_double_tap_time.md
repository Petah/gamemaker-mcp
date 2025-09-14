---
title: "gesture_get_double_tap_time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_get_double_tap_time.htm"
converted: "2025-09-14T03:59:58.956Z"
---

# gesture\_get\_double\_tap\_time

This function is used to get the time it takes between two touches/clicks to trigger a [Double Tap Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) event. The time is measured in seconds and has a default value of 0.10.

#### **Syntax:**

gesture\_get\_double\_tap\_time();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (seconds)

#### Example:

if (gesture\_get\_double\_tap\_time() != 0.16)
{
    gesture\_double\_tap\_time(0.16);
}

The above code checks to see if double tap time for gestures is set to 0.16 seconds and if it is not, it sets it to that value.