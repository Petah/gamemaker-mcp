---
title: "struct_get_from_hash"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/struct_get_from_hash.htm"
converted: "2025-09-14T04:00:10.967Z"
---

# struct\_get\_from\_hash

This function gets the value of a struct member using the hash returned by [variable\_get\_hash](variable_get_hash.md).

NOTE The compiler automatically replaces variable names that it detects cannot ever change while your game is running (i.e. they are _constant at compile time_) with their hash value. It can be useful to get the hash yourself if you only know the name of the variable that's accessed while your game is running (i.e. _at runtime_). See [Compiler Optimisations](../../../Settings/Runner_Details/Compiler_Optimisations.md).

#### Syntax:

struct\_get\_from\_hash(struct, hash)

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to use |
| hash | Real | The hash of the variable to get (as returned by variable_get_hash) |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable)

#### Example:

var \_the\_struct = {a: 77, b: 88, c: 99};
var \_hash = variable\_get\_hash("a");
var \_value = struct\_get\_from\_hash(\_the\_struct, \_hash);

The above code creates a temporary struct \_the\_struct with three member variables: a, b and c. It then gets the hash of a variable a. This hash is then used in struct\_get\_from\_hash to retrieve the value of the struct member with the corresponding name. The returned value is assigned to another temporary variable \_value.