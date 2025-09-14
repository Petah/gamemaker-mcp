---
title: "gesture_pinch_angle_towards"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_pinch_angle_towards.htm"
converted: "2025-09-14T03:59:59.158Z"
---

# gesture\_pinch\_angle\_towards

This function is used to set the angle within which a touch must be moving towards another touch before a [Pinch In Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) may potentially be started. The angle is measured in degrees and has a default value of 45°.

#### **Syntax:**

gesture\_pinch\_angle\_towards();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (inches)

#### Example:

if (gesture\_get\_pinch\_angle\_towards() != 45)
{
    gesture\_pinch\_angle\_towards(45);
}

The above code checks to see if the pinch in angle for gestures is set to 45° and if it is not it sets it to that value.