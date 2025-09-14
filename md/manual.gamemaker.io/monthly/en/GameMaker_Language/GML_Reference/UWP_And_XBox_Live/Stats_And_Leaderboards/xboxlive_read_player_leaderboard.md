---
title: "xboxlive_read_player_leaderboard"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_read_player_leaderboard.htm"
converted: "2025-09-14T04:00:08.791Z"
---

# xboxlive\_read\_player\_leaderboard

The function will return leaderboard information for the given user name. The leaderboard must have been created previously on the XDP dashboard for your game, and callin the function will trigger a callback [Social Asynchronous Event](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/Social.md) which contains the [async\_load](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map populated with the relevant key/value pairs. The "id" key of this DS map is used to identify the correct callback (there can be more than one trigger function for any given asynchronous event), and IT will be paired with the constant achievement\_leaderboard\_info as well as a number of other key/value pairs. The exact contents of the map are shown below:

-   "**id**" - For this function it should be achievement\_leaderboard\_info
-   "****leaderboardid****" - The unique ID for the leaderboard as defined on the provider dashboard.
-   "****numentries****" - The number of entries in the leaderboard that you have received.
-   "****PlayerN****" - The name of the player, where "N" is an integer value corresponding to their position within the leaderboard entries list.
-   "****PlayeridN****" - The unique user id of the player, "N".
-   "****RankN****" - The rank of the player "N" within the leaderboard.
-   "****ScoreN****" - The score of the player "N".


The function requires you to give one of the following constants to set the filter properties:

| Constant | Description |
| --- | --- |
| xboxlive_achievement_filter_all_players | Get all scores. |
| xboxlive_achievement_filter_friends_only | Get only friends scores, in ascending order. |
| xboxlive_achievement_filter_favorites_only | Get only favorites scores, in ascending order |
| xboxlive_achievement_filter_friends_alt | Get only friends scores in descending order. |
| xboxlive_achievement_filter_favorites_alt | Get only favorites scores in descending order. |

#### Syntax:

xboxlive\_read\_player\_leaderboard(leaderboard\_name, user\_name, num\_items, friend\_filter);

| Argument | Type | Description |
| --- | --- | --- |
| leaderboard_name | String | The name of the leaderboard to read, as set up on XDP. |
| user_name | Xbox User ID | The ID of the user to read from. |
| num_items | Real | The number of items to retrieve. |
| friend_filter | Xbox Live Achievement Filter Constant | One of the filter constants (see the description, above). |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_user = xboxlive\_user\_for\_pad(0);
var \_uid = xboxlive\_user\_id\_for\_user(\_user);
xboxlive\_read\_player\_leaderboard("MyLeaderboard", \_uid, 10, achievement\_filter\_all\_players);

The above code gets the user ID and then uses that to request all the player data for the first 10 places of the given leaderboard.