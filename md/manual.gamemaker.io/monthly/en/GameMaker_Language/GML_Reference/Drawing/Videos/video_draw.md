---
title: "video_draw"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_draw.htm"
converted: "2025-09-14T03:59:55.343Z"
---

# video\_draw

This function draws the current frame of the [opened video](video_open.md) to a surface (or two surfaces). It returns the surface(s) as part of its return array, which can be [drawn manually](../Surfaces/draw_surface.md).

The function also returns data regarding the status of the video, which is expanded upon below.

Ensure that this is only called after a [video\_open()](video_open.md) call but before a [video\_close()](video_close.md) call, otherwise it will not do anything (as there will not be a video loaded).

## Return Data

The function will return an array, the first element (\[0\]) of which will be a real value. This value tells the status of the video, and will be:

-   **0**, if the video is playing without any issues
-   **\-1**, if there was an error
-   On some platforms, **\-2**, if the video finished playing (at which point it can be removed from memory with a [video\_close()](video_close.md) call)
    -   It's recommended to use the [Async Callbacks](Videos.htm#h) instead to know when a video ends

When this status value is **0**, the array will contain more data, which will depend on the format of the video. You can know the video format by calling [video\_get\_format()](video_get_format.md).

## RGBA Videos

For RGBA videos, the position \[1\] will contain the surface where the video frame was drawn. You can get this surface and [draw it](../Surfaces/draw_surface.md) manually.

## YUV Videos

Some platforms (especially consoles) use the YUV colour format for videos, which makes use of two surfaces. In that case the array will have positions \[1\] and \[2\] with two surfaces:

-   \[1\] is the main video surface in black and white
-   \[2\] is the chroma surface that contains all the colour data

Both these surfaces are then combined using a YUV shader before being used to texture a custom quad, which will draw the video to the screen.

Read [YUV Videos](YUV_Videos.md) for steps on drawing these two surfaces using a shader.

For the specific implementation details for a particular console, please refer to its documentation on the [YoYo Games Helpdesk](https://help.gamemaker.io/hc/en-us/).

#### Syntax:

video\_draw();

#### Returns:

[Array](../../../../../../../GameMaker_Language/GML_Overview/Arrays.md)

#### Example:

var \_data = video\_draw();
var \_status = \_data\[0\];
var \_video\_status = video\_get\_status();

if (\_status == 0 && \_video\_status == video\_status\_playing)
{
    var \_surface = \_data\[1\];

    draw\_surface(\_surface, x, y);
}

The above code calls video\_draw, and checks if the returned status is 0, meaning the video is playing. It also checks the value returned by [video\_get\_status](video_get_status.md) to see if it's equal to video\_status\_playing. In that case it gets the surface ID and draws it at the instance's position. This will only work for RGBA videos.