---
title: "struct_exists_from_hash"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/struct_exists_from_hash.htm"
converted: "2025-09-14T04:00:10.929Z"
---

# struct\_exists\_from\_hash

This function returns whether the variable, referred to by the hash, exists in the given struct or not.

You can retrieve the hash of a variable using [variable\_get\_hash](variable_get_hash.md).

#### Syntax:

struct\_exists\_from\_hash(struct, hash)

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct to check |
| hash | Real | The hash value referring to the variable (as returned by variable_get_hash) |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

var \_point1 = {x: 5, y: 10};
var \_point2 = {x: 5, y: 10, z: 100};
var \_hash = variable\_get\_hash("z");
var \_var\_exists1 = struct\_exists\_from\_hash(\_point1, \_hash);
var \_var\_exists2 = struct\_exists\_from\_hash(\_point2, \_hash);
show\_debug\_message($"\_point1 has a z: {\_var\_exists1}");
show\_debug\_message($"\_point2 has a z: {\_var\_exists2}");

The above code first creates two structs that store a point. Next, it gets the hash of the variable name "z" using [variable\_get\_hash](variable_get_hash.md). After that, it checks both structs using struct\_exists\_from\_hash to see if the variable exists. Finally, a debug message is shown for each of the structs.