---
title: "buffer_set_surface_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_set_surface_depth.htm"
converted: "2025-09-14T03:59:43.861Z"
---

# buffer\_set\_surface\_depth

This function copies data from a [Buffer](buffer_create.md) into a surface's depth buffer.

Depth values in the buffer must be of type buffer\_f32 and range from 0 (representing the near plane) to 1 (representing the far plane).

The copying process stops once either the buffer's boundaries or the surface's boundaries are reached.

NOTE This function may not be supported on all platforms. To see if the copy was successful you can check the returned boolean value.

#### Syntax:

buffer\_set\_surface\_depth(buffer, surface, offset);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer from which the data will be copied |
| surface | Surface | The surface that has the depth buffer to write to |
| offset | Real | The offset, in bytes, in the buffer to start copying data. This is automatically clamped to the buffer's boundaries. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md) (whether the copy was successful)

#### Example:

Create Event

size = 256;
row\_bytesize = 4 \* size;

surface = -1;
buffer = buffer\_create(4 \* size \* size, buffer\_fixed, 4);

gpu\_set\_ztestenable(true);

Draw Event

if (!surface\_exists(surface))
{
    surface = surface\_create(size, size);
}

surface\_set\_target(surface);
draw\_clear\_ext(c\_teal, 1, 1);
gpu\_set\_depth(10000);
draw\_rectangle(100, 100, 150, 150, false);
gpu\_set\_depth(0);
draw\_rectangle(150, 150, 200, 200, true);
surface\_reset\_target();

buffer\_get\_surface\_depth(buffer, surface, 0);
buffer\_fill(buffer, row\_bytesize \* 112, buffer\_f32, 0.7, row\_bytesize \* 20);
buffer\_set\_surface\_depth(buffer, surface, 0);

surface\_set\_target(surface);
gpu\_set\_depth(8000);
draw\_circle\_color(120, 120, 20, c\_red, c\_red, false);
surface\_reset\_target();

Draw GUI Event

var \_texture = surface\_get\_texture\_depth(surface);
draw\_primitive\_begin\_texture(pr\_trianglestrip, \_texture);
draw\_vertex\_texture(0, 0, 0, 0);
draw\_vertex\_texture(size, 0, 1, 0);
draw\_vertex\_texture(0, size, 0, 1);
draw\_vertex\_texture(size, size, 1, 1);
draw\_primitive\_end();

draw\_surface(surface, size, 0);

The code above shows an extended example on how to use the functions [buffer\_get\_surface\_depth](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_get_surface_depth.md) and [buffer\_set\_surface\_depth](buffer_set_surface_depth.md).

In the Create event, a few variables are initialised: the (square) size of the surface, the number of bytes in the buffer taken by a single row of the surface, the surface variable and the buffer. Note that the buffer alignment can be set to 4 since all values are stored as a buffer\_f32, which takes up 4 bytes, i.e. each depth value is read/written at an offset that is a multiple of 4 bytes. Z-testing is also enabled with a call to [gpu\_set\_ztestenable](../Drawing/GPU_Control/gpu_set_ztestenable.md).

In the Draw event, the surface is newly created if it doesn't exist. Then, it is set as the render target, its colour buffer cleared to the colour c\_teal with an alpha value of 1 and its depth buffer cleared to 1. After that, two rectangles are drawn, a first one at a depth value of 10000, a second one at a depth value of 0. The render target is then reset.

Still in the Draw event, the depth buffer's contents are copied into the previously created buffer using [buffer\_get\_surface\_depth](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_get_surface_depth.md) and the depth value in 20 rows is changed by filling a region of the buffer with a new value (using [buffer\_fill](buffer_fill.md)). The changes are written back to the depth buffer using [buffer\_set\_surface\_depth](buffer_set_surface_depth.md). After this, the surface is once again set as the render target. This time, a red disk is drawn on it, using a depth value of 8000 and the render target is once again reset.

Finally, in the Draw GUI event, the depth texture and the surface are displayed alongside each other, showing the contents of both.