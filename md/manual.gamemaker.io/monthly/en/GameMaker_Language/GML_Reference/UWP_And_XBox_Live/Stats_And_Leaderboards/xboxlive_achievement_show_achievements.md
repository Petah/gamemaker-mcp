---
title: "xboxlive_achievement_show_achievements"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_achievement_show_achievements.htm"
converted: "2025-09-14T04:00:08.728Z"
---

# xboxlive\_achievement\_show\_achievements

This function will open the achievements page for the chosen platform. Please note that this is an _asynchronous function_, ie: your game will continue to run in the background while the achievements page is being shown. As such, you should be careful where you use this and make sure to pause the game or only permit it to be shown in areas of your game where it will not interfere with the game-play.

#### **Syntax:**

xboxlive\_achievement\_show\_achievements()

#### Returns:

N/A

#### Example:

if (achievements\_enabled)
{
    global.Pause = true;
    instance\_create\_layer(0, 0, "Controllers", obj\_Pause);
    xboxlive\_achievement\_show\_achievements();
}

The above code checks a custom variable to see if achievements are enabled, and if so it sets a global variable and creates a controller "pause" instance before calling the function to show the achievements on screen.