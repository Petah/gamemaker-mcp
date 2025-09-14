---
title: "Rooms"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Rooms.htm"
converted: "2025-09-14T03:59:36.544Z"
---

# Rooms

Rooms are where everything happens in your game. You create them in the [IDE](../../../../The_IDE/The_IDE.md "GameMaker IDE") using [The Room Editor](../../../../The_Asset_Editors/Rooms.md) or at runtime using the functions under [Modifying Rooms](Rooms.htm#modifying_rooms "functions for Modifying Rooms").

Any GameMaker game must have at least one room in it for it to run, but you may need many more depending on the type of game and how you structure your project. By default, a new GameMaker project has a single room added to it.

This section has all the general GML functions and variables related to rooms, for getting information about them as well as for setting certain properties within them.

## Function Reference

### Global

The following [global variables](../../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md) and functions can be used for getting basic information about any given room:

-   [room\_first](room_first.md)
-   [room\_last](room_last.md)
-   [room\_next](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_next.md)
-   [room\_previous](room_previous.md)
-   [room](room.md)
-   [room\_speed](room_speed.md) DEPRECATED
-   [room\_height](room_height.md)
-   [room\_width](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_width.md)
-   [room\_persistent](room_persistent.md)

NOTE The variables listed above will not be valid in a script, as scripts are executed before the first room is loaded.

This only applies to code written at the root of a script, but not to functions created inside scripts, as those functions can be executed at any time during the game.

### Information

You can also use the following functions to find out if a room exists, get its name (as defined in [The Asset Browser](../../../../Introduction/The_Asset_Browser.md)) and general info:

-   [room\_exists](room_exists.md)
-   [room\_get\_name](room_get_name.md)
-   [room\_get\_info](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_get_info.md)

### Switching Rooms

-   [room\_goto](room_goto.md)
-   [room\_goto\_next](room_goto_next.md)
-   [room\_goto\_previous](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_goto_previous.md)
-   [room\_restart](room_restart.md)

### Modifying Rooms

NOTE These functions should _never be run from within the room that you wish to change_, but rather be run from an instance in another room first.

NOTE If you change any room asset in this way, the change is **permanent** and will be maintained for the entire duration of the game, even if you call the [room\_restart](room_restart.md) function (closing and restarting the game will reset the room properties though).

-   [room\_add](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_add.md)
-   [room\_duplicate](room_duplicate.md)
-   [room\_assign](room_assign.md)
-   [room\_instance\_add](room_instance_add.md)
-   [room\_instance\_clear](room_instance_clear.md)
-   [room\_set\_height](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_set_height.md)
-   [room\_set\_width](room_set_width.md)
-   [room\_set\_persistent](room_set_persistent.md)
-   [room\_set\_view\_enabled](room_set_view_enabled.md)
-   [room\_set\_viewport](room_set_viewport.md)
-   [room\_get\_viewport](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_get_viewport.md)
-   [room\_set\_camera](room_set_camera.md)
-   [room\_get\_camera](room_get_camera.md)

### Layers and Elements

-   [Layers](General_Layer_Functions/General_Layer_Functions.md)
-   [Tile Map Elements](Tile_Map_Layers/Tile_Map_Layers.md)
-   [Background Elements](Background_Layers/Background_Layers.md)
-   [Sprite Elements](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/Sprite_Layers.md)
-   [Sequence Elements](Sequence_Layers/Sequence_Layers.md)
-   [Text Elements](Text_Functions/Text_Elements.md)
-   [UI Layers](UI_Layers/layer_get_flexpanel_node-copy.md)
-   Particle System Elements: [part\_system\_create\_layer](../../Drawing/Particles/Particle_Systems/part_system_create_layer.md)

### Filters and Effects

-   [Filter and Effect Functions](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Filter_Effect_Layers/Filter_Effect_Functions.md)

IMPORTANT When creating room layers _you can have multiple different element types on one layer_. So, for example, you may have a layer for enemies, and on that layer have the enemy instances as well as certain sprite assets that are only related to that enemy. Or you could have a background element with a tile map element to create the look of a room. This is not permitted in [The Room Editor](../../../../The_Asset_Editors/Rooms.md), but when creating things dynamically you can do this, which is why functions like [layer\_get\_all\_elements](General_Layer_Functions/layer_get_all_elements.md) exist.