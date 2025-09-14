---
title: "Audio Emitters"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/Audio_Emitters.htm"
converted: "2025-09-14T03:59:30.798Z"
---

# Audio Emitters

Audio emitters are provided to increase the flexibility of the GameMaker audio engine, and they permit you to add real time effects to your audio assets, like pitch and Doppler variations, as well as the ability to position your sounds within the 3D audio space and give them realistic motion effects. All these functions are affected by the position of the _listener_ within the audio environment and so will require that you use the provided functions for changing the listener position, velocity and orientation too (see - [Audio Listeners](../Audio_Listeners/Audio_Listeners.md)).

## Using audio emitters and listeners

By combining audio emitters and listeners you can create a rich, lively environment. Setting this up can be a bit involved so in this part we will look at the things that you need to do to set up a full system with emitters and the default listener.

### Setting a falloff model

The first thing to do when working with audio emitters (and with sounds played using [audio\_play\_sound\_at](../audio_play_sound_at.md) at a different position than (0, 0, 0)) is to set a falloff model using [audio\_falloff\_set\_model()](../audio_falloff_set_model.md). The falloff model determines how the volume of the sound being played changes with the distance from the listener to the emitter.

It is not strictly required that you set this but if you don't call this function the model used will be the default audio\_falloff\_none. This means that the gain is set to 1 and so the volume of a sound does not change with the distance from the listener to the emitter.

NOTE If you want to make sure sounds can no longer be heard past the maximum distance you should set one of the falloff models that end in \_scaled.

### Updating the listener

The default audio listener is located at position (0, 0, 0). [audio\_play\_sound](../audio_play_sound.md) plays a sound at the listener's position. So by default sounds that are played this way will be audible through both speakers, right and left.

From the moment the relative position of the listener to the sound or emitter changes (by either changing the listener or the emitter position) this will no longer be the case.

It does not only have a **position**, it also has an **orientation**, which can be changed using [audio\_listener\_orientation](../Audio_Listeners/audio_listener_orientation.md). By default, however, that orientation is upside down! The default orientation has the up vector set to (0, 1, 0), but since GameMaker's y axis points downward, that means the listener is standing upside down in the room.

Everything that you expect to hear in the left speaker will actually be heard in the right speaker and vice versa (see the page on [audio\_listener\_orientation](../Audio_Listeners/audio_listener_orientation.md) for an image of how this looks). So once you start moving emitters and the listener around, make sure to set the listener's orientation to the following:

audio\_listener\_orientation(0, 0, 1, 0, -1, 0);

The above line of code will set the default listener's orientation so that it looks **into the screen** and **faces up**. So this corresponds to a listener standing or sitting at the computer looking at the screen.

When you are creating a top-down game it can be more interesting to make the listener's orientation follow the direction that the player (or any other "listener") is facing. That can be done by the following line of code:

audio\_listener\_orientation(0, 0, 1, lengthdir\_x(1, direction), lengthdir\_y(1, direction), 0);

In this line of code, instead of having an up vector that doesn't change at all (y = -1 all the time), you change it based on the direction of the player. The simplest way to do this is to use the [lengthdir\_x](../../../Maths_And_Numbers/Angles_And_Distance/lengthdir_x.md) and [lengthdir\_y](../../../Maths_And_Numbers/Angles_And_Distance/lengthdir_y.md) functions. The look at vector can stay the same since the listener is still looking into the screen.

### Playing sounds

After setting a falloff model and making sure the listener's position and orientation are updated correctly, you can start playing sounds in the 3D audio space using [audio\_play\_sound\_at](../audio_play_sound_at.md):

sound\_instance = audio\_play\_sound\_at(snd\_Explosion, x, y, 0, 100, 300, 1, true, 1);

The above line of code plays the sound "snd\_Explosion" **at** the position (x, y, 0) with a falloff reference distance of 100, a falloff max distance of 300 and a falloff factor of 1.

Note that you can change certain properties of the sound since it can be accessed through the sound\_instance variable above. These are only properties of the sound itself, however, such as gain, offset and pitch. There is no way to change the position or velocity of sounds that are played using [audio\_play\_sound\_at](../audio_play_sound_at.md).

All in all, [audio\_play\_sound\_at](../audio_play_sound_at.md) is a good way to play simple sounds in 3D audio space but it is limited. It doesn't allow you to change the position, the velocity or the falloff parameters once the sound is playing. Position and falloff parameters _are_ passed to the function but cannot be changed afterwards.

If you want more control over how sounds are played, use an audio emitter.

### Adding an emitter

Audio emitters are added using [audio\_emitter\_create](audio_emitter_create.md). They are placed at (0, 0, 0), have a velocity of 0 and default falloff settings.

emitter = audio\_emitter\_create();

### Updating an emitter

An audio emitter "emits" a sound. It can be compared to a speaker in the real world.

Compared to [audio\_play\_sound\_at](../audio_play_sound_at.md), an emitter can have its position, velocity, listener mask and falloff parameters changed after you start playing a sound on it using [audio\_play\_sound\_on](audio_play_sound_on.md).

