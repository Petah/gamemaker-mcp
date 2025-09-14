---
title: "display_set_ui_visibility"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_ui_visibility.htm"
converted: "2025-09-14T03:59:45.874Z"
---

# display\_set\_ui\_visibility

This function can be used to show or hide the system UI on **Android and iOS only**.

-   **Android**: You can supply one or more system _flags_ as an integer value. When using more than a single flag, these need to be merged using the bitwise "or", as shown in the example below. You can find a list of Android system flags [here](https://developer.android.com/reference/android/view/View#SYSTEM_UI_FLAG_FULLSCREEN).
-   **iOS**: You can pass 0 to hide the status bar, or 1 to make it visible.

#### Syntax:

display\_set\_ui\_visibility(flags);

| Argument | Type | flags |
| --- | --- | --- |
| flags | Real | The system flags to use (an integer value). |

#### Returns:

N/A

#### Example:

var flags = 1024|4096;
display\_set\_ui\_visibility(flags);

The above code will use the Android system flags "SYSTEM\_UI\_FLAG\_IMMERSIVE\_STICKY" and "SYSTEM\_UI\_FLAG\_LAYOUT\_FULLSCREEN" to set the visibility of the display.