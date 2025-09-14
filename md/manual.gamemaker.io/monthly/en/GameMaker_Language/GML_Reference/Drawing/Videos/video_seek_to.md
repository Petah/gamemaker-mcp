---
title: "video_seek_to"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_seek_to.htm"
converted: "2025-09-14T03:59:55.507Z"
---

# video\_seek\_to

This function allows you to seek to the given position in the currently loaded video. You specify the time value to seek to, which is in milliseconds.

This function works best when the video is paused, and the distance from the current position to the new seek position is not too small.

#### Syntax:

video\_seek\_to(time);

| Argument | Type | Description |
| --- | --- | --- |
| time | Real | The time to seek to (in milliseconds). |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(vk\_right))
{
    var \_video\_position = video\_get\_position();
    \_video\_position += 2000;

    if (\_video\_position < video\_get\_duration())
    {
        video\_seek\_to(\_video\_position);
    }
    else
    {
        video\_close();
    }
}

The above code moves the playing video 2 seconds ahead, when the right arrow key is pressed, and the new position is smaller than the video's duration. However if it's not within the duration, the video is closed.

In this example, video\_seek\_to() is used to seek the video to the new position.