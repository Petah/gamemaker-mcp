---
title: "Steam"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm"
converted: "2025-09-14T04:00:15.697Z"
---

# Steam

![Steam Event](../../../assets/Images/Asset_Editors/Async_Steam.png)This event is triggered by callbacks from some of the [Steam extension](../../../GameMaker_Language/GML_Reference/Steam/Steam.md) functions and returns a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) stored in the variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md), containing different key/value pairs depending on the callback from the function that has triggered the event. The map will always contain the key "event\_type" which you can parse to find the type of function that triggered the event and change the code required to suit.

Any function that triggers this event returns a unique async ID value which should be stored in a variable and checked, as the [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map will always contain an "id" key which you can then parse and ensure that you are responding to the correct event. In fact, the map will always hold the following keys, regardless of the Steam function used to generate the async response:

-   "id" - The async ID returned by the function that triggered the event.
-   "result" - The result of the operation (a real value). This will either be the extension constant ugc\_result\_success or some other real number. You should check for this constant to ensure that the call was successful, and if another value is returned something has not worked correctly. The rest of the possible values returned are one of the possible EResult values defined by the Steamworks API. See [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) for the complete list.
-   "event\_type" - A string denoting the type of event (see the documentation of a specific function to learn about its event type)