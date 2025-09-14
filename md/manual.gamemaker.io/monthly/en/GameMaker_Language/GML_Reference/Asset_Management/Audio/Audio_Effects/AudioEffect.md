---
title: "AudioEffect Struct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/AudioEffect.htm"
converted: "2025-09-14T03:59:30.618Z"
---

# AudioEffect Struct

An AudioEffect struct stores the parameters used by an audio effect. You can change these values to adjust the effect in real-time.

This struct must be created using the [audio\_effect\_create](audio_effect_create.md) function. The parameters that are available in the struct depend on the type of audio effect that you pass to the function (see [AudioEffectType Enum](AudioEffectType.md)).

NOTE This is a built-in struct, and as such GameMaker has more control over its contents. This means it may contain some additional, inaccessible variables created by GameMaker, and some values may change automatically if invalid values were assigned.

NOTE All gain parameters are _linear_ gains and range from 0 to infinity; values from 0 to 1 indicate a decrease in gain, values from 1 to infinity an increase. They can be converted to dB and back using [lin\_to\_db](../lin_to_db.md) and [db\_to\_lin](../db_to_lin.md).

All structs of this type have a type and bypass property. All other properties are specific to certain types of effects.

Below is a list of struct members depending on the type of effect created.

## Reverb ([AudioEffectType.Reverb1](AudioEffectType.htm#h))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.Reverb1 for Reverb. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| size | Real | The size of the space [range: 0.0 - 1.0].Larger sizes mean more reflections and a longer reverberation. |
| damp | Real | The amount that higher frequencies should be attenuated [range: 0.0 - 1.0]. |
| mix | Real | The proportion of the original/reverberated signal in the output [range: 0.0 - 1.0].A value of 0.0 gives 100% of the original signal, a value of 1.0 gives 100% of the reverberated signal. A value of 0.5 results in 50% of the original and 50% of the reverberated signal. |

## Delay ([AudioEffectType.Delay](AudioEffectType.htm#h1))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.Delay for Delay. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| time | Real | The length of the delay (in seconds). |
| feedback | Real | The proportion of the delayed signal which is fed back into the delay line [range: 0.0 - 1.0]. |
| mix | Real | The proportion of the original/delayed signal in the output [range: 0.0 - 1.0].A value of 0.0 gives 100% of the original signal, a value of 1.0 gives 100% the delayed signal. A value of 0.5 results in 50% of the original and 50% of the delayed signal. |

## Distortion ([AudioEffectType.Bitcrusher](AudioEffectType.htm#h2))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.Bitcrusher for Distortion. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| gain | Real | The input gain going into the effect. There is a hard clipper (clipping at ±1.0) directly after this stage. |
| factor | Real | The factor by which the original signal is downsampled [range: 0.0 - 100.0].This is rounded down to an integer. |
| resolution | Real | The bit depth at which the signal is resampled [range: 1.0 - 16.0].This is rounded down to an integer. |
| mix | Real | The proportion of the original/distorted signal in the output [range: 0.0 - 1.0].A value of 0.0 gives 100% of the original signal, a value of 1.0 gives 100% the distorted signal. A value of 0.5 results in 50% of the original and 50% of the distorted signal. |

## LPF ([AudioEffectType.LPF2](AudioEffectType.htm#h3))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.LPF2 for LPF. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| cutoff | Real | The cutoff frequency of the filter. Frequencies higher than the cutoff will be attenuated. |
| q | Real | The quality factor of the filter [range: 1.0 - 100.0].This is a dimensionless parameter which indicates how peaked (in gain) the frequency is around the cutoff. The greater the value, the greater the peak. |

## HPF ([AudioEffectType.HPF2](AudioEffectType.htm#h4))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.HPF2 for HPF. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| cutoff | Real | The cutoff frequency of the filter. Frequencies lower than the cutoff will be attenuated. |
| q | Real | The quality factor of the filter [range: 1.0 - 100.0].This is a dimensionless parameter which indicates how peaked (in gain) the frequency is around the cutoff. The greater the value, the greater the peak. |

## Gain ([AudioEffectType.Gain](AudioEffectType.htm#h5))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.Gain for Gain. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| gain | Real | The gain value applied to the input signal. |

## Tremolo ([AudioEffectType.Tremolo](AudioEffectType.htm#h6))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.Tremolo for Tremolo. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| rate | Real | The frequency of the LFO modulating the gain (0.0-20.0 Hz) |
| intensity | Real | The proportion of the input signal which should be modulated by the LFO (0.0-1.0). Put differently, it is the proportion (or fraction) of the signal's/sample's amplitude that is affected by the LFO. |
| offset | Real | The proportion of a waveform's period that the right-hand channel's LFO should be offset by compared to the left-hand channel (0.0-1.0) At a value of 0.0 and 1.0 the left-hand and right-hand channel's LFO waveforms coincide (because the shape is periodic, i.e. repeats) |
| shape | AudioLFOType Enum | The waveform shape that the LFO should output. |

