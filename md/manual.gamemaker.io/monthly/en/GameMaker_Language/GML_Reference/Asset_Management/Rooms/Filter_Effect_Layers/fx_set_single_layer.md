---
title: "fx_set_single_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_set_single_layer.htm"
converted: "2025-09-14T03:59:35.835Z"
---

# fx\_set\_single\_layer

This function is used to enable or disable "Single Layer" mode for a filter/effect. By default, a filter/effect is applied to the layer that it is [assigned to](layer_set_fx.md) and all layers below that layer, however you can enable Single Layer mode on an FX struct to make sure that it's only applied to the layer that it is assigned to.

You specify an FX struct (as returned from [fx\_create()](fx_create.md) or [layer\_get\_fx()](layer_get_fx.md)) and a boolean value to enable (true) or disable (false) Single Layer mode.

The following visual shows a filter being used with Single Layer mode disabled (which is the default behaviour for all FX layers) and the same filter with Single Layer mode enabled:

![Fire Jump man is woozy with the universe](../../../../../assets/Images/Scripting_Reference/GML/Reference/Rooms/FX_single_layer_off.png "Fire Jump man is woozy with the universe")

Single Layer Mode OFF

![Fire Jump man is woozy... alone](../../../../../assets/Images/Scripting_Reference/GML/Reference/Rooms/FX_single_layer_on.png "Fire Jump man is woozy... alone")

Single Layer Mode ON

NOTE When you enable Single Layer mode for an FX, make sure that you apply it to a layer that is not an [FX layer](../../../../../../../../The_Asset_Editors/Room_Properties/Filters_and_Effects.md), because an FX layer by itself contains nothing and so no filter/effect will be visible.

#### Syntax:

fx\_set\_single\_layer(filter\_or\_effect, enable);

| Argument | Type | Description |
| --- | --- | --- |
| filter_or_effect | FX Struct | The FX struct to modify |
| enable | Boolean | A boolean value to enable (true) or disable (false) Single Layer Mode |

#### Returns:

N/A

#### Example:

shake\_fx = fx\_create("\_filter\_screenshake");
fx\_set\_single\_layer(shake\_fx, true);
layer\_set\_fx("ShakeyThings", shake\_fx);

The above code creates a new screenshake FX, enables Single Layer mode on it and then applies it to a room layer. This means that the screenshake filter will only be applied to the "ShakeyThings" layer.