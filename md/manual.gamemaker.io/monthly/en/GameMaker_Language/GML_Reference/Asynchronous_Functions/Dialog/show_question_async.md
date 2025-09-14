---
title: "show_question_async"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/Dialog/show_question_async.htm"
converted: "2025-09-14T03:59:42.903Z"
---

# show\_question\_async

This function opens a window and displays the question you define in the function to the user.

This is an asynchronous function, and as such GameMaker does _not_ block the device it is being run on while waiting for an answer, but rather keeps on running events as normal. The function has two buttons that show **Yes** and **No**, and once the user has pressed one, an asynchronous [Dialog](../../../../The_Asset_Editors/Object_Properties/Async_Events/Dialog.md) event is triggered which, for the duration of that event _only_, will have a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) stored in the variable [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md).

This map will contain the two keys: "id" and "status". "id" is the value that was returned by the function when called, while the "status" will be either true or false for **Yes** and **No** respectively.

NOTE This function is for **debugging and testing use only** and should not be used in released games on desktop OSes and HTML5. For that purpose you should create a custom user interface to receive input from players so that you have complete control over how the dialogs look and behave. On console and mobile platforms the system UI is used to show dialogs instead.

#### Syntax:

show\_question\_async(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The question to ask the user |

#### Returns:

[Async Request ID](../Asynchronous_Functions.md)

#### Example:

The **Mouse Left Pressed Event** (for example) of the object that is showing the message would have the following code:

Mouse Left Pressed Event

msg = show\_question\_async("Do you want to buy some armour for " + string(armour\[0, 5\]) + "coins?");

The above will show a question with the given string, requesting that the user press either **Yes** or **No**. The async ID is stored in the variable msg and will be used in the [Asynchronous Dialog event](../../../../The_Asset_Editors/Object_Properties/Async_Events/Dialog.md) as shown below:

Async - Dialog Event

var \_id, \_stat;
\_id = ds\_map\_find\_value(async\_load, "id");
if (\_id == msg)
{
    if (ds\_map\_find\_value(async\_load, "status"))
    {
        coins -= armour\[0, 5\];
        global.protection += armour\[0, 0\];
    }
}

The above code checks the "id" key of the returned [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) against the value stored in the variable "msg". If they are the same, it then checks to see if one of the two buttons were pressed and if it returns true it will then deduct a value from a variable and add a value to a global variable too.