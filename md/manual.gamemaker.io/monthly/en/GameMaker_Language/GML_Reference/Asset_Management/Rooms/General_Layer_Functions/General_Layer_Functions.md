---
title: "Layers"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/General_Layer_Functions.htm"
converted: "2025-09-14T03:59:35.941Z"
---

# Layers

Any assets that you add to rooms are placed on a layer. These assets can be tile maps (using tile sets), backgrounds, sprites or sequences, particle systems and instances. You can add and modify a room's layers in [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) or at runtime through code.

Layers are useful for a few reasons:

-   they logically group assets.
-   they affect how these assets on the layer are drawn:
    -   at an offset (x, y) and moving with a certain speed.
    -   at a certain depth, the [layer\_depth](layer_depth.md).
    -   using custom code ([layer\_script\_begin](layer_script_begin.md) and [layer\_script\_end](layer_script_end.md)) and shader ([layer\_shader](layer_shader.md)).

You can get all layers in the current room using [layer\_get\_all](layer_get_all.md) or a single layer based on the name you gave it in the Room Editor using [layer\_get\_id](layer_get_id.md).

NOTE Unlike the Room Editor, you are _not_ limited to only certain asset types per layer, and can add assets of different types to the same layer - for example you can have a background, a tile map and an instance all on the same layer.

### Layer Elements

Each asset that you add to a layer is considered an **element** of that layer.

When you use [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) to add assets to a room, a new element is added to that layer every time you drag an asset onto the editor canvas. There are two exceptions to this: in case of tiles the element that's added is a [tile map](../Tile_Map_Layers/Tile_Map_Layers.md), rather than the individual tiles that you place and also, no element is added for [Paths](../../Paths/Paths.md).

To get all elements on a layer you can use the function [layer\_get\_all\_elements](layer_get_all_elements.md).

To get the underlying asset type of an element, you can use the function [layer\_get\_element\_type](layer_get_element_type.md).

## Function Reference

### General

This section outlines the general functions used when working with room layers, as well as a few functions specific to working with **[instance layer](../../../../../The_Asset_Editors/Room_Properties/Layer_Properties.md)** elements:

-   [layer\_exists](layer_exists.md)
-   [layer\_get\_id](layer_get_id.md)
-   [layer\_get\_depth](layer_get_depth.md)
-   [layer\_get\_type](layer_get_type.md)
-   [layer\_get\_id\_at\_depth](layer_get_id_at_depth.md)
-   [layer\_get\_name](layer_get_name.md)
-   [layer\_get\_all](layer_get_all.md)
-   [layer\_get\_all\_elements](layer_get_all_elements.md)
-   [layer\_get\_element\_layer](layer_get_element_layer.md)
-   [layer\_get\_element\_type](layer_get_element_type.md)
-   [layer\_get\_x](layer_get_x.md)
-   [layer\_get\_y](layer_get_y.md)
-   [layer\_get\_hspeed](layer_get_hspeed.md)
-   [layer\_get\_vspeed](layer_get_vspeed.md)
-   [layer\_create](layer_create.md)
-   [layer\_destroy](layer_destroy.md)
-   [layer\_x](layer_x.md)
-   [layer\_y](layer_y.md)
-   [layer\_hspeed](layer_hspeed.md)
-   [layer\_vspeed](layer_vspeed.md)
-   [layer\_add\_instance](layer_add_instance.md)
-   [layer\_has\_instance](layer_has_instance.md)
-   [layer\_instance\_get\_instance](layer_instance_get_instance.md)
-   [layer\_destroy\_instances](layer_destroy_instances.md)
-   [layer\_element\_move](layer_element_move.md)
-   [layer\_set\_visible](layer_set_visible.md)
-   [layer\_get\_visible](layer_get_visible.md)
-   [layer\_depth](layer_depth.md)
-   [layer\_force\_draw\_depth](layer_force_draw_depth.md)
-   [layer\_is\_draw\_depth\_forced](layer_is_draw_depth_forced.md)
-   [layer\_get\_forced\_depth](layer_get_forced_depth.md)
-   [layer\_script\_begin](layer_script_begin.md)
-   [layer\_script\_end](layer_script_end.md)
-   [layer\_shader](layer_shader.md)
-   [layer\_get\_script\_begin](layer_get_script_begin.md)
-   [layer\_get\_script\_end](layer_get_script_end.md)
-   [layer\_get\_shader](layer_get_shader.md)

### Targeting Layers in a Different Room

We also have a couple of extra functions relating to targeting layers in a different room. It may be that you want to change something in a room that is not the current room, or maybe you want to generate rooms procedurally, or any number of things. To enable this we use the following functions:

-   [layer\_set\_target\_room](layer_set_target_room.md)
-   [layer\_get\_target\_room](layer_get_target_room.md)
-   [layer\_reset\_target\_room](layer_reset_target_room.md)

What you do here is set the target room using the appropriate function and then call the layer functions are normal. These layer functions will now apply _only_ to the target room and not the current one. When you are finished you'd call the reset function to return the code scope back to the current room again.

### Activate/Deactivate Instances on Layers

WARNING While targeting another room, you can use all the regular layer functions, **except** you cannot create instances using [instance\_create\_layer](../../Instances/instance_create_layer.md) or [instance\_create\_depth](../../Instances/instance_create_depth.md), nor will the layer function [layer\_add\_instance](layer_add_instance.md) be available.

Exclusively for use with _instances_ on layers (although the layer itself can have other elements, they will not be affected by the following functions) you have a couple of functions that can be used to deactivate or reactivate all instances:

-   [instance\_deactivate\_layer](../../Instances/Deactivating_Instances/instance_deactivate_layer.md)
-   [instance\_activate\_layer](../../Instances/Deactivating_Instances/instance_activate_layer.md)

### Particle Systems

There are no functions to get access to particle systems on a layer, but you can create them on a specific layer using the function:

-   [part\_system\_create\_layer](../../../Drawing/Particles/Particle_Systems/part_system_create_layer.md)