---
title: "The Depth And Stencil Buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Depth_And_Stencil_Buffer/The_Depth_And_Stencil_Buffer.htm"
converted: "2025-09-14T03:59:49.816Z"
---

# The Depth And Stencil Buffer

The depth and stencil buffer are two data buffers that are used for advanced graphical effects in both 2D and 3D games, which include shadow mapping, deferred rendering, volumetric rendering, ambient occlusion and many more.

They store, for every pixel, a 24-bit _depth_ value and an 8-bit _stencil_ value respectively. They are created for every [Surface](../Surfaces/surface_create.md) when the depth buffer is enabled. By default, surfaces are created with a depth buffer (and a stencil buffer), [z-writing](../GPU_Control/gpu_set_zwriteenable.md) is enabled, [z-testing](../GPU_Control/gpu_set_ztestenable.md) is disabled and the [stencil test](../GPU_Control/gpu_set_stencil_enable.md) is disabled.

The depth and stencil buffer always exist together, i.e.: if a surface has a depth buffer, it also has a stencil buffer, if it has no depth buffer, it also has no stencil buffer.

Like the surfaces they belong to, the depth and stencil buffer are also stored in video memory (VRAM).

NOTE Automatic depth buffer and stencil buffer generation can be turned off using [surface\_depth\_disable](../Surfaces/surface_depth_disable.md).

## The Depth Buffer

The depth buffer, also called z-buffer, is a graphics buffer created with the same dimensions as the surface that it's created for. It stores a 24-bit depth value for every pixel of the surface, which holds the distance away from the surface.

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/Surface_Colour_Alpha_and_Depth_Buffer.png)

The depth buffer can be displayed as a grayscale image, where **white** (a value of 1) indicates the pixel is as far away as it can be (at the far plane) and **black** (a value of 0) indicates it is as close as it can be (at znear).

By default, the depth buffer is **enabled** in GameMaker, which means that every surface is [created](../Surfaces/surface_create.md "surface_create()") with a depth buffer. This also applies to the [application\_surface](../Surfaces/application_surface.md), which is the surface that's drawn to by default.

NOTE The application surface is only used in the regular Draw events (Draw, Draw Begin and Draw End), in the other Draw events the draw target isn't set to a surface. You can still make use of the depth and stencil buffer at any time in the other Draw events, however, by creating your own [custom surface](../Surfaces/Surfaces.htm#custom_surfaces "Custom Surfaces") that has the depth and/or stencil buffer enabled, draw what you need to it and finally draw that surface to the screen.

### Depth vs. Depth Buffer Depth

There are two different uses of the term depth in GameMaker:

-   The depth value assigned to anything that's drawn, either automatically by GameMaker or manually using code. This can be:
    -   The layer depth of layers in [The Room Editor](../../../../The_Asset_Editors/Rooms.md).
    -   An object instance's depth set through its [depth](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) variable.
    -   The depth value you set manually in GML Code using [gpu\_set\_depth](../GPU_Control/gpu_set_depth.md).

        This depth is the z coordinate of the vertex that GameMaker writes to the vertex buffer, _before_ any transformations have taken place on the vertex. (For any geometry drawn by GameMaker, this is the value stored in in\_Position.z).
-   The depth buffer, which stores a depth value for every pixel of a surface (i.e. render target). This depth value is the fraction of the distance between the near plane and the far plane. A value of 0 corresponds to znear, a value of 1 corresponds to zfar. The value depends on the [camera](../../Cameras_And_Display/Cameras_And_Viewports/Cameras_And_View_Ports.md) currently in use and its type of [projection](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_proj_mat.md "camera_set_proj_mat()") ([perspective](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective.md "matrix_build_projection_perspective()") or [orthographic](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_ortho.md "matrix_build_projection_ortho()")).

The depth buffer stores the values after all transformations have been applied. [draw\_clear\_depth](../draw_clear_depth.md) can be used to reset all values in the depth buffer to any value between 0 (znear) and 1 (zfar).

For the default orthographic camera the values can be converted as follows:

depth\_buffer\_depth = 0.5 + depth / 32000
depth = (depth\_buffer\_depth - 0.5) \* 32000

### The Depth Test

The depth test is a test using the depth buffer that can be performed on the pixels that you draw to. It is disabled by default and can be enabled with [gpu\_set\_ztestenable](../GPU_Control/gpu_set_ztestenable.md).

When enabled, the GPU performs a test on all pixels affected by the current draw command (e.g. a draw\_\* function). This test is set to cmpfunc\_lessequal by default, but you can change it to another comparison using [gpu\_set\_zfunc](../GPU_Control/gpu_set_zfunc.md).

The test looks as follows:

depth\_of\_pixel\_being\_written cmp\_func value\_at\_pixel\_in\_depth\_buffer