The position of an emitter can be updated using [audio\_emitter\_position](audio_emitter_position.md). This can be set to an instance's position:

audio\_emitter\_position(emitter, x, y, 0);

The velocity of an emitter is updated using [audio\_emitter\_velocity](audio_emitter_velocity.md). The easiest way to set the velocity is by setting it to the [hspeed](../../Instances/Instance_Variables/hspeed.md) and [vspeed](../../Instances/Instance_Variables/vspeed.md) of an instance, like this:

audio\_emitter\_velocity(emitter, hspeed, vspeed, 0);

NOTE The _velocity_ of an audio emitter is expressed in _pixels per step_.

### Audio emitters created by GameMaker

When working with [Sequences](../../Sequences/Sequences.md), GameMaker adds creates audio emitter for every audio track (seqtracktype\_audio) in the sequence. The ID of these emitters can be found in the [Sequence Instance's](../../Sequences/Sequence_Structs/The_Sequence_Instance_Struct.md) activeTracks\[i\].emitterIndex property.

GameMaker automatically updates the position of such an emitter. It does not update the velocity of an audio track emitter but this is something you can do yourself by calling [audio\_emitter\_velocity](audio_emitter_velocity.md) in one of the [Sequence Step Events](../../Sequences/Sequence_Events_Moments_Broadcast.md).

### Playing sounds on an emitter

Sounds can be played **on** an emitter using [audio\_play\_sound\_on](audio_play_sound_on.md):

sound\_instance = audio\_play\_sound\_on(emitter, snd\_Explosion, false, 10);

### Keeping track of playing sound instances

Every time you call one of [audio\_play\_sound](../audio_play_sound.md), [audio\_play\_sound\_at](../audio_play_sound_at.md) or [audio\_play\_sound\_on](audio_play_sound_on.md) you create a new sound **instance**.

The sound instance being played may not be audible for various reasons, such as its position being too far away from the listener. But it always exists.

If you want to change the properties of the sound instance you should assign the return value to a variable, like this:

sound\_instance = audio\_play\_sound\_at(snd\_Explosion, x, y, 0, 100, 300, 1, true, 1);

At one point you may have quite a few sound instances playing. In that case you could store them in an array as follows:

var \_x = random(room\_width);
var \_y = random(room\_height);
var \_new\_sound\_instance = audio\_play\_sound\_at(snd\_Bird, \_x, \_y, 0, 200, 400, true, 10);
array\_push(bird\_sounds, \_new\_sound\_instance);

Every time the above piece of code is executed the newly created sound instance's ID is added to the bird\_sounds array.

This way you can keep track of all sound instances (of snd\_Bird in the above example) that are playing.

IMPORTANT That a sound is being "played" does not necessarily mean that it will be heard by the listener. Sounds that have stopped playing, that are too far away from the listener or that have a gain set that is too low (or that are played on an emitter that has a gain set that is too low) will not be audible.

### Additional listeners

If you want to use additional listeners you should first check if the system supports multiple listeners using [audio\_get\_listener\_count](../Audio_Listeners/audio_get_listener_count.md).

If there is more than one listener, [audio\_get\_listener\_info](../Audio_Listeners/audio_get_listener_info.md) can be used to get the name, listener mask and index of every listener.

If you know the listener index you can change its settings (position, velocity and orientation) using the functions starting with audio\_listener\_set\_ instead of audio\_listener\_.

## Functions

The following functions exist to deal with audio emitters:

-   [audio\_emitter\_create](audio_emitter_create.md)
-   [audio\_emitter\_exists](audio_emitter_exists.md)
-   [audio\_emitter\_position](audio_emitter_position.md)
-   [audio\_emitter\_velocity](audio_emitter_velocity.md)
-   [audio\_emitter\_falloff](audio_emitter_falloff.md)
-   [audio\_emitter\_gain](audio_emitter_gain.md)
-   [audio\_emitter\_pitch](audio_emitter_pitch.md)
-   [audio\_emitter\_set\_listener\_mask](audio_emitter_set_listener_mask.md)
-   [audio\_emitter\_free](audio_emitter_free.md)
-   [audio\_play\_sound\_on](audio_play_sound_on.md)
-   [audio\_emitter\_get\_gain](audio_emitter_get_gain.md)
-   [audio\_emitter\_get\_pitch](audio_emitter_get_pitch.md)
-   [audio\_emitter\_get\_x](audio_emitter_get_x.md)
-   [audio\_emitter\_get\_y](audio_emitter_get_y.md)
-   [audio\_emitter\_get\_z](audio_emitter_get_z.md)
-   [audio\_emitter\_get\_vx](audio_emitter_get_vx.md)
-   [audio\_emitter\_get\_vy](audio_emitter_get_vy.md)
-   [audio\_emitter\_get\_vz](audio_emitter_get_vz.md)
-   [audio\_emitter\_get\_listener\_mask](audio_emitter_get_listener_mask.md)
-   [audio\_emitter\_bus](audio_emitter_bus.md)
-   [audio\_emitter\_get\_bus](audio_emitter_get_bus.md)