---
title: "uwp_license_trial_time_remaining"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_license_trial_time_remaining.htm"
converted: "2025-09-14T04:00:09.446Z"
---

# uwp\_license\_trial\_time\_remaining OBSOLETE

This function will return the approximate number of seconds until a time-based trial expires. The value returned by this function is meaningless if the trial is not time-based or if the game is not running in trial mode.

#### Syntax:

uwp\_license\_trial\_time\_remaining();

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

if (uwp\_license\_trial\_version())
{
    var secs = uwp\_license\_trial\_time\_remaining() mod 60;
    var mins = uwp\_license\_trial\_time\_remaining() div 60;
    var hours = mins div 60;
    if secs < 10 secs = "0" + string(secs) else secs = string(secs);
    if mins > 60 mins -= (hours \* 60);
    if mins < 10 mins = "0" + string(mins) else mins = string(mins);
    if hours > 9 hours = "9" else hours = string(hours);
    time\_string = hours + ":" + mins + ":" + secs;
}

The above code checks to see if the game is being run with a trial licence and if it is it creates a string with the time until the licence expires.