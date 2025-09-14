---
title: "AudioBus Struct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/AudioBus.htm"
converted: "2025-09-14T03:59:30.515Z"
---

# AudioBus Struct

The AudioBus Struct struct stores information about an audio bus in GameMaker and is used to access it.

An audio bus is what GameMaker uses to process the audio that it plays.

The main audio bus always exists and can be accessed through the built-in struct [audio\_bus\_main](audio_bus_main.md). A new bus can be created from [audio\_bus\_create](audio_bus_create.md).

NOTE This is a built-in struct, and as such GameMaker has more control over its contents. This means it may contain some additional, inaccessible variables created by GameMaker, and some values may change automatically if invalid values were assigned.

## Struct Members

| Member | Type | Description |
| --- | --- | --- |
| bypass | Boolean | Whether the bus should be bypassed.This passes the audio input through the bus to the output, bypassing all effects and gain scaling. |
| gain | Real | The gain value applied to the output of the bus (0-1). |
| effects | Array of AudioEffect Struct structs | This allows access to the audio effects on the bus.You can set, get and rearrange effects by manipulating this array.The array size is fixed to 8, allowing a maximum of 8 effects. Attempting to access an out-of-range index throws an error.Effect slots can be cleared by assigning undefined to them. |