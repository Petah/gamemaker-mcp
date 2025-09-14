---
title: "audio_emitter_bus"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_bus.htm"
converted: "2025-09-14T03:59:30.813Z"
---

# audio\_emitter\_bus

This function connects an [audio emitter](Audio_Emitters.md) to a bus.

This will cause all output of the emitter to be sent to the given bus. All effects on the bus will be applied to the emitter's output.

You can assign any number of emitters to a bus.

#### Syntax:

audio\_emitter\_bus(emitter, bus);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The audio emitter |
| bus | AudioBus Struct | The audio bus to which the emitter is assigned |

#### Returns:

N/A

#### Example:

emitter = audio\_emitter\_create();
var \_new\_bus = audio\_bus\_create();
audio\_emitter\_bus(emitter, \_new\_bus);

The above code first creates an audio emitter, and then an audio bus using [audio\_bus\_create](../Audio_Effects/audio_bus_create.md). It assigns the emitter to the new bus using [audio\_emitter\_bus](audio_emitter_bus.md).

You can reset an emitter's bus configuration by assigning it back to [audio\_bus\_main](../Audio_Effects/audio_bus_main.md).