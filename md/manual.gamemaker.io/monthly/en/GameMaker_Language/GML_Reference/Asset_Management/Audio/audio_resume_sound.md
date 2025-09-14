---
title: "audio_resume_sound"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_resume_sound.htm"
converted: "2025-09-14T03:59:32.364Z"
---

# audio\_resume\_sound

With this function you can resume any sound that is currently paused (after using the function [audio\_pause\_sound()](audio_pause_sound.md)). The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the [audio\_play\_sound()](audio_play_sound.md) or [audio\_play\_sound\_at()](audio_play_sound_at.md) functions) or a sound asset, in which case _all_ instances of the given sound will be re-started.

#### Syntax:

audio\_resume\_sound(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID or Audio Queue ID | The index of the sound to resume. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("P")))
{
    global.Pause = !global.Pause;
    if (global.Pause)
    {
        audio\_pause\_sound(snd\_Waterfall);
    }
    else
    {
        audio\_resume\_sound(snd\_Waterfall);
    }
}

The above code checks for a press of the keyboard key "P" and if it detects one it sets the global variable "Pause" to true or false and then either pauses the sound indexed in the variable "snd\_Waterfall" or it resumes the sound from its paused state.