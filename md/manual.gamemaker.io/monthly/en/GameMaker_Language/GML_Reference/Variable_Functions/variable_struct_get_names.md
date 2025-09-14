---
title: "struct_get_names"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_struct_get_names.htm"
converted: "2025-09-14T04:00:11.296Z"
---

# struct\_get\_names

This function returns an array with the variable names from a struct.

You pass in the struct reference to check, and each entry in the array will be a [String](../../GML_Overview/Data_Types.md) of the variable names that the struct contains.

NOTE This function doesn't return the _static_ variables of the struct. These belong to its [Static Struct](../../GML_Overview/Structs/Static_Structs.md), that you can get using [static\_get](static_get.md).

NOTE The order of the variable names returned in the array is not guaranteed and may not match the order in which the struct variables were initialised. As such you should not rely on the order of the names returned.

#### Syntax:

struct\_get\_names(struct);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to check (can be the global struct) |

#### Returns:

[Array](../../GML_Overview/Arrays.md) (each entry is a [String](../../GML_Overview/Data_Types.md))

#### Example 1: Basic Use

var \_my\_struct = {a: 7, str: "a string"};

var \_arr\_names = struct\_get\_names(\_my\_struct);
show\_debug\_message("Variables for struct: " + string(\_arr\_names));

var \_str = "", \_len = array\_length(\_arr\_names);
for (var i = 0; i < \_len; i++;)
{
    \_str = \_arr\_names\[i\] + ":" + string(struct\_get(\_my\_struct, \_arr\_names\[i\]));
    show\_debug\_message(\_str);
}

The above code first creates a temporary struct variable \_my\_struct with two variables in it: a and str. Next, struct\_get\_names is called to get an array with the variable names for the given struct. These are displayed. Finally, a for loop is used to loop through all the variable names in the array and to look up the corresponding value in the struct _by name_ using [struct\_get](variable_struct_get.md). For each of these key-value pairs, a debug message is shown using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md).

#### Example 2: Including Static Variables

function vec3(\_x, \_y, \_z) constructor
{
    x = \_x;
    y = \_y;
    z = \_z;

    static add = function(\_vec2)
    {
        x += \_vec2.x;
        y += \_vec2.y;
        z += \_vec2.z;
    };
    static dot = function(\_vec2)
    {
        return dot\_product\_3d(x, y, z, \_vec2.x, \_vec2.y, \_vec2.z);
    };
};
var \_v1 = new vec3(100, 20, 0);

var \_arr\_names = struct\_get\_names(\_v1), \_arr\_names\_static = struct\_get\_names(static\_get(\_v1));
var \_arr\_names\_all = array\_concat(\_arr\_names, \_arr\_names\_static);
show\_debug\_message($"Variable names for struct (including static): {\_arr\_names\_all}");

The extended example above shows how to include static variable names by retrieving a struct's static struct and appending those variable names to the array of variable names.

First a simple vec3 struct is defined, which stores an x, y and z variable, as well as two static methods add and dot. A new struct \_v1 is created from this. Next, both \_v1's and its static struct's variable names are retrieved using struct\_get\_names. The two arrays are then concatenated using a call to [array\_concat](array_concat.md). Finally, a debug message shows the contents of this new array, that contains _all_ of the struct's variable names.

NOTE In case the struct gets static variables from a chain or hierarchy of static structs you'll need to traverse the chain of static structs to get the names of _all_ static variables.