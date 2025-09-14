---
title: "ds_map_replace"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_replace.htm"
converted: "2025-09-14T03:59:47.338Z"
---

# ds\_map\_replace

With this function you can change the value for the given key within the a DS map. You supply the index to the map (as returned by the function [ds\_map\_create()](ds_map_create.md)) and then the key to replace - either a string or an integer - and the value to replace the key value with. If the given key does _not_ exist then it will be created for you, and if it does then the current value will be replaced with the new value. The function will return true if the key exists and the value is replaced, and false if the key does not exist and a new key was created with the value.

#### Syntax:

ds\_map\_replace( id, key, val );

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to change. |
| key | String | The key with the value that should be replaced by the new one |
| val | Any | The new value to replace the given value with |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### **Example:**

ds\_map\_replace(inventory, "torso", 55);

The above code looks up the DS map for the key "torso" and when it finds it (or it is created if it doesn't exist) the current value is replaced with the one specified.