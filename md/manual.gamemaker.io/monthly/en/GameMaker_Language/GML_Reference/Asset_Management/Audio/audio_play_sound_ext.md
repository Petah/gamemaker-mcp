---
title: "audio_play_sound_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_play_sound_ext.htm"
converted: "2025-09-14T03:59:32.337Z"
---

# audio\_play\_sound\_ext

This function plays any sound asset in your game using any combination of parameters.

NOTE An [Audio Playback Ended](../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.md) event is triggered for the sound when it stops playing.

The function takes its parameters as a [struct](../../../GML_Overview/Structs.htm#struct). Depending on the parameters that you provide, the function behaves like [audio\_play\_sound](audio_play_sound.md), [audio\_play\_sound\_at](audio_play_sound_at.md) or [audio\_play\_sound\_on](Audio_Emitters/audio_play_sound_on.md). The only key that is strictly required in the struct is the sound key.

The full list of keys is as follows:

-   sound ([Sound Asset](../../../../The_Asset_Editors/Sounds.md) or [Audio Queue ID](Audio_Buffers/audio_create_play_queue.md), required)
-   priority ([Real](../../../GML_Overview/Data_Types.md), optional), defaults to 0
-   loop ([Boolean](../../../GML_Overview/Data_Types.md), optional), defaults to false
-   gain ([Real](../../../GML_Overview/Data_Types.md), optional), defaults to 1.0
-   offset ([Real](../../../GML_Overview/Data_Types.md), optional), defaults to the asset-level offset
-   pitch ([Real](../../../GML_Overview/Data_Types.md), optional), defaults to 1.0
-   listener\_mask ([Real](../../../GML_Overview/Data_Types.md), optional), defaults to the emitter-level listener mask/global listener mask
-   emitter ([Audio Emitter ID](Audio_Emitters/audio_emitter_create.md), optional), defaults to undefined
-   position ([Struct](../../../GML_Overview/Structs.md), optional), defaults to undefined
    -   x ([Real](../../../GML_Overview/Data_Types.md))
    -   y ([Real](../../../GML_Overview/Data_Types.md))
    -   z ([Real](../../../GML_Overview/Data_Types.md))
    -   falloff\_ref ([Real](../../../GML_Overview/Data_Types.md))
    -   falloff\_max ([Real](../../../GML_Overview/Data_Types.md))
    -   falloff\_factor ([Real](../../../GML_Overview/Data_Types.md))

#### Syntax:

audio\_play\_sound\_ext(params);

| Argument | Type | Description |
| --- | --- | --- |
| params | Struct | A struct containing the key-value pairs for each of the parameters that you want to set. The sound key is required and takes a Sound Asset as a value. |

#### Returns:

[Sound Instance ID](audio_play_sound.md) (or -1 if the sound could not be played)

#### Example 1: Playing a basic sound (similar to audio\_play\_sound)

audio\_play\_sound\_ext({ sound: snd\_ambience });

The above code plays a sound "snd\_ambience". The sound instance gets a default priority of 0 and won't be looped. All other sound properties are default as they haven't been provided in the struct.

#### Example 2: Playing a sound on an emitter (similar to audio\_play\_sound\_on)

var \_sound\_params =
{
    sound: snd\_shot,
    priority: 20,
    gain: 1.2,
    pitch: 2,
    emitter: em\_north\_entrance
};
audio\_play\_sound\_ext(\_sound\_params);

The above code first creates a temporary struct \_sound\_params. It stores the settings to play a sound "snd\_shot" with a priority of 20, a gain of 1.2 and a pitch of 2 on an existing emitter em\_north\_entrance. It then plays the sound with those settings using audio\_play\_sound\_ext.

#### Example 3: Playing a sound at a given position in 3D audio space (similar to audio\_play\_sound\_at)

var \_sound\_params =
{
    sound: snd\_shot,
    pitch: 1.1,
    position:
    {
        x: 100,
        y: 100,
        z: 20
    }
};
audio\_play\_sound\_ext(\_sound\_params);

The above code creates a temporary struct \_sound\_params. The struct stores the settings to play a sound "snd\_shot" with a pitch of 1.1 at an x  of 100, a y of 100 and z of 20. The sound is then played with those settings using audio\_play\_sound\_ext.