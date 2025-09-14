---
title: "show_message_async"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/Dialog/show_message_async.htm"
converted: "2025-09-14T03:59:42.880Z"
---

# show\_message\_async

This function opens a window and displays the message you define in the function to the user.

This is an asynchronous function, and as such GameMaker does _not_ block the device it is being run on while waiting for an answer, but rather keeps on running events as normal. Once the user has pressed the "Okay" button, an asynchronous [**Dialog**](../../../../The_Asset_Editors/Object_Properties/Async_Events/Dialog.md) event is triggered which, for the duration of that event _only_, will have a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) stored in the variable [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md).

This map will contain the two keys "id" and "status", with "id" being the value that was returned by the function when called, and the "status" being either true for the **Okay** button being pressed, or false if the message was cancelled (where available as not all target platforms permit the cancellation of dialogues).

NOTE This function is for **debugging and testing use only** and should not be used in released games on desktop OSes and HTML5. For that purpose you should create a custom user interface to receive input from players so that you have complete control over how the dialogs look and behave. On console and mobile platforms the system UI is used to show dialogs instead.

#### Syntax:

show\_message\_async(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The message to show to the user |

#### Returns:

[Async Request ID](../Asynchronous_Functions.md)

#### Example:

The **Mouse Left Pressed Event** (for example) of the object that is showing the message would have the following code:

Mouse Left Pressed Event

msg = show\_message\_async("You will now be taken to the store");

The above will show a message with the given string. The message ID is stored in the variable msg and will be used in the asynchronous [Dialog](../../../../The_Asset_Editors/Object_Properties/Async_Events/Dialog.md) event as shown below:

Async Dialog Event

var \_id, \_stat;
\_id = ds\_map\_find\_value(async\_load, "id");
if (\_id == msg)
{
    if (ds\_map\_find\_value(async\_load, "status"))
    {
        url\_open("https://play.google.com/store");
    }
}

The above code checks the "id" key of the returned [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) against the value stored in the variable msg. If they are the same, it then checks to see if the **Okay** button was pressed (rather than the window being closed/cancelled) and if it returns true it opens a url.