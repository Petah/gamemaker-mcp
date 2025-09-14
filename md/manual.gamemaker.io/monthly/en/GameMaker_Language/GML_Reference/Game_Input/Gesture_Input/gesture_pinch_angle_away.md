---
title: "gesture_pinch_angle_away"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_pinch_angle_away.htm"
converted: "2025-09-14T03:59:59.146Z"
---

# gesture\_pinch\_angle\_away

This function is used to set the angle within which a touch must be moving away from another touch before a [Pinch Out Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) may potentially be started. The angle is measured in degrees and has a default value of 45°.

#### **Syntax:**

gesture\_pinch\_angle\_away();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (inches)

#### Example:

if (gesture\_get\_pinch\_angle\_away() != 45)
{
    gesture\_pinch\_angle\_away(45);
}

The above code checks to see if the pinch out angle for gestures is set to 45° and if it is not it sets it to that value