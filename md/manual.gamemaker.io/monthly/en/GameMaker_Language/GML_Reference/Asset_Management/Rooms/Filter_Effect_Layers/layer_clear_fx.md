---
title: "layer_clear_fx"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/layer_clear_fx.htm"
converted: "2025-09-14T03:59:35.852Z"
---

# layer\_clear\_fx

This function is used to clear the FX struct that is applied to the specified layer. You specify either the ID or the name of the layer you want to modify and this function will remove the FX struct that is applied to that layer, disabling its effects completely.

If you use this function to temporarily disable an effect and need to restore it layer, you should first save the FX struct for the layer by calling [layer\_get\_fx()](layer_get_fx.md) and then call this function to clear it on the layer. You can later apply it back to the layer by calling [layer\_set\_fx()](layer_set_fx.md), which will re-enable the effect.

#### Syntax:

layer\_clear\_fx(layer\_name\_or\_id);

| Argument | Type | Description |
| --- | --- | --- |
| layer_name_or_id | String or Layer | The name or ID of the layer to clear the FX for |

#### Returns:

N/A

#### Example:

// Disable effect
if (keyboard\_check\_pressed(ord("E")))
{
    if (layer\_get\_fx("EffectLayer") != -1)
    {
        temp\_fx = layer\_get\_fx("EffectLayer");
        layer\_clear\_fx("EffectLayer");
    }
}
// Re-enable effect
else if (keyboard\_check\_pressed(ord("F")))
{
    if (temp\_fx != -1)
    {
        layer\_set\_fx("EffectLayer", temp\_fx);
        temp\_fx = -1;
    }
}

The above code checks if the "E" key is pressed, and then checks if the layer "EffectLayer" has a filter/effect applied to it; in that case it stores its FX struct in a temporary instance variable and clears the layer of any filters/effects. When the "F" key is pressed, it checks if the temporary variable holds something other than -1, and in that case it applies that FX back to the layer and resets the temporary variable to -1. All of this essentially allows you to enable and disable an effect whenever you need without losing its parameters.