---
title: "all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Instance Keywords/all.htm"
converted: "2025-09-14T03:59:28.918Z"
---

# all

This keyword is used to tell GameMaker that a function is to be applied, or to check, **all active instances** within a room (deactivated instances will not be checked or accessed). You **cannot** use all to access or set variables in other instances using the dot operator . (see [here](../Addressing_Variables_In_Other_Instances.md)), but you **can** use it when using [with](../Language_Features/with.md), for example:

with (all)
{
    speed = 0;
}

The above code will set the speed of all instances in the room to 0. You can also use all within functions to target or check all instances in the room for example:

// Check a point for any active instance in the room
inst = instance\_position(mouse\_x, mouse\_y, all);

// Check all instances for a collision along a line
if collision\_line(x, y, mouse\_x, mouse\_y, all, false, true) {}

// Add all instances in the room into a motion planning grid
mp\_grid\_add\_instances(grid, all, false);

all is a very useful keyword and can be used in numerous situations within your code and actions, often cutting down on the amount of code you need to write to achieve a desired effect.

Also see: [Legacy Values](../Instance_Keywords.htm#h)