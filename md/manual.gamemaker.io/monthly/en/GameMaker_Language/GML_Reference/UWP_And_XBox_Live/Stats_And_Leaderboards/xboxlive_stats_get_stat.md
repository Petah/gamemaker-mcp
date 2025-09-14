---
title: "xboxlive_stats_get_stat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_stats_get_stat.htm"
converted: "2025-09-14T04:00:08.903Z"
---

# xboxlive\_stats\_get\_stat

This function can be used to retrieve a single stat value from the stat manager for a given user. You supply the user ID as returned by (for example) the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), and then the stat string as defined when you created it using the one of the xboxlive\_stats\_set\_stat\_\* functions. The return value can be either a string or a real (depending on the stat being checked) or the GML constant undefined if the stat does not exist or there has been an error.

#### Syntax:

xboxlive\_stats\_get\_stat(user\_id, stat);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID pointer to get the stat names of |
| stat | String | The statistic to set (a string) |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md), [String](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) or [undefined](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

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