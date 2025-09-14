---
title: "System"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/System.htm"
converted: "2025-09-14T04:00:15.723Z"
---

# System

![System Event](../../../assets/Images/Asset_Editors/Async_System.png)This event can only be triggered by a callback from a system level event (such as the detection of a gamepad or the automatic signing in to Xbox Live) and it will return a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) stored in the variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md), containing different key/value pairs depending on the system level event that triggered the callback. These events are:

## Game Pads

When this event is triggered for a gamepad being connected or disconnected it will return one of the following key/value pairs in the [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map:

-   "event\_type" - the type of system event received, which will be one of the following strings:
    -   "gamepad discovered" - happens when the system reports a new gamepad has been connected
    -   "gamepad lost" - happens when the system has lost connection to a gamepad
-   "pad\_index" - the index of the pad that has been added or removed

This event now permits you to move all your gamepad checking logic from the Step Event or an Alarm event into the System Event and only run it when it's actually required.

Read the **Gamepad Movement** example on [Movement And Controls](../../../Quick_Start_Guide/Movement_And_Controls.md) to understand how gamepads can be detected and used.

**IMPORTANT** This event will NOT be triggered unless you have at least one [gamepad\_\*](../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/Gamepad_Input.md) function or [GML Visual action](../../../Drag_And_Drop/Drag_And_Drop_Reference/Gamepad/Gamepad_Actions.md) in your game code. The runner will only initialise the gamepad sub-system when the functions are used in the project, so if they aren't present, adding/removing gamepads will not trigger the System Event.

## Virtual Keyboards

When this event is triggered for a virtual keyboard being opened or closed it will return the following key/value pairs in the [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map:

-   "event\_type" - the type of system event received, which will be "virtual keyboard status" for virtual keyboards.
-   "screen\_height" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible.
-   "keyboard\_status" - the current status of the keyboard, returned as one of the following strings:
    -   "hiding"
    -   "hidden"
    -   "showing"
    -   "visible"

See [Virtual Keys And Virtual Keyboards](../../../GameMaker_Language/GML_Reference/Game_Input/Virtual_Keys_And_Keyboards/Virtual_Keys_And_Keyboards.md) for more information on the virtual keyboard.

## Audio System Status

This event type is specifically for use when working with the HTML5 target, as it will be triggered every time the Web Audio context status changes. This means that if you have, for example, a piece of looping background music, then you can pause it or stop and restart it, based on this event triggering. This can be checked by looking for the following key/value pair in the [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map:

-   "event\_type" - the type of system event received, which will be the string "audio\_system\_status" if the audio system has initialised or the context has changed.

If this event type is triggered, then there will be an additional key in the [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map:

-   "status" - The status of the audio system, which will be one of the following two strings:
    -   "available" - The audio system is initialised and available to play sounds
    -   "unavailable" - The audio system is not initialised, or the context is not currently running, and so can't play sounds (all sound playing functions will return \-1)

For more information on the specific functions available for audio, please see [Audio](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio.md).

**NOTE** While this event is designed for use with the HTML5 target, it will also be triggered on all other platforms, but on everything (except HTML5) it will only be triggered once on Game Start when the audio engine is first initialised.

## Misc. Events

### App Focus

On mobile targets (Android, iOS and tvOS), an event is triggered when the app is brought back into focus. Its [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map contains a single key:

-   "event\_type" : "onResume"

### Receipt Validation

On macOS, if you've marked your game as **Build for Mac App Store** in the [macOS Game Options](../../../Settings/Game_Options/macOS.md), the game will query the App Store when it starts up to perform receipt validation. An event is triggered that contains the result. Its [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map contains the keys:

-   "event\_type": "receipt\_validation"
-   "valid": true or false

You can retrigger receipt validation using the function [mac\_refresh\_receipt\_validation](../../../../../../GameMaker_Language/GML_Reference/In_App_Purchases/mac_refresh_receipt_validation.md).

### Display Layout

On Android and iOS, an event is triggered when the display layout changes:

-   "event\_type" : "DisplayLayoutInfo"

The [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map will hold additional keys if this event type is triggered:

-   "safeinsettop"
-   "safeinsetleft"
-   "safeinsetbottom"
-   "safeinsetright"

These hold the distance from the edge that it is safe to display in (i.e. where no system UI will cover your game).

Additionally, on Android only, the following entries may be returned:

-   "boundrects" - A JSON-encoded array, where each object holds left, right, top and bottom coordinates of a bounding rectangle. This array can be empty.
-   "waterfallinsettop"
-   "waterfallinsetleft"
-   "waterfallinsetbottom"
-   "waterfallinsetright"

The waterfall inset values are only present on devices that have a waterfall display.

### Host Window Messages (GX.games)

Messages sent by the host window when running on GX.games are received in this event. See [window\_post\_message](../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_post_message.md) for more information.

### Permission Requests (GX.games)

-   "event\_type": "permission\_request\_result"
-   "DeviceMotion": os\_permission\_granted or os\_permission\_denied
-   "response": the string value returned by the request, "Permission unknown" if any permission is requested that isn't "DeviceMotion", or "Unsupported Permission" if the browser doesn't implement the permission functionality