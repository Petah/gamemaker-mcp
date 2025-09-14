---
title: "path_get_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_x.htm"
converted: "2025-09-14T03:59:35.189Z"
---

# path\_get\_x

With this function you can get the x coordinate of a position on any given path. 0 is the start of the path, 1 is the end of the path, and anything in between equates to that far through the path. This needn't be a defining point of the path, it can be anywhere on it.

#### Syntax:

path\_get\_x(ind, pos);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to check. |
| pos | Real | How far through the path to check. Between 0 (start) and 1 (end). |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

x = path\_get\_x(pth\_WallWalk, 0.5);

This will set the calling instance's x to the x coordinate of the point at exactly halfway through the given path.