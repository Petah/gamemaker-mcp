---
title: "Background Elements"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/Background_Layers.htm"
converted: "2025-09-14T03:59:35.239Z"
---

# Background Elements

The GameMaker [Room Editor](../../../../../The_Asset_Editors/Rooms.md) permits you to add backgrounds into any given room using _layers_. As the name implies, a background layer is simply a sprite asset that is being used as a background on a layer that's at a set depth within the room, and by stacking layers you can make some things draw over or under others. You can also control certain aspects of layers from code, adding or removing things, or changing certain properties of the layer or what it contains at run time. Below is a list of all the functions that can be used for editing [**background layers**](../../../../../The_Asset_Editors/Room_Properties/Layer_Properties.md):

-   [layer\_background\_get\_id](layer_background_get_id.md)
-   [layer\_background\_exists](layer_background_exists.md)
-   [layer\_background\_create](layer_background_create.md)
-   [layer\_background\_destroy](layer_background_destroy.md)
-   [layer\_background\_visible](layer_background_visible.md)
-   [layer\_background\_sprite](layer_background_sprite.md)
-   [layer\_background\_htiled](layer_background_htiled.md)
-   [layer\_background\_vtiled](layer_background_vtiled.md)
-   [layer\_background\_stretch](layer_background_stretch.md)
-   [layer\_background\_blend](layer_background_blend.md)
-   [layer\_background\_alpha](layer_background_alpha.md)
-   [layer\_background\_index](layer_background_index.md)
-   [layer\_background\_speed](layer_background_speed.md)
-   [layer\_background\_xscale](layer_background_xscale.md)
-   [layer\_background\_yscale](layer_background_yscale.md)
-   [layer\_background\_get\_visible](layer_background_get_visible.md)
-   [layer\_background\_get\_sprite](layer_background_get_sprite.md)
-   [layer\_background\_get\_htiled](layer_background_get_htiled.md)
-   [layer\_background\_get\_vtiled](layer_background_get_vtiled.md)
-   [layer\_background\_get\_stretch](layer_background_get_stretch.md)
-   [layer\_background\_get\_blend](layer_background_get_blend.md)
-   [layer\_background\_get\_alpha](layer_background_get_alpha.md)
-   [layer\_background\_get\_index](layer_background_get_index.md)
-   [layer\_background\_get\_speed](layer_background_get_speed.md)
-   [layer\_background\_get\_xscale](layer_background_get_xscale.md)
-   [layer\_background\_get\_yscale](layer_background_get_yscale.md)

Note that if you want to set the background position or the background horizontal or vertical scrolling speed then you need to use the following general layer functions:

-   [layer\_x](../General_Layer_Functions/layer_x.md)
-   [layer\_y](../General_Layer_Functions/layer_y.md)
-   [layer\_hspeed](../General_Layer_Functions/layer_hspeed.md)
-   [layer\_vspeed](../General_Layer_Functions/layer_vspeed.md)