If a pixel passes the depth test, it is passed to the stencil test (when enabled). If all tests pass, the pixel is finally drawn.

NOTE Z-writing must be enabled in order for the depth value to be overwritten if the depth test passes. This is enabled by default. See [gpu\_set\_zwriteenable](../GPU_Control/gpu_set_zwriteenable.md).

When z-testing is enabled, every time you draw something to a surface that has a depth buffer, the depth value of the new pixel is compared to the value at the corresponding pixel in the depth buffer. For example:

// 1
gpu\_set\_ztestenable(true);
draw\_clear\_alpha(#282828, 1);
draw\_clear\_depth(1);

// 2
var \_c = #BB6666;
gpu\_set\_depth(1000);
draw\_rectangle\_color(25, 25, 125, 125, \_c, \_c, \_c, \_c, false);

// 3
\_c = #449999;
gpu\_set\_depth(2000);
draw\_circle\_color(125, 125, 50, \_c, \_c, false);

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/Depth_Test_Steps.png)In the first step the background is cleared to a grey colour and the depth buffer is cleared to 1, which corresponds to zfar. In the second step the depth is set to 1000 (note that this is the GM depth and not the 0-1 buffer depth), written to the depth buffer as 0.5 + 1000/32000 = 0.53125, which is in front of (i.e. _less than_) zfar (at 1).

As a result, the depth test (set to cmpfunc\_lessequal) passes for all pixels covered by the rectangle and it is fully drawn. Since z-writing is enabled, the depth value for those pixels is replaced with the new value 0.53125. In the third step the depth is set to 2000, written to the depth buffer as 0.5 + 2000/32000 = 0.5625, and a circle is drawn at that depth. There are now two possible situations for the depth test:

-   the comparison of the depth of the pixels of the circle that don't overlap with the rectangle to zfar (in light blue)
-   the comparison of the depth of the pixels of the circle that do overlap with the rectangle (in white)

The light blue pixels are drawn since their depth is less than the maximum depth at zfar. Since z-writing is enabled, the depth value for those pixels is replaced with the new value 0.5625. The pixels shown in white, however, aren't drawn as the depth value of 0.5625 is greater than 0.53125, not less than or equal to 0.53125 (cmpfunc\_lessequal). The depth values for those pixels remain unchanged, i.e. remain at 0.53125.

Using the depth test allows you to draw things in a random order, while still making sure that objects are sorted correctly according to their distance from the viewpoint that you're looking from.

IMPORTANT If your game is 2D and relies only on the drawing order of the layers as you defined them in [The Room Editor](../../../../The_Asset_Editors/Rooms.md) (or the [depth order](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) of your instances), then you don't need to enable the depth test. The depth buffer itself can be disabled as well in this case using [surface\_depth\_disable](../Surfaces/surface_depth_disable.md).

### Using the Depth Buffer

The following gives a general overview on how to use the depth buffer and the depth test:

-   Enable depth testing with [gpu\_set\_ztestenable](../GPU_Control/gpu_set_ztestenable.md). Possibly also restore other GPU settings to their default values (commented out) in case you changed them (e.g. the default z-test comparison function):

    // surface\_depth\_disable(false);
    // gpu\_set\_zwriteenable(true);
    gpu\_set\_ztestenable(true);
    // gpu\_set\_zfunc(cmpfunc\_lessequal);

-   Clear the depth buffer to a value of 1 using [draw\_clear\_depth](../draw_clear_depth.md). 1 is the maximum depth value and corresponds to zfar, so that any object that's closer than zfar will always pass the cmpfunc\_lessequal test.

    draw\_clear\_depth(1);

-   Draw sprites, text, particles, 3D models, etc. Note that if you draw to the [application\_surface](../Surfaces/application_surface.md), the depth used is the depth of the layer that a visual element is on ([layer\_get\_depth](../../Asset_Management/Rooms/General_Layer_Functions/layer_get_depth.md)), the instance's [depth](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) or the depth value that you set manually using [gpu\_set\_depth](../GPU_Control/gpu_set_depth.md).
-   Optionally use the depth buffer in a subsequent draw pass, e.g. by passing the surface which it belongs to as the second parameter to [surface\_set\_target](../Surfaces/surface_set_target.md) or by using the depth buffer's texture in a shader to sample the depth values. The depth buffer's texture can be retrieved with [surface\_get\_texture\_depth](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_texture_depth.md). The depth values are stored in the red colour channel.
-   Copy the contents of the depth buffer to a regular buffer with [buffer\_get\_surface\_depth](../../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_get_surface_depth.md) or update the contents of the depth buffer with data stored in a regular buffer with [buffer\_set\_surface\_depth](../../Buffers/buffer_set_surface_depth.md).

### Perspective Projection

When using a perspective projection ([matrix\_build\_projection\_perspective](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective.md) / [matrix\_build\_projection\_perspective\_fov](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective_fov.md)) the values stored in the depth buffer are not linear and the conversion formula for an orthographic projection cannot be used.

