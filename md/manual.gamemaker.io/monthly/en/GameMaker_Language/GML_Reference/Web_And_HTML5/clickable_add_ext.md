---
title: "clickable_add_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/clickable_add_ext.htm"
converted: "2025-09-14T04:00:11.521Z"
---

# clickable\_add\_ext

With this function you can create a custom, clickable, icon that acts as a "button" outside of the game canvas, but within the browser window itself. The function will return an ID value which must be stored in a variable to be used in all further button functions that reference the new clickable. This function is very useful to prevent the browser creating a pop-up window when clicking on the button as it is all done through GameMaker itself.

This function works exactly the same as the [clickable\_add()](clickable_add.md) function, where you must set the position relative to the (0,0) of the browser window, give the texture page entry for the sprite you wish the button icon to have (see: [sprite\_get\_tpe()](../Asset_Management/Sprites/Sprite_Information/sprite_get_tpe.md)), specify either a URL to open or a script (from the Asset Browser of GameMaker) to be opened or run then set the target and parameters to use. However this function also has two additional options that permit you to set the icon alpha from 0 (fully transparent) to 1 (fully opaque) and the scale of the icon, which is a multiplier value applied to the sprite used. So a value of 1 is the default scale, while (for example) 0.5 would be half scale and 2 would be double.

It is also worth noting that if the URL argument you pass in is the name of a [script function](../../GML_Overview/Script_Functions.md) (ie: it doesn't start with "http://") AND the script is called **gmcallback\_\*** then you can get direct feeds into an html5 event. GameMaker script function names are _not_ obfuscated if they begin with gmcallback\_.

#### Syntax:

clickable\_add\_ext(x, y, tpe, url, target, params, alpha, scale);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position within the window. |
| y | Real | The y position within the window. |
| tpe | Texture Page Entry | The texture page entry for the sprite to be used. |
| url | String | The URL (website address) to link to, or the script to be run. |
| target | String | This is the target area to open the URL in (see description). |
| params | String | The various parameters for the icon (see description). |
| alpha | Real | The image alpha of the icon (default 1). |
| scale | Real | The scale of the icon (default 1). |

#### Returns:

[Clickable ID](clickable_add.md)

#### Example:

home\_but = clickable\_add\_ext(32, 32, sprite\_get\_tpe(spr\_MS\_Home, 0), "http://macsweeney\_games.com", "\_blank", "width=700, height=500, menubar=0, toolbar=0, scrollbars=0", 1, 2);

The above code creates a clickable DOM icon at the position (32, 32) of the page that the game canvas is running on. The icon uses the sprite referenced from the texture page as "spr\_MS\_Home" and when clicked the icon will open a new window for the specified URL and with the defined properties for that window. the button will also be scaled to twice the original sprite size and half an image alpha of 1.