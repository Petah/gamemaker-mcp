---
title: "surface_get_format"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_format.htm"
converted: "2025-09-14T03:59:54.371Z"
---

# surface\_get\_format

This function returns the format of the given surface. All formats are [listed here](surface_create.htm#formats).

#### Syntax:

surface\_get\_format(surface\_id);

| Argument | Type | Description |
| --- | --- | --- |
| surface_id | Surface | The surface to get the format of |

#### Returns:

[Surface Format Constant](surface_create.htm#surface_format_constant)

#### Example:

var \_format = surface\_get\_format(my\_surf);
if (\_format == surface\_rgba8unorm)
{
    var \_buffer = buffer\_create(1, buffer\_grow, 1);
    buffer\_get\_surface(\_buffer, my\_surf, 0);
    buffer\_seek(\_buffer, buffer\_seek\_start, 0);
    show\_debug\_message(buffer\_read(\_buffer, buffer\_u8));
    show\_debug\_message(buffer\_read(\_buffer, buffer\_u8));
    show\_debug\_message(buffer\_read(\_buffer, buffer\_u8));
    show\_debug\_message(buffer\_read(\_buffer, buffer\_u8));
}

This gets the format of a surface, and checks if it's [surface\_rgba8unorm](surface_create.md), meaning each pixel has 4 channels (RGBA) with each channel having 8 bits (1 byte).

If the format matches, it creates a buffer and writes the surface to that buffer. It then seeks to the start of the buffer and reads the first four bytes, i.e. the RGBA values for the first pixel. It prints each channel's value to the output log.