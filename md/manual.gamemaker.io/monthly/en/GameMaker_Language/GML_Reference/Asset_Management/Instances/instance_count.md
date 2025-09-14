---
title: "instance_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_count.htm"
converted: "2025-09-14T03:59:33.812Z"
---

# instance\_count

With this **read only** variable you can get a count of all active instances that are in the room. This will include the instance running the code, but does _not_ include those instances that have been deactivated using the [instance deactivate](Deactivating_Instances/Deactivating_Instances.md) functions. Note that this variable will only give you the number of instances at the _start_ of the step, so any changes to the instances in the room made after the step has started will not be taken into consideration.

#### Syntax:

instance\_count;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (instance\_count < 100)
{
    var dif = 100 - instance\_count;
    while (--dif > 0)
    {
        instance\_create\_layer(random(room\_width), random(room\_height), "Effects", obj\_Star);
    }
}

The above code will create multiple instances of the object "obj\_Star" until the total instance count reaches 100.