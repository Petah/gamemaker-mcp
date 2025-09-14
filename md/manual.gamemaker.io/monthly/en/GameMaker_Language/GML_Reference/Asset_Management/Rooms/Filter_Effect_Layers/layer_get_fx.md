---
title: "layer_get_fx"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_get_fx.htm"
converted: "2025-09-14T03:59:35.903Z"
---

# layer\_get\_fx

This function is used to retrieve the FX struct for a layer. You specify either the ID or the name of the layer you want to target and the function will return a struct containing information on its applied effect. This struct will be similar to the struct you get from [fx\_create()](fx_create.md), and the functions [fx\_get\_parameter](fx_get_parameter.md)/[s](fx_get_parameters.md) and [fx\_set\_parameter](fx_set_parameter.md)/[s](fx_set_parameters.md) can be used on it to read and modify its parameters.

If the specified layer has no filters/effects applied to it, the function will return -1.

#### Syntax:

layer\_get\_fx(layer\_name\_or\_id);

| Argument | Type | Description |
| --- | --- | --- |
| layer_name_or_id | String or Layer | The name or ID of the layer to read |

#### Returns:

[FX Struct](fx_create.md) (or -1 if not found)

#### Example:

var layers = layer\_get\_all();
for(var i = 0; i < array\_length(layers); i ++)
{
    var layer\_fx = layer\_get\_fx(layers\[i\]);

    if (layer\_fx != -1)
    {
        if (fx\_get\_name(layer\_fx) == "\_filter\_tintfilter")
        {
            fx\_set\_parameter(layer\_fx, "g\_TintCol", \[0, 0, 1, 1\]);
        }
    }
}

The above code runs a [for](../../../../../../../../GameMaker_Language/GML_Overview/Language_Features/for.md) loop through all the layers present in the room, and checks each layer for an FX struct. If a layer has an FX struct, it checks the name of that filter/effect by calling [fx\_get\_name()](fx_get_name.md) on it; if it's equal to "\_filter\_tintfilter" meaning that it's a "Colour Tint" filter, it changes its tint colour to blue.