---
title: "gpu_set_blendenable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_blendenable.htm"
converted: "2025-09-14T03:59:50.400Z"
---

# gpu\_set\_blendenable

This function can be used to toggle alpha-blending on and off. Basically, if you have this set to false, all images being drawn will be drawn 100% opaque, meaning that any transparent, or semi transparent, areas of a sprite or background will be visible as a solid colour. It is a good idea to have alpha blending _off_ whenever possible (especially when developing for mobile devices) as this greatly increases the draw speed.

![Alpha blend example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/Alphablend_Image.png)

#### Syntax:

gpu\_set\_blendenable(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable or disable alpha blending value (true or false). |

#### Returns:

N/A

#### Example:

gpu\_set\_blendenable(false);
draw\_sprite(spr\_Background, 0, 0, 0);
gpu\_set\_blendenable(true);

The above code switches off alpha blending to draw a background sprite and then switches it back on again to continue drawing.