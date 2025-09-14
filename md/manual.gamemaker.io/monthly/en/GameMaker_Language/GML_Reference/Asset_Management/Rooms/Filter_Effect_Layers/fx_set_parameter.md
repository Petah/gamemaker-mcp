---
title: "fx_set_parameter"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_set_parameter.htm"
converted: "2025-09-14T03:59:35.806Z"
---

# fx\_set\_parameter

This function is used to change the value of a parameter in the given FX struct. You specify an FX struct (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_get_fx.md)), a parameter name as a string, and its new value. This will make your changes visible in the layer that the FX struct is assigned to.

You are able to pass in multiple arguments for the parameter in case it is a vector, however you can also simply specify an array as your only argument which would contain your multiple values.

Find the parameter names for a filter/effect on this page: [FX Types & Parameters](../../../../../The_Asset_Editors/Room_Properties/FX/All_Filter_Effect_Types.md).

#### Syntax:

fx\_set\_parameter(filter\_or\_effect, parameter\_name, val, ...);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct to modify |
| parameter_name | String | The name of the parameter to change the value of (as a string) |
| val... | Real or Array | The new value(s) for that parameter as a real or array |

#### Returns:

N/A

#### Example:

var \_fx\_tint = fx\_create("\_filter\_tintfilter");
fx\_set\_parameter(\_fx\_tint, "g\_TintCol", \[1, 0, 0, 1\]);
layer\_set\_fx("EffectLayer", \_fx\_tint);

The above code creates a new FX struct from the "\_filter\_tintfilter" effect, which is the "Colour Tint" filter found in the Room Editor. It assigns a value to its "g\_TintCol" parameter which is the colour of the tint, and as it's a vec4 internally, it takes an array containing four values (corresponding to its red, green, blue and alpha values). The FX struct for the tint is then applied to an FX layer.

Note that you are also able to pass values to the vector as separate arguments instead of an array:

fx\_set\_parameter(\_fx\_tint, "g\_TintCol", 1, 0, 0, 1);