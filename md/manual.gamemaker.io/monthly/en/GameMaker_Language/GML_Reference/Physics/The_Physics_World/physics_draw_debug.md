---
title: "physics_draw_debug"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/The_Physics_World/physics_draw_debug.htm"
converted: "2025-09-14T04:00:06.969Z"
---

# physics\_draw\_debug

When creating a physics system in GameMaker, it is often important to have a visual representation of what is actually happening with an instance. This can be achieved by using physics\_draw\_debug(), which draws a schematic outline of the physical properties associated with the instance running the code. Here is an image of how it looks:

![Physics draw debug exmaple](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_draw_debug_instance_image.png)It should be noted that for this to work it _must_ be in the draw event of the instance, and it will be drawn using the currently defined draw colour.

#### Syntax:

physics\_draw\_debug()

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_red);
physics\_draw\_debug();

The code above will draw a representation of the physical properties associated with that instance using the colour red.