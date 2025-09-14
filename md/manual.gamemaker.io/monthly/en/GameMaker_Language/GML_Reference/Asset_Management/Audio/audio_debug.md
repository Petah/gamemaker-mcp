---
title: "audio_debug"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_debug.htm"
converted: "2025-09-14T03:59:32.058Z"
---

# audio\_debug

This function can be used to display debug information about the audio system, with true switching it on and false switching it off. Enabling this will display the [Audio](../../Debugging/The_Debug_Overlay.htm#audio) window of [The Debug Overlay](../../Debugging/The_Debug_Overlay.md).

NOTE For synchronised groups of audio, you also have the function [audio\_sync\_group\_debug](Audio_Synchronisation/audio_sync_group_debug.md).

NOTE This function does not work on the HTML5 target platform.

#### Syntax:

audio\_debug(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable (set to true) or disable (false) audio debugging. |

#### Returns:

N/A

#### Example:

if (debug\_mode)
{
    audio\_debug(true);
}
else
{
    audio\_debug(false);
}

The above code will switch on or off the audio debug overlay depending on whether the game is running in debug mode or not.