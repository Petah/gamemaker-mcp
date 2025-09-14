---
title: "Social"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Social.htm"
converted: "2025-09-14T04:00:15.681Z"
---

# Social

![Social Event](../../../assets/Images/Asset_Editors/Async_Social.png)This event can only be triggered by the callbacks from various specific **Social Functions** and **Xbox Live Functions** and will return a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) stored in the variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md), containing different key/value pairs depending on the callback from the function that has triggered the event.

This event may also be triggered by [Video Playback](../../../../../../GameMaker_Language/GML_Reference/Drawing/Videos/Videos.md).

The DS map will contain a number of keys, the most important of which is the "id" key. This will return a constant which can then be checked in code to determine which of the many callbacks the event has received. Once you have parsed this key and compared the value returned with the available constants, you can then continue to extract the rest of the information from the map.

The function pages on Achievements and Leaderboards in the Reference section detail the functions and callbacks as well as the constants used to trigger this event, but there are also certain circumstances in which it will be triggered without a function call from the game that is running:

-   when your game is launched from the OS dashboard
-   when you complete a challenge
-   when another player completes a challenge
-   when the game is started from the OS dashboard by selecting a challenge

Any of the above callbacks will trigger the Social Event and an [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map will be generated with the following details (note that there is a different "id" key value to define each of the different reasons that the event was called, but all other contents of the map are the same):

-   "id" - The value of this key will depend on the type of callback triggering the event (mostly used by extensions).
-   "playerid" - The player id for the challenge.
-   "issuerid" - The id of the person that issued the challenge.
-   "state" - The state of the challenge, which will have a value of 0 - 3 (as a string) for invalid, pending, completed or declined.
-   "message" - The text message for challenge.
-   "issueddate" - The issue date for challenge
-   "completeddate" - The completion date for challenge.
-   "type" - The type of challenge given.
-   "identifier" - The identifying string for the challenge.
-   "score" - The score tied in with the challenge.