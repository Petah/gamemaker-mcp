---
title: "uwp_show_help"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_show_help.htm"
converted: "2025-09-14T04:00:09.488Z"
---

# uwp\_show\_help OBSOLETE

This function launches the Xbox One help app which will in-turn display your game's help file (which is an HTML format file that you have previously uploaded to the XBox Developer Portal). Note that a user ID is specified when calling this function so that the user's locale information can be used when displaying it. You can retrieve the user ID with the functions [xboxlive\_get\_user()](Users_And_Accounts/xboxlive_get_user.md), [xboxlive\_get\_activating\_user()](Users_And_Accounts/xboxlive_get_activating_user.md), or [uwp\_license\_trial\_user()](../../../../../../GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_license_trial_user.md).

#### Syntax:

uwp\_show\_help(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The User ID pointer to open the helpfile for. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (gamepad\_button\_check\_pressed(0, gp\_start))
{
    if (uwp\_license\_trial\_version())
    {
        var \_uid = uwp\_license\_trial\_user;
        uwp\_show\_help(\_uid);
    }
}

The above code checks to see if a button is pressed and then checks the app to see if it is running with a trial licence. If it is, then it gets the User ID for licence and opens the help file for that user.