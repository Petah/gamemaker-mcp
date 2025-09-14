---
title: "xboxlive_achievements_set_progress"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_achievements_set_progress.htm"
converted: "2025-09-14T04:00:08.742Z"
---

# xboxlive\_achievements\_set\_progress

This function can be used to update the progress of an achievement. You supply the user ID as returned, for example, by the function [xboxlive\_get\_user()](../Users_And_Accounts/xboxlive_get_user.md), and then the achievement string (this is the achievement id as assigned in the XDP/Windows Dev Center when it was created). Finally you set the progress value to to a value from 0 to 100. Note that the achievement system will refuse updates that are lower than the current progress value.

#### Syntax:

xboxlive\_achievements\_set\_progress(user\_id, achievement, progress);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID of the user to set the achievement for |
| achievement | String | The achievement to set (a string) |
| progress | Real | The progress value to set (from 0 to 100) |

#### Returns:

N/A

#### Extended Example:

The following is an extended example of how this function can be used. To start with you'd call it in some event like **Room Start** or **Create**:

xboxlive\_stats\_get\_social\_leaderboard(user\_id, "GlobalTime", 20, 1, false, false);

The above code would be called to get a list of all global leaderboard positions for the game, and will generate a Social Asynchronous Event call back which we would deal with in the following way:

var \_progress = (global.Level / global.LevelMax) \* 100;
xboxlive\_achievements\_set\_progress(user\_id, "Game\_Completed", \_progress);

The above code creates a percentage value based on some global variables and then uses it to set the achievement progress for the "Game\_Completed" achievement.