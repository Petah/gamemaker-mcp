---
title: "fx_get_parameter_names"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_get_parameter_names.htm"
converted: "2025-09-14T03:59:35.761Z"
---

# fx\_get\_parameter\_names

This function is used to retrieve the names of all parameters present in a filter/effect. You specify the FX struct to read (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](layer_get_fx.md)) and the function returns an array containing the names of the filter's parameters as strings.

#### Syntax:

fx\_get\_parameter\_names(filter\_or\_effect);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct to get the parameter names of |

#### Returns:

[Array](../../../../../../../../GameMaker_Language/GML_Overview/Arrays.md) (of Strings)

#### Example:

var \_fx\_struct = layer\_get\_fx("EffectLayer");
var \_param\_names = fx\_get\_parameter\_names(\_fx\_struct);

for (var i = 0; i < array\_length(\_param\_names); i ++) {
    show\_debug\_message("Parameter " + string(i) + ": " + \_param\_names\[i\]);
}

The above code retrieves the FX struct for a layer and gets its parameter names in an array. It then runs a [for](../../../../../../../../GameMaker_Language/GML_Overview/Language_Features/for.md) loop on that array and prints each parameter to the output log.