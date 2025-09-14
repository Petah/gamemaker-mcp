---
title: "xboxlive_stats_add_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_add_user.htm"
converted: "2025-09-14T04:00:08.808Z"
---

# xboxlive\_stats\_add\_user

This function can be used to add a given user ID pointer to the statistics manager. This must be done before using any of the other stats functions to automatically sync the game with the XBox Live server and retrieve the latest values. You supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), and the function will will return -1 if there was an error or if the user ID is invalid, or any other value if the function was successfully called.

The function will generate a callback which will trigger a [System Asynchronous Event](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md). This event will have the special DS map [async\_load](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) which should then be parsed for the following keys:

-   "**id**" - Will hold the constant achievement\_stat\_event
-   "**eventname**" - Will hold the string "_LocalUserAdded_"
-   "**userid**" - The user ID associated with the request
-   "**error**" - 0 if successful, some other value if there has been an error
-   "**errormessage**" - A string with an error message, if any is available

#### Syntax:

xboxlive\_stats\_add\_user(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID (a pointer) to add |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

for(var i = 0; i < xboxlive\_get\_user\_count(); ++i;)
{
    user\_id\[i\] = xboxlive\_get\_user(i);
    xboxlive\_stats\_add\_user(user\_id\[i\]);
}

The above code will get the number of user accounts available then loop through them and assign the account ID to an array, as well as register the user with the stats manager.