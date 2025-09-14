---
title: "layer_fx_is_enabled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_fx_is_enabled.htm"
converted: "2025-09-14T03:59:35.881Z"
---

# layer\_fx\_is\_enabled

This function returns whether the filter/effect for a layer is enabled.

You specify either the ID or the name of the layer you want to target, and the function returns a boolean value indicating whether the layer's FX is enabled (true) or disabled (false).

#### Syntax:

layer\_fx\_is\_enabled(layer\_name\_or\_id);

| Argument | Type | Description |
| --- | --- | --- |
| layer_name_or_id | String or Layer | The name or ID of the layer to check |

#### Returns:

[Boolean](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

x = xstart;
y = ystart;
hp = hp\_max;

if (layer\_fx\_is\_enabled("DesaturateLayer"))
{
    layer\_enable\_fx("DesaturateLayer", false);
}

The above code "respawns" the instance, by moving it to its original position and refilling its HP. It then checks if the Desaturate FX layer is enabled, and if it is, disables it.