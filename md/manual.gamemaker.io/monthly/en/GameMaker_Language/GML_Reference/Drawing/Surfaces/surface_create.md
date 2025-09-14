---
title: "surface_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_create.htm"
converted: "2025-09-14T03:59:54.263Z"
---

# surface\_create

This function creates a new surface and returns it.

When the surface is first created, it may contain "noise" as basically it is just an area of memory that is put aside for the purpose (and that memory may still contain information), so you may want to clear the surface before use with a function like [draw\_clear\_alpha](../Colour_And_Alpha/draw_clear_alpha.htm#h).

If automatic depth buffer generation is enabled (the default), a depth buffer and stencil buffer are also created for the surface. This can be turned off using [surface\_depth\_disable](surface_depth_disable.md).

NOTE It is highly recommended that all surfaces are created with a size that is a power of 2, e.g. 16, 128, 512 or 1024 pixels in size. This is not exactly necessary on certain platforms (like Windows and MacOS) but it will certainly increase compatibility on those targets, while for HTML5 and devices it is essential and it's very important that you remember this or you may run into problems later.

## Formats

You can optionally specify the format that will be used to store the surface data in memory. The default format is surface\_rgba8unorm.

The table below lists the formats you can use to create a surface and describes how much data is stored per-pixel (which you should know if you are transferring surface data [into](../../Buffers/buffer_get_surface.md)/[from](../../Buffers/buffer_set_surface.md) a buffer):

| Surface Format Constant |
| --- |
| Constant | Description |
| surface_rgba8unorm | (Default) This format supports 4 channels (red, green, blue, alpha) with 8 bits each, meaning each channel has a 0-255 range"unorm" refers to these values being normalised into a 0-1 range when read in shaders |
| surface_r8unorm | This format supports a single channel (red) with an 8-bit value (0-255)Since it only contains one channel, it takes a quarter of the space compared to the format above (which stores RGBA)When read in a shader, all channels except red will be 0 |
| surface_rg8unorm | This is similar to the format above, however it contains two channels: red and green (8 bits each) |
| surface_rgba4unorm | This format supports 4 channels (red, green, blue, alpha) with 4 bits each, meaning each channel has a 0-15 range |
| surface_rgba16float | This format supports 4 channels (red, green, blue, alpha) with each channel being a 16-bit float, providing a higher precisionAn example use case is HDR, as this format would allow you to use values past the default 0-255 colour range |
| surface_r16float | This format supports a single channel (red) with a 16-bit floating point valueSince it only contains one channel, it takes a quarter of the space compared to the format above (which stores RGBA)When read in a shader, all channels except red will be 0 |
| surface_rgba32float | This format supports 4 channels (red, green, blue, alpha) with each channel being a 32-bit float, providing the highest precision, however this is slower to render to than 16-bit formats and is not as widely supported |
| surface_r32float | This format supports a single channel (red) with a 32-bit floating point value |

#### Syntax:

surface\_create(w, h, \[format\]);

| Argument | Type | Description |
| --- | --- | --- |
| w | Real | The width of the surface to be created |
| h | Real | The height of the surface to be created |
| format | Surface Format Constant | OPTIONAL The format to use for storing surface data, default is surface_rgba8unorm |

#### Returns:

[Surface](surface_create.md) (or an invalid handle -1 if anything went wrong)

#### Example:

if (!surface\_exists(surf))
{
    surf = surface\_create(1024, 1024);
    surface\_set\_target(surf);
    draw\_clear\_alpha(c\_black, 0);
    surface\_reset\_target();
    view\_surface\_id\[0\] = surf;
}

The above code checks to see if a surface exists and if it does not it will create a surface that is 1024 pixels wide and 1024 pixels high, assigning it to the variable surf. The drawing target is then set to the new surface, which is cleared and made transparent before having the drawing target reset to the display. Finally the surface is assigned to a view.