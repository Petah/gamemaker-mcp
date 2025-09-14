---
title: "Audio Effects"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/Audio_Effects.htm"
converted: "2025-09-14T03:59:30.699Z"
---

# Audio Effects

GameMaker offers a selection of audio effects, such as reverb, delay, bitcrusher, parametric EQ, etc.

Sounds are always played through "buses". All sounds in GameMaker are played through its [main bus](audio_bus_main.md).

Effects are applied on buses. GameMaker allows you to:

-   Apply effects to the [main bus](audio_bus_main.md), hence applying effects to _all sounds_
-   Create a [custom bus](audio_bus_create.md) and apply effects to that bus
    -   Custom buses can only be used with [Audio Emitters](../Audio_Emitters/Audio_Emitters.md)

## Setting Up Audio Effects

### Audio Buses

Audio effects are processed on an "audio bus".

GameMaker has one audio bus by default, the main audio bus, which you can access through the built-in [audio\_bus\_main](audio_bus_main.md) struct.

All audio that you play in GameMaker ends up on this audio bus, whether that is [2D audio](../audio_play_sound.md), [3D audio](../audio_play_sound_at.md) or [emitter audio](../Audio_Emitters/audio_play_sound_on.md). This is referred to as all audio being _routed_ to the main bus.

You can [create your own bus](audio_bus_create.md) to apply effects to a few sounds. All custom buses are routed to the main bus, so the parameters and effects on the main bus are applied to all other buses.

NOTE An audio bus can have a maximum of 8 effects assigned to its effects array. Set a slot to undefined to remove an effect.

### Adding effects to the main bus

The quickest way to apply effects to all audio is by adding them to the main bus:

var \_ef\_reverb = audio\_effect\_create(AudioEffectType.Reverb1);
\_ef\_reverb.size = 0.6;
\_ef\_reverb.mix = 0.5;
audio\_bus\_main.effects\[0\] = \_ef\_reverb;

This first creates a new audio effect of type [AudioEffectType.Reverb1](AudioEffectType.htm#h). Its parameters are then set by directly setting the members of the returned [AudioEffect Struct](AudioEffect.md).

The size of the reverb effect is set to 0.6 and the mix value to 0.5 (how much of the effect can be heard from 0-1, similar to [lerp](../../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/lerp.md)).

The effect is then assigned to the main audio bus's effects array. Assigning the effect to a slot in the array enables the effect.

NOTE Because the effect is processed from the moment it's assigned, it's good practice to first set the effect's parameters and only then assign the effect to the effects array. This will make sure that no transition from no effect to an audible effect occurs.

### Bypassing Effects

Sometimes you might want to turn off individual effects or turn off all effects on a bus. You can do this by setting bypass for an effect or a bus to true:

// Bypassing an effect
audio\_bus\_main.effects\[0\].bypass = true;

// Bypassing all effects on a bus
audio\_bus\_main.bypass = true;

Setting bypass to true means that what comes out of the bus or effect is the same as what goes in -- the input is the output.

For a single effect this means that this effect is skipped, for a bus this means that all effects on the bus are skipped.

### Applying Effects To Audio Emitters

By default audio emitters output directly to the main bus, so the audio that is played on an emitter will end up there and have the same effects applied as all other audio.

You can add effects to an [audio emitter](../Audio_Emitters/Audio_Emitters.md) by creating a new audio bus using [audio\_bus\_create](audio_bus_create.md) and assigning it to the emitter using [audio\_emitter\_bus](../Audio_Emitters/audio_emitter_bus.md):

emitter = audio\_emitter\_create(); // Emitter is created
emitter\_bus = audio\_bus\_create(); // Bus is created
audio\_emitter\_bus(emitter, emitter\_bus); // Emitter is assigned to bus

Assigning an emitter to a bus will make the emitter output to that bus. You can assign any number of emitters to a bus.

Any audio output on a bus created using [audio\_bus\_create](audio_bus_create.md) still ends up on GameMaker's main audio bus.

This means that you can apply a delay effect to all sounds that are played on an emitter, and a reverb effect on the main audio bus. Audio that is played on the emitter is processed by the audio bus assigned to it so it will be heard with the delay effect from the emitter bus _and_ the reverb effect from the main bus. Audio that is played directly on the main bus will _only_ have the reverb effect applied.

To get the audio bus that is assigned to an emitter, use [audio\_emitter\_get\_bus](../Audio_Emitters/audio_emitter_get_bus.md).

NOTE As previously mentioned, audio can only be processed on a different bus than the main bus by playing it on an emitter (using [audio\_play\_sound\_on](../Audio_Emitters/audio_play_sound_on.md)).

### Multiple Assignment of Audio Effects

A single audio effect struct returned by [audio\_effect\_create](audio_effect_create.md) can be assigned to multiple effect slots (either on the same bus or on different buses):

ef\_lpf = audio\_effect\_create(AudioEffectType.LPF2, {cutoff: 300, q: 1.5});

bus\_1.effects\[0\] = ef\_lpf;
bus\_1.effects\[4\] = ef\_lpf;
bus\_2.effects\[0\] = ef\_lpf;

For each of these assignments a new effect is _instantiated._ You could compare this to [Objects And Instances](../../../../../Quick_Start_Guide/Objects_And_Instances.md); the struct returned by [audio\_effect\_create](audio_effect_create.md) returns an "object" and every assignment creates a new "instance" of it. The "instance" is that what actually processes the audio for the effect slot it is assigned to. Each effect slot gets its own "instance" of the effect.

When you make changes to any of the variables of the ef\_lpf struct here, the effect's parameters will change accordingly on bus\_1.effects\[0\], bus\_1.effects\[4\] and bus\_2.effects\[0\].

## Platform Limitations

When targeting **HTML5**, audio buses and effects functionality will be limited in the following situations:

-   The game is **running on iOS Safari** (due to a significant bug in WebKit).
-   The game is **running in an insecure context** (in which audio worklets are not available). An example of this would be using your phone to access a locally-hosted game on the same network.

In these situations audio buses and effects functions, enums and structs can still be used without generating GML errors, but they will mostly have **no audible effect** (the exception to this being audio bus gain and bus routing).

## Code Reference

1.  [audio\_bus\_create](audio_bus_create.md)
2.  [audio\_bus\_main](audio_bus_main.md)
3.  [audio\_effect\_create](audio_effect_create.md)
4.  [audio\_emitter\_bus](../Audio_Emitters/audio_emitter_bus.md)
5.  [audio\_emitter\_get\_bus](../Audio_Emitters/audio_emitter_get_bus.md)
6.  [AudioBus Struct](AudioBus.md)
7.  [AudioEffect Struct](AudioEffect.md)
8.  [AudioEffectType Enum](AudioEffectType.md)
9.  [audio\_bus\_get\_emitters](audio_bus_get_emitters.md)
10.  [AudioLFOType Enum](AudioLFOType.md)
11.  [audio\_bus\_clear\_emitters](audio_bus_clear_emitters.md)