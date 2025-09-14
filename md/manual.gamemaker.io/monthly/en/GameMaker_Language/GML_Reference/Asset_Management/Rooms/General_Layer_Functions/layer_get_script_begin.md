---
title: "layer_get_script_begin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_script_begin.htm"
converted: "2025-09-14T03:59:36.210Z"
---

# layer\_get\_script\_begin

This function returns the function assigned to run at the start of rendering the given layer, or it will return an invalid handle (-1) if no function is assigned.

You supply the layer handle (which you get when you create the layer using [layer\_create](layer_create.md)) or the layer name (as a string - this will have a performance impact) and this function will return the function assigned to run at the beginning of rendering for that layer, or it will return an invalid handle (-1) if no function is assigned.

You can assign script functions to a layer with [layer\_script\_begin](layer_script_begin.md) and [layer\_script\_end](layer_script_end.md).

#### Syntax:

layer\_get\_script\_begin(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The layer to target (or the layer name as a string) |

#### Returns:

[Script Function](../../../../GML_Overview/Script_Functions.md) or [Method](../../../../GML_Overview/Method_Variables.md)

#### Example:

if (layer\_get\_script\_begin(layer) == -1)
{
    layer\_script\_begin(layer, scr\_SetShaderValues);
}

The above code will check to see if the layer that the instance running the code has a script function assigned to it and if it doesn't one is assigned.