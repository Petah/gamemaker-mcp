---
title: "sprite_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_name.htm"
converted: "2025-09-14T03:59:41.450Z"
---

# sprite\_get\_name

This function will return the name _as a string_ of the specified sprite. This name is the one that has been specified for the sprite in the resource tree of the main GameMaker window. Please note that this is _only_ a string and cannot be used to reference the sprite directly - for that you would need the _sprite index_. You can, however, use this string to get the _sprite index_ using the returned string along with the function [asset\_get\_index()](../../Assets_And_Tags/asset_get_index.md).

#### Syntax:

sprite\_get\_name(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to get the name of. |

#### Returns

[String](../../../../GML_Overview/Data_Types.md)

#### **Example:**

str = sprite\_get\_name(sprite\_index);

The above code will get the name of the sprite index for the instance running the code and store the return value in the variable "str".