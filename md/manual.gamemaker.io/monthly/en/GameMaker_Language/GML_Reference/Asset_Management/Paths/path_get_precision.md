---
title: "path_get_precision"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_get_precision.htm"
converted: "2025-09-14T03:59:35.159Z"
---

# path\_get\_precision

This function returns with what precision the given path has been "smoothed", and will be an integer value from 1 to 8. Although you can get (and set) this value for a straight-line path it will have no influence over how an instance uses the path as it is only relevant when the path kind is set to "smooth".

#### Syntax:

path\_get\_precision(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (path\_get\_kind(pth\_Patrol))
{
    if (path\_get\_precision(pth\_Patrol)) != 8
    {
        path\_set\_precision(pth\_Patrol, 8);
    }
}

The above code checks the path indexed in "pth\_Patrol" to see what kind it is and if it is smooth, it then checks how precise the smoothing is. If it is less than 8, it is then set to a value of 8.