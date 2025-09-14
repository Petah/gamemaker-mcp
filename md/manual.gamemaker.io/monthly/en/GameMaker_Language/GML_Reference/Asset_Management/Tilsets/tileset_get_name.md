---
title: "tileset_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Tilsets/tileset_get_name.htm"
converted: "2025-09-14T03:59:42.451Z"
---

# tileset\_get\_name

This function will return the name _as a string_ of the specified tile set asset. This name is the one that has been specified for the tile set in the Asset Browser of the main GameMaker window.

NOTE This is _only_ a string and cannot be used to reference the tile set directly - for that you would need the _tile set index_. You can, however, use this string to get the _tile set index_ using the returned string along with the function [asset\_get\_index](../Assets_And_Tags/asset_get_index.md).

#### Syntax:

tileset\_get\_name(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Tile Set Asset | The index of the tile set to get the name of. |

#### Returns

[String](../../../GML_Overview/Data_Types.md)

#### **Example:**

var \_l = layer\_get\_id("tilemap\_trees");
var \_m = layer\_tilemap\_get\_id(\_l);
var \_t = tilemap\_get\_tileset(\_m);
tileset\_name = tileset\_get\_name(\_t);

The above code will get the name of the tile set index for the given layer, storing the return string in the variable tileset\_name.