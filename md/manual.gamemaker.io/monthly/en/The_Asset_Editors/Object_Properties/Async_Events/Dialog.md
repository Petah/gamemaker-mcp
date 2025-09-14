---
title: "Dialog"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Dialog.htm"
converted: "2025-09-14T04:00:15.552Z"
---

# Dialog

![Dialog Event](../../../assets/Images/Asset_Editors/Async_Dialog.png)The Dialog asynchronous event is only triggered when it gets a callback from one of the special [asynchronous dialog functions](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/Dialog/Dialog.md), like [get\_login\_async](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/Dialog/get_login_async.md) (please see this function for an extended code example of how this event is used).

These functions are the ones that ask for some type of user input, which can be a name, login details, a number, a colour, etc. As most devices don't like sitting in a loop waiting for a reply, they have to be asynchronous and GameMaker will continue to run in the background while these functions have a dialogue open and until they get the required user input which triggers this event. This means that if the dialog is open while a game is in progress, you should take steps to pause the game until the dialog callback has been received.

Again, a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) is returned with the ID held in the special variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md). The values held in this map will depend on the function used, and you should consult the individual entries for each function in this manual for more details.

**_NOTE_** _The async dialog functions are for **debugging and testing use only** and should not be used in released games on desktop OSes and HTML5. For that purpose you should create a custom user interface to receive input from players so that you have complete control over how the dialogs look and behave. On console and mobile platforms the system UI is used to show dialogs instead._