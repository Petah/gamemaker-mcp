---
title: "ds_map_find_last"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_last.htm"
converted: "2025-09-14T03:59:47.205Z"
---

# ds\_map\_find\_last

This function returns the last key stored in the DS map. **This is not the last key in the order that you have added them!** DS maps are not stored in a linear form, for that use [DS lists](../DS_Lists/DS_Lists.md), so all this does is find the last key as stored by the computer. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow.

Note that this function will return undefined if the given DS map is empty.

#### Syntax:

ds\_map\_find\_last(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |

#### Returns:

[Any](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) or [undefined](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var size = ds\_map\_size(inventory);
var key = ds\_map\_find\_last(inventory);
for (var i = size; i > 0; i--;)
{
    if (key != "gold")
    {
        key = ds\_map\_find\_previous(inventory, key);
    }
    else break;
}

The above code creates some temporary variables and then gets the DS map size and finds the last key as stored by the computer in the map. It then uses a for loop to iterate back through the DS map looking for the key value "gold". If it finds it, it breaks out the loop.