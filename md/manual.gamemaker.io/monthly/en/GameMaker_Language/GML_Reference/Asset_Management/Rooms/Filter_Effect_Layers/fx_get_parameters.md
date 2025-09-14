---
title: "fx_get_parameters"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_get_parameters.htm"
converted: "2025-09-14T03:59:35.775Z"
---

# fx\_get\_parameters

This function is used to retrieve a [struct](../../../../GML_Overview/Structs.md) containing all the parameters for the given FX struct. You specify an FX struct (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_get_fx.md)) and this function returns a struct containing variables for all parameters applicable to that filter/effect. Parameters that use vectors (i.e. groups of values) will be present as arrays.

You can get the names of all parameters in a separate array by calling [fx\_get\_parameter\_names()](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_get_parameter_names.md), or find them on this page: [FX Types & Parameters](../../../../../The_Asset_Editors/Room_Properties/FX/All_Filter_Effect_Types.md).

Changing values in this struct will not apply those changes to the filter/effect; you will need to call [fx\_set\_parameters()](fx_set_parameters.md) to apply the modified struct back to the filter/effect for any changes to take effect.

#### Syntax:

fx\_get\_parameters(filter\_or\_effect);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct for which the parameters will be returned |

#### Returns:

[Struct](../../../../GML_Overview/Structs.md) (or -1 on failure)

#### Example:

var \_fx\_struct = layer\_get\_fx("TintEffect");

if (\_fx\_struct != -1)
{
    var \_params = fx\_get\_parameters(\_fx\_struct);
    var \_osc = sin(current\_time / 1000);
    \_params.g\_TintCol = \[\_osc, 0.3 + \_osc, 0.6 + \_osc, 1\];

    fx\_set\_parameters(\_fx\_struct, \_params);
}

The above code gets the FX struct for a layer that is assumed to have the "Colour Tint" filter applied to it, and retrieves its parameter struct by calling fx\_get\_parameters(). After that it creates an oscillating value by using [sin()](../../../Maths_And_Numbers/Angles_And_Distance/sin.md) and [current\_time](../../../Maths_And_Numbers/Date_And_Time/current_time.md), which is then used for the RGBA values for the tint effect so it keeps animating. The RGBA array is assigned to the g\_TintCol variable in the parameter struct, and the struct is then applied back to the FX struct by calling [fx\_set\_parameters()](fx_set_parameter.md).