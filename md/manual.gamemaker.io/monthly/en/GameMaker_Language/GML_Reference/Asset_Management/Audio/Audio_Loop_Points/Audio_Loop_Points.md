---
title: "Audio Loop Points"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Loop_Points/Audio_Loop_Points.htm"
converted: "2025-09-14T03:59:31.638Z"
---

# Audio Loop Points

Audio Loop Points allow you to loop a part (or section) of an audio asset.

While you can manually control audio playback using [audio\_sound\_get\_track\_position](../audio_sound_get_track_position.md) and [audio\_sound\_set\_track\_position](../audio_sound_set_track_position.md), this will never be accurate for looping a section, as audio is processed at a much higher rate, e.g. 44100 or 48000 times a second (the sample rate), which is a lot more than the default game speed of 60. This means that many samples may have already played between the time you call one function and the next.

By using the functions provided for audio looping, the looping is performed on the audio thread, _at audio rates_.

NOTE You cannot use buffer-based audio queues or audio sync groups with the audio looping functions. All other kind of audio can be used without problems, including [buffer sounds](../Audio_Buffers/Audio_Buffers.md) and [streams](../audio_create_stream.md).

## Function Reference

Here are the GML Code functions for audio looping:

-   [audio\_sound\_loop](audio_sound_loop.md)
-   [audio\_sound\_get\_loop](audio_sound_get_loop.md)
-   [audio\_sound\_loop\_start](audio_sound_loop_start.md)
-   [audio\_sound\_get\_loop\_start](audio_sound_get_loop_start.md)
-   [audio\_sound\_loop\_end](audio_sound_loop_end.md)
-   [audio\_sound\_get\_loop\_end](audio_sound_get_loop_end.md)

## Loop Section

Every sound asset and sound instance has a single loop section, defined by a start and end time in seconds. The part of the sound between this start and end will play looped if the sound is set to loop.

Every sound that you play using any of the audio\_play\_sound\_ functions gets its default loop start and loop end time from the asset when played, e.g.:

audio\_sound\_loop\_start(snd\_loop, 2);
audio\_sound\_loop\_end(snd\_loop, 6);
ins\_sound = audio\_play\_sound(snd\_loop, 100, true);
audio\_sound\_loop\_end(ins\_sound, 10);

By default, a sound is set to loop from the beginning to the end. This corresponds to a start value of 0.0 seconds and an end value of 0.0 seconds (corresponding to [audio\_sound\_length](../audio_sound_length.md)).

The loop end position _must_ be after the loop start position, except when they are both set to 0.0 (i.e. loop the sound from start to end).

### Enabling/Disabling Looping

Setting the loop state of a sound instance can be done in two ways. The first is when playing the sound using [audio\_play\_sound](../audio_play_sound.md) or any of the other audio\_play\_sound\_ functions:

ins\_sound = audio\_play\_sound(snd\_loop, 100, true);

The second is by calling the function [audio\_sound\_loop](audio_sound_loop.md) on an already playing sound:

audio\_sound\_loop(ins\_sound, true);

NOTE When a sound's track position reaches the loop end position GameMaker checks whether it should loop. If at that moment its loop state is set to true, the sound will jump back to the loop start position. If not, it will continue playing the sound until the end, unless you change either the track position or the loop end.

## Examples

The following are a couple of ways in which you can use audio loop points to loop audio.

### Intro & Outro

In this situation you have an audio file with an intro, a looping mid-section and an outro. The audio is played from the start, plays the intro part first, then moves to the looped part and keeps playing this looped until the audio is set to no longer loop. At that point the looped part will finish playing a last time to then transition to the outro part.

audio\_sound\_loop\_start(snd\_music, 10);
audio\_sound\_loop\_end(snd\_music, 20);
ins\_sound = audio\_play\_sound(snd\_music, 100, true);  // Play the sound looped

Once the sound is in the looping part, the sound instance can then be set to no longer loop:

audio\_sound\_loop(ins\_sound, false);

After changing this, the remainder of the looping part will be played, followed by the outro part.

NOTE Once the sound has stopped playing ins\_sound will no longer refer to a valid sound instance and you will need to play a new one using [audio\_play\_sound](../audio_play_sound.md).

### Multiple Loops

Every sound has one loop section. You can add multiple loop sections yourself by storing them in a struct and manually applying the start and end of the loop section you want to use at any given moment:

loops = \[
    {start: 0, end: 10},
    {start: 10, end: 20},
    {start: 20, end: 30}
\];

section = 2;

audio\_sound\_loop\_start(snd\_several\_sections, loops\[section\].start);
audio\_sound\_loop\_end(snd\_several\_sections, loops\[section\].end);
ins\_sound = audio\_play(snd\_several\_sections, 200, true);

### Converting from BPM

Using the BPM of a piece of music you can calculate the time one "beat" takes. This way you can loop parts of a sound that correspond precisely to beats or bars in the music:

var \_bpm\_to\_sec = time\_bpm\_to\_seconds(126);
var \_beats\_per\_bar = 4;
var \_bars = 4;
audio\_sound\_loop\_start(snd\_bgm, (\_bars \* \_beats\_per\_bar) \* \_bpm\_to\_sec);

This code sets the loop start position for a sound asset snd\_bgm to the start of the fifth bar.

See:

-   [time\_bpm\_to\_seconds](../../../Time_Sources/time_bpm_to_seconds.md)
-   [time\_seconds\_to\_bpm](../../../Time_Sources/time_seconds_to_bpm.md)

## Limitations

-   When pushing the feature to its limits (e.g. with extremely small loop-sections), compressed sounds will incur a performance penalty. In such cases, it is better to use uncompressed sound assets.