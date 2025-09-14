---
title: "video_pause"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_pause.htm"
converted: "2025-09-14T03:59:55.476Z"
---

# video\_pause

This function pauses the video file that is currently loaded. You can resume it by calling [video\_resume()](video_resume.md) any time after this function.

#### Syntax:

video\_pause();

#### Returns:

N/A

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