---
title: "uwp_suspend"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_suspend.htm"
converted: "2025-09-14T04:00:09.498Z"
---

# uwp\_suspend OBSOLETE

This function indicates to the system that the app has finished saving data following detection of a suspension request. Calling this function is a requirement for Xbox One submission, and it should always be used in conjunction with the function [uwp\_is\_suspending()](uwp_is_suspending.md), as shown in the example below.

#### Syntax:

uwp\_suspend();

#### Returns:

N/A

#### Example:

if (uwp\_is\_suspending())
{
    scr\_Save\_Game\_Data();
    uwp\_suspend();
}

The above code checks to see if the app is going into suspension and if it is it calls a script to save the game data before suspending the game.