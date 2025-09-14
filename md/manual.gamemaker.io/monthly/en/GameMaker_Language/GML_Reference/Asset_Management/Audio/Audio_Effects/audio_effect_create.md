---
title: "audio_effect_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/audio_effect_create.htm"
converted: "2025-09-14T03:59:30.771Z"
---

# audio\_effect\_create

This function creates a new audio effect and returns the [AudioEffect Struct](AudioEffect.md) through which you can access and modify it. Alternatively, you can pass a struct to the function to immediately initialise the effect's parameters.

For a list of possible audio effects that you can create, see [AudioEffectType Enum](AudioEffectType.md).

The members of the returned struct are dependent on the type of audio effect created. For all possible audio effect structs, see: [AudioEffect Struct](AudioEffect.md)

#### Syntax:

audio\_effect\_create(type, \[params\]);

| Argument | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | The type of audio effect to create (e.g. AudioEffectType.Reverb1) |
| params | Struct | OPTIONAL The parameters of the audio effect (see AudioEffect Struct for the available parameters) |

#### Returns:

[AudioEffect Struct](AudioEffect.md)

#### Example 1:

var \_ef\_distortion = audio\_effect\_create(AudioEffectType.Bitcrusher);
\_ef\_distortion.gain = 1.1;
\_ef\_distortion.factor = 20;
\_ef\_distortion.resolution = 8;
\_ef\_distortion.mix = 0.5;
audio\_bus\_main.effects\[0\] = \_ef\_distortion;

The above code first creates a new distortion effect of type [AudioEffectType.Bitcrusher](AudioEffectType.htm#h2) using [audio\_effect\_create](audio_effect_create.md). It then configures the effect by setting the effect's parameters.

Finally it assigns the effect to the main audio bus, which starts processing the effect.

#### Example 2:

audio\_bus\_main.effects\[0\] = audio\_effect\_create(AudioEffectType.Bitcrusher, {
    gain: 1.1, factor: 20, resolution: 8, mix: 0.5
});

The above code first creates a new distortion effect, like in Example 1, and immediately initialises its parameters by passing a struct that contains values for some of its parameters.