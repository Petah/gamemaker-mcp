---
title: "audio_stop_sound"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_stop_sound.htm"
converted: "2025-09-14T03:59:32.580Z"
---

# audio\_stop\_sound

This function will stop the given sound if it is currently playing. This includes all sounds that have been paused using [audio\_pause\_sound](audio_pause_sound.md) or [audio\_pause\_all](audio_pause_all.md).

The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the [audio\_play\_sound](audio_play_sound.md) or [audio\_play\_sound\_at](audio_play_sound_at.md) functions) or a sound asset, in which case _all_ instances of the given sound will be stopped.

If you pass it an [Audio Queue ID](Audio_Buffers/audio_create_play_queue.md), it will remove all buffers from that queue and run the [Audio Playback](../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback.md) event for each buffer removed, with the key "queue\_shutdown" set to 1.

NOTE This function triggers an [Audio Playback Ended](../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.md) Async Event for every sound instance that is affected by it.

#### Syntax:

audio\_stop\_sound(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID or Audio Queue ID | The index of the sound to stop. |

#### Returns:

N/A

#### Example:

if (!global.SFX)
{
    audio\_stop\_sound(snd\_Waterfall);
}
else
{
    audio\_play\_sound\_at(snd\_Waterfall, x, y, 0, 100, 300, 1, true, 1);
}

The above code checks the global variable "SFX" and if it returns false, it will stop the sound indexed in the variable "snd\_Waterfall" that is currently playing, and if it returns true, it will loop the sound.