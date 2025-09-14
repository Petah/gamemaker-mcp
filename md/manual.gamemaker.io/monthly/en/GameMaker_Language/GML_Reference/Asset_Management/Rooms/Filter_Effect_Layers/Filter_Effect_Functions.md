---
title: "Filter and Effect Functions"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/Filter_Effect_Functions.htm"
converted: "2025-09-14T03:59:35.692Z"
---

# Filter and Effect Functions

## Overview

There are various GML functions that can be used to create, modify and remove filters/effects from layers within a room, allowing you to easily manage effects in real-time to create realistic and dynamic filters/effects.

Please note that there are currently only two ways to ensure that GameMaker loads a particular filter/effect in your game:

-   By adding the filter/effect in **at least one room** through the IDE
-   By calling [fx\_create()](fx_create.md) with the filter/effect name as a string literal

This means that to use a specific filter/effect at runtime, it must have either been added into a room first (so GameMaker knows you are going to use it) or specified explicitly in an [fx\_create()](fx_create.md) call.

The latter method (of specifying the filter/effect in your code) only works with string literals directly specified in the function argument, which means that if you use a variable or any logic to come up with the filter/effect name string, then the asset compiler will not detect that and the filter/effect will not be loaded.

Consider the following examples:

// This will work on its own
var \_fxshake = fx\_create("\_filter\_screenshake");

// This will NOT work on its own
var \_myfilters = { screenshake: "\_screenshake" }
var \_filter\_to\_use = "\_filter" + \_myfilters.screenshake;
var \_fxshake = fx\_create(\_filter\_to\_use);

To ensure that the latter method works, you can simply add the filter to at least one room in your project, or ensure that [fx\_create()](fx_create.md) is called anywhere in your project with the filter name as a string constant (and not a variable).

## Limitations

There are some limitations to keep in mind when using filters/effects:

-   Filters/effects will not work when the [application surface is disabled](../../../Drawing/Surfaces/application_surface_enable.md). It's enabled by default, and you shouldn't usually require disabling it, however you may do so to gain performance on mobile devices. In such cases you wouldn't be able to use filters/effects as they require the surface texture for shader manipulations.
-   Filters/effects that take a texture image, require that image to be on a separate texture page. You can set this through the [sprite editor](../../../../../../../../The_Asset_Editors/Sprites.md).

## Function List

The following functions are used to create and manage "FX Structs" containing effect data:

-   [fx\_create](fx_create.md)
-   [fx\_get\_parameter](fx_get_parameter.md)
-   [fx\_get\_parameters](fx_get_parameters.md)
-   [fx\_get\_name](fx_get_name.md)
-   [fx\_get\_parameter\_names](fx_get_parameter_names.md)
-   [fx\_get\_single\_layer](fx_get_single_layer.md)
-   [fx\_set\_parameter](fx_set_parameter.md)
-   [fx\_set\_parameters](fx_set_parameters.md)
-   [fx\_set\_single\_layer](fx_set_single_layer.md)

The following functions are used for modifying layers that may contain Filters/Effects by making use of FX Structs:

-   [layer\_set\_fx](layer_set_fx.md)
-   [layer\_get\_fx](layer_get_fx.md)
-   [layer\_clear\_fx](layer_clear_fx.md)
-   [layer\_enable\_fx](layer_enable_fx.md)
-   [layer\_fx\_is\_enabled](layer_fx_is_enabled.md)

## Modify FX At Runtime

You can modify filters/effects at runtime by doing the following:

-   **Retrieve the FX struct** from the layer you want to modify by calling [layer\_get\_fx()](layer_get_fx.md)
    -   _Or, create a new FX struct by calling [fx\_create()](fx_create.md) and apply it to a layer using [layer\_set\_fx()](layer_set_fx.md)_
-   **Retrieve its parameter struct** by calling [fx\_get\_parameters()](fx_get_parameters.md)
-   **Modify the parameters** as required by assigning values to the struct variables
    -   _Get the parameter names from here: [FX Types & Parameters](../../../../../../../../The_Asset_Editors/Room_Properties/FX/All_Filter_Effect_Types.md)_
-   **Apply the modified struct** back to the FX struct by calling [fx\_set\_parameters()](fx_set_parameters.md)
    -   _You do not need to call [layer\_set\_fx()](layer_set_fx.md) here as modifying the FX struct directly affects the layer it is already assigned to_

Here is example code for the workflow mentioned above:

Create Event

// Store the FX struct, and its parameters struct, in variables
pixelate\_fx = layer\_get\_fx("Effect\_1");
pixelate\_fx\_params = fx\_get\_parameters(pixelate\_fx);

Step Event

// Change param as variable
pixelate\_fx\_params.g\_CellSize = round((mouse\_x / room\_width) \* 64);

// Or, change param as string
pixelate\_fx\_params\[$ "g\_CellSize"\] = round((mouse\_x / room\_width) \* 64);

// Apply updated parameters struct to the FX struct
fx\_set\_parameters(pixelate\_fx, pixelate\_fx\_params);

## FX Runtime Parameters

The [FX Types & Parameters](../../../../../../../../The_Asset_Editors/Room_Properties/FX/All_Filter_Effect_Types.md) page lists all Filters/Effects along with their **Runtime Parameters**.

You can use the Runtime parameter names in the following three ways (using the parameter "g\_CellSize" as an example):

-   Modify a parameter in an FX struct by calling [fx\_set\_parameter()](fx_set_parameter.md): fx\_set\_parameter(fx\_struct, **"g\_CellSize"**, 8);
-   Modify a variable in a parameter struct: params\_struct.**g\_CellSize** = 8;
    -   NOTE _Make sure to get the parameter struct first by calling [fx\_get\_parameters()](fx_get_parameters.md)._
-   Modify a variable in a parameter struct using the $ accessor and a string: params\_struct\[$ **"g\_CellSize"**\] = 8;

## Single Layer Mode

By default, a filter/effect is applied to the layer that it is [assigned to](layer_set_fx.md) and all layers below that layer, however you can use [fx\_set\_single\_layer()](fx_set_single_layer.md) to enable **Single Layer** mode for a filter/effect to make sure that it's only applied to the layer that it is assigned to.

The following visual shows a filter being applied to multiple layers (which is the default behaviour for all FX layers), and then the same filter with Single Layer mode enabled and applied to a non-FX layer:

![Fire Jump man is woozy with the universe](../../../../../assets/Images/Scripting_Reference/GML/Reference/Rooms/FX_single_layer_off.png "Fire Jump man is woozy with the universe")

Single Layer Mode OFF

![Fire Jump man is woozy... alone](../../../../../assets/Images/Scripting_Reference/GML/Reference/Rooms/FX_single_layer_on.png "Fire Jump man is woozy... alone")

Single Layer Mode ON

You can also make use of Single-Layer effects in the Room Editor by using the [Inspector](../../../../../../../../IDE_Tools/The_Inspector.md).