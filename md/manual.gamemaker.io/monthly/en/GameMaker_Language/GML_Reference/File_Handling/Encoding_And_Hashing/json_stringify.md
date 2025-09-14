---
title: "json_stringify"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.htm"
converted: "2025-09-14T03:59:55.872Z"
---

# json\_stringify

This function converts a single struct or a hierarchy of nested structs and arrays into a valid JSON string.

You supply the initial value to use (a [Struct](../../../GML_Overview/Structs.md) or an [Array](../../../GML_Overview/Arrays.md)) and then the function will "stringify" it, i.e. convert it into a JSON string (converting GameMaker arrays into JSON arrays, and GameMaker structs into JSON objects). You can optionally choose to "prettify" it, meaning the final JSON will be formatted for easy readability.

### Usage Notes

-   The function will **not** serialise the data contained _inside_ assets, data structures and other runtime assets into JSON, and will simply store the internal handle reference for the asset (which is of little use as the index will change between runs of the game).
    -   Upon [parsing](json_parse.md) the JSON, these will be converted back into runtime references so the assets can be used normally in functions. This includes any asset type that is represented as a [handle](../../../GML_Overview/Data_Types.md) (see the "**Handles**" section on the linked page). This conversion can be disabled when parsing.
    -   Keep in mind that this will not be useful between game sessions as asset information may have changed, depending on the type of asset. Assets are saved using their names so these references maintain their links as long as the asset name does not change.
    -   If you want to serialise data structures (specifically lists and maps), use the [json\_encode](json_encode.md) function.
-   GameMaker encodes certain values in the JSON as a string so they can be read back correctly later. See [Data Conversions](../../../../Additional_Information/Guide_To_Using_JSON.htm#data_conversions) for an overview of these conversions.

NOTE See [Guide To Using JSON](../../../../Additional_Information/Guide_To_Using_JSON.md) for detailed information on how to work with JSON in GameMaker.

### Filter Function OPTIONAL

The function optionally takes a [Function](../../../GML_Overview/Script_Functions.md), which runs once for each value in the structure, including all nested structs/arrays and all the values inside them.

It takes two arguments (key, value) where key is the struct key name ([String](../../../GML_Overview/Data_Types.md)) or array index ([Real](../../../GML_Overview/Data_Types.md)), and value is what's stored in that key/index.

The filter function must always return a value. It can return a new value, which replaces the key's value in the final converted format returned by json\_stringify. If no new value should be returned for a particular key, the function must return the original value.

NOTE When overriding a key's value in the filter function (using [return](../../../GML_Overview/Language_Features/return.md)), make sure you check its type first, as the filter function runs for the root structure and any nested structures as well, meaning accidentally overriding them will result in a broken final structure. See **Example 3** at the bottom.

#### Syntax:

json\_stringify(val, \[pretty\_print\], \[filter\_func\]);

| Argument | Type | Description |
| --- | --- | --- |
| val | Struct or Array | The reference value for a struct or array to convert into a JSON string |
| prettify | Boolean | OPTIONAL Whether to prettify the string, i.e. insert indentation and line breaks for readability |
| filter_func | Function | OPTIONAL Filter function that processes each item. Syntax: function(key, value) -> new_value |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example 1:

var \_contents =
{
    version : "1.0.0",
    data:
    {
        coins : 4,
        mana : 15,
        playername : "Gurpreet",
        items :
        \[
            ITEM.SWORD,
            ITEM.BOW,
            ITEM.GUITAR
        \]
    }
};

var \_json\_string = json\_stringify(\_contents);

The above code will convert the \_contents struct into a JSON string and stores the string in a variable. The returned string would look like this:

{ "data": { "items": \[ 0.0, 1.0, 2.0 \], "coins": 4.0, "mana": 15.0, "playername": "Gurpreet" }, "version": "1.0.0" }

#### Example 2: Pretty Print

var \_contents =
{
    version: "1.0.0",
    data:
    {
        coins : 5,
        mana : 0,
        playername : "Bart",
        items :
        \[
            ITEM.SWORD,
            ITEM.BOW,
            ITEM.PIANO
        \]
    }
}
var \_json\_string = json\_stringify(\_contents, true);

The above code converts the \_contents struct into a JSON string and stores it in a variable. With the pretty\_print parameter set to true, the struct's contents are _pretty printed_ to the string, i.e. indentation and line breaks are inserted to make the resulting string look "pretty" and more readable. The string then looks like this:

{
  "data":{
    "mana":0.0,
    "playername":"Bart",
    "items":\[
      0,
      1,
      2
    \],
    "coins":5.0
  },
  "version":"1.0.0"
}

#### Example 3: Filter Function

var data =
{
    x: 5.2344,
    y: 10.601,
    last\_clicked: undefined,
    values :  \[ 2000.1, 30.56, undefined, { slot : 10, skin : undefined } \]
}

var json = json\_stringify(data, true, function(key, value)
{
    if (is\_real(value)) return round(value);
    if (is\_undefined(value)) return 0;
    return value;
});

show\_debug\_message(json);

The above code takes a struct and stringifies it to JSON, pretty-printing it, and using a filter function to modify some types of values.

If the value is a [Real](../../../GML_Overview/Data_Types.md), it [rounds](../../Maths_And_Numbers/Number_Functions/round.md) it, if it's undefined, it changes it to 0, otherwise it simply returns the same value (meaning it remains unchanged).