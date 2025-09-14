---
title: "ds_map_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_set.htm"
converted: "2025-09-14T03:59:47.456Z"
---

# ds\_map\_set

This function sets the value of a key within a given DS map.

You supply the [DS Map](ds_map_create.md) value (as returned by the function [ds\_map\_create](ds_map_create.md)), then give the key you want to set and the value to set it to. If the given key does not exist then it will be created for you and set to the value.

You can also set a value in a map using the [accessor](../../../GML_Overview/Accessors.md) "?", as shown below:

map\[? 5\] = undefined;
map\[? "level"\] = 1;
map\[? 89.6\] = "hello world";
map\[? 5\] = buffer\_get\_address(buff);

Since the function doesn't return anything, you can use the function [ds\_map\_replace](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_replace.md) to check if the key value has been replaced or a new key has been created.

TIP The key isn't limited to strings and can be of any type, including a [struct](../../../GML_Overview/Structs.htm#struct).

NOTE This function is the same as using the [DS map accessor](../../../GML_Overview/Accessors.md) to set/create a map key/value pair.

#### Syntax:

ds\_map\_set(id, key, value)

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| key | Any | The key to set. |
| value | Any | The value to set the key to. |

#### Returns:

N/A

#### Example:

struct\_key = {a: 10, b: "Some text"};

map\_key\_value\_pairs = ds\_map\_create();
ds\_map\_set(map\_key\_value\_pairs, "score", "the value belonging to the string key");
ds\_map\_set(map\_key\_value\_pairs, 8, "The value belonging to the real number key");
ds\_map\_set(map\_key\_value\_pairs, struct\_key, "The value for the struct key");

show\_debug\_message(map\_key\_value\_pairs\[? "score"\]);
show\_debug\_message(map\_key\_value\_pairs\[? 8\]);
show\_debug\_message(map\_key\_value\_pairs\[? struct\_key\]);

The above code first creates a basic struct struct\_key. It then creates a new DS map using [ds\_map\_create](ds_map_create.htm#h) and stores it in a variable map\_key\_value\_pairs.

Next, three different keys in the DS map are set using ds\_map\_set, each having a different type: the first key is a string, the second a number and the last one a struct.

Finally, the three values are looked up using the DS map accessor ? and shown using [show\_debug\_message](../../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md).