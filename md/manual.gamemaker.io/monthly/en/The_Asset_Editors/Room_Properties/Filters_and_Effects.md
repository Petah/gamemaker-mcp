---
title: "Filters and Effects"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Room_Properties/Filters_and_Effects.htm"
converted: "2025-09-14T04:00:16.225Z"
---

# Filters and Effects

## Filter/Effect Layers

In the Room Editor, you can add a new Filter/Effect layer by clicking on the ![](../../assets/Images/Icons/Icon_FX_Layer.png) button, which will add a new layer and open up its properties below:

![](../../assets/Images/Asset_Editors/Editor_Room_LayerFilterProperties.png)

A Filter/Effect (or FX) layer is used to apply a visual filter or effect to some layers. You can select an effect from the "Effect Type" drop-down list, which will show you its parameters in the Layer Properties window allowing you to modify how it looks and behaves.

For example, selecting the "Screen Shake" effect will allow you to change its magnitude, shake speed and apply a sprite as its noise texture:

![](../../assets/Images/Asset_Editors/Editor_Room_LayerFilterParameters.png)Adding an FX layer will apply the selected effect to all other layers that are _below_ the FX layer, as demonstrated in this visual:

![](../../assets/Images/Asset_Editors/Editor_Room_LayerFilterEffectOrder.png)This means that all "affected" layers will have the selected filter applied to them (here, "Desaturate") as they are below an FX layer. Any layers above the FX layer will be unaffected. A layer may be affected by multiple effect layers that are present above it anywhere in the layer order.

To create filters/effects that are applied to only one layer, see: [Single-Layer FX](Filters_and_Effects.htm#h).

NOTE Modifying the [depth of a layer](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_depth.md) or [an instance](../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) at runtime may change which FX layers are applied on it, by either making its depth higher than an FX layer's depth (essentially going _under_ the FX layer and being affected) or making its depth lower than an FX layer's depth (going _above_ the FX layer and not being affected).

## Filter vs. Effect

A Filter only uses shaders and can be previewed in the Room Editor.

An Effect also has internal code for managing itself in addition to shaders. Due to this, they can't be previewed in the Room Editor, and only appear functional at runtime (in-game).

For example, "**Colourise**" is a Filter, where "**Windblown Particles**" is an Effect.

## Effect Types

All the Filters and Effects in the **"Effect Type"** drop-down list are documented on this page: [FX Types & Parameters](FX/All_Filter_Effect_Types.md).

## Limitations

There are some limitations to keep in mind when using filters/effects:

-   Filters/effects will not work when the [application surface is disabled](../../GameMaker_Language/GML_Reference/Drawing/Surfaces/application_surface_enable.md). It's enabled by default, and you shouldn't usually require disabling it, however you may do so to gain performance on mobile devices. In such cases you wouldn't be able to use filters/effects as they require the surface texture for shader manipulations.
-   Filters/effects that take a texture image, require that image to be on a separate texture page. You can set this through the [sprite editor](../Sprites.md).

## Single-Layer FX

While you can create an FX layer to apply a filter to multiple layers, you are also able to assign a filter to one specific layer only, through the [Inspector](../../IDE_Tools/The_Inspector.md).

Selecting a room layer will allow you to apply a filter/effect to it in the Inspector, and if that layer is a non-FX layer (e.g. Instance Layer, Asset Layer, etc.) then the effect will only be applied to that layer and not to any other layers below it.

![](../../assets/Images/IDE%20Tools/Inspector_Room_Layers.png)

You can also click on the ![](../../assets/Images/Icons/Icon_Eye.png) icon to enable/disable the FX for the selected layer.

IMPORTANT There are some filters/effects that can **only be applied to single layers** (such as "Blend") and will only appear for non-FX layers.

## Runtime Usage

You can add and control effects at runtime using the [Filter/Effect GML Functions](../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/Filter_Effect_Functions.md).

Please note that there are currently only two ways to ensure that GameMaker loads a particular filter/effect in your game:

-   By adding the filter/effect in **at least one room** through the IDE
-   By calling [fx\_create()](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_create.md) with the filter/effect name as a string literal

This means that to use a specific filter/effect at runtime, it must have either been added into a room first (so GameMaker knows you are going to use it) or specified explicitly in an [fx\_create()](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/fx_create.md) call.

Read [Filter and Effect Functions](../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/Filter_Effect_Functions.md) for more information.