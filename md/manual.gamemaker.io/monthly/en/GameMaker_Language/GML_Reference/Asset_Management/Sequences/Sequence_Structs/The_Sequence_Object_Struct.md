---
title: "The Sequence Object Struct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/Sequence_Structs/The_Sequence_Object_Struct.htm"
converted: "2025-09-14T03:59:39.697Z"
---

# The Sequence Object Struct

A [Sequence Object Struct](The_Sequence_Object_Struct.md) is the name given to the struct retrieved from a Sequence asset. All the data for a Sequence is stored in this struct at runtime, and is referenced by any elements of the Sequence that are created in a room. This means that if any variables in this struct (or inside any of its nested structs) are modified, the original Sequence will change (until the game is closed and re-opened) and any of its existing Sequence elements will be affected.

This [struct](../../../../GML_Overview/Structs.md) will have the following properties that can be changed:

| Sequence Object Struct |
| --- |
| Variable | Type | Description |
| name | String | This is the name of the sequence as a string and you can get or set this value as required. Note that sequences created using the function sequence_create will not have a name and this will simply be an empty string "". |
| loopmode | Sequence Play Mode Constant | This is the playback mode of the sequence object and can be get or set. This can be any one of the constants shown in the table below this one. |
| playbackSpeed | Real | This specifies the playback speed of the sequence, which is interpreted as either frames-per-second or frames-per-game-frame depending on the playbackSpeedType (see below). You can get or set this value. |
| playbackSpeedType | Sprite Speed Constant | This specifies how the playbackSpeed should be interpreted and you can get or set this value. |
| length | Real | The length of the sequence in frames. You can get or set this value, but note that making a sequence shorter may cause issues if a sequence instance referencing this sequence has its playhead set to past the new length. |
| volume | Real | This is a scalar value from 0 to 1 that is used to scale the volume of all audio tracks in the sequence. You can get or set this value and it will modify the global audio output for all tracks - for example, if you have an audio track with a volume of 0.8 and then set the sequence volume property to 0.5, the audio track will have a final volume of 0.4. |
| xorigin | Real | This is the origin of the sequence along the X axis. |
| yorigin | Real | This is the origin of the sequence along the Y axis. |
| messageEventKeyframes | Array of Sequence Keyframe Structs | This allows access to the message event keyframes for the sequence. You can get or set these message events, and when getting this property an array of keyframe structs is returned, and for setting the property you should supply an array of keyframe structs. For more information, please see the page on Sequence Events and Moments. |
| momentKeyframes | Array of Sequence Keyframe Structs | This allows access to the moment event keyframes for the sequence. You can get or set these moment events, and when getting this property an array of keyframe structs is returned, and for setting the property you should supply an array of keyframe structs. For more information, please see the page on Sequence Events and Moments. |
| tracks | Array of Sequence Track Structs | This allows access to the list of asset tracks on the top level of the sequence. You can get or set this property, and when getting this property an array of track structs is returned, and for setting the property you should supply an array of track structs. For more information, please see the section on Track Structs. |

loopmode can be any one of the following constants:

| Sequence Play Mode Constant |
| --- |
| Constant | Description | Value |
| seqplay_oneshot | The sequence will play once then stop when finished. | 0 |
| seqplay_loop | The sequence will loop, with the playhead going back to the start when it reaches the end of the playback region. | 1 |
| seqplay_pingpong | The sequence will loop, with the playhead reversing direction when it reaches the end of the playback region. | 2 |




## Remarks

Note that if you want to access the properties of a sequence that has been created in [The Sequence Editor](../../../../../The_Asset_Editors/Sequences.md), you must first call the function [sequence\_get](../sequence_get.md) on the asset index to retrieve the sequence object struct. Also note that any changes made to this sequence struct will mean that all further instances of this sequence asset will also have these changes, and they will be maintained as long as the game is running, even if you call the [game\_restart](../../../General_Game_Control/game_restart.md) function.