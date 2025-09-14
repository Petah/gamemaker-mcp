---
title: "Built-In Time Sources"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/Built_In_Time_Sources.htm"
converted: "2025-09-14T04:00:07.993Z"
---

# Built-In Time Sources

| Time Source Constant |
| --- |
| Constant | Description | Value |
| time_source_global | The Global Time Source | 0 |
| time_source_game | The Game Time Source | 1 |

You can use the **Global Time Source** or the **Game Time Source** as a parent for your custom Time Source. Both Time Sources are globally available.

The Global Time Source runs outside the main game loop, while the Game Time Source runs as part of the game loop.

The choice between Global/Game doesn't affect whether Time Sources are affected by your game's framerate; that will depend on the [unit](Time_Source_Units.md) you use.

## Order

Time Sources inheriting from the Global Time Source are processed **before** the Game Time Source.

NOTE See [Event Order](../../../The_Asset_Editors/Object_Properties/Event_Order.md) for more details.

## States

The Game Time Source has [states](Time_Source_States.md), meaning it can be [paused](time_source_pause.md). The Global Time Source doesn't have states and can't be paused.

You can use the Global Time Source for timers that should run regardless of the game state, and the Game Time Source for timers that are tied to your main game loop. You can then pause all of your game-related timers by pausing the Game Time Source.