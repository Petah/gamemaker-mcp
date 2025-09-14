---
title: "json_decode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.htm"
converted: "2025-09-14T03:59:55.791Z"
---

# json\_decode

This function decodes a JSON string and converts it into a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md), ready for use in GameMaker.

IMPORTANT This function - while still valid for DS maps - has been superseded by the function [json\_parse](json_parse.md) and [structs](../../../GML_Overview/Structs.md), and we recommend that you only use this function for legacy support.

GameMaker creates the necessary DS maps and lists from the JSON, and for cleaning up you only need to delete the top-level map and GameMaker will automatically delete from memory all the maps and lists underneath.
If the JSON to be decoded requires a hierarchy of lists and maps within the central DS map, these are also decoded and created for you, using the following rules (note that these rules apply to the top-level structure only):

-   **JSON is a single value** - returns a DS map with a single entry "default" that is the value
-   **JSON is an array of objects or values** - returns a DS map with a single entry "default" that is a DS list of the objects or values
-   **JSON is an object** - returns a DS map that has the object entries in it

### Usage Notes

-   An invalid [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) handle (-1) is returned in case the JSON could not be decoded.
-   This function always returns a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md), no matter the type of the top-level element. If this top-level element in the JSON is not an object (either a single value "5" or an array "1, 2, 3, 4"), it will be placed in a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) under a key "default". Internal lists decode directly to a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) without being enclosed in a DS map.
-   If you wrote GameMaker arrays into the top level, or as the contents of a DS map or DS list, these will be decoded as DS lists, not as arrays.
-   Normally you'll know what keys the JSON decodes to, if not you can use the [ds\_map\_size](../../Data_Structures/DS_Maps/ds_map_size.md), [ds\_map\_find\_first](../../Data_Structures/DS_Maps/ds_map_find_first.md) and [ds\_map\_find\_next](../../Data_Structures/DS_Maps/ds_map_find_next.md) functions to get this information.
-   You can load JSON files with a maximum nesting limit of 128.

NOTE See [Guide To Using JSON](../../../../Additional_Information/Guide_To_Using_JSON.md) for detailed information on how to work with JSON in GameMaker.

#### Syntax:

json\_decode(string)

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The JSON formatted string to decode |

#### Returns:

[DS Map](../../Data_Structures/DS_Maps/ds_map_create.md)

#### Example:

var resultMap = json\_decode(requestResult);
var list = ds\_map\_find\_value(resultMap, "default");
var size = ds\_list\_size(list);
for (var n = 0; n < ds\_list\_size(list); n++;)
{
    var map = ds\_list\_find\_value(list, n);
    var curr = ds\_map\_find\_first(map);
    while (is\_string(curr))
    {
        global.Name\[n\] = ds\_map\_find\_value(map, "name");
        curr = ds\_map\_find\_next(map, curr);
    }
}
ds\_map\_destroy(resultMap);

The above code will decode a JSON string and parse it to generate a global array.