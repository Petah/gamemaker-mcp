---
title: "object_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_name.htm"
converted: "2025-09-14T03:59:34.327Z"
---

# object\_get\_name

This function will return the name _as a string_ of the specified object. This name is the one that has been specified for the object in the Asset Browser of the main GameMaker window. Please note that this is _only_ a string and cannot be used to reference the object directly - for that you would need the _object index_. You can, however, use this string to get the _object index_ using the returned string along with the function [asset\_get\_index()](../Assets_And_Tags/asset_get_index.md).

#### Syntax:

object\_get\_name(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset | The index of the object to check. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

str = object\_get\_name(object\_index);

The above code will get the name of the object index for the instance running the code and store the return value in the variable "str".