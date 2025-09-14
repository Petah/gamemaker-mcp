---
title: "uwp_was_terminated"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_was_terminated.htm"
converted: "2025-09-14T04:00:09.537Z"
---

# uwp\_was\_terminated OBSOLETE

With this function you can find out if the game was previously shut down by the system (i.e. it's not the first run of the game). If it has been then the function will return true, otherwise it will return false. An example of use would be to check it and see if the game was previously terminated by the system, and then (if it returns true) to load the previous stage that the player was at in the game. If targeting the XBox One then the required behavior of games if this is detected will be different between the different versions of the certification docs, so it's worth checking the latest version to see what the game _should_ do.

#### Syntax:

uwp\_was\_terminated();

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (xboxlivewas\_terminated())
{
    buffer\_load("Player\_Save.sav");
    global.GameLoaded = true;
}

The above code checks to see if the app has previously been terminated by the system, and if so, it loads a buffer and sets a global variable.