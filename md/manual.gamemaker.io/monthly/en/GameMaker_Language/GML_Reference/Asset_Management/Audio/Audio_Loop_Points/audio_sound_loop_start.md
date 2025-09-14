---
title: "audio_sound_loop_start"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Loop_Points/audio_sound_loop_start.htm"
converted: "2025-09-14T03:59:31.752Z"
---

# audio\_sound\_loop\_start

This function sets the loop start point in seconds for the given sound asset or sound instance.

See: [Audio Loop Points](Audio_Loop_Points.md)

NOTE The loop start point should be before the loop end point. 0.0 indicates the start of the sound.

#### Syntax:

audio\_sound\_loop\_start(index, time);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID | The sound asset or sound instance for which to set the loop start time |
| time | Real | The loop start time in seconds |

#### Returns:

N/A

#### Example:

audio\_sound\_loop\_start(snd\_machine, 4);
audio\_sound\_loop\_end(snd\_machine, 10);
ins\_sound = audio\_play\_sound(snd\_machine, 100, true);

The above code sets the loop start point for the existing sound asset snd\_machine to 4 seconds and the loop end point to 10 seconds. The sound is then played with a priority of 100 and loop set to true. The new sound _instance_ gets its loop start and end position from the sound _asset_. Its ID is stored in a variable ins\_sound.