---
title: "xboxlive_stats_set_stat_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_set_stat_string.htm"
converted: "2025-09-14T04:00:08.978Z"
---

# xboxlive\_stats\_set\_stat\_string

This function can be used to set a stat to a string for the given user ID. You supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), then the stat string to set (**if the stat string does not already exist then a new stat will be created and set to the given value**) and then the string to set the stat to. Note that the stat name must be alphanumeric only, with no symbols or spaces, but the string value you are setting can have spaces and special characters.

When setting the stat string, any previous string will be overridden, therefore it is up to you to determine if the stat string should be updated or not by comparing to the current stat string with the new one before setting it.

The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called.

#### Syntax:

xboxlive\_stats\_set\_stat\_string(user\_id, stat, value);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID pointer to set the stat for |
| stat | String | The statistic to set (a string) |
| value | String | The value to set the stat to (a string) |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

xboxlive\_stats\_set\_stat\_string(p\_user\_id, "LevelName", global.LevelName);

The above code sets the stat "LevelName" to the string stored in the given global variable.