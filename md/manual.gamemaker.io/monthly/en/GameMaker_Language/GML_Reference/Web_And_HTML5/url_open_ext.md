---
title: "url_open_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/url_open_ext.htm"
converted: "2025-09-14T04:00:11.649Z"
---

# url\_open\_ext

This will open the specified URL on the browser of the chosen target device, or, if you are using the HTML5 module, in the currently open browser.

The "target" parameter that you specify is the same as the standard JavaScript "name" value when you use the open() method, and you should be aware that all but "**\_self**" may result in the browser blocking, or asking the user if they wish to allow it. This parameter is only used when running in HTML5.

Valid targets are:

| Target | Description |
| --- | --- |
| _blank | Opens the linked document in a new window or tab (this will not work if pop-ups are being blocked by the user, in which case you can use the clickable_* functions instead). |
| _self | Opens the linked document in the same frame as it was clicked (this is default). |
| _parent | Opens the linked document in the parent frame. |
| _top | Opens the linked document in the full body of the window. |

NOTE Antivirus software installed on the player's device may cause the URL to not open, so keep this in mind when using this function.

#### Syntax:

url\_open\_ext(url, target);

| Argument | Type | Description |
| --- | --- | --- |
| url | String | The URL (website address) to link to. |
| target | String | This is the target area to open the URL in. It is only used when using the HTML5 module. |

#### Returns:

N/A

#### Example:

url\_open\_ext("http://gamemaker.io", "\_blank");

This would open the GameMaker homepage in a new window.