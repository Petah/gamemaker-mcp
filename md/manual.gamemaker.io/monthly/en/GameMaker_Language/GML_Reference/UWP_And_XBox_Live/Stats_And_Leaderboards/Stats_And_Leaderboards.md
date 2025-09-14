---
title: "Stats And Leaderboards"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/Stats_And_Leaderboards.htm"
converted: "2025-09-14T04:00:08.673Z"
---

# Stats And Leaderboards

Xbox One Stats (achievements and leaderboards) are functional when using UWP and have some special functions for dealing with them, although they also use some of the standard built-in functions for leaderboards. The 2017 Xbox Live stats system simplifies the whole procedure for making achievements and leaderboards, permitting you to create and use the different systems from within GameMaker. The main difference between the 2017 (Title-Managed) system and previous systems is that you no longer have to define all of the stats you use in game on the Partner Center, and you do not need to tie achievement unlocking to a stat event/rule either (as they are unlocked by a direct function call instead).

NOTE Although there is no manifest file required with this system, you can still set up some stats on XDP/Partner Center. Ones setup there will be considered **featured stats** which means you can have global leaderboards and the stats turn up on the games dashboard page. For more information, please see [this article from Microsoft](https://docs.microsoft.com/en-us/windows/uwp/xbox-live/leaderboards-and-stats-2017/player-stats-configure-2017).

Before calling any of the stats functions listed below, you must make sure that the user is logged in (see the User functions listed above) then setup the stats system and add the user to it using these functions:

-   [xboxlive\_stats\_setup](xboxlive_stats_setup.md) _(For Event-Based (2013) stats only)_
-   [xboxlive\_stats\_add\_user](xboxlive_stats_add_user.md)

The following functions are used with the 2017 (Title-Managed) Stats system:

-   [xboxlive\_stats\_remove\_user](xboxlive_stats_remove_user.md)
-   [xboxlive\_stats\_flush\_user](xboxlive_stats_flush_user.md)
-   [xboxlive\_stats\_set\_stat\_real](xboxlive_stats_set_stat_real.md)
-   [xboxlive\_stats\_set\_stat\_int](xboxlive_stats_set_stat_int.md)
-   [xboxlive\_stats\_set\_stat\_string](xboxlive_stats_set_stat_string.md)
-   [xboxlive\_stats\_delete\_stat](xboxlive_stats_delete_stat.md)
-   [xboxlive\_stats\_get\_stat\_names](xboxlive_stats_get_stat_names.md)
-   [xboxlive\_stats\_get\_stat](xboxlive_stats_get_stat.md)
-   [xboxlive\_stats\_get\_leaderboard](xboxlive_stats_get_leaderboard.md)
-   [xboxlive\_stats\_get\_social\_leaderboard](xboxlive_stats_get_social_leaderboard.md)
-   [xboxlive\_achievement\_show\_achievements](xboxlive_achievement_show_achievements.md)
-   [xboxlive\_achievement\_load\_friends](xboxlive_achievement_load_friends.md)
-   [xboxlive\_achievement\_load\_leaderboard](xboxlive_achievement_load_leaderboard.md)
-   [xboxlive\_achievements\_set\_progress](xboxlive_achievements_set_progress.md)

The following functions are used with the 2013 (Event-Based) Stats system:

-   [xboxlive\_get\_stats\_for\_user](xboxlive_get_stats_for_user.md)
-   [xboxlive\_read\_player\_leaderboard](xboxlive_read_player_leaderboard.md)
-   [xboxlive\_fire\_event](xboxlive_fire_event.md)