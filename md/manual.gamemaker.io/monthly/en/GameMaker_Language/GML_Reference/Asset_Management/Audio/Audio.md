---
title: "Audio"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio.htm"
converted: "2025-09-14T03:59:30.332Z"
---

# Audio

GameMaker has a complete audio engine that is based on the \*.ogg, \*.mp3 and \*.wav sound formats.

Sounds of these types [added to the IDE](../../../../The_Asset_Editors/Sounds.md) can be used in your game using the audio functions shown below.

For things more complex than basic sound effects, or playing a single piece of music, you can refer to the advanced audio functions which let you modify how a sound is played. There is also a selection of more specialised functions dedicated to streaming audio, positioning audio (to give 3D sound), grouping audio, synchronised audio and audio effects.

**IMPORTANT** When using audio on the HTML5 target, you should be aware that not all browsers support Web Audio and so may not play any sound for your project when run. You can get a general idea of Web Audio support from the following link: [Can I Use Web Audio?](https://caniuse.com/audio-api).

Contents

1.  [Using Audio](Audio.htm#using_audio)
2.  [Advanced Audio](Audio.htm#advanced_audio)
3.  [Web Audio](Audio.htm#web_audio)
4.  [Audio Error Handling](Audio.htm#h1)
5.  [Function Reference](Audio.htm#function_refere)

## Using Audio

### Playing Sounds

The most straightforward way to play a sound is using [audio\_play\_sound](audio_play_sound.md):

audio\_play\_sound(snd\_Explode, 10, false);

At a minimum you have to provide the [Sound Asset](../../../../The_Asset_Editors/Sounds.md), a priority for the new sound instance and whether the sound should loop.

Another way to play sounds is using [audio\_play\_sound\_ext](audio_play_sound_ext.md). This function is identical to [audio\_play\_sound](audio_play_sound.md) but allows you to pass various audio parameters in a struct. Using this function, you only need to provide a [Sound Asset](../../../../The_Asset_Editors/Sounds.md) through the "sound" key of the struct:

audio\_play\_sound\_ext({ sound: snd\_Explode });

Here the priority will default to 0 and the sound will not be looped. You can supply [additional keys](audio_play_sound_ext.md) in the struct to change the properties of the sound.

NOTE An [Audio Playback Ended](../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.md) event is triggered for the sound when it stops playing.

### Sound Instances (Voices)

The functions [audio\_play\_sound](audio_play_sound.md) and [audio\_play\_sound\_ext](audio_play_sound_ext.md) create a new _instance_ of a sound (also called a "voice") and return its ID:

ins\_sound = audio\_play\_sound(snd\_Explode, 10, false);

You can use this sound **instance** ID in functions to change the audio properties at the **instance** level (or pass them directly as optional arguments). This will only change the properties for that particular sound instance.

In case you pass a sound **asset** ID to the functions, the audio property at the **asset** level will be set to the given value.

NOTE [audio\_play\_sound\_at](audio_play_sound_at.md) and [audio\_play\_sound\_on](Audio_Emitters/audio_play_sound_on.md) work in the same way and also return the ID of the sound instance they create.

TIP The maximum number of sound instances/voices is 128 by default. This can be changed using the function [audio\_channel\_num](audio_channel_num.md).

### Audio Properties

Every sound has basic properties that are applied on different "levels". Depending on the property, it either acts as a multiplier, or overrides the value set at a previous level.

These audio properties are:

-   [**Gain**](audio_sound_gain.md): This is a multiplier for the volume. The default value for gain on the asset level is the value of the "Volume" slider in [The Sound Editor](../../../../The_Asset_Editors/Sounds.md). The default value on all other levels is 1. Gain can also be added using [Audio Effects](Audio_Effects/Audio_Effects.md).
-   [**Pitch**](audio_sound_pitch.md): This is a multiplier for the sound's pitch. The default value for pitch on all levels is set to 1.
-   [**Offset/Track Position**](audio_sound_set_track_position.md): This is the offset from the start of the audio track where it starts playing. If this value is set at the instance level, it overrides the value set at the asset level. By default this is 0 (i.e. no offset).
-   [**Listener Mask**](audio_sound_set_listener_mask.md): This is a bitmask value that determines the listeners that audio is heard on. The default value is 1 (or 0x01), which stands for the default listener.

For an overview of all audio properties, levels and how their values are calculated, see [Audio Properties Overview](Audio_Properties.md).

NOTE The optional parameters that you can pass to the audio\_play\_sound\_\* functions set the instance-level value of the property.

### Audio Looping

A sound can be looped by setting it to loop. This can either be done when playing the sound using any of the audio\_play\_sound\_\* functions:

ins\_sound = audio\_play\_sound(snd\_Engine, 100, true);

or afterwards, when the sound is already playing, using the function [audio\_sound\_loop](Audio_Loop_Points/audio_sound_loop.md):

audio\_sound\_loop(ins\_sound, true);

By default a sound loops from its start to its end. The start and end position can be changed using [audio\_sound\_loop\_start](Audio_Loop_Points/audio_sound_loop_start.md) and [audio\_sound\_loop\_end](Audio_Loop_Points/audio_sound_loop_end.md) respectively, also while the sound is playing (i.e. ins\_sound refers to a sound instance for which [audio\_is\_playing](audio_is_playing.md) returns true).

When the track position reaches the loop end position if a sound is set to loop, it continues playing from the start position.

IMPORTANT The loop end position _must_ be past the loop start position. The exception to this is the value 0.0 for loop end, which marks the end of the sound (i.e. [audio\_sound\_length](audio_sound_length.md)).

See: [Audio Loop Points](Audio_Loop_Points/Audio_Loop_Points.md)

### Audio Effects

Finally you can add effects to the audio that you play, such as reverb, echo, delay, etc.

Audio effects are created using [audio\_effect\_create](Audio_Effects/audio_effect_create.md) and then assigned to one of the effects slots of an audio bus. The audio bus that you can always assign effects to is the main audio bus [audio\_bus\_main](Audio_Effects/audio_bus_main.md).

See: [Audio Effects](Audio_Effects/Audio_Effects.md)

## Advanced Audio

### Audio Emitters and Listeners

If you need positional audio or audio that should play in a three-dimensional environment, you can use [Audio Emitters](Audio_Emitters/Audio_Emitters.md) and [Audio Listeners](Audio_Listeners/Audio_Listeners.md).

NOTE [Audio Emitters](Audio_Emitters/Audio_Emitters.md) introduce another level for the gain, pitch and listener mask parameters.

### Audio Groups

All sound assets, except for streamed audio, belong to a single [audio group](../../../../Settings/Audio_Groups.md). Sounds in an audio group can be loaded and unloaded at the same time.

Audio groups have their own gain factor (see [audio\_group\_set\_gain](Audio_Groups/audio_group_set_gain.md) / [audio\_group\_get\_gain](Audio_Groups/audio_group_get_gain.md))

NOTE All sounds are by default added to an audio group [audiogroup\_default](Audio_Groups/audiogroup_default.md).

### Audio Streams

GameMaker supports loading streamed audio directly from .ogg files. For this you can use [audio\_create\_stream](audio_create_stream.md) and [audio\_destroy\_stream](audio_destroy_stream.md).

### Sync Groups

For audio that should play perfectly in sync on a per sample level, GameMaker has sync groups. See [Audio Synchronisation](Audio_Synchronisation/Audio_Synchronisation.md) for more information on this.

## Web Audio

When creating games for the HTML5 target platform, the audio engine requires **Web Audio** support, and this in turn means that sometimes your audio won't play when or how you expect it. This is because the Web Audio context may not be running or may stop running when your game is being played. What causes this varies greatly between browsers, and even between different versions of the same browser, and so detecting when the web audio context status changes is very important, e.g.: to detect when the context changes and pause/start looping audio like background music.

To help with this issue, GameMaker has two separate ways to detect the change in Web Audio context status, either using the following function:

-   [audio\_system\_is\_available](audio_system_is_available.md)

or using the **Asynchronous System Event**, which will be triggered whenever the Web Audio status changes. In this event you will get the built-in [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map populated with the key "event\_type" which in turn will hold the string "audio\_system\_status" if it is an audio event. When this key exists, there will also be a further "status" key which will be either "available" or "unavailable".

For more information please see the section:

-   [The Asynchronous System Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md)

NOTE This event will be triggered on _all_ platforms, but on everything except HTML5 it will only be triggered once on Game Start when the audio engine is first initialised.

To check if audio can be played using Web Audio, you can use [audio\_sound\_is\_playable](audio_sound_is_playable.md).

## Audio Error Handling

There may be cases where a function has to either throw a fatal error (crashing the game) or print an error message to the Output Log. These general cases are described below:

-   Any function taking a [Sound Asset](../../../../The_Asset_Editors/Sounds.md) or a [Audio Sync Group ID](Audio_Synchronisation/audio_create_sync_group.md) will throw a fatal error when passed an invalid handle (i.e. the given sound asset or group does not exist).
-   Functions taking a [Sound Instance ID](audio_play_sound.md) will print an error message to the Output Log when an invalid sound is passed (i.e. the sound instance is not playing), however it will not cause a crash.
-   Functions taking specific values such as [audio\_falloff\_set\_model](audio_falloff_set_model.md) will throw a fatal error when an invalid value is passed.
-   Invalid operations will throw a fatal error (e.g. attempting to [record](Audio_Buffers/audio_start_recording.md) using an already active input device).

For cases that throw a fatal error, you can instead choose to have an output message logged by calling [audio\_throw\_on\_error](audio_throw_on_error.md) with true. This will make the game continue in a situation where it would have otherwise crashed, however the effect of the error may still cause bugs in your game.

NOTE Audio is handled differently on HTML5 and most errors will simply print a message to the Output Log.

## Function Reference

### Asset Info

-   [audio\_exists](audio_exists.md)
-   [audio\_get\_name](audio_get_name.md)
-   [audio\_get\_type](audio_get_type.md)
-   [audio\_sound\_get\_asset](audio_sound_get_asset.md)
-   [audio\_sound\_length](audio_sound_length.md)
-   [audio\_sound\_is\_playable](audio_sound_is_playable.md)

### Playing Sounds

-   [audio\_play\_sound](audio_play_sound.md)
-   [audio\_play\_sound\_ext](audio_play_sound_ext.md)
-   [audio\_play\_sound\_at](audio_play_sound_at.md)
-   [audio\_pause\_sound](audio_pause_sound.md)
-   [audio\_pause\_all](audio_pause_all.md)
-   [audio\_resume\_sound](audio_resume_sound.md)
-   [audio\_resume\_all](audio_resume_all.md)
-   [audio\_stop\_sound](audio_stop_sound.md)
-   [audio\_stop\_all](audio_stop_all.md)
-   [audio\_is\_playing](audio_is_playing.md)
-   [audio\_is\_paused](audio_is_paused.md)

### Audio Properties

-   [audio\_sound\_gain](audio_sound_gain.md)
-   [audio\_sound\_get\_gain](audio_sound_get_gain.md)
-   [audio\_sound\_pitch](audio_sound_pitch.md)
-   [audio\_sound\_get\_pitch](audio_sound_get_pitch.md)
-   [audio\_sound\_set\_track\_position](audio_sound_set_track_position.md)
-   [audio\_sound\_get\_track\_position](audio_sound_get_track_position.md)
-   [audio\_sound\_set\_listener\_mask](audio_sound_set_listener_mask.md)
-   [audio\_sound\_get\_listener\_mask](audio_sound_get_listener_mask.md)

### [Audio Loop Points](Audio_Loop_Points/Audio_Loop_Points.md)

-   [audio\_sound\_loop](Audio_Loop_Points/audio_sound_loop.md)
-   [audio\_sound\_get\_loop](Audio_Loop_Points/audio_sound_get_loop.md)
-   [audio\_sound\_loop\_start](Audio_Loop_Points/audio_sound_loop_start.md)
-   [audio\_sound\_get\_loop\_start](Audio_Loop_Points/audio_sound_get_loop_start.md)
-   [audio\_sound\_loop\_end](Audio_Loop_Points/audio_sound_loop_end.md)
-   [audio\_sound\_get\_loop\_end](Audio_Loop_Points/audio_sound_get_loop_end.md)

### Configuration

-   [audio\_master\_gain](audio_master_gain.md)
-   [audio\_set\_master\_gain](audio_set_master_gain.md)
-   [audio\_get\_master\_gain](audio_get_master_gain.md)
-   [audio\_channel\_num](audio_channel_num.md)
-   [audio\_falloff\_set\_model](audio_falloff_set_model.md)
-   [audio\_system\_is\_available](audio_system_is_available.md)
-   [audio\_system\_is\_initialised](audio_system_is_initialised.md)
-   [audio\_throw\_on\_error](audio_throw_on_error.md)

### Debugging

-   [audio\_debug](audio_debug.md)

### Gain Conversion

-   [lin\_to\_db](lin_to_db.md)
-   [db\_to\_lin](db_to_lin.md)

### Audio Streams

-   [audio\_create\_stream](audio_create_stream.md)
-   [audio\_destroy\_stream](audio_destroy_stream.md)

### Advanced Audio

-   [Audio Emitters](Audio_Emitters/Audio_Emitters.md)
-   [Audio Listeners](Audio_Listeners/Audio_Listeners.md)
-   [Audio Effects](Audio_Effects/Audio_Effects.md)
-   [Audio Groups](Audio_Groups/Audio_Groups.md)
-   [Audio Buffers](Audio_Buffers/Audio_Buffers.md)
-   [Audio Synchronisation](Audio_Synchronisation/Audio_Synchronisation.md)