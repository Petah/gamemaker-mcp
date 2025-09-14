---
title: "audio_sound_set_track_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_set_track_position.htm"
converted: "2025-09-14T03:59:32.551Z"
---

# audio\_sound\_set\_track\_position

This function will set the position (in seconds) for the given sound ID or asset.

The supplied "index" can either be a single instance of a sound (as returned from [audio\_play\_sound()](audio_play_sound.md)) or a sound asset (e.g. one added via [The Asset Browser](../../../../Introduction/The_Asset_Browser.md)). The behaviour of this function will differ depending on the kind of index you have specified:

-   If it's a unique sound ID that you use, which is already playing, then its position will immediately change to the given time.
-   If it's a sound asset, then all further plays of the given sound asset will start at the new time.

This function will only change the track position for the currently playing sound, or its next play (in case of a sound asset being supplied). If the sound is played with looping enabled, subsequent plays will always start from the beginning (0.0 seconds), _not_ from the track position defined using this function. For example, starting a sound loop at 5.7 seconds will play the first sound from that point, however after that it will continue to repeat the whole track, from the beginning to the end.

#### Syntax:

audio\_sound\_set\_track\_position(index, time);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID | The index of the sound to change. |
| time | Real | The time (in seconds) to set the start point to. Values beyond the end of the sound are clamped to its length. |

#### Returns:

N/A

#### Example:

var snd = audio\_play\_sound(snd\_MainTrack, 0, false);
audio\_sound\_set\_track\_position(snd, 32);

The above code plays a sound and then uses the returned handle to set the start position for the sound to 32 seconds.