---
title: "fx_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_get_name.htm"
converted: "2025-09-14T03:59:35.728Z"
---

# fx\_get\_name

This function is used to retrieve the name of a filter/effect from its struct. You specify the FX struct to read (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](layer_get_fx.md)) and the function returns its name as a string. This name can then be passed into [fx\_create()](fx_create.md) to create a new FX struct using the same filter/effect type.

#### Syntax:

fx\_get\_name(filter\_or\_effect);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct to get the name of |

#### Returns:

[String](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var layers = layer\_get\_all();
for(var i = 0; i < array\_length(layers); i ++)
{
    var layer\_fx = layer\_get\_fx(layers\[i\]);

    if (layer\_fx != -1)
    {
        if (fx\_get\_name(layer\_fx) == "\_filter\_tintfilter")
        {
            fx\_set\_parameter(\_fx\_tint, "g\_TintCol", \[0, 0, 1, 1\]);
        }
    }
}

The above code runs a [for](../../../../../../../../GameMaker_Language/GML_Overview/Language_Features/for.md) loop through all the layers present in the room, and checks each layer for an FX struct. If a layer has an FX struct, it checks the name of that filter/effect by calling fx\_get\_name() on it; if it's equal to "\_filter\_tintfilter" meaning that it's a "Colour Tint" filter, it changes its tint colour to blue.