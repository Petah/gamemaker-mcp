---
title: "audio_get_listener_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_get_listener_count.htm"
converted: "2025-09-14T03:59:31.384Z"
---

# audio\_get\_listener\_count

Certain target platforms permit more than one listener, so it is important that you know how many the target has before changing or using different listeners. This function will return the number of listeners available.

#### Syntax:

audio\_get\_listener\_count();

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

global.listener\_num = audio\_get\_listener\_count();

The above code gets the number of available listeners and stores the return value in a global variable.