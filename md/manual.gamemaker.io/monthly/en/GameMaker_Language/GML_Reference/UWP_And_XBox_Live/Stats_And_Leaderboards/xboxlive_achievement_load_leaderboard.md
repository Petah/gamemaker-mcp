---
title: "xboxlive_achievement_load_leaderboard"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_achievement_load_leaderboard.htm"
converted: "2025-09-14T04:00:08.713Z"
---

# xboxlive\_achievement\_load\_leaderboard

This function will send a request to the server for information on the given leaderboard. The leaderboard must have been created previously on the developer dashboard for your game and the ID given is that which you must supply as the first argument of the function. It will trigger a callback [Social Asynchronous Event](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/Social.md) which contains the [async\_load](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map populated with the relevant key/value pairs. The _id_ key of this DS Map is used to identify the correct callback (there can be more than one trigger function for any given asynchronous event), and will be paired with the **constant** xboxlive\_achievement\_leaderboard\_info as well as a number of other key/value pairs for each player. The exact contents of the map are shown below:

-   "**id**" - For this function it should be xboxlive\_achievement\_leaderboard\_info
-   "**leaderboardid**" - The unique ID for the leaderboard as defined on the provider dashboard.
-   "**numentries**" - The number of entries in the leaderboard that you have received.
-   "**PlayerN**" - The name of the player, where "N" is an integer value corresponding to their position within the leaderboard entries list.
-   "**PlayeridN**" - The unique user id of the player, "N".
-   "**RankN**" - The rank of the player "N" within the leaderboard.
-   "**ScoreN**" - The score of the player "N".

You can specify the exact portion of the leaderboard to show by giving a minimum and maximum index value, as well as request that the results be filtered to retrieve only those scores by your friends or those posted by all players using the following filter **constants**:

| Xbox Live Achievement Filter Constant |
| --- |
| Constant | Description |
| xboxlive_achievement_filter_friends_only | Get only the scores of the players friends. |
| xboxlive_achievement_filter_all_players | Get all scores for all players. |

#### **Syntax:**

xboxlive\_achievement\_load\_leaderboard(ident, minindex, maxindex, filter)

| Argument | Type | Description |
| --- | --- | --- |
| ident | String | The unique ID of the leaderboard as shown on the developer dashboard. |
| minindex | Real | The starting index value to get the leaderboard data from. |
| maxindex | Real | The maximum index value to get the leaderboard data from. |
| filter | Xbox Live Achievement Filter Constant | Whether to filter the results to those that are on your friends list or to all players (see the Description above) |

#### Returns:

N/A

#### Extended Example:

The following code would probably be called after the player has logged into their game account to get a list of all friends leaderboard positions for the game:

xboxlive\_achievement\_load\_leaderboard("CgkIs9\_51u0PEAIQBw", 1, 100, xboxlive\_achievement\_filter\_friends\_only);

This will send off a request for the information on the given leaderboard and generate an asynchronous callback with the special async\_load DS map containing the following data:

var ident = ds\_map\_find\_value(async\_load, "id");
if (ident == xboxlive\_achievement\_leaderboard\_info)
{
    var lbid = ds\_map\_find\_value(async\_load,"leaderboardid");
    if lbid == "CgkIs9\_51u0PEAIQBw" || lbid == "leaderboard1id"
    {
        global.numentries = ds\_map\_find\_value(async\_load,"numentries");
        for(var i = 0; i < numentries; i++;)
        {
            global.playername\[i\] = ds\_map\_find\_value(async\_load, "Player" + string(i));
            global.playerid\[i\] = ds\_map\_find\_value(async\_load, "Playerid" + string(i));
            global.playerrank\[i\] = ds\_map\_find\_value(async\_load, "Rank" + string(i));
            global.playerscore\[i\] = ds\_map\_find\_value(async\_load, "Score" + string(i));
        }
    }
}

The above code checks the returned DS Map in the **Social Asynchronous Event** and if its "id" matches the constant being checked, it then checks to make sure that the leaderboard being sent matches the original function call before looping through the map and storing all the different values in a number of arrays.