---
title: "os_browser"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_browser.htm"
converted: "2025-09-14T04:00:04.384Z"
---

# os\_browser

This **read-only** variable holds one of various constants (listed below) that GameMaker has to tell you which browser you are currently running the game in (if any).

NOTE The GX.games target, even though it runs on a browser, always returns browser\_not\_a\_browser.

#### Syntax:

os\_browser

#### Returns:

[Browser Type Constant](os_browser.md)

| Browser Type Constant |
| --- |
| Constant | Description |
| browser_not_a_browser | Game is not being played in a browser, or is being played through the GX.games target |
| browser_unknown | Unknown browser |
| browser_ie | Internet Explorer |
| browser_ie_mobile | Internet Explorer on a mobile device |
| browser_edge | Microsoft Edge |
| browser_firefox | Mozilla Firefox |
| browser_chrome | Google Chrome |
| browser_safari | Safari |
| browser_safari_mobile | Safari on a mobile device |
| browser_opera | Opera |
| browser_tizen | Tizen mobile device browser |
| browser_windows_store | Windows App |

#### Example:

if (os\_browser == browser\_not\_a\_browser)
{
    global.Config = 0;
}
else
{
    global.Config = 1;
}

The above code checks to see if the game is running in a browser or not and sets a global variable to a value depending on the result of the check.