---
title: "video_open"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/video_open.htm"
converted: "2025-09-14T03:59:55.466Z"
---

# video\_open

This function opens a video file using the path specified. The path can refer to a file in the [Included Files](../../../../../../../Settings/Included_Files.md) of your project, a file locally present on the user's device, a URL for loading a file from the internet (which may not work on all platforms), or a [constraints object](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#constraints) to display a camera feed as a video (only supported on GX.games).

As you can only load one video at a time, this function loads the specified video into the only available "video slot", which is then manipulated via the other [Video functions](Videos.md).

When passing a constraints object to show a video feed on GX.games you can also enable microphone audio.

There are asynchronous callbacks associated with video playback. See [Async Callbacks](Videos.htm#h) for more information.

#### Syntax:

video\_open(path);

| Argument | Type | Description |
| --- | --- | --- |
| path | String | Path to the video file or a constraints object for a camera feed on GX.games |

#### Returns:

N/A

#### Example: Basic Use

video\_open("splash.mp4");

The code above loads splash.mp4 from the Included Files of the game.

#### Example 2: Camera Feed on GX.games

var \_constraints =
{
    audio: true,
    video: true
};

video\_open(json\_stringify(\_constraints));

The code above requests access to the device's built-in camera and microphone and attempts to open the camera feed as a video. A constraints object is passed to video\_open in which permission for both audio and video is requested without any specific requirements.