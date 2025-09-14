---
title: "event_perform"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_perform.htm"
converted: "2025-09-14T03:59:34.188Z"
---

# event\_perform

This function will perform the code in the specified event, with the designated argument, for the instance running the code. There are many options here which allow complete simulation of all possible events, but note that this literally just performs all the code in the event; the game will not modify anything to make it trigger itself manually.

For example if you choose to perform a keyboard press event ev\_keypress, the event will be triggered but the relevant key will not be recognised as having been pressed. Or if you perform an alarm event ev\_alarm, the alarm counter will not be set to -1 but rather continue to count down.

NOTE Asynchronous events can be called using [event\_perform\_async](event_perform_async.md).

The table below outlines all the constants that are included in GameMaker for referencing event _types_, as well as their _number_ value. The events themselves are marked in **bold text** and are the same as the return values of the [event\_type](event_type.md) variable (to be passed into the first argument of this function), while their number values are marked with _italic text_ and are the same as the return values for the [event\_number](event_number.md) variable (to be passed into the second argument of this function):

| Event Type Constant & Event Number Constant |
| --- |
| Constant | Description |
| ev_create | Create event |
| ev_destroy | Destroy event |
| ev_cleanup | Clean Up Event |
| ev_step | Step event |
| ---- ev_step_normal | Step |
| ---- ev_step_begin | Begin Step |
| ---- ev_step_end | End Step |
| ev_alarm | Alarm event |
| ---- 0 ... 11 | The number relevant to which of the 12 alarms you wish to trigger the event of |
| ev_keyboard, ev_keypress, ev_keyrelease | Keyboard/Keyboard Pressed/Keyboard Released |
| ---- any key code | vk_space or ord("W") for example. |
| ev_mouse | Mouse event |
| ---- ev_left_button | Left button held down on object |
| ---- ev_right_button | Right button held down on object |
| ---- ev_middle_button | Middle button (or clickable wheel) held down on object |
| ---- ev_no_button | No buttons held down |
| ---- ev_left_press | Left button just pressed on object |
| ---- ev_right_press | Right button just pressed on object |
| ---- ev_middle_press | Middle button (or clickable wheel) just pressed on object |
| ---- ev_left_release | Left button just released on object |
| ---- ev_right_release | Right button just released on object |
| ---- ev_middle_release | Middle button just released on object |
| ---- ev_mouse_enter | Mouse just entered object's bounding box |
| ---- ev_mouse_leave | Mouse just left object's bounding box |
| ---- ev_mouse_wheel_up | Mouse wheel scrolled upwards |
| ---- ev_mouse_wheel_down | Mouse wheel scrolled downwards |
| ---- ev_global_left_button | Left button held down anywhere |
| ---- ev_global_right_button | Right button held down anywhere |
| ---- ev_global_middle_button | Middle button (or clickable wheel) held down anywhere |
| ---- ev_global_left_press | Left button just pressed anywhere |
| ---- ev_global_right_press | Right button just pressed anywhere |
| ---- ev_global_middle_press | Middle button (or clickable wheel) just pressed anywhere |
| ---- ev_global_left_release | Left button just released anywhere |
| ---- ev_global_right_release | Right button just released anywhere |
| ---- ev_global_middle_release | Middle button just released anywhere |
| ev_gesture | A gesture event (Tap, Drag, Flick, Pinch or Rotate) |
| ---- ev_gesture_tap | A single click/touch and release has been detected for an instance |
| ---- ev_gesture_double_tap | Two quick touches/clicks and releases have been detected for an instance |
| ---- ev_gesture_drag_start | The beginning of a drag gesture has been detected for an instance |
| ---- ev_gesture_dragging | A touch/click has been held and moved for an instance |
| ---- ev_gesture_drag_end | The release of the touch/click from a drag has been detected for an instance |
| ---- ev_gesture_flick | The release of a touch/click from a drag had enough movement for a flick event to be detected for the instance |
| ---- ev_gesture_pinch_start | Two touches and a straight movement have been detected for an instance |
| ---- ev_gesture_pinch_in | The movement between two touches for an instance has been detected as inwards |
| ---- ev_gesture_pinch_out | The movement between two touches for an instance has been detected as outwards |
| ---- ev_gesture_pinch_end | The release of one (or both) touches for a pinch has been detected for an instance |
| ---- ev_gesture_rotate_start | The movement between two touches for an instance has been detected as a rotation |
| ---- ev_gesture_rotating | The movement between two touches for an instance has been detected as rotating |
| ---- ev_gesture_rotate_end | The release of one (or both) touches for a rotation has been detected for an instance |
| ---- ev_global_gesture_tap | A single click/touch and release has been detected anywhere in the room |
| ---- ev_global_gesture_double_tap | Two quick touches/clicks and releases have been detected anywhere in the room |
| ---- ev_global_gesture_drag_start | The beginning of a drag gesture has been detected anywhere in the room |
| ---- ev_global_gesture_dragging | A touch/click has been held and moved anywhere in the room |
| ---- ev_global_gesture_drag_end | The release of the touch/click from a drag has been detected anywhere in the room |
| ---- ev_global_gesture_flick | The release of a touch/click from a drag had enough movement for a flick event to be detected anywhere in the room |
| ---- ev_global_gesture_pinch_start | Two touches and a straight movement have been detected anywhere in the room |
| ---- ev_global_gesture_pinch_in | The movement between two touches anywhere in the room has been detected as inwards |
| ---- ev_global_gesture_pinch_out | The movement between two touches anywhere in the room has been detected as outwards |
| ---- ev_global_gesture_pinch_end | The release of one (or both) touches for a pinch has been detected anywhere in the room |
| ---- ev_global_gesture_rotate_start | The movement between two touches anywhere in the room has been detected as a rotation |
| ---- ev_global_gesture_rotating | The movement between two touches anywhere in the room has been detected as rotating |
| ---- ev_global_gesture_rotate_end | The release of one (or both) touches for a rotation has been detected anywhere in the room |
| ev_collision | Collision with an object |
| ---- The index of the object to check. | obj_enemy for example. |
| ev_other | One of the actions listed under 'Other' |
| ---- ev_outside | Whether the instance is outside of the room |
| ---- ev_boundary | Whether the instance is intersecting the boundary |
| ---- ev_outside_view0...7 | Whether the instance is outside the given view (0 to 7) |
| ---- ev_boundary_view0...7 | Whether the instance is interesecting with the boundary of the given view (0 to 7) |
| ---- ev_game_start | Only triggered at the start of the game |
| ---- ev_game_end | Only triggered at the end of the game |
| ---- ev_room_start | Only triggered at the start of a room |
| ---- ev_room_end | Only triggered at the end of a room |
| ---- ev_animation_end | If the object's sprite has reached the end of its animation |
| ---- ev_animation_update | Animation event that runs every step for objects that use skeletal animations |
| ---- ev_animation_event | Animation event that runs for skeletal animations as assigned in the skeletal animation tool |
| ---- ev_end_of_path | If the object has reached the end of a path it is following |
| ---- ev_user0... ev_user15 | One of the 16 available user events. |
| ---- ev_broadcast_message | Broadcast Message event used for sprites and sequences |
| ev_draw | Draw event. NOTE This event cannot be forced outside of a draw event and the constants are only for identifying the event when performed in these cases. |
| ---- ev_draw_normal | The normal draw event. |
| ---- ev_draw_begin | The draw begin event. |
| ---- ev_draw_end | The draw end event. |
| ---- ev_draw_pre | The pre draw event. |
| ---- ev_draw_post | The post draw event. |
| ---- ev_gui | The draw gui event. |
| ---- ev_gui_begin | The draw gui begin event. |
| ---- ev_gui_end | The draw gui end event. |

#### Syntax:

event\_perform(type, numb);

| Argument | Type | Description |
| --- | --- | --- |
| type | Event Type Constant | The type of event to perform (see the table above). |
| numb | Real or Event Number Constant | The specific event constant or value. No matter if an event has sub-events or not, its "default" event is always referred to by event number 0 (e.g. the Create event only has a single sub-event which has event number 0, the "normal" Step and Draw events can be referred to by their constants (ev_step_normal and ev_draw_normal respectively) or by their event number 0) |

#### Returns:

N/A

#### Extended Example

event\_perform(ev\_keypress, ord("W"));

This would perform the event associated with Keyboard Check Pressed "W" key (without actually generating a keyboard press).

event\_perform(ev\_step, ev\_step\_begin);

This would perform the _Begin Step_ event (if called from any of the step events it would cause the begin step event code to be run twice).

event\_perform(ev\_create, 0);

This would perform the _Create _event of the instance.__