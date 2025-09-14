---
title: "uwp_license_trial_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_license_trial_user.htm"
converted: "2025-09-14T04:00:09.457Z"
---

# uwp\_license\_trial\_user OBSOLETE

This function will return the User ID pointer whose trial license is currently being used, or it will return pointer\_null if the user is not currently active or if the game is not currently in trial mode.

#### Syntax:

uwp\_license\_trial\_user();

#### Returns:

[Xbox User ID](Users_And_Accounts/xboxlive_get_user.md)

#### Example:

if (gamepad\_button\_check\_pressed(0, gp\_start))
{
    if (uwp\_license\_trial\_version())
    {
        var \_uid = uwp\_license\_trial\_user();
        uwp\_show\_help(\_uid);
    }
}

The above code checks to see if a button is pressed and then checks the app to see if it is running with a trial licence. If it is, then it gets the User ID for licence and opens the help file for that user.