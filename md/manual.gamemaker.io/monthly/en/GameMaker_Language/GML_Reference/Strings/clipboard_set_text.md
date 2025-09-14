---
title: "clipboard_set_text"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/clipboard_set_text.htm"
converted: "2025-09-14T04:00:07.261Z"
---

# clipboard\_set\_text

This function sets the clipboard to hold the defined string. You can set it to an empty string "" to effectively clear the clipboard of text.

NOTE This function is supported on the Windows, Ubuntu, macOS, Android, iOS, HTML5 and Opera GX targets.

On HTML5, clipboards are [not supported on Firefox](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#browser_compatibility) without the use of an extension, and are not supported on Internet Explorer at all.

Additionally, clipboard functionality may be affected by browser permissions and the user may need to allow clipboard permissions when prompted, otherwise the clipboard may not function.

#### Syntax:

clipboard\_set\_text(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The text (as a string) to set the clipboard to hold. |

#### Returns:

N/A

#### Example:

if (clipboard\_has\_text())
{
    str = clipboard\_get\_text();
    clipboard\_set\_text("");
}

The above code checks the clipboard for text and if it contains any, it is read as a string into the variable str. Finally the clipboard is cleared by setting it to an empty string.