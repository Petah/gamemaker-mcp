---
title: "The Sequence Instance Struct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/Sequence_Structs/The_Sequence_Instance_Struct.htm"
converted: "2025-09-14T03:59:39.672Z"
---

# The Sequence Instance Struct

A sequence, when placed in a room, is placed as an **element** on the layer, and this element contains a **sequence instance**. This sequence instance will have the following properties in its [struct](../../../../GML_Overview/Structs.md):

| Sequence Instance Struct |
| --- |
| Variable | Type | Description |
| sequence | Sequence Object Struct | This is the ID of the sequence object struct that the sequence instance has been created from (see The Sequence Object Struct). You can get or set this struct, and so change the base sequence that the instance is referencing. |
| headPosition | Real | This is the current playhead position (in frames) for the sequence instance. You can get or set this value, but note that setting it to a value greater or less than the currently defined play region will have different effects depending on the type of playback set for the sequence. See layer_sequence_headpos for more information. |
| headDirection | Sequence Direction Constant | This is the current playback direction for the sequence instance. You can get or set this value using the constants given in the next table (Note that you can use the layer functions layer_sequence_get_headdir and layer_sequence_headdir to get or set this value without having to access the struct directly). |
| speedScale | Real | This property can be used to get or set the playback speed scale. The speed scale is a multiplier, where 1 is the default playback speed and values less than 1 will slow the playback and values larger than 1 will speed it up, e.g.: a value of 0.5 would be half playback speed, while a value of 2 would be double playback speed. Note that you can use the layer functions layer_sequence_get_speedscale and layer_sequence_speedscale to get or set this value without having to access the struct directly. |
| paused | Boolean | READ-ONLY You can check this property to see if a sequence has been paused or not, and it will be true if it has, or false otherwise. This is a read-only property, but you can use the layer function layer_sequence_pause to pause playback, and layer_sequence_play to resume it again if required. You can also check this property using the layer function layer_sequence_is_paused rather than check the property in the struct directly. |
| finished | Boolean | READ-ONLY You can check this property to see if a sequence has finished playing or not, returning true if it is finished playing, and false otherwise. This property will only ever return true for tracks that are not set to loop or ping-pong. You can also check this property using the layer function layer_sequence_is_finished rather than check the property in the struct directly. |
| elementID | Sequence Element ID | This property holds the ID of the sequence element. This ID is a simple identifying value that is associated with a layer in the Room Editor, and it can then be used with the appropriate layer functions to find the layer the sequence has been assigned to or to change certain sequence properties without having to deal with the struct. |
| activeTracks | Array of Sequence Active Track Structs | READ-ONLY This property will hold an array of "evaluation" structs containing information on the current state of each asset track in the sequence (graphics, sequence, audio, etc.). These are the top-level tracks. For the contents of the asset track struct returned in each array entry, please see the section below. |

| Sequence Direction Constant |
| --- |
| Constant | Description | Value |
| seqdir_right | The sequence will play frames in an incremental order from left to right | 1 |
| seqdir_left | The sequence will play frames in a decremental order from right to left | -1 |

## activeTracks Struct

IMPORTANT Although this property already exists in the sequence instance struct in the Sequence Create event, it is only filled with tracks after the first Sequence Begin Step event. So the first time you will find values in this struct is during the first iteration of the Sequence Step Event.

The following table contains the properties that may be available to you when accessing an active track struct (as included in the activeTracks array of a Sequence Instance struct, explained above). Each asset track struct can have any of the properties listed in the table below, depending on the type of asset the track uses. _All values returned are for the current playhead position_.

NOTE You can modify all these properties, except where specified as **read-only.**

