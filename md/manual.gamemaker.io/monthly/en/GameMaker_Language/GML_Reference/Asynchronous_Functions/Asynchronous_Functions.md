---
title: "Asynchronous Functions"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/Asynchronous_Functions.htm"
converted: "2025-09-14T03:59:42.706Z"
---

# Asynchronous Functions

In the context of GameMaker, an asynchronous function is one that sends out to a web server, or asks for user input, or even streams data, while letting GameMaker continue to run without blocking the game being run. When the information callback is received a special **Async Event** is fired which, in turn, allows any instance with an Async Event assigned to it to execute further code (although this doesn't have to be the case). So, basically, it's a way to communicate with some external resource (server, user or device) without the game or project stopping while waiting for a reply.

Why is this important? Well, it allows GameMaker to continue functioning while sending or receiving data, and this means that you can do many things all without blocking the game loop like:

-   stream data from the device into your game without the player waiting for things to load
-   have callback events to do things only when the correct information is received
-   communicate and interchange data with a web server

This makes everything function in a much more fluid and unobtrusive way. It should be noted that the Async Events will be triggered for _all_ instances that have them, so you can use an async function in one instance, and have the Asynchronous Event that deals with the reply in another one, or even various other ones. See [Async Events](../../../The_Asset_Editors/Object_Properties/Async_Events.md) for more information on how the Asynchronous event works.

The different types of asynchronous functions are listed in the sections below:

-   [HTTP](HTTP/HTTP.md)
-   [Dialog](Dialog/Dialog.md)
-   [Cloud Saving](Cloud_Saving/Cloud_Saving.md)
-   [Push Notifications](Push_Notifications/Push_Notifications.md)
-   [Facebook](Facebook/Facebook.md)

There are also a number of [Buffer](../Buffers/Buffers.md) functions that can be used for loading and saving buffers in an asynchronous manner, which are required when working on the different consoles that GameMaker supports, although they can also be used on the other target platforms:

-   [buffer\_save\_async](../Buffers/buffer_save_async.md)
-   [buffer\_load\_async](../Buffers/buffer_load_async.md)
-   [buffer\_async\_group\_begin](../Buffers/buffer_async_group_begin.md)
-   [buffer\_async\_group\_option](../Buffers/buffer_async_group_option.md)
-   [buffer\_async\_group\_end](../Buffers/buffer_async_group_end.md)