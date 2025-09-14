---
title: "path_get_length"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_length.htm"
converted: "2025-09-14T03:59:35.072Z"
---

# path\_get\_length

You can use this function to get the exact length of a path in pixels. this is _not_ an approximate length from point to point, but rather an exact length along the shape of the path, even when the path is smooth with a high curved precision.

#### Syntax:

path\_get\_length(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to measure. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

path\_len = path\_get\_length(pth\_AI);

This will set "path\_len" to the total length of the path indexed in "pth\_AI" in pixels.