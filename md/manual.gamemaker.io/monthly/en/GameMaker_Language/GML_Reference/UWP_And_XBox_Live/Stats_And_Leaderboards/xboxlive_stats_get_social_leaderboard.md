---
title: "xboxlive_stats_get_social_leaderboard"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_get_social_leaderboard.htm"
converted: "2025-09-14T04:00:08.885Z"
---

# xboxlive\_stats\_get\_social\_leaderboard

This function can be used to retrieve a social leaderboard of ranks for a given statistic. You supply the user ID (as returned, for example, by the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md)), the stat string (as defined when you created it using the xboxlive\_stats\_set\_stat\_\* functions), and then you specify a number of details about what leaderboard information you want to retrieve. Note that you can only retrieve a social leaderboard for int or real stats, but not for string stats, and that if you flag the "favourites\_only" argument as true, then the results will only contain data for those friends that are marked by the user as "favourites".

**IMPORTANT!** Stats used in social leaderboards do **not** need to be registered as "Featured Stats" in the XDP/Windows Dev Center..

The function will generate a callback which will trigger a [Social Asynchronous Event](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/Social.md). This event will have the special DS map [async\_load](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) which should then be parsed for the following keys:

-   "**id**" - Will hold the constant achievement\_stat\_event
-   "**event**" - Will hold the string "_GetLeaderboardComplete_"
-   "**userid**" - The user ID associated with the request
-   "**error**" - 0 if successful, some other value if there has been an error. The following is the most common error returned:
    -   \-2145844848: Bad request (the stat is not a valid leaderboard type, ie: a string)
-   "**errormessage**" - A string with an error message, if any is available
-   "**display\_name**" - The unique ID for the leaderboard as defined on the provider dashboard.
-   "**numentries**" - The number of entries in the leaderboard that you have received.

The rest of the DS map will also contain the leaderboard data with the following format (where "N" is the position in the leaderboard data, from 0 to "numentries"):

-   "**Player_N_**" - The name of the player, where "N" is an integer value corresponding to their position within the leaderboard entries list.
-   "**Playerid_N_**" - The unique user id of the player, "N".
-   "**Rank_N_**" - The rank of the player "N" within the leaderboard.
-   "**Score_N_**" - The score of the player "N".

#### Syntax:

xboxlive\_stats\_get\_social\_leaderboard(user\_id, stat, num\_entries, start\_rank, start\_at\_user, favourites\_only);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID of the user to get the leaderboard for |
| stat | String | The stat (as string) to create the global leaderboard from |
| num_entries | Real | The number of entries from the global leaderboard to retrieve |
| start_rank | Real | The rank in the leaderboard to start from (use 0 if the "start_at_user" argument is set to true) |
| start_at_user | Boolean | Set to true to start at the user ID rank, false otherwise (set to false if the "start_rank" argument is anything other than 0) |
| favourites_only | Boolean | Set to true to show only friends that are marked as "favourites" or false otherwise |

#### Returns:

N/A

#### Extended Example:

The following is an extended example of how this function can be used. To start with you'd call it in some event like **Room Start** or **Create**:

xboxlive\_stats\_get\_social\_leaderboard(user\_id, "GlobalTime", 20, 1, false, false);

The above code would be called to get a list of all global leaderboard positions for the game, and will generate a Social Asynchronous Event call back which we would deal with in the following way:

if (async\_load\[? "id"\] == achievement\_stat\_event)
{
    if (async\_load\[? "event"\] == "GetLeaderboardComplete")
    {
        global.numentries = async\_load\[? "numentries"\];
        for(var i = 0; i < numentries; i++;)
        {
            global.playername\[i\] = async\_load\[? "Player" + string(i)\];
            global.playerid\[i\] = async\_load\[? "Playerid" + string(i)\];
            global.playerrank\[i\] = async\_load\[? "Rank" + string(i)\];
            global.playerscore\[i\] = async\_load\[? "Score" + string(i\]);
        }
    }
}

The above code checks the returned DS map in the Social Asynchronous Event and if its "id" matches the constant being checked, it then checks to see if the event has been triggered by returned leaderboard data before looping through the map and storing all the different values in a number of global arrays.