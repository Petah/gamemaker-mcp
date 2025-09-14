---
title: "gesture_drag_distance"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_drag_distance.htm"
converted: "2025-09-14T03:59:58.901Z"
---

# gesture\_drag\_distance

This function is used to set the distance it takes for a [Dragging Gesture](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) event to be triggered by the movement of a touch or click. The distance is measured in inches and has a default value of 0.1.

#### **Syntax:**

gesture\_drag\_distance(distance);

| Argument | Type | Description |
| --- | --- | --- |
| distance | Real | The distance (in inches) to set for drag gesture event detection. |

#### Returns:

N/A

#### Example:

if (gesture\_get\_drag\_distance() != 0.1)
{
    gesture\_drag\_distance(0.1);
}

The above code checks to see if the drag distance for gestures is set to 0.1 inches and if it is not it sets it to that value.