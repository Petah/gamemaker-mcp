---
title: "gml_release_mode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/gml_release_mode.htm"
converted: "2025-09-14T04:00:04.366Z"
---

# gml\_release\_mode

Certain internal functions in your game are used to error check while running. These internal checks cover many aspects of a game's code, including ranges, parameters and some general aspects of the internal GML compiler and are what spawn the final error messages in many cases. This function can be used to either enable or disable these internal checks at runtime.

Please note that this means that should you do something in your game code that is incorrect, the compiled game _may simply crash_, or it may experience some _very unexpected behaviour_. For example, if a [DS Grid](../Data_Structures/DS_Grids/ds_grid_create.md) is accessed at a coordinate outside of the defined size, in developer mode you would get a compiler window error message but the checks in place would permit the game to continue running. In release mode these checks will not be there, however, and so the code could return either a NULL pointer, or a bad pointer which in turn will point to some random memory. So at best you could get the wrong data returned, or at worst you could overwrite something in memory - data, graphics, or even code itself. Also, [ds\_grid\_get\_min](../Data_Structures/DS_Grids/ds_grid_get_min.md) and [ds\_grid\_get\_max](../Data_Structures/DS_Grids/ds_grid_get_max.md) will not check if the DS grid contains a mix of strings and numbers.

#### Syntax:

gml\_release\_mode(flag);

| Argument | Type | Description |
| --- | --- | --- |
| flag | Boolean | true for release mode or false for general development |

#### Returns:

N/A

#### Example:

gml\_release\_mode(true);

The above example code will set the game to use release mode.