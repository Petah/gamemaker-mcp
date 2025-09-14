---
title: "uwp_is_constrained"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/uwp_is_constrained.htm"
converted: "2025-09-14T04:00:09.424Z"
---

# uwp\_is\_constrained OBSOLETE

This function will return true if the game is running in a resource constrained mode or false if running normally. Resource constrained mode can be activated when the game doesn't have focus, and in this mode the game has reduced GPU resources. The response to this should normally be to pause the game (as the user no longer has control). Also, disabling any particularly taxing effects may be a good idea if slowdown is observed in this mode. Note that unlike the [uwp\_is\_suspending()](uwp_is_suspending.md) function, this function will return true continuously as long as the game is in constrained mode (and not just once when it first happens).

#### Syntax:

uwp\_is\_constrained();

#### Returns:

[Boolean](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (xboxliveis\_constrained())
{
    if (!instance\_exists(obj\_PauseMenu))
    {
        instance\_create(0,0,obj\_PauseMenu);
    }
}

The above code checks to see if the app is constrained and if it is it creates an instance of an object (used for pausing the game).