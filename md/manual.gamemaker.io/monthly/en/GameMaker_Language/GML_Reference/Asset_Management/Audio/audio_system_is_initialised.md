---
title: "audio_system_is_initialised"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_system_is_initialised.htm"
converted: "2025-09-14T03:59:32.610Z"
---

# audio\_system\_is\_initialised

This function returns whether the audio system (the main bus) is initialised on HTML5. For targets other than HTML5, this function will always return true.

On the HTML5 platform it is possible for the audio engine to not have finished loading on game start. Until it has, you should not do any of the following:

-   Reference [audio\_bus\_main](Audio_Effects/audio_bus_main.md) directly (this will be undefined)
-   Call [audio\_bus\_create](Audio_Effects/audio_bus_create.md) (this will return undefined)
-   Call [audio\_emitter\_create](Audio_Emitters/audio_emitter_create.md) (this will also return undefined)

NOTE This function differs from [audio\_system\_is\_available](audio_system_is_available.md), which reflects the ability to play audio and depends on the state of the Web Audio context. The audio system has to be initialised first before it can be available.

#### Syntax:

audio\_system\_is\_initialised();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

Create Event

// Initially, the audio system is not initialised
audio\_initialised = false;

em\_emitter = -1;
bus\_special\_effects = -1;

Step Event

// Check until the system is initialised
if !audio\_initialised && audio\_system\_is\_initialised()
{
    audio\_initialised = true;

    // First-time initialization
    bus\_special\_effects = audio\_bus\_create();
    bus\_special\_effects\[0\] = audio\_effect\_create(AudioEffectType.Reverb1);
    em\_emitter = audio\_emitter\_create();
    audio\_emitter\_bus(em\_emitter, bus\_special\_effects);
}

if (audio\_initialised)
{
    // The audio system can be used here
    // ...
}

At the game's start, a variable audio\_initialised is set to false in an object's Create event. In its Step event, the function audio\_system\_is\_initialised is called for as long as audio\_initialised remains false. Once the function returns true, the contents after the first if statement are executed: audio\_initialised is set to true, which prevents further calls to the function, and a custom audio bus and emitter are set up. Once audio\_initialised is true, the code of the second if statement is executed, which can be interaction with the audio system, e.g. changing effect parameters.