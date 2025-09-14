---
title: "game_restart"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_restart.htm"
converted: "2025-09-14T04:00:00.303Z"
---

# game\_restart

This function restarts the game.

Restarting the game is essentially the same as running it for the first time and so the [Game Start Event](../../../The_Asset_Editors/Object_Properties/Other_Events.md) will be triggered _as well as_ the [Game End Event](../../../The_Asset_Editors/Object_Properties/Other_Events.md).

All time sources created by [call\_later](../Time_Sources/call_later.md) are destroyed upon restarting the game.

NOTE You will not be able to [create new instances](../Asset_Management/Instances/instance_create_layer.md) of objects in the same event after this function is called. There is one exception: if the object you're creating an instance of is already [marked persistent](../../../The_Asset_Editors/Objects.md), or its [persistent](../Asset_Management/Instances/Instance_Variables/persistent.md) variable is set to true in the [variable struct](../Asset_Management/Instances/instance_create_layer.md) passed into the instance\_create\_\*() function, it will be created.

In the latter case (making the new instance persistent through the variable struct), the [Variable Definitions](../../../The_Asset_Editors/Object_Properties/Object_Variables.md) for that instance will not be executed.

It should be noted that certain things will **not** be reset when this function is called:

-   [Global Variables](../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md) will not be re-initialised unless explicitly coded as such - for example, the built-in global variable [score](../../GML_Overview/Variables/Builtin_Global_Variables/score.md) will not start at zero after a game restart if it has been modified in the game already.
-   The [GPU state](../Drawing/GPU_Control/gpu_get_state.md "gpu_get_state()") will not be changed (so if you have set the draw colour or alpha, for example, it will remain at the changed value).
-   The [game speed](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_get_speed.md "game_get_speed()") will remain at whatever you set it in your game code (if you changed it this change will be perpetuated).
-   Any asset from the Asset Browser that has been changed at run time within the game - for example if you change the origin of a sprite asset or shift the position of a path asset - will _not_ be reset.
-   Dynamic resources like buffers, surfaces, data structures or imported sprites will also not be cleaned up or removed (although you may lose references to them, so take care when using this function to either use global references for the dynamic resource, or to clean them up before the function is called).

#### Syntax:

game\_restart();

#### Returns:

N/A

#### Example:

if keyboard\_check\_pressed(ord("R"))
{
    game\_restart();
}

This code restarts the game when the player presses the "R" key.