## EQ ([AudioEffectType.EQ](AudioEffectType.htm#h7))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.EQ for EQ. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| locut | AudioEffect Struct | A filter of type AudioEffectType.HPF2. |
| loshelf | AudioEffect Struct | A filter of type AudioEffectType.LoShelf. |
| eq1 | AudioEffect Struct | A filter of type AudioEffectType.PeakEQ. |
| eq2 | AudioEffect Struct | A filter of type AudioEffectType.PeakEQ. |
| eq3 | AudioEffect Struct | A filter of type AudioEffectType.PeakEQ. |
| eq4 | AudioEffect Struct | A filter of type AudioEffectType.PeakEQ. |
| hishelf | AudioEffect Struct | A filter of type AudioEffectType.HiShelf. |
| hicut | AudioEffect Struct | A filter of type AudioEffectType.LPF2. |

## PeakEQ ([AudioEffectType.PeakEQ](AudioEffectType.htm#h9))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.PeakEQ for the Peak EQ Filter. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| freq | Real | The frequency (in Hz) of the filter [range: 10 - 20,000]*. This represents the centre frequency of the peak.NOTE *The upper limit is either 20,000 or half of the audio device's sample rate, whichever is lower. |
| q | Real | The quality factor of the filter [range: 1.0 - 100.0]. This is a dimensionless parameter which narrows the peak created, so that a smaller range of frequencies around the centre frequency are affected. The greater the value, the narrower the peak. |
| gain | Real | The linear gain applied to the centre frequency [range: 0.0 - inf]. Frequencies around the centre frequency will also have a gain applied, which reduces depending on the quality factor and distance from the centre frequency. A gain lower than 1 represents a decrease in volume. |

## HiShelf ([AudioEffectType.HiShelf](AudioEffectType.htm#h10))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.HiShelf for the HiShelf Filter. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| freq | Real | The frequency (in Hz) of the filter [range: 10 - 20,000]*. This represents the midpoint of the shelf's slope.Frequencies higher than this value will have a constant gain applied.NOTE *The upper limit is either 20,000 or half of the audio device's sample rate, whichever is lower. |
| q | Real | The quality factor of the filter [range: 1.0 - 100.0]. This is a dimensionless parameter which increases the steepness of the filter's slope, at the cost of some resonance at frequencies around the top of the shelf's slope. The greater the value, the steeper the slope, and the greater the resonance. |
| gain | Real | The linear gain applied to frequencies in the shelf [range 0.0 - inf]. A gain lower than 1 represents a decrease in volume. |

## LoShelf ([AudioEffectType.LoShelf](AudioEffectType.htm#h8))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.LoShelf for the LoShelf Filter. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| freq | Real | The frequency (in Hz) of the filter [range: 10 - 20,000]*. This represents the midpoint of the shelf's slope.Frequencies lower than this value will have a constant gain applied.NOTE *The upper limit is either 20,000 or half of the audio device's sample rate, whichever is lower. |
| q | Real | The quality factor of the filter [range: 1.0 - 100.0]. This is a dimensionless parameter which increases the steepness of the filter's slope, at the cost of some resonance at frequencies around the top of the shelf's slope. The greater the value, the steeper the slope, and the greater the resonance. |
| gain | Real | The linear gain applied to frequencies in the shelf [range 0.0 - inf]. A gain lower than 1 represents a decrease in volume. |

## Compressor ([AudioEffectType.Compressor](AudioEffectType.htm#h11))

| Variable | Type | Description |
| --- | --- | --- |
| type | AudioEffectType Enum | A read-only property that stores the type of audio effect stored in this struct. It is set to AudioEffectType.Compressor for a Compressor effect. |
| bypass | Boolean | Whether the effect should be bypassed (ignored). |
| ingain | Real | The gain scalar applied to the input signal [range: 0 - inf]. This allows audio to be pushed into the compression threshold. |
| threshold | Real | The amplitude level above which the compressor will begin to apply gain reduction [range: 0.001 - 1]. |
| ratio | Real | The ratio by which audio that exceeds the threshold is reduced [range: 1 - inf]. The compression ratio applied is ratio : 1. |
| attack | Real | The responsiveness (in seconds) of the compressor in compressing audio above the threshold [range: 0.001 - 0.1]. |
| release | Real | The responsiveness (in seconds) of the compressor in stopping compressing audio below the threshold [range: 0.01 - 1]. |
| outgain | Real | The gain scalar applied to the output signal [range: 0 - inf]. This allows compensating for the overall level reduction caused by the compression process. |