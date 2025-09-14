---
title: "audio_emitter_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_create.htm"
converted: "2025-09-14T03:59:30.824Z"
---

# audio\_emitter\_create

This function creates a new audio emitter and returns the index for it. This index should be stored in a variable for all further functions that relate to this emitter, and then when it is no longer needed it should be removed from memory using the function [audio\_emitter\_free()](audio_emitter_free.md) to prevent memory leaks which may eventually crash your game.

The audio emitter is created with the following default settings:

-   A gain and pitch of 1
-   A listener mask set to only the default listener (1)
-   A position of (0, 0, 0)
-   A speed of 0 (vx = 0, vy = 0, vz = 0)

#### Syntax:

audio\_emitter\_create();

#### Returns:

[Audio Emitter ID](audio_emitter_create.md)

#### Example:

s\_emit = audio\_emitter\_create();

The above code creates a new audio emitter and assigns its index to the variable "s\_emit".