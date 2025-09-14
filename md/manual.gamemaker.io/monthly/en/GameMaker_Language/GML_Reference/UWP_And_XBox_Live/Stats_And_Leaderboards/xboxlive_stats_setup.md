---
title: "xboxlive_stats_setup"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_setup.htm"
converted: "2025-09-14T04:00:08.997Z"
---

# xboxlive\_stats\_setup

This function needs to be called before you can use any of the other Xbox Live stat functions, and simply initialises the required libraries on the system. The "user\_id" argument is the raw user ID as returned by the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), while the "service\_config" and "title\_id" is the unique ID for your game on the Xbox Live Dev Center.

This function is only for use with Event-Based (2013) stats.

#### Syntax:

xboxlive\_stats\_setup(user\_id, service\_config\_id, title\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The ID pointer of the user to check. |
| service_config_id | String | This is the config_id string for the game. |
| title_id | String | The unique ID for your game on the Xbox Dev Center. |

#### Returns:

N/A

#### Example:

var user = xboxlive\_get\_user(0);
xboxlive\_stats\_setup(user, "4d61a1aa-61ac-4541-badd-31f91244fea6", $1244FEA6);

The above code initialises the stats system for the given user ID.