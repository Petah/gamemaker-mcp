---
title: "video_get_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_get_position.htm"
converted: "2025-09-14T03:59:55.403Z"
---

# video\_get\_position

This function returns the current position of the loaded video, in milliseconds. This indicates how much the video has played, out of its whole [duration](video_get_duration.md).

#### Syntax:

video\_get\_position();

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

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

In this example, video\_get\_position() is used to return the position of the video that is playing.