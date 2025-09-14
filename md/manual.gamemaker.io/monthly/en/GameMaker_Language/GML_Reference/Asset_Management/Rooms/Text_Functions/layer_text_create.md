---
title: "layer_text_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_create.htm"
converted: "2025-09-14T03:59:37.555Z"
---

# layer\_text\_create

This function creates a new Text Element in a room layer, and returns its element ID.

The function will return -1 if the given layer does not exist.

#### Syntax:

layer\_text\_create(layer\_name\_or\_id, x, y, font, text);

| Argument | Type | Description |
| --- | --- | --- |
| layer_name_or_id | String or Layer | The layer where you want to create the element. You can supply the layer name as a string, or the layer ID returned from a function like layer_get_id or layer_create. |
| x | Real | The X position in the room where the text element should be created. Note that the actual X position where the text appears will be negatively offset by its xorigin value. |
| y | Real | The Y position in the room where the text element should be created. Note that the actual Y position where the text appears will be negatively offset by its yorigin value. |
| font | Font Asset | The font asset to use for rendering the text. |
| text | String | The actual text string that appears on this element. |

#### Returns:

[Text Element ID](layer_text_get_id.md)

#### Example:

text = layer\_text\_create("Assets", x, y, Font1, "Place the key here.");

This creates a new Text Element in the Assets layer, at the instance's position, using the Font1 font asset.