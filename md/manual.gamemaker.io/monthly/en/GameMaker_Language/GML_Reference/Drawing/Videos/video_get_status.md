---
title: "video_get_status"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_get_status.htm"
converted: "2025-09-14T03:59:55.420Z"
---

# video\_get\_status

This function returns the status of the currently loaded video. The status can be any one of the following constants:

| Video Status Constant |
| --- |
| Constant | Description |
| video_status_closed | No video is currently loaded, or the video was closed with video_close() |
| video_status_preparing | The video is currently preparing and has not started playing yet |
| video_status_playing | The video is currently playing |
| video_status_paused | The video is paused (see video_pause()) |

#### Syntax:

video\_get\_status();

#### Returns:

[Video Status Constant](video_get_status.md)

#### Example:

var \_status = video\_get\_status();

if (keyboard\_check\_pressed(vk\_space))
{
    if (\_status == video\_status\_playing)
    {
        video\_pause();
    }
    else if (status == video\_status\_paused)
    {
        video\_resume();
    }
}

The above code gets the status of the video and then checks if the player has pressed Space. In that case it pauses the video if it's playing, and resumes it if it's paused.