---
title: "json_encode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.htm"
converted: "2025-09-14T03:59:55.815Z"
---

# json\_encode

This function takes an existing [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) and encodes it as a JSON string. The JSON string can be used, e.g., as part of an [http\_post\_string](../../Asynchronous_Functions/HTTP/http_post_string.md) call or be written to a file, so the data can be stored externally.

IMPORTANT This function - while still valid for DS maps - has been superseded by the function [json\_stringify](json_stringify.md) and [structs](../../../GML_Overview/Structs.md), and we recommend that you only use this function for legacy support.

The DS map can contain the following:

-   Nested [DS Maps](../../Data_Structures/DS_Maps/DS_Maps.md) and [DS Lists](../../Data_Structures/DS_Lists/DS_Lists.md) that should be marked correctly using the DS map [JSON](../../Data_Structures/DS_Maps/DS_Maps.htm#func_ref_json) functions (e.g. [ds\_map\_add\_map](../../Data_Structures/DS_Maps/ds_map_add_map.md), [ds\_map\_add\_list](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add_list.md)) and the DS list [JSON](../../Data_Structures/DS_Lists/DS_Lists.htm#func_ref_json) functions (e.g. [ds\_list\_mark\_as\_map](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_mark_as_map.md), [ds\_list\_mark\_as\_list](../../Data_Structures/DS_Lists/ds_list_mark_as_list.md)) respectively.
-   Nested [Structs](../../../GML_Overview/Structs.md) and [Arrays](../../../GML_Overview/Arrays.md) which are written as nested JSON objects and arrays respectively.

### Usage Notes

-   GameMaker encodes certain values in the JSON as a string so they can be read back correctly later. See [Data Conversions](../../../../Additional_Information/Guide_To_Using_JSON.htm#data_conversions) for an overview of these conversions.

NOTE See [Guide To Using JSON](../../../../Additional_Information/Guide_To_Using_JSON.md) for detailed information on how to work with JSON in GameMaker.

#### Syntax:

json\_encode(map, \[prettify\])

| Argument | Type | Description |
| --- | --- | --- |
| map | DS Map | A DS map with the information to encode |
| prettify | Boolean | OPTIONAL Whether to prettify the output, i.e. insert indentation and line breaks for readability |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example 1: Basic Use

var \_hiscore\_map, \_json;
\_hiscore\_map = ds\_map\_create();
for (var i = 0; i < 10; i ++;)
{
    ds\_map\_add(\_hiscore\_map, name\[i\], score\[i\]);
}
\_json = json\_encode(\_hiscore\_map);
ds\_map\_destroy(\_hiscore\_map);

post\_request\_id = http\_post\_string($"http://www.angusgames.com/game?game\_id={global.game\_id}", \_json);

The above code creates a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) and then loops through the name and score arrays, adding each key/value pair to the new map. Next, this map is encoded using [json\_encode](json_encode.md) and stored as a string in the variable \_str. This string is then sent to a web server using [http\_post\_string](../../Asynchronous_Functions/HTTP/http_post_string.md) and the DS map is destroyed to prevent a memory leak as it is no longer needed.

#### Example 2: Hierarchy of Mixed Data Types

var \_map = ds\_map\_create();
var \_list = ds\_list\_create();

ds\_map\_add\_list(\_map, "seasoning", \_list);
ds\_list\_add(\_list, "pepper", "salt", "thyme");

\_map\[? "greeting"\] = {parts: \["Hello", "World!"\], separator: ", "};
\_map\[? "food"\] = \["bread", "coconut", "mango"\];

var \_json = json\_encode(\_map, true);
// ds\_map\_destroy(\_map);

show\_debug\_message(\_json);

The code example above shows how to encode a DS map with mixed contents to JSON.

First, a DS map and a DS list are created and stored in temporary variables. The DS list is then added to the DS map using [ds\_map\_add\_list](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add_list.md) and gets a few items added to it with a call to [ds\_list\_add](../../Data_Structures/DS_Lists/ds_list_add.md). After that, two other keys are added to the map, one gets assigned a [Struct](../../../GML_Overview/Structs.md) as the value with an [Array](../../../GML_Overview/Arrays.md) in it, the other gets assigned an array.

The map's contents are then encoded with a call json\_encode, with the prettify parameter set to true. If you only need the JSON string, the map can be destroyed right after this.

Finally, the JSON string is shown in a debug message.