---
title: "object_get_parent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_parent.htm"
converted: "2025-09-14T03:59:34.341Z"
---

# object\_get\_parent

This function will get you the object index of any parent that has been assigned to the specified object, or else return -100 to show that the object has no parent assigned to it, or -1 if the object being checked does not exist. For more information on parents see the section on [The Object Editor](../../../../The_Asset_Editors/Objects.md).

#### Syntax:

object\_get\_parent(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset | The index of the object to check |

#### Returns:

[Object Asset](../../../../The_Asset_Editors/Objects.md)

#### Example:

par = object\_get\_parent(object\_index);

The above code will get the parent of the object index for the instance running the code and store the return value in the variable "par".