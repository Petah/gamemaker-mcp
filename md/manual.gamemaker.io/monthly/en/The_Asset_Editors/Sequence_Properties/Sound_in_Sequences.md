---
title: "Sound in Sequences"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sequence_Properties/Sound_in_Sequences.htm"
converted: "2025-09-14T04:00:16.547Z"
---

# Sound in Sequences

Sound tracks can be added to sequences, together with audio effects on that track. The simplest way to do this is by dragging a sound asset into the Canvas at the position where you want the sound to play.

![](../../assets/Images/Asset_Editors/Sequences_Audio/SeqAudioOverview.png)

This page covers the following topics:

Contents

1.  [Adding Sounds](Sound_in_Sequences.htm#adding_sounds)
2.  [Emitters](Sound_in_Sequences.htm#emitters)
3.  [IDE Audio Listener](Sound_in_Sequences.htm#ide_audio_liste)
4.  [Audio Effects](Sound_in_Sequences.htm#audio_effects)
5.  [Audio Emitters in Sequence Instances](Sound_in_Sequences.htm#audio_emitters_)

## Adding Sounds

You can add a sound track to a sequence in the following ways:

-   **Drag a sound asset from [The Asset Browser](../../Introduction/The_Asset_Browser.md) onto the sequence canvas.** This creates a positioned audio emitter for the sound where you drop it.
-   **Select a sound asset in the Asset Explorer when adding a track.** This creates an emitter for the sound at the sequence's centre.
-   **Drag a sound asset onto [The Track Panel](The_Track_Panel.md).** This creates an emitter for the sound at the sequence's centre.

## Emitters

Every sound track in a sequence gets an audio emitter as well as an audio bus. You can move the audio emitter around on the sequence canvas to **Position** it.

You can also change the **Volume** and **Pitch**. The volume and pitch are that of the emitter (see [Audio Properties Overview](../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Properties.md)).

An audio emitter is shown on the sequence canvas using the emitter icon:

![](../../assets/Images/Asset_Editors/Sequences_Audio/SeqAudioGizmoEmitter.png)

NOTE The position will influence how loud and from which direction the sound is heard. For this to work correctly, you also need to set an appropriate audio falloff model and update the listener position and orientation to where you want the sound to be heard. See [Audio Emitters](../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/Audio_Emitters.md) for more details.

Finally, the emitter's falloff parameters (**Falloff Factor**, **Falloff Ref** and **Falloff Max**) can also be changed by adding a **Falloff** parameter track. This parameter track contains a channel for each of the falloff parameters.

NOTE The HTML5 platform is very limited in terms of falloff model support. The falloff model used for preview in the IDE reflects the most important properties (ref distance and max distance) at the cost of not reflecting the falloff factor, which is limited between 0 and 1 for linear falloff models in Web Audio.

## IDE Audio Listener

The Sequence Editor uses the following setup for previewing audio in sequences:

-   The audio listener is positioned at the sequence's (0, 0, 0) position, looking into the screen and facing "up" along the negative y axis. This is equivalent to calling audio\_listener\_orientation(0, 0, 1, 0, -1, 0) in GML Code.
-   The audio falloff model is set to audio\_falloff\_linear\_distance\_clamped. This is not automatically set in your game, you need to set it explicitly by calling [audio\_falloff\_set\_model](../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_falloff_set_model.md).

NOTE When you add a sequence to a room in [The Room Editor](../Rooms.md), the audio listener is positioned at the _room's_ origin (i.e. the top-left corner) and the audio emitters created for the sequence's audio tracks are offset by the position and rotation of the sequence instance.

## Audio Effects

You add all [Audio Effects](../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/Audio_Effects.md), except for the equaliser effect, as parameter tracks to audio asset tracks.

All audio effects that you add to an audio track are processed on an audio bus created for that track. You can configure the audio bus itself by adding it as a parameter track and changing the properties of that track.

An audio bus track can be added only once to an audio track, while effect tracks can be added multiple times.

![](../../assets/Images/Asset_Editors/Sequences_Audio/SeqAudioAddEffectParameterTracks.gif)

NOTE You can add a maximum number of 8 audio effect tracks, as limited by the number of effect slots of the [AudioBus Struct](../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/AudioBus.md).

### Inspector

In [The Inspector](../../IDE_Tools/The_Inspector.md) you can edit all general sound and emitter properties of a sound track as well as the settings of all its effects.

![](../../assets/Images/Asset_Editors/Sequences_Audio/SeqAudioInspectorGeneral.png)

You can make changes to the **Rotation** here but it has no effect in-game as this isn't a property that can be set for an emitter.

NOTE All properties shown above apply to the emitter except the **Loop Mode**, which is a property of the [sound instance](../../GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_play_sound.md).

![](../../assets/Images/Asset_Editors/Sequences_Audio/SeqAudioInspectorEffects.png)All effects that you add to the audio track are listed under "**Audio Effects" in the Inspector**. You can change their parameters here, however their order can only be changed in the Track Panel.

### Reordering Audio Effects

Audio effects on an audio bus are applied _in order_ and therefore the order of the tracks is important. The effect track at the top corresponds to the first audio effect to be applied to the bus and the effect tracks below the subsequent ones.

To reorder audio effects, click and hold the left mouse button on an effect track to drag it to its new position:

![](../../assets/Images/Asset_Editors/Track_Editor_Reordering_Effect_Tracks.gif)

NOTE Dragging parameter tracks only works for audio effect parameter tracks, not the bus track or any other type of parameter track.

## Audio Emitters in Sequence Instances

Once your sequence is finished, you can add it to an asset layer in [The Room Editor](../Rooms.md), creating one or more _instances_ of it. A sequence instance will include an audio emitter for each sound track in the sequence, positioned relative to the instance's position.

For example, if you added an audio emitter to your sequence at position (0, 0) and you add an instance of that sequence to a room at a position (100, 200) then GameMaker will place the audio emitter at (100, 200), or (100 + 0, 200 + 0). If you have another audio emitter in another sequence at position (10, -30) and you add an instance of this sequence at (400, 50), this emitter will end up at the position (410, 20), or (400 + 10, 50 + (-30)). If you animated the emitter's position in the sequence, GameMaker will update its final position accordingly.

By adding the sequence position (and possibly also rotation) to the emitter position it is moved from "local" space (its position defined relative to the sequence) into "global" space (its position defined relative to the room origin).

So you can place two instances of the same sequence in a room and the audio emitter in one will be heard on one side and the other one on the other side (despite the two emitters both having the same "local" position).