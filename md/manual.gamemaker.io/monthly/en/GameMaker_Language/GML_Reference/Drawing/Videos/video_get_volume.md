---
title: "video_get_volume"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_get_volume.htm"
converted: "2025-09-14T03:59:55.432Z"
---

# video\_get\_volume

This function returns the volume of the currently loaded video, which is a value between 0 and 1. You can change the volume of the loaded video using [video\_set\_volume()](video_set_volume.md).

#### Syntax:

video\_get\_volume();

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

/// Step event
var \_video\_volume = video\_get\_volume();

if (\_video\_volume < 1) {
    \_video\_volume += 0.02;
    video\_set\_volume(\_video\_volume);
}

The above code would run in a Step event. It gets the volume for the video that is currently playing, and if it's lower than 1, it will increase it by 0.02, gradually increasing the volume until it's at the maximum level.