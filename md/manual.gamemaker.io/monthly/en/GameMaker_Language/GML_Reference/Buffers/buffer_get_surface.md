---
title: "buffer_get_surface"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_surface.htm"
converted: "2025-09-14T03:59:43.544Z"
---

# buffer\_get\_surface

This function writes information from a surface to a given buffer.

The buffer must have been created previously and should be a 1-byte aligned buffer large enough to store data for the surface you are going to write (if unsure, use a [grow](buffer_create.md) buffer or see the example at the bottom of this page).

The information for the surface will always be written to the start of the buffer (regardless of the seek position) but you can choose an offset value (in bytes) to move the write position from the start of the buffer.

The [format](../Drawing/Surfaces/surface_create.md) of the surface will affect how the surface is written into the buffer, refer to the table on the linked page for information on how much space each pixel in a surface would take depending on the format. Keep in mind that the same format may be written in a different way on different platforms.

Use [buffer\_set\_surface](buffer_set_surface.md) to write data from a buffer back into a surface.

#### Syntax:

buffer\_get\_surface(buffer, surface, offset);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |
| surface | Surface | The surface to use. |
| offset | Real | The data offset value (in bytes). |

#### Returns:

N/A

#### Example:

var \_surf\_width = surface\_get\_width(surf1);
var \_surf\_height = surface\_get\_height(surf1);

buff1 = buffer\_create(\_surf\_width \* \_surf\_height \* 4, buffer\_fixed, 1);
buffer\_get\_surface(buff1, surf1, 0);

This first stores the width and height of a surface into local variables.

Then it creates a buffer whose size matches the size of the source surface, which is \_surf\_width \* \_surf\_height \* 4 (in bytes) - this creates space for each pixel of that surface to store its 4 bytes (i.e. 1 byte or 8 bits per channel) using the default surface\_rgba8unorm (RGBA, 8-bit) format. It then writes the surface data into that buffer.

A buffer will always need to have enough space to store every pixel from the source surface, which will depend on the surface's format. The below function calls demonstrate buffers being created for the surface\_rgba16float and surface\_r8unorm formats:

// rgba16float - 16 bits or 2 bytes per channel, RGBA - hence 8 bytes per pixel
buff2 = buffer\_create(\_surf\_width \* \_surf\_height \* 8, buffer\_fixed, 1)

// r8unorm - 8 bits or 1 byte per pixel, only R channel - hence 1 byte per pixel
buff3 = buffer\_create(\_surf\_width \* \_surf\_height, buffer\_fixed, 1)