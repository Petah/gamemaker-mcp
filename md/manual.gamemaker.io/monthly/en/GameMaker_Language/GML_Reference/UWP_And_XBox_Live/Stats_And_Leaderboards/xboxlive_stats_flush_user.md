---
title: "xboxlive_stats_flush_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_flush_user.htm"
converted: "2025-09-14T04:00:08.838Z"
---

# xboxlive\_stats\_flush\_user

This function can be used to flush the stats data for a given user from the statistics manager, to the live server, ensuring that the server is up to date with the current values. According to XBox documentation, developers should be careful not to call this too often as the XBox will rate-limit the requests, and the XBox OS will also automatically flush stats approximately every 5 minutes automatically anyway.

**NOTE**: Removing the user can return an error if the statistics that have been set on the user are invalid (such as the stat names containing non-alpha numeric characters).

To use the function, you supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), and a proprity value (which will be 1 for high priority and 0 for low priority). The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called. The function will also generate a callback which will trigger a [System Asynchronous Event](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md). This event will have the special DS map [async\_load](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) which should then be parsed for the following keys:

-   "**id**" - Will hold the constant achievement\_stat\_event
-   "**eventname**" - Will hold the string "_StatisticUpdateComplete_"
-   "**userid**" - The user ID associated with the request
-   "**error**" - 0 if successful, some other value if there has been an error
-   "**errormessage**" - A string with an error message, if any is available

Note that stats will be flushed automatically for you when you remove a user from the stat manager. See [xboxlive\_stats\_remove\_user()](xboxlive_stats_remove_user.md) for more information.

#### Syntax:

xboxlive\_stats\_flush\_user(user\_id, priority);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID (a pointer) to use |
| priority | Real | The prority value (0 or 1) |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

for(var i = 0; i < array\_length(user\_id); ++i;)
{
    xboxlive\_stats\_flush\_user(user\_id\[i\], 0);
}

The above code loops through the stored user account IDs and then flushes the stat manager data for each user.