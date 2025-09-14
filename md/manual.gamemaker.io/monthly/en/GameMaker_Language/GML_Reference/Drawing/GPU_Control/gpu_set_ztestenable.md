---
title: "gpu_set_ztestenable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_ztestenable.htm"
converted: "2025-09-14T03:59:50.920Z"
---

# gpu\_set\_ztestenable

This function can be used to toggle z-buffer testing on or off, affecting how things will be drawn (in general only of use when working with 3D projects).

Essentially, by default, when z-testing is off and you have two objects drawing to the same space, _both_ objects will be rendered regardless of whether one will over-draw the other, resulting in unnecessary draw calls. If you switch this on then the z-buffer is tested to see whether an object will be "visible" and not drawn if it's not.

NOTE This is the _default_ behaviour, but you can change this by changing the type of comparison used for z-buffer testing (see the function [gpu\_set\_zfunc](gpu_set_zfunc.md)).

By default z-buffer testing is off (false).

#### Syntax:

gpu\_set\_ztestenable(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable or disable z-buffer testing (true or false). |

#### Returns:

N/A

#### Example:

gpu\_set\_ztestenable(true);
draw\_sprite(spr\_Background, 0, 0, 0);
gpu\_set\_ztestenable(false);

The above code switches on z-buffer testing to draw a background sprite and then switches it back off again to continue drawing.