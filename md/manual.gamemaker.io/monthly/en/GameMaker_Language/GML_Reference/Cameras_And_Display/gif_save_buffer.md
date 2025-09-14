---
title: "gif_save_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/gif_save_buffer.htm"
converted: "2025-09-14T03:59:45.950Z"
---

# gif\_save\_buffer

This function saves out a GIF animation.

You supply the GIF index (as returned by the function [gif\_open](gif_open.md)) and the function will return a 1 byte-aligned grow buffer with the GIF data. Note that the final GIF data will have been palletized using the Universal 884 Palette (see [here](https://en.wikipedia.org/wiki/List_of_software_palettes#8-8-4_levels_RGB) for more information).

NOTE This function closes the handle to the GIF image. This means that after saving you cannot use this GIF ID again and you'll need to open a new GIF using [gif\_open](gif_open.md).

#### Syntax:

gif\_save\_buffer(gif\_index);

| Argument | Type | Description |
| --- | --- | --- |
| gif_index | GIF ID | The ID of the GIF to save |

#### Returns:

[Buffer](../Buffers/buffer_create.md)

#### Example:

if (save\_gif == true)
{
    if (count == 0)
    {
        gif\_image = gif\_open(room\_width, room\_height);
    }
    else if (count < 30)
    {
        gif\_add\_surface(gif\_image, application\_surface, 6/100);
    }
    else
    {
        global.capture\_buff = gif\_save\_buffer(gif\_image);
        count = 0;
        save\_gif = false;
    }
    count++;
}

The above code will create a GIF image file with 30 frames taken from the application surface and then save it to a buffer.