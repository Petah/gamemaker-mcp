---
title: "path_get_number"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_number.htm"
converted: "2025-09-14T03:59:35.102Z"
---

# path\_get\_number

This function can be used to return the number of points on a path.

#### Syntax:

path\_get\_number(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (path\_get\_number(pth\_AI) > 1)
{
    path\_start( pth\_AI, 4, 3, 0);
}

The above code checks to see if a path has more than one point on it and if so it starts the instance moving along that path.