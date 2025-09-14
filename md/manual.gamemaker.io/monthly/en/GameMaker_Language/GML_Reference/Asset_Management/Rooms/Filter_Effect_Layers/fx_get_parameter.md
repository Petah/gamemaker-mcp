---
title: "fx_get_parameter"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_get_parameter.htm"
converted: "2025-09-14T03:59:35.741Z"
---

# fx\_get\_parameter

This function is used to retrieve the value of a parameter from an FX Struct. You specify the FX struct to read (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_get_fx.md)) and the name of the parameter as a string, and the function returns its current value. This may be a real value, or an array if the parameter is a vector (which is a group of values, such as a vec4 which stores an RGBA colour).

Find the parameter names for a filter/effect on this page: [FX Types & Parameters](../../../../../The_Asset_Editors/Room_Properties/FX/All_Filter_Effect_Types.md).

#### Syntax:

fx\_get\_parameter(filter\_or\_effect, parameter\_name);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct to get the parameter from |
| parameter_name | String | The name of the parameter to get the value of (as a string) |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) or [Array](../../../../GML_Overview/Arrays.md)

#### Example:

var \_fx\_struct = layer\_get\_fx("TintEffect");
var \_tint\_colour = fx\_get\_parameter(\_fx\_struct, "g\_TintCol");
show\_debug\_message("The currently active tint colour is: " + string(\_tint\_colour));

The above code retrieves the FX struct from a layer that is assumed to have the "Colour Tint" filter applied to it, and gets the value of its "g\_TintCol" parameter, which returns an array containing the 4 values for its tint colour (red, green, blue and alpha). It then prints that value to the output log.