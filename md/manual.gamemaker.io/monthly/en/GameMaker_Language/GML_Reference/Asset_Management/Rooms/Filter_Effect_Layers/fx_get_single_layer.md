---
title: "fx_get_single_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_get_single_layer.htm"
converted: "2025-09-14T03:59:35.788Z"
---

# fx\_get\_single\_layer

This function returns whether the supplied filter/effect is using Single Layer mode (true) or not (false). See [fx\_set\_single\_layer()](fx_set_single_layer.md) for information on Single Layer mode.

You specify an FX struct (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](layer_get_fx.md)) and the function returns a boolean that tells whether Single Layer mode is enabled or not for the FX.

#### Syntax:

fx\_get\_single\_layer(filter\_or\_effect);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct to read |

#### Returns:

[Boolean](../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_fx = layer\_get\_fx("Distort");

if (!fx\_get\_single\_layer(\_fx))
{
    fx\_set\_single\_layer(\_fx, true);
}

The above code gets the FX struct from a layer called "Distort" and checks if Single Layer mode is enabled on it. If it isn't, it enables Single Layer mode for that FX.