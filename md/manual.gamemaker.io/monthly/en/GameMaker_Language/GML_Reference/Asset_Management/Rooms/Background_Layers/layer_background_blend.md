---
title: "layer_background_blend"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_blend.htm"
converted: "2025-09-14T03:59:35.267Z"
---

# layer\_background\_blend

This function controls the blending (or "tinting") of the background sprite and the default value is -1 (which represents the constant c\_white, which can also be used). Any other value (including internal colour constants like c\_red, or c\_aqua) will blend the specified colour with the original sprite. You give the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the blending colour to use. Below you can see an example of a sprite that has been blended with different colours:

![Colour blend example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Rooms/blend_image.png)Please note that you should try to limit blending on the **HTML5** platform (unless using WebGL), as each blended sprite has to be cached separately and so having many blended sprites may adversely affect performance (you can also set the cache size using the function [sprite\_set\_cache\_size()](../../Sprites/Sprite_Manipulation/sprite_set_cache_size.md)).

#### Syntax:

layer\_background\_blend(background\_element\_id, blend);

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| blend | Colour | The colour to blend with the background sprite (default is c_white) |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Background\_sky");
var back\_id = layer\_background\_get\_id(lay\_id);
layer\_background\_blend(back\_id, c\_aqua);

The above code gets the ID value of the background assigned to the layer "Background\_sky" and then tints it to a colour.