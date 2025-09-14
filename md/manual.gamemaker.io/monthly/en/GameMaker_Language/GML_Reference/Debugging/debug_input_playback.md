---
title: "debug_input_playback"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/debug_input_playback.htm"
converted: "2025-09-14T03:59:48.804Z"
---

# debug\_input\_playback

This function plays back previously recorded input.

The file can hold various types of input, depending on the types selected when the input was recorded using [debug\_input\_record](debug_input_record.md).

Regular input is blocked while recorded input is played back. This applies per type of input, e.g., if the loaded input contains only keyboard input, all keyboard input will be blocked during playback but mouse and touch input are still processed.

When the playback has finished, the [Async System](../../../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event will be triggered with the following properties in the async\_load map:

-   "event\_type": "debug\_input\_playback\_stopped"

WARNING This function is meant for debugging purposes only and should not be used in a final game.

#### Syntax:

debug\_input\_playback(filename);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The path to the file storing previously recorded input data |

#### Returns:

N/A

#### Example:

debug\_input\_playback("input.data");

The above code plays back previously recorded input stored in a file named "input.data".