The following function can be used in the fragment shader to convert non-linear depth values to linear ones:

/// @param depth Non-linear depth.
/// @param zparam Equals (zfar / znear).
/// @return Linearized depth, in range 0..1.
float LinearizeDepth(float depth, float zparam)
{
# if !defined(\_YY\_HLSL11\_)
    depth = depth \* 2.0 - 1.0;
# endif
    return 1.0 / ((1.0 - zparam) \* depth + zparam);
}

The ratio of the projection's zfar / znear should be passed to the shader as a uniform variable and then passed to the function.

See the code example on the [surface\_get\_texture\_depth](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_texture_depth.md) function page for a complete example.

## The Stencil Buffer

The stencil buffer, like the depth buffer, is a graphics buffer stored in video memory, created with the same dimensions as the surface it's created for. It stores an 8-bit integer stencil value for every pixel of a render target, allowing for 256 possible values, ranging from 0 to 255.

![](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Drawing/Stencil_Buffer_Detail.png)

In the image above, a red rectangle (not filled) is drawn with a stencil reference value of 4. The sprite you see is then drawn using a value of 2. 2 is greater than 0 but less than 4, so the sprite's pixels that overlap the red rectangle are discarded.

### The Stencil Test

Like the depth test, the stencil test is performed on every pixel that's drawn to a surface. It's disabled by default and can be enabled with [gpu\_set\_stencil\_enable](../GPU_Control/gpu_set_stencil_enable.md). The comparison is one of the values under the [Comparison Function Constant](../GPU_Control/gpu_get_zfunc.md). The test itself compares a stencil reference value to the current value in the stencil buffer:

ref cmp\_func stencil

NOTE Both sides of the comparison are binary AND-ed & with a read bitmask, which defaults to all ones (0b11111111). You can set this mask, if needed, using [gpu\_set\_stencil\_read\_mask](../GPU_Control/gpu_set_stencil_read_mask.md). The comparison then changes to: (ref & read\_mask) cmp\_func (stencil & read\_mask).

The stencil test is more flexible than the depth test as it allows you to set the operation to perform when the test passes and when it fails. This operation is set using [gpu\_set\_stencil\_pass](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_pass.md) and [gpu\_set\_stencil\_fail](../GPU_Control/gpu_set_stencil_fail.md) respectively, to one of the following constants:

| Constant | Description |
| --- | --- |
| stencilop_keep | Keeps the current value in the stencil buffer. |
| stencilop_zero | Sets the stencil buffer value to 0. |
| stencilop_replace | Replaces the value in the buffer to the new stencil reference value. |
| stencilop_incr | Increments the stencil buffer value, clamping at the maximum value. |
| stencilop_incr_wrap | Increments the stencil buffer value, wrapping to 0 at the maximum value. |
| stencilop_decr | Decrements the stencil buffer value, clamping at 0. |
| stencilop_decr_wrap | Decrements the stencil buffer value, wrapping to the maximum value at 0. |
| stencilop_invert | Performs a bitwise inversion on the current stencil buffer value. |

NOTE You can also set the operation to perform in case the stencil test passes but the depth test fails using [gpu\_set\_stencil\_depth\_fail](../GPU_Control/gpu_set_stencil_depth_fail.md).

### Using the Stencil Buffer

The following is an overview of how to use the stencil buffer:

-   Enable the stencil test using [gpu\_set\_stencil\_enable](../GPU_Control/gpu_set_stencil_enable.md), set the stencil comparison function using [gpu\_set\_stencil\_func](../GPU_Control/gpu_set_stencil_func.md) (default cmpfunc\_always) and set the pass and fail operations using [gpu\_set\_stencil\_pass](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_pass.md) and [gpu\_set\_stencil\_fail](../GPU_Control/gpu_set_stencil_fail.md). By default, both operations are set to stencilop\_keep.
-   Clear the stencil buffer to a certain value using [draw\_clear\_stencil](../draw_clear_stencil.md).
-   Draw to the surface. Before drawing, you can change the stencil reference value to use with [gpu\_set\_stencil\_ref](../GPU_Control/gpu_set_stencil_ref.md). For example, to draw a rectangle of 50x50 pixels using a reference value of 10:

    gpu\_set\_stencil\_ref(10);
    draw\_rectangle(0, 0, 49, 49, false);


## Functions

The following functions can be used to clear the depth and stencil buffers:

-   [draw\_clear\_depth](../draw_clear_depth.md)
-   [draw\_clear\_stencil](../draw_clear_stencil.md)
-   [draw\_clear\_ext](../draw_clear_ext.md)

Other functions for setting/getting values related to the depth/stencil buffers are listed on [GPU Control](../GPU_Control/GPU_Control.md).