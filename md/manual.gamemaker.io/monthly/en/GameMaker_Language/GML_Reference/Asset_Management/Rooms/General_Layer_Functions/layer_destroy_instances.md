---
title: "layer_destroy_instances"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_destroy_instances.htm"
converted: "2025-09-14T03:59:36.012Z"
---

# layer\_destroy\_instances

This function can be used to destroy all the instances assigned to the given layer. You supply the layer handle (which you get when you create the layer using [layer\_create()](layer_create.md)) or the layer name (as a string - this will have a performance impact), and then all instances that are on the layer will be removed from the game, triggering their **Destroy** and **Clean Up** events.

#### Syntax:

layer\_destroy\_instances(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer (or the layer name as a string) |

#### Returns:

N/A

#### Example:

if (global.game\_over)
{
    layer\_destroy\_instances(layer);
}

The above code will check a global variable and if it's true then all instances that are on the layer of the calling instance will be destroyed (including the calling instance).