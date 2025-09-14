---
title: "gif_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/gif_save.htm"
converted: "2025-09-14T03:59:45.931Z"
---

# gif\_save

This function saves out a GIF animation.

You supply the GIF index (as returned by the function [gif\_open](gif_open.md)) as well as a filename to save it with. Note that GameMaker does not automatically append the .gif file extension, so you should include this as part of the filename string if you wish the saved file to be identified as a GIF. The created GIF will be palletized using the Universal 884 Palette (see [here](https://en.wikipedia.org/wiki/List_of_software_palettes#8-8-4_levels_RGB) for more information).

Note that if the function is successful and the GIF is saved correctly, then it will return 0, otherwise it will return -1.

NOTE This function closes the handle to the GIF image. This means that after saving you cannot use this GIF ID again and you'll need to open a new GIF using [gif\_open](gif_open.md).

#### Syntax:

gif\_save(gif\_index, fname);

| Argument | Type | Description |
| --- | --- | --- |
| gif_index | GIF ID | The ID of the GIF to save |
| fname | String | The filename to use for the GIF |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

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