---
title: "gesture_rotate_angle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_rotate_angle.htm"
converted: "2025-09-14T03:59:59.179Z"
---

# gesture\_rotate\_angle

This function is used to set the angle which a pair of touches must exceed in order to trigger a [Rotate Start Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md). The angle is measured in degrees and has a default value of 5°.

#### **Syntax:**

gesture\_rotate\_angle();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (inches)

#### Example:

if (gesture\_get\_rotate\_angle() != 5)
{
    gesture\_rotate\_angle(5);
}

The above code checks to see if rotation angle for gestures is set to 5° and if it is not it sets it to that value.