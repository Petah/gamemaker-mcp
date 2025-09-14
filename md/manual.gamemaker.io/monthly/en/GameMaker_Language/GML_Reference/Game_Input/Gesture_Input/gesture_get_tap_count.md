---
title: "gesture_get_tap_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_get_tap_count.htm"
converted: "2025-09-14T03:59:59.131Z"
---

# gesture\_get\_tap\_count

This function is used to check whether tap counting is enabled or disabled. The function will return true if it is enabled, and false otherwise and you can enable or disable tap counting using the function [gesture\_tap\_count()](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_tap_count.md). When enabled, each tap event will have an additional "tapcount" DS map entry which will have registered the number of taps, and when enabled it means that _all_ tap events will be triggered, ie: two taps will trigger both the single tap event and the double tap event, with the single tap event tap count being 1 and the double tap event tap count being 2. The tap count value will be reset to 0 after the time set for a double-tap detection has passed (see the function [gesture\_double\_tap\_time()](gesture_get_double_tap_time.md)). If tap counting is disabled, then the initial tap won't be registered until the double-tap time has passed and no second tap has been detected. Note that this is **enabled** by default.

#### **Syntax:**

gesture\_get\_tap\_count();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!gesture\_get\_tap\_count())
{
    getsure\_tap\_count(true);
}

The above code checks to see if tap counting is enabled and if it is not then it is switched on.