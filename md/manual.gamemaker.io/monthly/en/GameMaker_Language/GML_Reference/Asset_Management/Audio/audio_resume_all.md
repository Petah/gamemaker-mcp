---
title: "audio_resume_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_resume_all.htm"
converted: "2025-09-14T03:59:32.348Z"
---

# audio\_resume\_all

With this function you can resume all sounds that have been paused previously.

#### Syntax:

audio\_resume\_all();

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("P")))
{
    global.Pause = !global.Pause;
    if (global.Pause)
    {
        audio\_pause\_all();
    }
    else
    {
        audio\_resume\_all();
    }
}

The above code checks for a press of the keyboard key "P" and if it detects one it sets the global variable "Pause" to true or false and then either pauses all sounds or restarts all previously paused sounds.