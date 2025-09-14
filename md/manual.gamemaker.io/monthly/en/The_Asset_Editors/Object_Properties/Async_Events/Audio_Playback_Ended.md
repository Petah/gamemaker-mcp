---
title: "Audio Playback Ended"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.htm"
converted: "2025-09-14T04:00:15.505Z"
---

# Audio Playback Ended

![](../../../assets/Images/Asset_Editors/Async_AudioPlaybackEnded.png)This event is triggered whenever playback ends for a sound instance played using the audio\_play\_sound\_ functions.

Playback of a sound ends in the following situations:

-   The sound **reaches its end position**. Pausing a sound using [audio\_pause\_sound](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_pause_sound.md), changing its track position using [audio\_sound\_set\_track\_position](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_set_track_position.md) or looping a section of it by changing the [Audio Loop Points](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Loop_Points/Audio_Loop_Points.md) postpones the end of playback as the sound doesn't reach the end position this way.
-   The sound is **stopped**, through a call to [audio\_stop\_sound](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_stop_sound.md) or [audio\_stop\_all](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_stop_all.md). I.e. stopping a sound also _always_ means it ends playback.
-   The sound is **forced to stop** due to _voice stealing_: when another sound is played using any of the audio\_play\_sound\_ functions and all channels are used (see [audio\_channel\_num](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_channel_num.md)), a channel playing a sound with a lower priority than the new one will be used to play the new sound, i.e. the channel is _stolen_ by the new sound. An Audio Playback Ended event is triggered for the sound that was forced to stop playing.

The event will trigger in all objects that have it, for any sound played in the game (even when it's not played by the same object).

The event returns information in the [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) ds\_map. The map contains the following keys in case of an Audio Playback Ended event:

-   **"sound\_id"** - the [Sound Instance ID](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_play_sound.md) that ended playback.
-   **"asset\_id"** - the index of the [Sound Asset](../../Sounds.md).
-   **"was\_stopped"** - this is set to false, unless the sound was stopped manually using the audio\_stop\_ functions or when it was forced to stop playing.

NOTE _Pausing_ a sound does _not_ end playback, as playback can still be _resumed_ afterwards.

## Example

Suppose you play a sound using any of the audio\_play\_sound\_ functions:

ins\_snd\_bgm = audio\_play\_sound(snd\_music, 100, false);

If you call no other sound functions on this sound, it will play until the end. At that point, the Audio Playback Ended event is triggered for the sound. The [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) ds\_map will contain the following values in that case:

-   **"sound\_id"** - the sound ID returned by [audio\_play\_sound](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_play_sound.md) and stored in ins\_snd\_bgm
-   **"asset\_id"** - snd\_music
-   **"was\_stopped"** - false (the sound wasn't stopped _or_ forced to stop)

If you stop the sound before it reaches its end, the Audio Playback Ended event is triggered as well. This can be done using any of the following lines of code:

// Stop the sound instance
audio\_stop\_sound(ins\_snd\_bgm);

// Stop all instances of the sound asset
audio\_stop\_sound(snd\_relaxed);

// Stop all sounds that are playing
audio\_stop\_all();

In this case, the sound was stopped through a call to one of the audio\_stop\_ functions, so instead of being false, "was\_stopped" will be true here.

Finally, if you start playing additional sounds with a higher priority while this sound is playing, these will also take up a channel (or a _voice_). If no free channels are left then ins\_snd\_bgm may be forced to stop and the Audio Playback Ended event is triggered. In this case, "was\_stopped" is also set to true.