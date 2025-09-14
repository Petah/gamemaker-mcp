---
title: "layer_sprite_blend"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_blend.htm"
converted: "2025-09-14T03:59:37.147Z"
---

# layer\_sprite\_blend

This function controls the blending (or "tinting") of the sprite sprite and the default value is -1 (which represents the constant c\_white, which can also be used). Any other value (including internal colour constants like c\_red, or c\_aqua) will blend the specified colour with the original sprite. You give the sprite element ID (which you get when you create a sprite element using [layer\_sprite\_create()](layer_sprite_create.md) or when you use the function [layer\_sprite\_get\_id()](layer_sprite_get_id.md)), and then set the blending colour to use. Below you can see an example of a sprite that has been blended with different colours:

![Colour blended sprites example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Rooms/blend_image.png)Please note that you should try to limit blending on the **HTML5** platform (unless using WebGL), as each blended sprite has to be cached separately and so having many blended sprites may adversely affect performance (you can also set the cache size using the function [sprite\_set\_cache\_size()](../../Sprites/Sprite_Manipulation/sprite_set_cache_size.md)).

#### Syntax:

layer\_sprite\_blend(sprite\_element\_id, blend);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_element_id | Sprite Element ID | The unique ID value of the sprite element to change |
| blend | Colour | The colour to blend with the sprite sprite (default is c_white) |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Asset\_sky");
var spr\_id = layer\_sprite\_get\_id(lay\_id, "Clouds");
layer\_sprite\_blend(spr\_id, c\_gray);

The above code gets the ID value of the sprite called "Clouds" assigned to the layer "Asset\_sky" and then tints it to a colour.