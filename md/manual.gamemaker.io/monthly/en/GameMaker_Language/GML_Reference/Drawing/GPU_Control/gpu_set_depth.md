---
title: "gpu_set_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_depth.htm"
converted: "2025-09-14T03:59:50.585Z"
---

# gpu\_set\_depth

This function sets the depth (i.e. the z coordinate) for GameMaker's 2D drawing functions (sprites, shapes, primitives, text, etc.)

By default, GameMaker uses the layer's depth when drawing flat graphics, but this function allows you to use your own. This can be used to draw at a different depth, or draw individual sprites/primitives at their own depths.

IMPORTANT This function doesn't change the depth of the layer when called in a layer begin script (see [layer\_script\_begin](../../Asset_Management/Rooms/General_Layer_Functions/layer_script_begin.md)). If you need to change the depth of a specific layer in the layer begin script you should do so using [layer\_force\_draw\_depth](../../Asset_Management/Rooms/General_Layer_Functions/layer_force_draw_depth.md) instead.

Also note that the depth set with [layer\_force\_draw\_depth](../../Asset_Management/Rooms/General_Layer_Functions/layer_force_draw_depth.md) will take precedence over the depth set in this function.

NOTE GameMaker only changes the depth when it starts drawing a new layer, so you may want to restore the original depth (saved previously from [gpu\_get\_depth](gpu_get_depth.md)) after you're done drawing, so any subsequent calls will not be affected by your depth change.

NOTE Depth values are approximate. If you try to draw things at depth values close to the maximum depth and minimum depth, they may not be drawn due to inaccuracies introduced by the calculations.

#### Syntax:

gpu\_set\_depth(depth);

| Argument | Type | Description |
| --- | --- | --- |
| depth | Real | The new depth value to use for drawing |

#### Returns:

N/A

#### Example 1: "depth = -y"

Draw Event

var \_zwrite = gpu\_get\_zwriteenable();
var \_ztest = gpu\_get\_ztestenable();
gpu\_set\_zwriteenable(true);
gpu\_set\_ztestenable(true);
var \_depth = gpu\_get\_depth();

gpu\_set\_depth(-y);

draw\_self();

gpu\_set\_depth(\_depth);
gpu\_set\_zwriteenable(\_zwrite);
gpu\_set\_ztestenable(\_ztest);

The above code sets the depth used for drawing to the current instance's \-y. This gives an easy way to draw instances behind other instances once they move "behind" them, if those instances also have their depth set to \-y.

First, z-writing and z-testing are enabled on the GPU using [gpu\_set\_zwriteenable](gpu_set_zwriteenable.md) and [gpu\_set\_ztestenable](gpu_set_ztestenable.md). Their current values are stored in temporary variables \_zwrite and \_ztest respectively, as well as the current depth, which is stored in a temporary variable \_depth. The depth is then set to the instance's \-y using gpu\_set\_depth and the instance is drawn normally using [draw\_self](../Sprites_And_Tiles/draw_self.md).

Finally, depth, z-writing and z-testing are all set to their previous value in order to not affect further drawing.

#### Example 2: Drawing an Hourglass Shape using Circles

Draw Event

gpu\_set\_zwriteenable(true);
gpu\_set\_ztestenable(true);
matrix\_set(matrix\_view, matrix\_build\_lookat(220, 0, 90, 0, 0, 90, 0, 0, 1));
matrix\_set(matrix\_projection, matrix\_build\_projection\_perspective\_fov(60, room\_width/room\_height, 1, 10000));

var \_depth = gpu\_get\_depth(); // store previous depth
var \_col = draw\_get\_colour();

var n = 180;
for (var z = 0; z <= n; z += 10)
{
    gpu\_set\_depth(z);
    draw\_set\_colour(make\_color\_hsv(z / n \* 255, 150, 250));
    draw\_circle(0, 0, 40 + lengthdir\_x(20, z / n \* 360), false);
}

draw\_set\_colour(\_col);
gpu\_set\_depth(\_depth);        // restore previous depth

The code above draws a coloured hourglass-like shape in the Draw event.

First, z-writing and z-testing are enabled ([gpu\_set\_zwriteenable](gpu_set_zwriteenable.md) and [gpu\_set\_ztestenable](gpu_set_ztestenable.md)) and an appropriate projection ([matrix\_build\_projection\_perspective\_fov](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective_fov.md)) and view matrix ([matrix\_build\_lookat](../../Maths_And_Numbers/Matrix_Functions/matrix_build_lookat.md)) are built and set using [matrix\_set](../../Maths_And_Numbers/Matrix_Functions/matrix_set.md). Next, the current depth value and draw colour are stored so they can be restored later.

After this, a couple of circles are drawn in a for loop using [draw\_circle](../Basic_Forms/draw_circle.md). The depth used to draw each circle is set to the value of the loop variable z, which is increased by 10 every iteration. The radius of the circle varies in a way that the final shape looks like an hourglass shape. The draw colour is changed to bring variation in the colours of the circles.

Finally, the draw colour and depth are set back to the values they had before, in order to not affect further drawing on the instance's layer.