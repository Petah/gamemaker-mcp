---
title: "fx_set_parameters"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_set_parameters.htm"
converted: "2025-09-14T03:59:35.820Z"
---

# fx\_set\_parameters

This function is used to change the parameters of a filter/effect. You specify an FX struct (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_get_fx.md)) and a struct containing its parameters (as returned from [fx\_get\_parameters()](fx_get_parameters.md)). This will make your changes visible in the layer that the FX struct is assigned to.

Your parameter struct is not required to contain every parameter that is applicable to the filter/effect, and only the variables that are present in the given struct will be updated for the filter/effect.

#### Syntax:

fx\_set\_parameters(filter\_or\_effect, parameter\_struct);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct to modify |
| parameter_struct | Struct | A struct containing the parameters for the filter/effect |

#### Returns:

N/A

#### Example:

var \_fx\_struct = layer\_get\_fx("TintEffect");

if (\_fx\_struct != -1)
{
    var \_params = fx\_get\_parameters(\_fx\_struct);
    var \_osc = sin(current\_time / 1000);
    \_params.g\_TintCol = \[\_osc, 0.3 + \_osc, 0.6 + \_osc, 1\];

    fx\_set\_parameters(\_fx\_struct, \_params);
}

The above code gets the FX struct for a layer that is assumed to have the "Colour Tint" filter applied to it, and retrieves its parameter struct by calling [fx\_get\_parameters()](fx_get_parameters.md). After that it creates an oscillating value by using [sin()](../../../Maths_And_Numbers/Angles_And_Distance/sin.md) and [current\_time](../../../Maths_And_Numbers/Date_And_Time/current_time.md), which is then used for the RGBA values for the tint effect so it keeps animating. The RGBA array is assigned to the g\_TintCol variable in the parameter struct, and the struct is then applied back to the FX struct by calling fx\_set\_parameters().