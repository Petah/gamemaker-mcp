---
title: "object_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_index.htm"
converted: "2025-09-14T03:59:34.437Z"
---

# object\_index

This **read-only** variable returns a reference to the object that the instance has been created from. This is _not_ the same as the object name, which is a string and can be found using [object\_get\_name()](object_get_name.md), as this function returns the handle, which is a unique value that GameMaker assigns to every object at the time of creation.

#### Syntax:

object\_index;

#### Returns:

[Object Asset](../../../../The_Asset_Editors/Objects.md)

#### Example:

obj\_name = object\_get\_name(object\_index);

The above code will use the object\_index to find the name of the object that the current instance has been created from.