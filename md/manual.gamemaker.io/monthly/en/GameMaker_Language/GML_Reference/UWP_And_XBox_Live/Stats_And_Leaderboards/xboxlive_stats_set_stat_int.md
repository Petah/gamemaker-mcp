---
title: "xboxlive_stats_set_stat_int"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_set_stat_int.htm"
converted: "2025-09-14T04:00:08.949Z"
---

# xboxlive\_stats\_set\_stat\_int

This function can be used to set the value of a stat for the given user ID. You supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), then the stat string to set (**if the stat string does not already exist then a new stat will be created and set to the given value**) and a value (an integer) to set the stat to. Note that the stat name must be alphanumeric only, with no symbols or spaces.

When setting the stat value, any previous value will be overridden, therefore it is up to you to determine if the stat value should be updated or not (ie. check that the high score is actually the highest) by comparing to the current stat value with the new one before setting it.

The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called.

#### Syntax:

xboxlive\_stats\_set\_stat\_int(user\_id, stat, value);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID pointer to set the stat for |
| stat | String | The statistic to set (a string) |
| value | Real | The value to set the stat to (an integer) |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_val = xboxlive\_stats\_get\_stat(p\_user\_id, "GamesPlayed");
xboxlive\_stats\_set\_stat\_int(p\_user\_id, "GamesPlayed", ++\_val);

The above code retrieves the value for the stat "GamesPlayed", then sets the same stat to that value plus 1.