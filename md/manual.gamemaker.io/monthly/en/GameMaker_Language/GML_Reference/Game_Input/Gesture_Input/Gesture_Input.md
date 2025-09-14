---
title: "Gesture Input"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/Gesture_Input.htm"
converted: "2025-09-14T03:59:58.845Z"
---

# Gesture Input

The [Device Input](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/Device_Input.md) functions are all fine and well for dealing with simple on-screen touches or getting device orientation, but sometimes you'll want your projects to detect more complex things, like being able to drag or "flick" an instance across a room. These things _can_ be done with the Device functions, but to make things easier GameMaker has a complete range of [Gesture Events](../../../../../../../The_Asset_Editors/Object_Properties/Gesture_Events.md) to detect double taps, dragging, flicks, pinches and rotations, at both an instance and a global level, as well as return information about the event. The functions listed here are all designed to give you greater control over how and when these events will be triggered.

IMPORTANT These functions will not work on the HTML5 target platform. They will not give an error if used, but instead will simply be ignored.

The following different gesture function are available:

-   [gesture\_get\_drag\_time](gesture_get_drag_time.md)
-   [gesture\_get\_drag\_distance](gesture_get_drag_distance.md)
-   [gesture\_get\_flick\_speed](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_get_flick_speed.md)
-   [gesture\_get\_double\_tap\_time](gesture_get_double_tap_time.md)
-   [gesture\_get\_double\_tap\_distance](gesture_get_double_tap_distance.md)
-   [gesture\_get\_tap\_count](gesture_get_tap_count.md)
-   [gesture\_get\_pinch\_distance](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_get_pinch_distance.md)
-   [gesture\_get\_pinch\_angle\_towards](gesture_get_pinch_angle_towards.md)
-   [gesture\_get\_pinch\_angle\_away](gesture_get_pinch_angle_away.md)
-   [gesture\_get\_rotate\_time](gesture_get_rotate_time.md)
-   [gesture\_get\_rotate\_angle](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_get_rotate_angle.md)
-   [gesture\_drag\_time](gesture_drag_time.md)
-   [gesture\_drag\_distance](gesture_drag_distance.md)
-   [gesture\_flick\_speed](gesture_flick_speed.md)
-   [gesture\_double\_tap\_time](gesture_double_tap_time.md)
-   [gesture\_double\_tap\_distance](gesture_double_tap_distance.md)
-   [gesture\_tap\_count](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_tap_count.md)
-   [gesture\_pinch\_distance](gesture_pinch_distance.md)
-   [gesture\_pinch\_angle\_towards](gesture_pinch_angle_towards.md)
-   [gesture\_pinch\_angle\_away](gesture_pinch_angle_away.md)
-   [gesture\_rotate\_time](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/gesture_rotate_time.md)
-   [gesture\_rotate\_angle](gesture_rotate_angle.md)