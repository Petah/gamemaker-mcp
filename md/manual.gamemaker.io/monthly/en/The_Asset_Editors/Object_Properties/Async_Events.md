---
title: "Async Events"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events.htm"
converted: "2025-09-14T04:00:15.752Z"
---

# The Async Events

![The Async Event](../../assets/Images/Asset_Editors/Editor_Objects_Async.png)

An Asynchronous Event is one that is fired when GameMaker receives a callback from some external source, which can be from the web or from the device running your game.

Basically, you tell GameMaker to do something - like load an image - and it will start to do this. As an example, let's say you want to add a sprite from an external file. This can be done _synchronously_ or _asynchronously_. To do this synchronously, you use the function [sprite\_add](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md):

var \_new\_big\_sprite = sprite\_add("my\_new\_sprite\_image.png", 1, false, true, 0, 0);

// A lot more code below this line that all needs to be executed on time to keep a steady FPS

This function has a bit of a disadvantage, however, as it _fully l_oads the sprite immediately__. The next line of code will only be executed after that's finished! This may barely be noticeable if you're just adding a single small sprite, but might freeze your game when loading one big sprite or many small ones.

GameMaker also has built-in functions that work _asynchronously_ instead. Using these functions GameMaker only _starts_ doing what you asked, but doesn't stop executing code until this has finished. It continues to process your async request "in the background" and continues to run the rest of your game's code normally. When the request completes, a callback will be sent to GameMaker and any Asynchronous Events defined for that type of callback will be fired.

In the example of [sprite\_add](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md), you can use its asynchronous counterpart [sprite\_add\_ext](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add_ext.md) to just _start_ loading the sprite and trigger an async event afterwards:

var \_new\_big\_sprite = sprite\_add\_ext("my\_new\_sprite\_image.png", 1, 0, 0, true);

// A lot more code below this line that will be executed almost instantly after the call to sprite\_add\_ext

Async Image Loaded Event

/// "The sprite you requested has finished loading"

There are other situations in which you don't want the game to wait until something that might take an amount of time to complete has finished, such as making HTTP requests to a web server.

You don't always have to call a function yourself first in order to receive a callback in the form of an async event, for example the async [System](Async_Events/System.md) event will be triggered when a gamepad is connected or disconnected. For this you don't have to call a function first.

Please note that the Asynchronous Events are fired for _all_ instances that have them, much like the keyboard events, so you can - for example - do an [http\_get](../../GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/http_get.md) call in one instance, yet have the **Asynchronous HTTP Event** in another to deal with the callback.

NOTE You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see the section on [Cross-Domain Issues](../../GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/HTTP.md) for further details.

There are various types of events associated with the Asynchronous event category, and they are all explained in the sections below:

NOTE The variable [async\_load](../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) which is mentioned in the following sections is **only valid in these events**, as the [DS map](../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) that it points to is created at the start of the event, then deleted again at the end, with this variable being reset to a value of \-1 at all other times.

-   [Audio Playback](Async_Events/Audio_Playback.md)
-   [Audio Playback Ended](Async_Events/Audio_Playback_Ended.md)
-   [Audio Recording](Async_Events/Audio_Recording.md)
-   [Cloud](Async_Events/Cloud.md)
-   [Dialog](Async_Events/Dialog.md)
-   [HTTP](Async_Events/HTTP.md)
-   [In-App Purchase](Async_Events/IAP.md)
-   [Image Loaded](Async_Events/Image_Loaded.md)
-   [Networking](Async_Events/Networking.md)
-   [Push Notifications](Async_Events/Push_Notifications.md)
-   [Save / Load](Async_Events/Save_Load.md)
-   [Social](Async_Events/Social.md)
-   [Steam](Async_Events/Steam.md)
-   [System](Async_Events/System.md)

It may be that if you are making extensions for different platforms you would like to target one or more of these asynchronous events for callbacks from your extension functions. To that end, you can find a table below that outlines each of the internal event name constants and their corresponding ID value.

NOTE These event constants are **only** for use with extensions!

| Constant | Value |
| --- | --- |
| EVENT_OTHER_WEB_IMAGE_LOAD | 60 |
| EVENT_OTHER_WEB_SOUND_LOAD | 61 |
| EVENT_OTHER_WEB_ASYNC | 62 |
| EVENT_OTHER_DIALOG_ASYNC | 63 |
| EVENT_OTHER_WEB_IAP | 66 |
| EVENT_OTHER_WEB_CLOUD | 67 |
| EVENT_OTHER_WEB_NETWORKING | 68 |
| EVENT_OTHER_WEB_STEAM | 69 |
| EVENT_OTHER_SOCIAL | 70 |
| EVENT_OTHER_PUSH_NOTIFICATION | 71 |
| EVENT_OTHER_ASYNC_SAVE_LOAD | 72 |
| EVENT_OTHER_AUDIO_RECORDING | 73 |
| EVENT_OTHER_AUDIO_PLAYBACK | 74 |
| EVENT_OTHER_SYSTEM_EVENT | 75 |
| EVENT_OTHER_MESSAGE_EVENT | 76 |