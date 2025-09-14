---
title: "uwp_license_trial_version"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_license_trial_version.htm"
converted: "2025-09-14T04:00:09.474Z"
---

# uwp\_license\_trial\_version OBSOLETE

This function can be used to check whether the game is under a trial licence or not. If it is the function will return true, or false otherwise.

#### Syntax:

uwp\_license\_trial\_version();

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (uwp\_license\_trial\_version())
{
    global.LevelCap = 10;
}

The above code checks to see if the app is under a trial licence and, if so, it sets a global variable.