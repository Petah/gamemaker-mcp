---
title: "audio_throw_on_error"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_throw_on_error.htm"
converted: "2025-09-14T03:59:32.622Z"
---

# audio\_throw\_on\_error

This function enables or disables audio functions throwing fatal errors (as described in [Audio Error Handling](Audio.htm#h1)). By default, throwing is enabled and you can pass false to this function to disable that behaviour and instead make such errors print a message to the Output Log.

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_throw\_on\_error(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether errors should be thrown (true, default) or logged (false) |

#### Returns:

N/A

#### Example:

audio\_throw\_on\_error(false);

This disables audio functions throwing errors.