---
title: "Video Playback"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/Videos.htm"
converted: "2025-09-14T03:59:55.281Z"
---

# Video Playback

## How to play videos?

Follow these steps to load videos at runtime and play them:

-   Add a video file to the [Included Files](../../../../../../../Settings/Included_Files.md) (/datafiles directory) of your project.
-   Load the video using [video\_open()](video_open.md).
    -   Alternatively, load a video from a URL.
-   Draw it in a Draw event using [video\_draw()](video_draw.md).
    -   This functions draws the video to an internal surface, which it returns as part of its return array.
    -   You must draw that surface manually using [draw\_surface()](../Surfaces/draw_surface.md) for the video to appear.
        -   Drawing [YUV Videos](YUV_Videos.md) will require extra steps.
-   When the video is finished, remove it from memory by calling [video\_close()](video_close.md).
    -   Use the [Async Callbacks](Videos.htm#h) to run code when the video ends.

## Video Codecs & Licensing

GameMaker does not ship with any codecs, and makes use of the codecs present on the platform that the game is running on. This means your videos must be encoded in a format that can be decoded on your intended target platform(s).

Making use of certain formats may require you to pay licensing fees depending on the related codec's licence and your game's revenue, and in such a case, the developer will be legally liable for any fees that is to be paid to the codec owners. Codecs are also licensed differently on each platform and so care must be taken for games that are distributed on multiple platforms.

Note that video formats (such as .mp4, .avi, .mkv, etc.) are simply containers that wrap **video** and **audio** streams, both of which may be encoded separately and may require separate licences.

For distribution on console platforms, check with your account representative to find out what formats you are allowed to use without having to pay extra licencing fees.

## Audio Limitations

On some platforms, the video playback implementation is not associated with the audio engine used for that platform. This means the audio playback from your video may be subject to the limitations of the audio engine on that platform, such as it requiring the audio to be encoded in a specific format and sample rate (e.g. requiring 48kHz audio). When facing issues with audio playback, please check the SDK for the platform to ensure your audio is encoded according to the requirements for that platform.

## Formats

The video formats that you are able to load and play in your game will depend on your target platform, and the codecs that are supported on that platform.

Windows, macOS, GX.games, Android, iOS, and HTML5 use the RGBA model for videos. All other platforms use the YUV model.

## Functions

You can load, play and manipulate video files at runtime using the following functions:

-   [video\_open](video_open.md)
-   [video\_close](video_close.md)
-   [video\_draw](video_draw.md)
-   [video\_set\_volume](video_set_volume.md)
-   [video\_pause](video_pause.md)
-   [video\_resume](video_resume.md)
-   [video\_enable\_loop](video_enable_loop.md)
-   [video\_seek\_to](video_seek_to.md)

The following functions are used to get information about the currently loaded video:

-   [video\_is\_looping](video_is_looping.md)
-   [video\_get\_volume](video_get_volume.md)
-   [video\_get\_duration](video_get_duration.md)
-   [video\_get\_position](video_get_position.md)
-   [video\_get\_status](video_get_status.md)
-   [video\_get\_format](video_get_format.md)

## Async Callbacks

The [Async Social](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/Social.md) event is triggered at the stages given below, with the "type" key in its async\_load map set to the given value:

-   "video\_start": When the video starts playing, which is when its [status](video_get_status.md) changes from video\_status\_preparing to video\_status\_playing.
-   "video\_end": When the video ends. This does not trigger when the video is [set to loop](video_enable_loop.md).

Here is an example of an Async Social event listening to video callbacks:

var \_type = async\_load\[? "type"\];

if (\_type == "video\_start")
{
    obj\_video.display\_video = true;
}
else if (\_type == "video\_end")
{
    obj\_video.display\_video = false;
    video\_close();
}

The above code reads the type from the async\_load map. When the video starts, it sets a variable in an object to true, so it can display the video.

When the video ends, it sets that same variable to false, and then calls [video\_close()](video_close.md) to remove the video from memory.