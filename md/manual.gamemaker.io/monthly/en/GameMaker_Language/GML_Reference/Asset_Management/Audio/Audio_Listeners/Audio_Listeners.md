---
title: "Audio Listeners"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/Audio_Listeners.htm"
converted: "2025-09-14T03:59:31.374Z"
---

# Audio Listeners

When dealing with complex audio situations it can be useful to define where in the audio environment the listener should be situated. When working with the simple audio functions, it is not normally necessary for the listener to be changed in any way, however when using emitters to generate realistic audio within the 3D audio space, it is important that the listener be changed and moved correctly, or else the sound will be in the wrong _position_ for the person playing your game.

By default, there is one listener automatically created in the game, which uses the ID 0 (for reference in listener functions).

GameMaker provides the following listener functions:

-   [audio\_listener\_position](audio_listener_position.md)
-   [audio\_listener\_velocity](audio_listener_velocity.md)
-   [audio\_listener\_orientation](audio_listener_orientation.md)
-   [audio\_listener\_get\_data](audio_listener_get_data.md)
-   [audio\_listener\_set\_position](audio_listener_set_position.md)
-   [audio\_listener\_set\_velocity](audio_listener_set_velocity.md)
-   [audio\_listener\_set\_orientation](audio_listener_set_orientation.md)

Certain target platforms can permit more than one listener, with each one corresponding to a different output device, ie: your target platform could permit two listeners, one for the headphones and one for the monitor. Therefore GameMaker provides you with a number of extra functions with which you can find the available listeners as well as set them for sounds being played:

-   [audio\_get\_listener\_count](audio_get_listener_count.md)
-   [audio\_get\_listener\_info](audio_get_listener_info.md)
-   [audio\_get\_listener\_mask](audio_get_listener_mask.md)
-   [audio\_set\_listener\_mask](audio_set_listener_mask.md)

There are also functions for getting and setting mask data on individual sounds:

-   [audio\_sound\_get\_listener\_mask](../audio_sound_get_listener_mask.md)
-   [audio\_sound\_set\_listener\_mask](../audio_sound_set_listener_mask.md)

As well as for getting and setting mask data on emitters:

-   [audio\_emitter\_get\_listener\_mask](../Audio_Emitters/audio_emitter_get_listener_mask.md)
-   [audio\_emitter\_set\_listener\_mask](../Audio_Emitters/audio_emitter_set_listener_mask.md)