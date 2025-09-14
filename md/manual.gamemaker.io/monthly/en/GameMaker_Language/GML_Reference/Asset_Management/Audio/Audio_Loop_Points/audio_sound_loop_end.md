---
title: "audio_sound_loop_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Loop_Points/audio_sound_loop_end.htm"
converted: "2025-09-14T03:59:31.735Z"
---

# audio\_sound\_loop\_end

This function sets the loop end point in seconds for the given sound asset or sound instance. This must be higher than the set [loop start](audio_sound_loop_start.md) point, except when it's 0, which is the end of the sound - this means you can specify 0 to set the loop end point to the end of the sound.

See: [Audio Loop Points](Audio_Loop_Points.md)

#### Syntax:

audio\_sound\_loop\_end(index, time);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID | The sound asset or sound instance for which to set the loop end time |
| time | Real | The loop end time in seconds |

#### Returns:

N/A

#### Example:

audio\_sound\_loop\_start(snd\_machine, 4);
audio\_sound\_loop\_end(snd\_machine, 10);
ins\_sound = audio\_play\_sound(snd\_machine, 100, true);

The above code sets the loop start point for the existing sound asset snd\_machine to 4 seconds and the loop end point to 10 seconds. The sound is then played with a priority of 100 and loop set to true. The new sound _instance_ gets its loop start and end position from the sound _asset_. Its ID is stored in a variable ins\_sound.