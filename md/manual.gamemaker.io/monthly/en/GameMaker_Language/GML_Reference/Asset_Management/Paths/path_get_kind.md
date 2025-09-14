---
title: "path_get_kind"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_kind.htm"
converted: "2025-09-14T03:59:35.059Z"
---

# path\_get\_kind

Paths can be either _smooth_ or _straight_ (a smooth path calculates a curved path around the defining points, whereas a straight path just goes straight from one point to another). This function can be used to find out whether the given path is smooth (true) or not (false).

#### Syntax:

path\_get\_kind(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

path\_kind = path\_get\_kind(pth\_Patrol);

This will set the "path\_kind" variable to true or false depending on the kind of path the given path index is.