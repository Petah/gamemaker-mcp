---
title: "gesture_get_rotate_angle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_get_rotate_angle.htm"
converted: "2025-09-14T03:59:59.107Z"
---

# gesture\_get\_rotate\_time

This function is used to get the angle which a pair of touches must exceed in order to trigger a [Rotate Start Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md). The angle is measured in degrees and has a default value of 5°.

#### **Syntax:**

gesture\_get\_rotate\_angle();

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (inches)

#### Example:

if (gesture\_get\_rotate\_angle() != 5)
{
    gesture\_rotate\_angle(5);
}

The above code checks to see if rotation angle for gestures is set to 5° and if it is not it sets it to that value.