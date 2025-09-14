---
title: "gif_add_surface"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/gif_add_surface.htm"
converted: "2025-09-14T03:59:45.901Z"
---

# gif\_add\_surface

This function saves a frame to a GIF file from a surface.

You supply the GIF file ID (as returned by the function [gif\_open](gif_open.md)) and a surface (as returned by the function [surface\_create](../Drawing/Surfaces/surface_create.md)), as well as a delay time between frames. The delay time is calculated in 1/100ths of a second, but note that once the GIF has been created, if you use it for promotional purposes for example, different browsers may interpret the frame delay slightly differently - see [here](https://www.deviantart.com/humpy77/journal/Frame-Delay-Times-for-Animated-GIFs-214150546) for more details. You may (optionally) supply X and Y offset values for the surface being used to add to the GIF, in which case the part drawn to the GIF will begin from the offset and not the default (0, 0) position, permitting you to select only a section of the surface to add. You can also supply a quantization value, which is an integer between 0 and 3, where 0 is full quantization and 3 is zero quantization (lower values will have a subsequent degradation in quality, but create a smaller GIF). Note that there isn't much difference between the default quality of 2, and the highest of 3, and using 3 will significantly slow down the creation of the GIF so care should be taken when using the maximum value.

Note that there are no built-in limits on number of frames or on the size of those frames in your GIF, but if you use too much memory then the function will fail and return -1, otherwise it will return 0.

NOTE This function will only work with surfaces that use the [surface\_rgba8unorm](../Drawing/Surfaces/surface_create.md) (default) surface format.

#### Syntax:

gif\_add\_surface(gif\_index, surface, delay\_time, \[xoffset\], \[yoffset\], \[quantization\]);

| Argument | Type | Description |
| --- | --- | --- |
| gif_index | GIF ID | The ID of the GIF to add the surface data to |
| surface | Surface | The surface to use as the added frame |
| delay_time | Real | The delay time for the frame (in 100ths of a second) |
| [xoffset] | Real | OPTIONAL The offset along the X axis of the surface to add from |
| [yoffset] | Real | OPTIONAL The offset along the Y axis of the surface to add from |
| [quantization] | Real | OPTIONAL The quantization amount from 0 to 3 (0 lowest quality, 3 highest quality, default is 2) |

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

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
        gif\_save(gif\_image, "GameCapture.gif");
        count = 0;
        save\_gif = false;
    }
    count++;
}

The above code will create a GIF image file with 30 frames taken from the application surface and then save it.