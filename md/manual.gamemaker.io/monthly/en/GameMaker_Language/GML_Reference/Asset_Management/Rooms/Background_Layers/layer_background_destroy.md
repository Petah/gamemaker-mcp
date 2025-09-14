---
title: "layer_background_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_destroy.htm"
converted: "2025-09-14T03:59:35.306Z"
---

# layer\_background\_destroy

This function will destroy the given background element. You supply the background ID (which you get when you create the background using [layer\_background\_create()](layer_background_create.md) or when you use the layer handle along with [layer\_get\_background\_id()](layer_background_get_id.md)) and this will remove it. Note that this does _not_ remove the layer, only the background from it, and if the background is one that has been added in the room editor, then the next time you leave the room and then return, the background will be recreated again. However if the room is persistent, the background will be removed unless room persistence is switched off again.

#### Syntax:

layer\_background\_destroy(background\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to be destroyed |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Background\_trees");
var bck\_id = layer\_background\_get\_id("Forrest");

if (layer\_background\_exists(lay\_id, bck\_id))
{
    layer\_background\_destroy(bck\_id);
}

The above code checks the layer "Background\_trees" to see if the given background element exists and if it does, then it is destroyed (but not the layer).