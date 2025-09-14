---
title: "AudioEffectType Enum"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/AudioEffectType.htm"
converted: "2025-09-14T03:59:30.637Z"
---

# AudioEffectType Enum

This is one of the built-in [Enums](../../../../GML_Overview/Variables/Constants.htm#enumhead) that GameMaker provides. Pass a value from this Enum to [audio\_effect\_create](audio_effect_create.md) to determine the type of audio effect that you want to create.

Below is a list of audio effects that are currently available to choose from. See [AudioEffect Struct](AudioEffect.md) for the parameters you can set for each effect.

## AudioEffectType.Bitcrusher

This is a [bitcrusher](https://en.wikipedia.org/wiki/Bitcrusher) effect to create **distortion**. It does this in four steps (or _stages_), that take place in the following order:

_Gain **→** Clipper **→** Sample rate reduction **→** Resolution reduction_

First the gain factor is applied to the input signal.

The resulting signal is then [clipped](https://en.wikipedia.org/wiki/Clipping_(audio)) between -1 and 1 (essentially doing [clamp](../../../Maths_And_Numbers/Number_Functions/clamp.md) on every sample). This is the first step that introduces distortion.

Next, sample rate reduction reduces the quality of the audio by downsampling it. This leads to distortion.

Resolution reduction reduces the quality of the audio by decreasing the number of bits to represent a sample. As there are less bits to store the same value, some information is lost. This also leads to distortion.

## AudioEffectType.Delay

This is a [delay](https://en.wikipedia.org/wiki/Delay_(audio_effect)) effect, which delays the input signal by a given amount of time and mixes this delayed version with the original signal.

## AudioEffectType.Gain

This is a gain effect, which amplifies the input signal by the given gain factor.

NOTE Use [db\_to\_lin](../db_to_lin.md) and [lin\_to\_db](../lin_to_db.md) to convert back and forth between linear gains and gains expressed in decibels (dB).

## AudioEffectType.HPF2

This is a [high-pass filter](https://en.wikipedia.org/wiki/High-pass_filter) (shortened to _HPF_). A filter is used for filtering out certain frequencies.

A high-pass filter lets higher frequencies pass and mutes lower frequencies. The frequency at which this happens is called the _cutoff_ frequency. All frequencies below this frequency are filtered.

A whistle at a high pitch is an example of a high frequency.

## AudioEffectType.LPF2

This is a [low-pass](https://en.wikipedia.org/wiki/Low-pass_filter) filter (shortened to _LPF_). A filter is used for filtering out certain frequencies.

A low-pass filter lets lower frequencies pass and mutes higher frequencies. The frequency at which this happens is called the _cutoff_ frequency. All frequencies above this frequency are filtered.

Bass and drum kicks are typically low frequencies in audio.

## AudioEffectType.Reverb1

This is a [reverb](https://en.wikipedia.org/wiki/Reverb_effect) effect. It combines the original signal with a reverberated version of it. High frequencies can be _dampened_ (reduced).

A reverb effect is typically used to change the environment in which the audio is heard. You can configure reverb to make the environment appear anywhere between a small room and a grand hall or a vast open space.

## AudioEffectType.Tremolo

This is a [tremolo](https://en.wikipedia.org/wiki/Tremolo_(electronic_effect)) effect. It makes use of an [LFO](AudioLFOType.htm#LFO) (Low-Frequency Oscillator) to modulate audio effect parameters at audio rates (as opposed to game-frame rates).

A tremolo effect changes the amplitude of a sound.

## AudioEffectType.EQ

This is a Parametric EQ ([equalizer](https://en.wikipedia.org/wiki/Equalization_(audio))) effect. It combines multiple filters, each at a different frequency, to modify the frequency content of audio.

This effect contains a high-pass, a low-pass, 4 peak EQs, a high-shelf and a low-shelf filter.

Here is an example of how this allows you to control frequencies:

![](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/AudioEQExample.png)

## AudioEffectType.PeakEQ

This filter creates a peak or a dip in the spectrum by a specified gain around a specified centre frequency.

## AudioEffectType.HiShelf

This filter passes all frequencies, but increases or reduces frequencies above the shelf frequency by a specified gain.

## AudioEffectType.LoShelf

This filter passes all frequencies, but increases or reduces frequencies below the shelf frequency by a specified gain.

## AudioEffectType.Compressor

This is a [compressor](https://en.wikipedia.org/wiki/Dynamic_range_compression) effect. It reduces the dynamic range of the audio going into it, resulting in an output with smaller level differences.

This effect performs _downward_ compression, which reduces the volume of loud sounds _above_ a certain threshold. The quiet sounds _below_ the threshold remain unaffected.

The audio channels are linked when evaluating the input signal's current level. This means that each channel will have the same gain reduction applied to it. This is done in order to prevent image shifting changing the user's localisation of positioned audio.