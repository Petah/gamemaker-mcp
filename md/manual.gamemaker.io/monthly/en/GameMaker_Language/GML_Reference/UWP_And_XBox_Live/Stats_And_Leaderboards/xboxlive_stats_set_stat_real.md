---
title: "xboxlive_stats_set_stat_real"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_set_stat_real.htm"
converted: "2025-09-14T04:00:08.965Z"
---

# xboxlive\_stats\_set\_stat\_real

This function can be used to set the value of a stat for the given user ID. You supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), then the stat string to set (**if the stat string does not already exist then a new stat will be created and set to the given value**) and a value (a real) to set the stat to. Note that the stat name must be alphanumeric only, with no symbols or spaces.

When setting the stat value, any previous value will be overridden, therefore it is up to you to determine if the stat value should be updated or not (ie. check that the high score is actually the highest) by comparing to the current stat value with the new one before setting it.

The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called.

#### Syntax:

xboxlive\_stats\_set\_stat\_real(user\_id, stat, value);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID pointer to set the stat for |
| stat | String | The statistic to set (a string) |
| value | Real | The value to set the stat to (a real) |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (game\_over == true)
{
    if (xboxlive\_stats\_get\_stat(p\_user\_id, "PercentDone") < 100)
    {
        var \_val = (global.LevelsFinished / global.LevelsTotal) \* 100;
        xboxlive\_stats\_set\_stat\_real(p\_user\_id, "PercentDone", \_val);
    }
}

The above code checks a variable and if it's true, then it will check the value of the "PercentDone" stat. If this value is less than 100, a value is then generated and the stat set to that value.