---
title: "gif_open"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/gif_open.htm"
converted: "2025-09-14T03:59:45.915Z"
---

# gif\_open

This function creates an empty GIF format image, ready to have data added to it.

When you call the function, you need to specify the width and height of the GIF (in pixels, and there is no upper limit on size except for available memory), and the function will return the unique ID value used to identify the GIF in subsequent functions, or it will return -1 if the GIF could not be initialized (for example, if the width/height are too big for the memory available). You may also specify an optional argument to set the "clear colour" for the GIF. This is an RGB value (no alpha component), and will clear the GIF to this colour before anything is added to it. If you do not supply a clear colour argument, the default colour of black will be used.

NOTE When using this function you must call [gif\_save](gif_save.md) to end the creation of the GIF before open another file for recording (so for every [gif\_open](gif_open.md) there must be an accompanying [gif\_save](gif_save.md)).

#### Syntax:

gif\_open(width, height, \[clear\_colour\]);

| Argument | Type | Description |
| --- | --- | --- |
| width | Real | The width of the GIF to create |
| height | Real | The height of the GIF to create |
| [clear_colour] | Colour | OPTIONAL The colour (RGB) to clear the GIF to |

#### Returns:

[GIF ID](gif_open.md)

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