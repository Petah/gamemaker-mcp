---
title: "debug_mode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/debug_mode.htm"
converted: "2025-09-14T03:59:48.845Z"
---

# debug\_mode

This **read-only** variable returns true when the game is being run in debug mode and false when being played as normal.

#### Syntax:

debug\_mode

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (debug\_mode)
{
    ini\_open("Cheats.ini");
}
else
{
    ini\_open("Game.ini");
}

The above code opens a different INI file depending on the value of the read-only variable debug\_mode.