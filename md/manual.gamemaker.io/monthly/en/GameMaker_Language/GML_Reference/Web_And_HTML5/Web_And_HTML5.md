---
title: "Web And HTML5"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/Web_And_HTML5.htm"
converted: "2025-09-14T04:00:11.353Z"
---

# Web And HTML5

GameMaker provides various functions for interacting with the internet or with a server, and they can be used on all the available target platforms. These functions are:

-   [url\_open](url_open.md)
-   [url\_open\_ext](url_open_ext.md)
-   [url\_open\_full](url_open_full.md)
-   [url\_get\_domain](url_get_domain.md)
-   [http\_request](../Asynchronous_Functions/HTTP/http_request.md)
-   [http\_get](../Asynchronous_Functions/HTTP/http_get.md)
-   [http\_get\_file](../Asynchronous_Functions/HTTP/http_get_file.md)
-   [http\_post\_string](../Asynchronous_Functions/HTTP/http_post_string.md)

Apart from the general functions listed above, the **HTML5 target** has some additional web functions that are specifically designed to be used by the games that target it:

-   [browser\_height](browser_height.md)
-   [browser\_width](browser_width.md)
-   [browser\_input\_capture](browser_input_capture.md)
-   [webgl\_enabled](webgl_enabled.md)
-   [clickable\_exists](clickable_exists.md)
-   [clickable\_add](clickable_add.md)
-   [clickable\_add\_ext](clickable_add_ext.md)
-   [clickable\_change](clickable_change.md)
-   [clickable\_change\_ext](clickable_change_ext.md)
-   [clickable\_set\_style](clickable_set_style.md)
-   [clickable\_delete](clickable_delete.md)
-   [analytics\_event](analytics_event.md) OBSOLETE
-   [analytics\_event\_ext](analytics_event_ext.md) OBSOLETE
-   [os\_browser](../OS_And_Compiler/os_browser.md)
-   [http\_get\_request\_crossorigin](../Asynchronous_Functions/HTTP/http_get_request_crossorigin.md)
-   [http\_set\_request\_crossorigin](../Asynchronous_Functions/HTTP/http_set_request_crossorigin.md)

Apart from these functions for the HTML5 target module, there is also a special **JavaScript variable** that can be used on those rare occasions when the contents of the html5game folder are stored in a completely different place (URL). Normally this path is hard-coded in the JavaScript file and is relative to the location from where the JavaScript is called, but you can set the variable **g\_GameMakerHTML5Dir** before the call to the game script and the game will be run from the newly defined location. For example:

<script>var g\_GameMakerHTML5Dir = "http://mygamealternatedirectory.com/";</script>

It's also worth noting that you can flag script functions using the prefix gmcallback\_ which means they won't be obfuscated when you compile the project for HTML5. This is very uiseful when using the above listed clickable\_\* functions (for more information, please see [here](../../GML_Overview/Script_Functions.md)).