---
title: "video_enable_loop"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_enable_loop.htm"
converted: "2025-09-14T03:59:55.361Z"
---

# video\_enable\_loop

This function enables or disables looping for the currently loaded video. Set the enable argument to true to enable looping, and false to disable it.

By default, looping is disabled.

#### Syntax:

video\_enable\_loop(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to enable (true) or disable (false) looping |

#### Returns:

N/A

#### Example:

video\_open("Loading.mp4");
video\_enable\_loop(true);

The above code loads a video and enables looping on it.