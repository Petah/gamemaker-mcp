---
title: "audio_pause_sound"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_pause_sound.htm"
converted: "2025-09-14T03:59:32.251Z"
---

# audio\_pause\_sound

With this function you can pause any sound that is currently playing. The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the [audio\_play\_sound()](audio_play_sound.md) or [audio\_play\_sound\_at()](audio_play_sound_at.md) functions) or a sound asset, in which case _all_ instances of the given sound will be paused.

#### Syntax:

audio\_pause\_sound(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID or Audio Queue ID | The index of the sound to pause. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("P")))
{
    global.pause = !global.pause;
    if (global.pause)
    {
        audio\_pause\_sound(snd\_waterfall);
    }
    else
    {
        audio\_resume\_sound(snd\_waterfall);
    }
}

The above code checks for a press of the keyboard key "P" and if it detects one it sets the global variable pause to true or false and then either pauses the sound indexed in the variable snd\_waterfall or it resumes the sound from its paused state.