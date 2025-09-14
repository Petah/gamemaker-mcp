---
title: "xboxlive_stats_get_stat_names"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_get_stat_names.htm"
converted: "2025-09-14T04:00:08.916Z"
---

# xboxlive\_stats\_get\_stat\_names

This function can be used to retrieve all the defined stats from the stat manager for a given user. You supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), and the function will return an array of strings containing the statistics for the user. If an error occurs or the user has no stats the array will still be returned but will have an element count of 0.

#### Syntax:

xboxlive\_stats\_get\_stat\_names(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID pointer to get the stat names of |

#### Returns:

[Array](../../../../../../../GameMaker_Language/GML_Overview/Arrays.md)

#### Example:

var \_stat\_str = xboxlive\_stats\_get\_stat\_names(user\_id);
for (var i = 0; i < array\_length(\_stat\_str); ++i;)
{
    xboxlive\_stats\_delete\_stat(user\_id, \_stat\_str\[i\]);
}

The above code retrieves all the defined stats for the user ID pointer stored in the given variable, and then loops through the array and deletes the specified stat from the stat manager.