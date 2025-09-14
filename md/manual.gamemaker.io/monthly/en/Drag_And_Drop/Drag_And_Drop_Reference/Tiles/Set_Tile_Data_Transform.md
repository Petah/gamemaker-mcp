---
title: "Set Tile Data Transform"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Tiles/Set_Tile_Data_Transform.htm"
converted: "2025-09-14T03:59:28.127Z"
---

# ![Set Tile Data Transform Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/i_Tiles_Set_Tile_Data_Transform.png) Set Tile Data Transform

With this action you can change one of three tile transforms in the tile data. You supply the variable that holds the tile data for the tile, then select the transform to change. Clicking the "Apply" check-box will apply that transform and un-checking it will remove it. The tile data is simply a value that reflects the index of the tile along with the transforms applied as well as any custom tile masks that you have used, and this action permits you to change three of those values: Flip, mirror and rotate. Note that you will normally want to get the tile data first using either [Get Tile Data In Cell](Get_Tile_Data_In_Cell.md) or [Get Tile Data At Pixel](Get_Tile_Data_At_Pixel.md), then apply the required transform(s) and then set the tile in the tile map again using [Set Tile Data In Cell](Set_Tile_Data_In_Cell.md) or [Set Tile Data At Pixel](Set_Tile_Data_At_Pixel.md), since this action _only sets a value but does not apply it to the tile it was taken from_. For more information on tile data, please see the GML section on [Tile Map Functions](../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md).

#### Action Syntax:

![Set Tile Data Transform Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/a_Tiles_Set_Tile_Data_Transform.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Tile | The tile data for the tile to change |
| Transform | The transform to apply/remove |

#### Example:

![Set Tile Data Transform Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Tiles/e_Tiles_Set_Tile_Data_Transform.png)The above action block code gets the tile data at the mouse position and then checks to see if the tile has had a rotation transform applied to it. If it has then the transform is reset and the tile data sets the tile at the position again.