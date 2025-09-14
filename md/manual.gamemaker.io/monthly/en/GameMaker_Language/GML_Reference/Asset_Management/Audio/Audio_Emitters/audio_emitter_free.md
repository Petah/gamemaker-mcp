---
title: "audio_emitter_free"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_free.htm"
converted: "2025-09-14T03:59:30.881Z"
---

# audio\_emitter\_free

With this function you can remove the given emitter from memory. This should always be done whenever the emitter is not going to be used further in the room or the game, ie: in the [Destroy Event](../../../../../The_Asset_Editors/Object_Properties/Object_Events.md) of the instance or in the [Room End Event](../../../../../The_Asset_Editors/Object_Properties/Other_Events.md), otherwise you may end up with a memory leak that will slow down and eventually crash your game.

#### Syntax:

audio\_emitter\_free(emitter);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to free. |

#### Returns:

N/A

#### Example:

if (lives == 0)
{
    audio\_emitter\_free(s\_emit);
    room\_goto(rm\_Menu);
}

The above code checks the value of the global variable "lives" and if it returns 0, it will destroy the emitter indexed in the variable "s\_emit" and then go to the room indexed in the variable "rm\_Menu".