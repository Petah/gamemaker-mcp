---
title: "Guide To Using JSON"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Guide_To_Using_JSON.htm"
converted: "2025-09-14T03:59:22.622Z"
---

# Guide To Using JSON

This page describes how to work with JSON in GameMaker.

Contents

1.  [JSON](Guide_To_Using_JSON.htm#json)
2.  [JSON in GameMaker](Guide_To_Using_JSON.htm#json_in_gamemaker)

1.  [Which Functions to Use](Guide_To_Using_JSON.htm#which_functions_to_use)
2.  [Data Conversions](Guide_To_Using_JSON.htm#data_conversions)
3.  [Filter Function](Guide_To_Using_JSON.htm#filter_function)

4.  [Writing JSON](Guide_To_Using_JSON.htm#writing_json)

1.  [Prettify](Guide_To_Using_JSON.htm#prettify)
2.  [Usage Notes](Guide_To_Using_JSON.htm#usage_notes)

6.  [Reading JSON](Guide_To_Using_JSON.htm#reading_json)

1.  [Usage Notes](Guide_To_Using_JSON.htm#usage_notes1)

8.  [Serialisation](Guide_To_Using_JSON.htm#serialisation)

## JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format which is easy to read and write, for both people and machines. It is built on two basic structures:

-   A collection of name/value pairs, known as a "map", "dictionary" or "object" in programming languages. It is represented in GameMaker by a [Struct](../GameMaker_Language/GML_Overview/Structs.md) or a [DS Map](../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create.md).
-   An ordered list of values, known as a "list", "array" or "sequence" in other programming languages. It is represented in GameMaker by an [Array](../GameMaker_Language/GML_Overview/Arrays.md) or a [DS List](../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_create.md).

IMPORTANT JSON is _agnostic_ about numbers. In any programming language, there can be a variety of number types of various capacities and complements, fixed or floating, binary or decimal. That can make interchange between different programming languages difficult. JSON instead offers only the representation of numbers that humans use: a sequence of digits. All programming languages know how to make sense of digit sequences even if they disagree on internal representations. For more information see the [ECMA JSON Standard](https://ecma-international.org/publications-and-standards/standards/ecma-404/).

## JSON in GameMaker

GameMaker has built-in support for reading and writing JSON through two sets of functions:

-   [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md) and [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md) which you use to convert a JSON string to a collection of [Structs](../GameMaker_Language/GML_Overview/Structs.md) and [Arrays](../GameMaker_Language/GML_Overview/Arrays.md) and back.
-   [json\_encode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.md) and [json\_decode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.md) which you use to convert a JSON string to a collection of [DS Maps](../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) and [DS Lists](../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/DS_Lists.md) and back. Encoding requires you to _mark_ [DS map keys](../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm#func_ref_json "DS map marking functions") and [DS list items](../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/DS_Lists.htm##func_ref_json "DS list marking functions") as such (so it is clear which map keys and list items should become nested JSON objects and arrays).

### Which Functions to Use

-   [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md) and [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md) are the main functions to use when working with JSON. If you're not using any [Data Structures](../GameMaker_Language/GML_Reference/Data_Structures/Data_Structures.md) or when you start a new project, these are the functions to use.
-   Use [json\_encode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.md) and [json\_decode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.md) when working with [Data Structures](../GameMaker_Language/GML_Reference/Data_Structures/Data_Structures.md). The item passed to [json\_encode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.md) (the "root") must always be a [DS Map](../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create.md). Similarly, [json\_decode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.md) always returns a DS map, no matter the data type that you pass it (anything you pass to the function that's not a DS map is wrapped in one).
-   Use [json\_encode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.md) on a [DS Map](../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) that contains nested [structs](../GameMaker_Language/GML_Overview/Structs.htm#struct) and [Arrays](../GameMaker_Language/GML_Overview/Arrays.md). The structs and arrays will also be converted to JSON, i.e. [json\_encode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.md) allows you to convert a mixed hierarchy.

This guide focuses on the functions [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md) and [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md).

### Data Conversions

The JSON standard has a limited number of values that it supports: an object, an array, a string, a number and the values true, false and null. GameMaker uses more [Data Types](../GameMaker_Language/GML_Overview/Data_Types.md) than this and in order to store these in a way they can be read back later, it converts them to a string representation. Both the [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md) / [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md) and [json\_decode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.md) / [json\_encode](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.md) perform these conversions.

NOTE You can disable the automatic string conversion when parsing JSON by setting the inhibit\_string\_convert argument of [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md) to true.

The following table lists the conversions that take place when converting between JSON data and GameMaker:

| JSON Type | GM Type/Value | Notes |
| --- | --- | --- |
| true / false | true / false |  |
| real / number | Real |  |
| "@i64@hex_value$i64@" | int64 | GameMaker will write it as:- an int if it's in the valid range for an int32.- a double if it can do so without losing precision.- a string with an identifier "@i64@" before it and "$i64$" after it if neither of those cases is applicable.When you read the JSON again, GameMaker will pick up these identifiers and convert the value back into an int64 (unless conversion is disabled).WARNING If the JSON is intended for a server or some other non-GameMaker target, these values will not be appropriate and so should be avoided. |
| null | undefinedpointer_null | undefined and pointer_null are written as JSON null. JSON null is always read back as undefined when parsing or decoding. |
| string | String |  |
| "@@infinity$$", @@-infinity$$ | infinity, -infinity | infinity is written as a string |
| "@@nan$$" | NaN | NaN is written as a string |
| object | Struct (or DS Map) |  |
| array | Array (or DS List) |  |
| "ref <type> <id>" | Handle | Handles are stored in their string representation "ref <type> <id>" or "ref <type> <name>" when writing JSON and are converted back to runtime values when reading back the JSON.The exception is when using json_encode: nested DS Maps and DS Lists that you've marked as such will be written as JSON objects and arrays respectively.NOTE Relying on this behaviour will generally be of little use as the index will change between runs of the game. |

### Filter Function

If you want full control over how the contents of the JSON are read or written, you can optionally provide a filter function that runs for each element to [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md) and [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md). See the function pages for more information.

## Writing JSON

Writing JSON is done with [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md). For example, the following struct:

my\_struct =
{
    test: "this",
    val: \["that", "another thing", {"value": "a nested struct"}\]
};

Can be converted to a JSON string using [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md):

struct\_json = json\_stringify(my\_struct);

And then be written to a file using either the text file functions:

var \_file = file\_text\_open\_write("struct\_as\_json.json");
file\_text\_write\_string(\_file, struct\_json);
file\_text\_close(\_file);

Or the buffer functions:

var \_buff = buffer\_create(16384, buffer\_fixed, 1);
buffer\_write(buffer\_text, struct\_json);
buffer\_save("struct\_as\_json.json");
buffer\_delete(\_buff);

You can also send the JSON string over a network or store it somewhere else (e.g. in a text field in a database).

The following text is the output:

{"test":"this","val":\["that","another thing",{"value":"a nested struct"}\]}

By default, [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md) writes the JSON _linearised_. In this case everything is placed on the same line, with no space in between and no indentation added. This format is useful when every byte counts, though it is not particularly readable.

### Prettify

The prettify parameter can be set to true to add indentation to the generated JSON string to make it look "pretty", i.e. more human-readable.

The following code:

struct\_json = json\_stringify(my\_struct, true);

outputs the following JSON:

{
  "test":"this",
  "val":\[
    "that",
    "another thing",
    {
      "value":"a nested struct"
    }
  \]
}

Compared to the linearised output, the JSON above shows at a glance how the data is constructed.

### Usage Notes

-   Care should be taken when writing a JSON string to an INI file, as the INI specification can cause issues when using quotes and escape characters. See [ini\_write\_string()](../GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_write_string.md) for more information.
-   Circular references in DS maps, such as references back to the main map itself (forming an infinite loop) or references to maps within the main map forming such infinite loops, will be serialised only on the first level where they're encountered, and converted to null for deeper references. In the case of structs such references are immediately converted to null upon stringifying.

## Reading JSON

To read data from a previously created JSON string, you turn it into a struct using [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md):

my\_struct = json\_parse(struct\_json);

By default, string values in the JSON will be checked to see if they contain special values. If so, these values are converted to the internal GameMaker value. For example:

json = json\_stringify({ "infinity": infinity, "NaN": NaN});
show\_debug\_message(json);                                    // {"NaN":"@@nan$$","infinity":"@@infinity$$"}
data\_with\_strings\_converted = json\_parse(json);
show\_debug\_message(data\_with\_strings\_converted);             // { NaN : NaN, infinity : inf }
data\_with\_strings\_unchanged = json\_parse(json, , true);
show\_debug\_message(data\_with\_strings\_converted);             // { NaN : "@@nan$$", infinity : "@@infinity$$" }

### Usage Notes

-   The maximum nesting limit of the JSON string to be parsed or decoded is 128.
-   While trailing commas are not part of the JSON standard, GameMaker parses JSON strings that contain them. For example: {"name": "Level 1", "Description": "The first level", }.

## Serialisation

[Serialisation](https://en.wikipedia.org/wiki/Serialization "Serialisation") is described as follows:

> In computing, serialization (or serialisation) is the process of translating a data structure or object state into a format that can be stored (e.g. files in secondary storage devices, data buffers in primary storage devices) or transmitted (e.g. data streams over computer networks) and reconstructed later (possibly in a different computer environment).

In GameMaker, a struct is such a data structure. It can have both variables and functions as its members. When you stringify a struct's contents with [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md), only the struct's variables are written, not its functions.

NOTE You can only serialise [structs](../GameMaker_Language/GML_Overview/Structs.md "structs") this way in GameMaker, not [Data Structures](../GameMaker_Language/GML_Reference/Data_Structures/Data_Structures.md) or [Instances](../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instances.md).

By manually setting the [Static Struct](../GameMaker_Language/GML_Overview/Structs/Static_Structs.md) of the structs that [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md) returns with [static\_set](../GameMaker_Language/GML_Reference/Variable_Functions/static_set.md) you can restore those structs to their original state.

As an example, suppose you have a constructor Vector:

function Vector(\_x=0, \_y=0, \_z=0) constructor
{
    x = \_x;
    y = \_y;
    z = \_z;

    static add = function(\_v2)
    {
        x += \_v2.x;
        y += \_v2.y;
        z += \_v2.z;

        return self;
    }
    static sum = function(\_v1, \_v2)
    {
        // Note: call using Vector.sum(v1, v2)
        return new Vector(\_v1.x + \_v2.x, \_v1.y + \_v2.y, \_v1.z + \_v2.z);
    }
    static dot = function(\_v1, \_v2)
    {
        // Note: call using Vector.sum(v1, v2)
        return dot\_product\_3d(\_v1.x, \_v1.y, \_v1.z, \_v2.x, \_v2.y, \_v2.z);
    }
    // Other
}

You then create a few of these vectors:

v1 = new Vector();
v2 = new Vector(100, 100);
v3 = new Vector(200, 20, 50);
v1.add(v2);
v4 = Vector.sum(v2, v3);

These four vectors can be stored in an array and converted to JSON using [json\_stringify](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_stringify.md):

json = json\_stringify(\[v1, v2, v3, v4\]);

This JSON string can be saved or sent somewhere else.

At you point you might want to restore these vectors in another instance of the game, not just their values (x, y and z) but also their behaviour (add, sum, dot, ...).

To get the information back into structs you parse the JSON string using [json\_parse](../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.md) and then assign the individual array elements to the variable names used earlier:

vectors = json\_parse(json);
v1 = vectors\[0\];
v2 = vectors\[1\];
v3 = vectors\[2\];
v4 = vectors\[3\];

The structs have now been read back from the JSON string, but they are entirely new structs that don't belong to a constructor anymore. The structs were Vector structs in the original instance of the game, but aren't anymore. At least, not "officially", as you'll see with a call to the function [instanceof](../GameMaker_Language/GML_Reference/Variable_Functions/instanceof.md):

instanceof(v1, Vector);  // false
instanceof(v2, Vector);  // false
instanceof(v3, Vector);  // false
instanceof(v4, Vector);  // false

To tell GameMaker that each of these structs should, once again, belong to the Vector constructor, you can use the function [static\_set](../GameMaker_Language/GML_Reference/Variable_Functions/static_set.md):

var \_static\_vec = static\_get(Vector);
static\_set(v1, \_static\_vec);
static\_set(v2, \_static\_vec);
static\_set(v3, \_static\_vec);
static\_set(v4, \_static\_vec);

By using [static\_set](../GameMaker_Language/GML_Reference/Variable_Functions/static_set.md) on the structs you first detach them from the static as a simple "data" struct and reattach them to the static chain as "child" structs of the static struct of Vector. Since you can access all static members of the hierarchy of static structs (or constructors) a struct belongs to, this way you give the structs access to Vector's [Static Chain](../GameMaker_Language/GML_Overview/Structs/Static_Structs.htm#h), restoring their behaviour.

From here on, v1 to v4 _are_ instances of Vector!

instanceof(v1, Vector);  // true!
instanceof(v2, Vector);  // true!
instanceof(v3, Vector);  // true!
instanceof(v4, Vector);  // true!

And you can use them like any other Vector struct:

v1.add(v2).add(v3);
v5 = Vector.sum(v1, v1);

IMPORTANT In order for this to work, the functions must be defined as static so they belong to the _constructor_, rather than to the struct _instance_. If you don't declare the functions as static, each struct instance should receive a copy of the function through execution of the constructor. However, setting the static struct with [static\_set](../GameMaker_Language/GML_Reference/Variable_Functions/static_set.md) doesn't call the constructor, rather it moves the struct to a different place in the [Static Chain](../GameMaker_Language/GML_Overview/Structs/Static_Structs.htm#h) which enables it to access a different static struct's functions (see [How the Dot Operator Looks Up a Variable Name](../GameMaker_Language/GML_Overview/Structs/Static_Structs.htm#h2)).