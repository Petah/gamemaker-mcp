---
title: "instance_number"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_number.htm"
converted: "2025-09-14T03:59:33.979Z"
---

# instance\_number

With this function you can find out how many active instances of the specified object exists in the room. When checking using this function, if the object is a **parent**, then _all child objects will also be included in the return value_, and also note that those instances which have been deactivated with the [instance deactivate](Deactivating_Instances/Deactivating_Instances.md) functions will _not_ be included in this check.

#### Syntax:

instance\_number(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset | The object to get the number of instances of, or the keyword all to count all instances |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (instance\_number(object\_index) < 50)
{
    instance\_create\_layer(random(room\_width), random(room\_height), "Instances", object\_index);
}

The above code will check the number of instances that are created form the same object as the current instance and then if there are less than 50, create another one at a random position within the room.