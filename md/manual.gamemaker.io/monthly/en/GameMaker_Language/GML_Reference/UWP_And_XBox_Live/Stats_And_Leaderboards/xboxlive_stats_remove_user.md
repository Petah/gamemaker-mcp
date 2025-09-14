---
title: "xboxlive_stats_remove_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_remove_user.htm"
converted: "2025-09-14T04:00:08.930Z"
---

# xboxlive\_stats\_remove\_user

This function can be used to remove (unregister) a given user from the statistics manager, performing a flush of the stat data to the live server. According to the XBox documentation the game does not have to remove the user from the stats manager, as the XBox OS will periodically flush the stats anyway. You supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), and the function will will return -1 if there was an error or if the user ID is invalid, or any other value if the function was successfully called.

**NOTE**: Removing the user can return an error if the statistics that have been set on the user are invalid (such as the stat names containing non-alpha numeric characters).

The function will generate a callback which will trigger a [System Asynchronous Event](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md). This event will have the special DS map [async\_load](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) which should then be parsed for the following keys:

-   "**id**" - Will hold the constant achievement\_stat\_event
-   "**eventname**" - Will hold the string "_LocalUserRemoved_"
-   "**userid**" - The user ID associated with the request
-   "**error**" - 0 if successful, some other value if there has been an error
-   "**errormessage**" - A string with an error message, if any is available

Note that if you want to flush the stats data to the live server at any time without removing the user, you can use the function [xboxlive\_stats\_flush\_user()](xboxlive_stats_flush_user.md).

#### Syntax:

xboxlive\_stats\_remove\_user(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID (a pointer) to remove |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

for(var i = 0; i < xboxlive\_get\_user\_count(); ++i;)
{
    user\_id\[i\] = xboxlive\_get\_user(i);
    xboxlive\_stats\_remove\_user(user\_id\[i\]);
}

The above code loop through the stored user account IDs and remove (unregister) each user from the stats manager.