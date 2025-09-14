---
title: "layer_set_fx"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_set_fx.htm"
converted: "2025-09-14T03:59:35.917Z"
---

# layer\_set\_fx

This function is used to assign an FX struct to a Room Layer. You specify either the ID or the name of the layer you want to modify, and then an FX struct (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_get_fx.md)) which will be applied to the specified layer, making the effect visible in the room.

If you specify a layer that is not a Filter/Effect Layer but is of another type (such as an Instance Layer, Asset Layer, Tile Layer, etc.) then the effect will be applied to the contents of that layer as well as to any layers below it.

If the specified layer already has an FX struct assigned to it, it will be replaced by the new one.

NOTE Calling this function at the root level of a script will do nothing, as scripts are executed before the first room loads. You can set a [target room](../General_Layer_Functions/layer_set_target_room.md) first and then call this function.

#### Syntax:

layer\_set\_fx(layer\_name\_or\_id, filter\_or\_effect);

| Argument | Type | Description |
| --- | --- | --- |
| layer_name_or_id | String or Layer | The name or ID of the layer to modify |
| filter_or_effect | FX Struct | The FX struct to apply to the layer |

#### Returns:

N/A

#### Example:

var \_fx\_tint = fx\_create("\_filter\_tintfilter");
fx\_set\_parameter(\_fx\_tint, "g\_TintCol", \[1, 0, 0, 1\]);
layer\_set\_fx("EffectLayer", \_fx\_tint);

The above code creates a new FX struct from the "\_filter\_tintfilter" effect, which is the "Colour Tint" filter found in the Room Editor. It assigns a value to its "g\_TintCol" parameter which is the colour of the tint, and as it's a vec4 internally, it takes an array containing four values (corresponding to its red, green, blue and alpha values). The FX struct for the tint is then applied to an FX layer.