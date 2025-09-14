---
title: "debug_input_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/debug_input_save.htm"
converted: "2025-09-14T03:59:48.834Z"
---

# debug\_input\_save

This function stops recording input and saves it to the given file for later playback.

Recording of input must have previously been started with a call to [debug\_input\_record](debug_input_record.md).

NOTE If you call this function in, e.g., a key press event this event will also be recorded (as the key press has already occurred at the time this function is called).

WARNING This function is meant for debugging purposes only and should not be used in a final game.

#### Syntax:

debug\_input\_save(filename);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The path to the file to save the recorded input to |

#### Returns:

N/A

#### Example:

debug\_input\_save("input.data");

The above code saves recorded debug input to a file named "input.data".