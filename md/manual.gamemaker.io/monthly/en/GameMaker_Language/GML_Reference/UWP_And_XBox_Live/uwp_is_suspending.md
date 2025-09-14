---
title: "uwp_is_suspending"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_is_suspending.htm"
converted: "2025-09-14T04:00:09.435Z"
---

# uwp\_is\_suspending OBSOLETE

This function will return true for a single frame (and false otherwise) in a similar manner to [os\_is\_paused()](../OS_And_Compiler/os_is_paused.md). The game then has one second to save the game state before it is potentially terminated by the system. Once the game has finished saving data it should call [uwp\_suspend()](uwp_suspend.md) to suspend cleanly. The game should probably also enter a pause state so that if it is resumed by the system (if it hasn't been fully terminated) the player is not thrown straight back into a gameplay situation.

#### Syntax:

uwp\_is\_suspending();

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (uwp\_is\_suspending())
{
    scr\_Save\_Game\_Data();
    uwp\_suspend();
}

The above code checks to see if the app is going into suspension and if it is it calls a script to save the game data before suspending the game.