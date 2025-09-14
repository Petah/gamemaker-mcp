---
title: "url_open"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/url_open.htm"
converted: "2025-09-14T04:00:11.627Z"
---

# url\_open

This will open the specified URL on the browser of the chosen target device, or, if you are using the HTML5 module, in the currently open browser.

NOTE Antivirus software installed on the player's device may cause the URL to not open, so keep this in mind when using this function.

#### Syntax:

url\_open(url);

| Argument | Type | Description |
| --- | --- | --- |
| url | String | The URL (website address) to link to. |

#### Returns:

N/A

#### Example:

url\_open("http://gamemaker.io");

This would open the GameMaker homepage in the current window.