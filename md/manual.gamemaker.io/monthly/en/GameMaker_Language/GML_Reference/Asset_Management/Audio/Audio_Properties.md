---
title: "Audio Properties Overview"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Properties.htm"
converted: "2025-09-14T03:59:31.783Z"
---

# Audio Properties Overview

This page gives a detailed overview of the audio properties that GameMaker supports and the different "levels" at which you can set/change them.

The table below lists all applicable levels for the basic audio properties, and lists the functions you can use to set and get each property at each level.

| Level | Gain | Pitch | Offset | Listener Mask |
| --- | --- | --- | --- | --- |
| Asset | audio_sound_gainaudio_sound_get_gain | audio_sound_pitchaudio_sound_get_pitch | audio_sound_set_track_positionaudio_sound_get_track_position | N/A |
| Group | audio_group_set_gainaudio_group_get_gain | N/A | N/A | N/A |
| Emitter | audio_emitter_gainaudio_emitter_get_gain | audio_emitter_pitchaudio_emitter_get_pitch | N/A | audio_emitter_set_listener_maskaudio_emitter_get_listener_mask |
| Instance/Voice | audio_sound_gainaudio_sound_get_gainaudio_play_sound, etc. | audio_sound_pitchaudio_sound_get_pitchaudio_play_sound, etc. | audio_sound_set_track_positionaudio_sound_get_track_positionaudio_play_sound, etc. | audio_play_sound, etc. |
| Global/Listener | audio_master_gainaudio_set_master_gainaudio_get_master_gain | N/A | N/A | audio_set_listener_maskaudio_get_listener_mask |
| Result | Gasset * Ggroup * Gemitter * Ginstance | Passet * Pemitter * Pinstance (might be clipped, see Pitch) | Asset-level offset unless instance-level offset is passed to the audio_play_sound_* functions | Memitter & Minstance (bitwise AND, see Bitwise Operators) |

NOTE Audio devices and/or operating systems can sometimes attempt to change the audio's amplitude in order to protect the user from what would otherwise be very loud sounds, for example by normalising the audio stream or by clipping the amplitude to 1. How this is handled is specific to the audio device or OS that's handling your game's audio. As a result, increasing gains might have an inconsistent effect.

## Notes

### Gain

The default asset-level gain is the value of the "Volume" slider in [The Sound Editor](../../../../The_Asset_Editors/Sounds.md):

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Asset_Gain_IDE.png)

This can still be changed in-game later by calling [audio\_sound\_gain](audio_sound_gain.md) with the sound _asset_ ID as the argument:

audio\_sound\_gain(snd\_Explode, 0, 0);  // Set the asset-level gain to 0 (new and existing instances of this sound are muted)

### Pitch

The resulting _source_ pitch has a lower limit of 1/256 (-8 octaves) for all sounds. It has an upper limit dependent on the compression type of the sound - uncompressed sounds have an upper limit of 256 (+8 octaves), but compressed sounds have a limit of 4 (+2 octaves).

If the source pitch is clipped, a warning message will be printed to the console. If the source pitch is clipped on the upper bound for a compressed sound, a note will also be printed to the console pointing out that they have a lower upper limit than uncompressed sounds.

NOTE On HTML5, uncompressed sounds and compressed sounds have the same range of 1/256 to 256. Because of this, there is no specific warning for clipping a compressed sound on the upper bound.