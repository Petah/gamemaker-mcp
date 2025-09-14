---
title: "timeline_moment_add_script"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_moment_add_script.htm"
converted: "2025-09-14T03:59:42.624Z"
---

# timeline\_moment\_add\_script

With this function you can dynamically add a [script function](../../../GML_Overview/Script_Functions.md) to Timelines at any given "moment" within that time line, where a "moment" is the equivalent of one game tick (or step).

In this way you can create a new time line using the [timeline\_add](timeline_add.md) function and add different behaviours at any point, or simply modify a previously created time line resource with new behaviours. Note that the function cannot require any additional arguments when using this function, and if you use it to modify a Timeline asset present in the Asset Browser, then all instances that use this timeline will be affected, and the change will last until the end of the game (calling [game\_restart](../../General_Game_Control/game_restart.md) will not reset the change either).

#### Syntax:

timeline\_moment\_add\_script(ind, step, script);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Timeline Asset | The index of the timeline to add a moment to. |
| step | Real | The moment (step) to add to. |
| script | Script Function | The index of the script function to add into the moment. |

#### Returns:

N/A

#### Example:

global.tl = timeline\_add();
var i = game\_get\_speed(gamespeed\_fps) \* 60;
repeat(3)
{
    timeline\_moment\_add\_script(global.tl, i, choose(Attack\_1, Attack\_2, Attack\_3);
    i += game\_get\_speed(gamespeed\_fps) \* 60;
}

The above code will create a new time line and store its index in the variable global.tl. It will then add three scripts to the time line, chosen at random, at one minute intervals.