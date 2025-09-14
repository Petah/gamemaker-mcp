---
title: "buffer_set_surface"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_set_surface.htm"
converted: "2025-09-14T03:59:43.840Z"
---

# buffer\_set\_surface

This function writes information from a buffer to a given surface.

Both the buffer and the surface must have been created previously, and the buffer's size must be equal to or greater than the surface's size. If the buffer is smaller than the surface, the function will silently fail.

The surface you are writing to must have the same [format](../Drawing/Surfaces/surface_create.md) as the surface that was [written into the buffer](buffer_get_surface.md). Keep in mind that it can't be guaranteed that a surface saved into a buffer on one platform will be read correctly on another platform, even if both surfaces use the same format.

You can provide an offset into the buffer to start reading from. Reading will always start at the beginning of the buffer plus the offset value and _not_ at the current seek position plus the offset value.

#### Syntax:

buffer\_set\_surface(buffer, surface, offset);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |
| surface | Surface | The surface to use. |
| offset | Real | The data offset value. |

#### Returns:

N/A

#### Example:

if (!surface\_exists(surf1))
{
    surf1 = surface\_create(200, 200);
    surface\_set\_target(surf1);
    draw\_clear\_alpha(c\_white, 0);
    surface\_reset\_target();

    if (buffer\_exists(buff1))
    {
        buffer\_set\_surface(buff1, surf1, 0)
    }
}

This checks if a surface doesn't exist and in that case, creates it and then clears it. Then it checks if a buffer exists and copies the data from that buffer into the surface.

This example assumes that the formats of the new surface and the surface stored into the buffer **are the same**. In this case it uses the default surface\_rgba8unorm format as shown in the example for [buffer\_get\_surface](buffer_get_surface.md), read the example on that page for information on correctly storing surface data into a buffer.