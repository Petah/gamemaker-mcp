---
title: "Set Tile Set"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Set_Tile_Set.htm"
converted: "2025-09-14T03:59:28.167Z"
---

# ![Set Tile Set Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Set_Tile_Set.png) Set Tile Set

With this action you can set a layer to use different tile sets from those created in the Asset Browser. You give the name of the layer (a string, as defined in the Room Editor), and then the tile set resource to use, and all tiles in the room on that layer will be drawn with the new tile set.

#### Action Syntax:

![Set Tile Set Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Set_Tile_Set.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Layer | The layer on which to set the new tile set. |
| Tileset | The tile set to use for the layer. |

#### Example:

![Set Tile Set Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_Set.png)The above action block code checks to see if the tiles on the layer "Floor\_Tiles" is using the tile set "tl\_PalaceRuins", and if they not, then they are set to use it.