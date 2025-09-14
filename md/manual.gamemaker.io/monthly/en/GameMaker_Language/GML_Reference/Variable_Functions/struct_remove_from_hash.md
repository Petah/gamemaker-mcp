---
title: "struct_remove_from_hash"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/struct_remove_from_hash.htm"
converted: "2025-09-14T04:00:10.985Z"
---

# struct\_remove\_from\_hash

This function removes the variable, referred to by the given hash, from the struct.

You can retrieve the hash of a variable using [variable\_get\_hash](variable_get_hash.md).

#### Syntax:

struct\_remove\_from\_hash(struct, hash);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct to remove the variable from |
| hash | Real | The hash value referring to the variable (as returned by variable_get_hash) |

#### Returns:

N/A

#### Example 1: Basic Use

var \_hash = variable\_get\_hash("my\_first\_var");
var \_struct =
{
    my\_first\_var: 398043,
    my\_second\_var: "Hello!"
};
struct\_remove\_from\_hash(\_struct, \_hash);

var \_arr\_names = struct\_get\_names(\_struct);
array\_foreach(\_arr\_names, show\_debug\_message);

The above code shows how to remove a variable from a struct using struct\_remove\_from\_hash. First, the hash of the variable name is retrieved with a call to [variable\_get\_hash](variable_get_hash.md) and stored in a temporary variable \_hash. Next, a struct is created that holds a variable with that name and another variable. struct\_remove\_from\_hash is then called with the hash, which removes my\_first\_var from the struct. Finally, to check if the variable was removed, the struct's variable names are retrieved with a call to [struct\_get\_names](variable_struct_get_names.md) and each name is output in a debug message (using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md) with [array\_foreach](array_foreach.md)).

#### Example 2: Optimised Removal of the Same Variable in Many Items

randomise();

arr\_party\_stats =
\[
    {hp: 100, mp: 100},
    {hp: 100, mp: 100},
    {hp: 89, mp: 70}
\];
var \_to\_remove = choose("hp", "mp");
var \_hash = variable\_get\_hash(\_to\_remove);

var i = 0, \_num = array\_length(arr\_party\_stats);
repeat(\_num)
{
    struct\_remove\_from\_hash(arr\_party\_stats\[i++\], \_hash);
}

The above code shows how to use [variable\_get\_hash](variable_get_hash.md) and struct\_remove\_from\_hash in a situation where the compiler cannot optimise automatically by calculating the hash at compile time.

First, an array of structs arr\_party\_stats is initialised. Each struct contains two variables: hp and mp. Then, the variable name to remove is chosen randomly at runtime with a call to [choose](../Maths_And_Numbers/Number_Functions/choose.md). The compiler cannot replace the variable name with its corresponding hash value here, as it cannot know at compile time what the output of the [choose](../Maths_And_Numbers/Number_Functions/choose.md) function is going to be. This situation can still be optimised if you get the hash yourself at runtime with a call to [variable\_get\_hash](variable_get_hash.md). The result of this function call is stored in a temporary variable \_hash. Finally, the variable is removed from every struct in the array by calling struct\_remove\_from\_hash in a repeat loop. The same hash value can be used with every call to the function, since the variable name is the same every time.