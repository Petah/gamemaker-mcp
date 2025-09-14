---
title: "uwp_was_closed_by_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_was_closed_by_user.htm"
converted: "2025-09-14T04:00:09.520Z"
---

# uwp\_was\_closed\_by\_user OBSOLETE

With this function you can find out if the game was previously shut down by the user while playing (i.e. it, was terminated correctly and not by the system). If it has been then the function will return true, otherwise it will return false.

#### Syntax:

uwp\_was\_closed\_by\_user();

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (uwp\_was\_closed\_by\_user())
{
    global.GameLoaded = false;
}

The above code checks to see if the app has previously been terminated by the user, and if so, it sets a global variable.