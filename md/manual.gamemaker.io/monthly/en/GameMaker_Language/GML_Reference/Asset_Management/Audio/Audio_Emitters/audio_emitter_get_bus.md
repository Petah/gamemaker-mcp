---
title: "audio_emitter_get_bus"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_get_bus.htm"
converted: "2025-09-14T03:59:30.927Z"
---

# audio\_emitter\_get\_bus

This function returns the bus that an [audio emitter](Audio_Emitters.md) is connected to.

By default audio emitters are connected to the main audio bus, accessed through [audio\_bus\_main](../Audio_Effects/audio_bus_main.md). If the emitter had a different audio bus assigned using [audio\_emitter\_bus](audio_emitter_bus.md), it will return that bus's struct.

#### Syntax:

audio\_emitter\_get\_bus(emitter);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The emitter to get the bus for |

#### Returns:

[AudioBus Struct](../Audio_Effects/AudioBus.md)

#### Example:

var bus = audio\_emitter\_get\_bus(emitter);
show\_debug\_message(bus);

The above code first stores the bus assigned to an emitter in a temporary variable bus. It then displays the contents of the returned [AudioBus Struct](../Audio_Effects/AudioBus.md) struct in a debug message.