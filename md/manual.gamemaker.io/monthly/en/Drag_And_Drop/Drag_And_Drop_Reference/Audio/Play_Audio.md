---
title: "Play Audio"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Play_Audio.htm"
converted: "2025-09-14T03:59:23.462Z"
---

# ![Play Audio Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Play_Audio.png) Play Audio

This action will set the given sound playing. You select the sound from the Asset Explorer and then set whether you would like the sound to be looped or not (a looped sound will play again and again between its loop start and end points until stopped) by setting the "Loop" flag.

Additionally you can set the gain, the offset (the track position to start playing from) and the pitch to play the sound with.

The final value for gain and pitch for the sound being played is the product of the values for gain and pitch set for the sound asset. The offset value is the value provided in the "Offset" field **or** the offset value of the sound **asset** being played when the field is left empty (see Example 2).

#### Action Syntax:

![Play Audio Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Play_Audio.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound asset to play |
| Loop | Whether to loop the sound or not (off by default) |
| Target | The target variable to store the return value |
| Gain | Value for the gain multiplier (default 1). The gain multiplier set here is multiplied with the sound asset's gain multiplier |
| Offset | The time (in seconds) to set the start point to (default 0). Values beyond the end of the sound are clamped to its length.The sound asset's offset (track position) is used when this field if left blank. |
| Pitch | The pitch multiplier (default 1). The gain multiplier set here is multiplied with the sound asset's gain multiplier |

#### Example 1:

![Play Audio Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Play_Audio.png)The above action block code checks for a mouse button press and if one is detected it then checks a global variable to see if it is not true. If it is not true, then a sound is played (and looped) and the global variable set to true, otherwise the sound is stopped and the global variable is set to false.
The sound is played with default settings: a gain and pitch multiplier of 1 and an offset of 0 (the default offset of the sound asset).

#### Example 2:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Play_Audio_2.png)The above action block code first sets the track position of sound asset "snd\_MusicBoss" to 20 seconds. It then checks if the instance variable "skip\_intro" is set to true. If it is, it starts playing "snd\_MusicBoss" at 20 seconds, the value for track position set earlier (this is because the "Offset" field is left blank so the **asset** offset is used). The first 20 seconds of the audio are skipped.
If the instance variable "skip\_intro" is set to false, it also starts playing "snd\_MusicBoss" but, because the "Offset" has been set to 0, the sound will start playing from the start. The track position of 20 seconds as defined earlier for the sound **asset** is ignored.