| Sequence Active Track Struct |
| --- |
| Variable | Type | Description |
| Common |
| posx | Real | The position of the asset in the sequence along the X axis for the track (all asset track types). |
| posy | Real | The position of the asset in the sequence along the Y axis for the track (all asset track types). |
| rotation | Real | The rotation of the asset in the sequence (all asset track types). |
| xorigin | Real | The X origin of the asset for the track (group, particle system, instance, sequence, text and sprite asset track types). |
| yorigin | Real | The Y origin of the asset for the track (group, particle system, instance, sequence, text and sprite asset track types). |
| matrix | Matrix | The transformation matrix of the track within the parent track's frame of reference (all asset track types). |
| parent | Sequence Instance Struct | READ-ONLY The parent sequence instance ID for the track. |
| track | Sequence Track Struct | READ-ONLY The Track Struct that this track is based on. |
| activeTracks | Array of Sequence Track Structs | READ-ONLY This is an array of evaluation structs for each parameter track that the asset track contains. The contents of each struct in the array are listed in the parameter Track Struct section. |
| scalex | Real | The scale of the asset in the sequence along the X axis for the track (group, particle system, instance, sequence, text and sprite asset track types). |
| scaley | Real | The scale of the asset in the sequence along the Y axis for the track (group, particle system, instance, sequence, text and sprite asset track types). |
| colouraddcoloradd | Array | The colour add value. This is an array of 4 values each from 0 to 1 corresponding to ARGB values. These values are added to the colourmultiply values before the result is multiplied by the sequence element's colour and alpha value. |
| colourmultiplycolormultiply | Array | The colour multiply value for the asset on the track in the sequence at the current playhead position (sprite, instance and sequence tracks). This value will be an array of four ARGB values with the format [A, R, G, B]. Note that the values for each component are expressed as between 0 and 1, where 0 corresponds to the HEX value #00 and 1 corresponds to the HEX value #FF (0 - 255 as shown in the colour picker for colour multiply tracks in The Sequence Editor) (particle system, instance, text and sprite asset track types). |
| Instance and Sprite Asset Tracks |
| spriteIndex | Sprite Asset | READ-ONLY The sprite assigned to this track. |
| imageindex | Real | The image index for the asset on the track in the sequence. |
| imagespeed | Real | The image speed for the asset on the track in the sequence. |
| Instance Asset Tracks |
| instanceID | Object Instance | READ-ONLY The ID of the instance on this track. |
| Particle System Asset Tracks |
| particleSystemID | Particle System Instance | READ-ONLY The ID of the particle system instance on this track. |
| Sequence Asset Tracks |
| sequenceID | Sequence Asset | READ-ONLY The index of the sequence asset used by this track. |
| sequence | Sequence Object Struct | READ-ONLY The sequence object struct. |
| Text Asset Tracks |
| frameSizeX | Real | The horizontal size of the text frame. |
| frameSizeY | Real | The vertical size of the text frame. |
| characterSpacing | Real | The character spacing value. |
| lineSpacing | Real | The line spacing value. |
| paragraphSpacing | Real | The paragraph spacing value. |
| effectsEnabled | Boolean | Whether SDF Effects are enabled on this track. |
| glowEnabled | Boolean | Whether the glow effect is enabled. |
| outlineEnabled | Boolean | Whether the outline effect is enabled. |
| dropShadowEnabled | Boolean | Whether the drop shadow effect is enabled. |
| thickness | Real | The thickness of the SDF effect. See SDF Effects. |
| coreColourcoreColor | Array | An array of 4 values, each from 0 to 1, corresponding to ARGB values of the 'core' part of the glyph. See SDF Effects. |
| glowColourglowColor | Array | An array of 4 values, each from 0 to 1, corresponding to ARGB values of the glow colour. See SDF Effects. |
| glowStart | Real | The distance in pixels at which the glow effect starts. See SDF Effects. |
| glowEnd | Real | The distance in pixels at which the glow effect ends. See SDF Effects. |
| outlineColouroutlineColor | Array | An array of 4 values, each from 0 to 1, corresponding to ARGB values of the outline colour. See SDF Effects. |
| outlineDist | Real | The distance of the outline. See SDF Effects. |
| shadowColourshadowColor | Array | An array of 4 values, each from 0 to 1, holding the ARGB components of the drop shadow. See SDF Effects. |
| shadowSoftness | Real | The width of the drop shadow penumbra. See SDF Effects. |
| shadowOffsetX | Real | The offset in pixels on the x axis of the drop shadow. See SDF Effects. |
| shadowOffsetY | Real | The offset in pixels on the y axis of the drop shadow. See SDF Effects. |
| Sound Asset Tracks |
| soundIndex | Sound Instance ID | READ-ONLY The ID of the sound instance that's playing on this track's emitter. |
| emitterIndex | Audio Emitter ID | READ-ONLY The index of the audio emitter used by this track. |
| gain | Real | The gain of the track, which is the emitter gain. |
| pitch | Real | The pitch of the track, which is the emitter pitch. |
| falloff | Real | The audio emitter's falloff value. |
| falloffRef | Real | The audio emitter's falloff reference distance. |
| falloffMax | Real | The audio emitter's falloff maximum distance. |
| falloffFactor | Real | The audio emitter's falloff factor. |