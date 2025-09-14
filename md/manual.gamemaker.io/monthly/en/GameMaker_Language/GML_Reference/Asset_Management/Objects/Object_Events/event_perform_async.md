---
title: "event_perform_async"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/Object_Events/event_perform_async.htm"
converted: "2025-09-14T03:59:34.211Z"
---

# event\_perform\_async

This function is used to perform any one of the [Asynchronous Events](../../../../../The_Asset_Editors/Object_Properties/Async_Events.md) provided in GameMaker. You supply the Async event constant (shown in the table below) and a [DS Map](../../../Data_Structures/DS_Maps/ds_map_create.md) which will be available in the called Async event in the [async\_load](../../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) variable.

| Async Event Type Constant |
| --- |
| Constant | Description |
| ev_async_web_image_load | Image Loaded event |
| ev_async_web | HTTP event |
| ev_async_dialog | Dialog event |
| ev_async_web_iap | In-App Purchase event |
| ev_async_web_cloud | Cloud event |
| ev_async_web_networking | Networking event |
| ev_async_web_steam | Steam event |
| ev_async_social | Social event |
| ev_async_push_notification | Push Notification event |
| ev_async_save_load | Save/Load Event |
| ev_async_audio_recording | Audio Recording event |
| ev_async_audio_playback | Audio Playback event |
| ev_async_audio_playback_ended | Audio Playback Ended event |
| ev_async_system_event | System event |

Non-asynchronous events can be called using [event\_perform](event_perform.md).

NOTE The DS map specified in the second argument does not have to be destroyed manually as it will automatically be destroyed by the function after the Async event has been performed.

#### Syntax:

event\_perform\_async(type, ds\_map);

| Argument | Type | Description |
| --- | --- | --- |
| type | Async Event Type Constant | The type of event to perform (see the table above). |
| ds_map | DS Map | The DS map to use as async_load in the called event. |

#### Returns:

N/A

#### Example:

var \_map = ds\_map\_create();

\_map\[? "id"\] = "custom\_async\_event";
\_map\[? "result"\] = true;
\_map\[? "data"\] = { a: 13, b: 16 };

event\_perform\_async(ev\_async\_social, \_map);

The above code creates a DS map and populates it with custom entries to be read in the Async event. It then performs the Async Social event with the newly created map passed in as [async\_load](../../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) for the called event.