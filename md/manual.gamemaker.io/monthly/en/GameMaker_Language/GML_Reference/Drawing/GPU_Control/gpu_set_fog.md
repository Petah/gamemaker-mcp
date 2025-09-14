---
title: "gpu_set_fog"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_fog.htm"
converted: "2025-09-14T03:59:50.605Z"
---

# gpu\_set\_fog

This function can be used to enable or disable fog drawing. Fog can be used in 3D games to make instances in the distance look faded or even invisible, which helps in creating atmosphere as well as masking the fact that you are not drawing instances that are far away.

You set whether it is enabled (true) or disabled (false), the colour that the fog should use for blending, as well as the start and end draw distances. The distance values are essentially depth values in pixels, and are relative to the camera's position.

For example, a position of 0 is nearest to the camera, and with each increase it gets farther away. By default, a view's camera is placed at -16000 depth, so if you wanted the fog to start at depth 0 and end at depth 1000, you would set the start distance to 16000 and the end distance to 17000.

The function can take four individual arguments (given above), or a single array with the following structure (the example code below shows this method):

-   \[0\] = enabled toggle (a boolean, either true or false), default false
-   \[1\] = colour (real), default c\_black
-   \[2\] = start distance (real), default 0
-   \[3\] = end distance (real), default 1

#### Syntax:

gpu\_set\_fog(enable, colour, start, end);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable or disable fog |
| colour | Colour | The fog colour |
| start | Real | The distance to start applying fog from (relative to the camera) |
| end | Real | The distance to end the fog (relative to the camera) |

#### Returns:

N/A

#### Example:

var fog\_a = gpu\_get\_fog();
fog\_a\[1\] = c\_red;
gpu\_set\_fog(fog\_a);

The above code gets the current fog settings and then sets the colour element of the array to c\_red before setting the fog again using the changed array.