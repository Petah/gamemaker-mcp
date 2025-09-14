---
title: "audio_bus_clear_emitters"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/audio_bus_clear_emitters.htm"
converted: "2025-09-14T03:59:30.712Z"
---

# audio\_bus\_clear\_emitters

This function clears the list of all audio emitters on the given bus and relinks them to the main bus.

NOTE A bus that has no emitters linked to it is not processed.

#### Syntax:

audio\_bus\_clear\_emitters(bus);

| Argument | Type | Description |
| --- | --- | --- |
| bus | AudioBus Struct | The bus of which to clear the emitters |

#### Returns:

N/A

#### Example:

audio\_bus\_clear\_emitters(bus1);

The above code clears all emitters linked to an existing audio bus bus1, reassigning them to the main audio bus [audio\_bus\_main](audio_bus_main.md).