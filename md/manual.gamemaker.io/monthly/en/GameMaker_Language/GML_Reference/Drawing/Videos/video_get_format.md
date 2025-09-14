---
title: "video_get_format"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_get_format.htm"
converted: "2025-09-14T03:59:55.388Z"
---

# video\_get\_format

This function returns the colour format of the currently loaded video. This can be any one of the following constants:

| Video Format Constant |
| --- |
| Constant | Description |
| video_format_rgba | The video surface uses the RGBA color model |
| video_format_yuv | The video surface uses the YUV color model |

Windows, macOS, GX.games, Android, iOS, and HTML5 use the RGBA model for videos. All other platforms use the YUV model.

As the drawing methods for RGBA and YUV videos are different, the return value from this function may be used to run different code based on the format of the playing video. See [Draw Video](YUV_Videos.htm#h) for an example.

#### Syntax:

video\_get\_format();

#### Returns:

Video Format Constant