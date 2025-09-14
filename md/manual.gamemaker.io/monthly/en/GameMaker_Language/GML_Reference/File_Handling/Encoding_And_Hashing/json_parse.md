---
title: "json_parse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.htm"
converted: "2025-09-14T03:59:55.845Z"
---

# json\_parse

This function parses a JSON string and converts it into a collection of nested arrays and structs. An array is the equivalent of a JSON array and a struct is the equivalent of a JSON object.

The JSON should be either previously created using [json\_stringify](json_stringify.md) or should come from any other valid source.

You supply the string to parse, and the function will return the top-level array or struct which can then be used in your code. If you are not sure of the contents of the JSON, you can use the different [Variable Functions](../../Variable_Functions/Variable_Functions.md) (like [typeof](../../Variable_Functions/typeof.md) and [struct\_get\_names](../../Variable_Functions/variable_struct_get_names.md) in case of a struct) to check the returned contents.

### Usage Notes

-   Trying to parse an invalid value (i.e.: not a string, or invalid JSON) will throw an exception error.
-   This function only allows you to load JSON files with a maximum nesting limit of 128.
-   Data conversions:
    -   null values are parsed as undefined.
    -   Any runtime values serialised by [json\_stringify](json_stringify.md) will be converted back to runtime values (e.g. [handles](../../../GML_Overview/Data_Types.md) and values like int64, NaN and infinity), however this conversion can be disabled by passing true into the optional inhibit\_string\_convert argument, meaning these will remain as strings.
    -   See [Data Conversions](../../../../Additional_Information/Guide_To_Using_JSON.htm#data_conversions) for a full overview.
-   See [Guide To Using JSON](../../../../Additional_Information/Guide_To_Using_JSON.md) for more information on how GameMaker interacts with the JSON format.

NOTE See [Guide To Using JSON](../../../../Additional_Information/Guide_To_Using_JSON.md) for detailed information on how to work with JSON in GameMaker.

### Filter Function OPTIONAL

The function optionally takes a [Function](../../../GML_Overview/Script_Functions.md), which runs once for each value in the structure, including all nested structs/arrays and all the values inside them.

It takes two arguments (key, value) where key is the struct key name ([String](../../../GML_Overview/Data_Types.md)) or array index ([Real](../../../GML_Overview/Data_Types.md)), and value is what's stored in that key/index.

The filter function must always return a value. It can return a new value, which replaces the key's value in the final converted format returned by json\_parse. If no new value should be returned for a particular key, the function must return the original value.

NOTE When overriding a key's value in the filter function (using [return](../../../GML_Overview/Language_Features/return.md)), make sure you check its type first, as the filter function runs for the root structure and any nested structures as well, meaning accidentally overriding them will result in a broken final structure. See **Example 3** at the bottom.

#### Syntax:

json\_parse(json, \[filter\_func\], \[inhibit\_string\_convert\])

| Argument | Type | Description |
| --- | --- | --- |
| json | String | The JSON string to parse |
| filter_func | Function | OPTIONAL Filter function that processes each item. Don't pass a value or set this to undefined if you only want to set inhibit_string_convert. Syntax: function(key, value) -> new_value |
| inhibit_string_convert | Boolean | OPTIONAL Set this to true to disable converting strings into runtime references. Default value: false |

#### Returns:

[Struct](../../../GML_Overview/Structs.md) or [Array](../../../GML_Overview/Arrays.md)

#### Example 1:

var json = "{\\"myObj\\": { \\"apples\\":10, \\"oranges\\":12, \\"potatoes\\":100000, \\"avocados\\":0 }, \\"myArray\\":\[0, 1, 2, 2, 4, 0, 1, 5, 1\]}";

var data = json\_parse(json);
show\_debug\_message(data);

The above code creates a new string containing valid JSON, and then calls [json\_parse](json_parse.md) to convert that string into a GML struct. It then prints the result to the debug log.

NOTE You will notice that the JSON string contains a backslash (\\) before every double quote (") inside it:

json = "{ **\\"** myObj

This is to ensure that the double quote is read as an actual character within the string, instead of being read as part of the code and closing the string prematurely. This way we are using a backslash to "escape" the double quote.

If you are loading JSON from an external file however, there is no need to escape characters in that file.

---

After parsing the JSON string above, if you know its structure, you can use various [Variable Functions](../../Variable_Functions/Variable_Functions.md) to check and read its contents:

var data = json\_parse(json);

// Check if the struct has myObj variable
if (struct\_exists(data, "myObj"))
{
    // Check if it's a struct
    if (is\_struct(data.myObj))
    {
        // Print all struct members to the log
        var \_names = struct\_get\_names(data.myObj);
        var \_str = "";
        for (var i = 0; i < array\_length(\_names); i++;)
        {
            \_str = \_names\[i\] + ": " + string(struct\_get(data.myObj, \_names\[i\]));
            show\_debug\_message(\_str);
        }
    }
}

// Check if the struct has myArray variable
if (struct\_exists(data, "myArray"))
{
    // Check if it's an array
    if (is\_array(data.myArray))
    {
        show\_debug\_message(data.myArray);
    }
}

The above code will parse the given JSON string, generating the following console output:

oranges: 12
potatoes: 100000
avocados: 0
apples: 10
\[ 0,1,2,2,4,0,1,5,1 \]

#### Example 2: Filter Function

var json = "{\\"myObj\\": { \\"apples\\":10, \\"oranges\\":12, \\"potatoes\\":100000, \\"avocados\\":0 }, \\"myArray\\":\[0, 1, 2, 2, 4, 0, 1, 5, 1\]}";

var data = json\_parse(json, function (key, value)
{
    show\_debug\_message($"Key: {key}, Value: {value}");
    return value;
});

The above code takes the same JSON string from the previous example, and converts it into a GML struct, however this time it uses a filter function.

The filter function prints the key and value of each item to the Output Log:

Key: apples, Value: 10
Key: oranges, Value: 12
Key: potatoes, Value: 100000
Key: avocados, Value: 0
Key: myObj, Value: { apples : 10, oranges : 12, potatoes : 100000, avocados : 0 }
Key: 8, Value: 1
Key: 7, Value: 5
Key: 6, Value: 1
Key: 5, Value: 0
Key: 4, Value: 4
Key: 3, Value: 2
Key: 2, Value: 2
Key: 1, Value: 1
Key: 0, Value: 0
Key: myArray, Value: \[ 0,1,2,2,4,0,1,5,1 \]
Key: , Value: { myObj : { apples : 10, oranges : 12, potatoes : 100000, avocados : 0 }, myArray : \[ 0,1,2,2,4,0,1,5,1 \] }

Note how the filter function runs on the struct (myObj) and array (myArray) in the JSON and then also on each item inside the struct and array. It also runs on the root structure with the key set to an empty string (here, seen on the last line).

#### Example 3: Overriding Values

var json = "{\\"prices\\": \[2, 5, 1, 2, 4, 5\]}";

var data = json\_parse(json, function (key, value)
{
    return is\_real(value) ? value \* 1000 : value;
});

show\_debug\_message(data);

The above code takes a JSON string containing an array inside a struct. Then json\_parse is run with a filter function that multiplies each value with 1000, only when it's a [Real](../../../GML_Overview/Data_Types.md). Otherwise it simply returns the value itself.

The resulting structure looks like this:

{ prices : \[ 2000,5000,1000,2000,4000,5000 \] }