---
title: "ds_list_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_delete.htm"
converted: "2025-09-14T03:59:46.741Z"
---

# ds\_list\_delete

With this function you can remove the value stored at a specific position within the list.

#### Syntax:

ds\_list\_delete(id, pos);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to change. |
| pos | Real | Where in the list to delete the value. |

#### Returns:

N/A

#### Example:

if (ds\_list\_size(sc\_list) > 10)
{
    while (ds\_list\_size(sc\_list) > 10)
    {
        ds\_list\_delete(sc\_list, 0);
    }
}

The above code checks the size of a DS list and if it is larger than ten, it loops through the list removing the top value (position 0) until the list has only 10 entries.