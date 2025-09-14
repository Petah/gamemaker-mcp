---
title: "DS Maps"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm"
converted: "2025-09-14T03:59:47.019Z"
---

# DS Maps

The DS map data structure lets you store **key** and **value** pairs, making it an exceptionally useful one.

For example, a character in your game can have a quantity of different items (_keys_) and for each individual item he can have a number of them (_values_), like in an RPG where you can have 10 health potions, 5 mana potions and 100 gold. Maps maintain such pairs all together in one place. You can add pairs to the map, search for the value corresponding to certain keys and use some simple functions.

There are a couple of things you should know about maps before you use them, however! Maps are _not_ sorted in any (recognisable) way, meaning that to find a certain key you may have to iterate through the whole thing (which is **very** slow). There is also no way to hold two keys that are the same, nor can you assign one key two values.

NOTE It is recommended to use [structs](../../../GML_Overview/Structs.md) over DS maps as they have similar features, are easier to use and are garbage collected automatically.

NOTE As with all dynamic resources, data structures take up memory and so should **always** be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game.

TIP The key isn't limited to strings and can be of any type, including a [struct](../../../GML_Overview/Structs.htm#struct).

Apart from the specific functions listed below you can also use an expression (called an _accessor_) to add or modify the contents of your DS map. This accessor looks similar to a 1D array with the following syntax:

map\_index\[? key\]

You can find more information, plus examples, from the GML Overview page on [Accessors](../../../GML_Overview/Accessors.md).

## Function Reference

### General

-   [ds\_map\_exists](ds_map_exists.md)
-   [ds\_map\_create](ds_map_create.md)
-   [ds\_map\_destroy](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_destroy.md)
-   [ds\_map\_add](ds_map_add.md)
-   [ds\_map\_clear](ds_map_clear.md)
-   [ds\_map\_copy](ds_map_copy.md)
-   [ds\_map\_replace](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_replace.md)
-   [ds\_map\_delete](ds_map_delete.md)
-   [ds\_map\_empty](ds_map_empty.md)
-   [ds\_map\_size](ds_map_size.md)
-   [ds\_map\_find\_first](ds_map_find_first.md)
-   [ds\_map\_find\_last](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_last.md)
-   [ds\_map\_find\_next](ds_map_find_next.md)
-   [ds\_map\_find\_previous](ds_map_find_previous.md)
-   [ds\_map\_find\_value](ds_map_find_value.md)
-   [ds\_map\_keys\_to\_array](ds_map_keys_to_array.md)
-   [ds\_map\_values\_to\_array](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_values_to_array.md)
-   [ds\_map\_set](ds_map_set.md)

### Serialisation

-   [ds\_map\_read](ds_map_read.md)
-   [ds\_map\_write](ds_map_write.md)

### Loading & Saving

These functions will obfuscate the map and store it in a secure location on the target platform using a file format that means that the final file is not able to be transferred between devices:

-   [ds\_map\_secure\_save](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_save.md)
-   [ds\_map\_secure\_save\_buffer](ds_map_secure_save_buffer.md)
-   [ds\_map\_secure\_load](ds_map_secure_load.md)
-   [ds\_map\_secure\_load\_buffer](ds_map_secure_load_buffer.md)

### JSON

-   [ds\_map\_add\_list](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add_list.md)
-   [ds\_map\_add\_map](ds_map_add_map.md)
-   [ds\_map\_replace\_list](ds_map_replace_list.md)
-   [ds\_map\_replace\_map](ds_map_replace_map.md)
-   [ds\_map\_is\_list](ds_map_is_list.md)
-   [ds\_map\_is\_map](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_is_map.md)

NOTE While these functions permit you to add lists and maps within a map, they are useless for anything other than JSON, and nested maps and lists will not be read correctly if written to disk or accessed in any other way.