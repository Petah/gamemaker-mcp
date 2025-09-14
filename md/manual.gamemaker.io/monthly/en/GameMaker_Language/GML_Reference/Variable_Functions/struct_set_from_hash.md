---
title: "struct_set_from_hash"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/struct_set_from_hash.htm"
converted: "2025-09-14T04:00:11.000Z"
---

# struct\_set\_from\_hash

This function sets the value of the struct member referred to by the given hash, returned by an earlier call to [variable\_get\_hash](variable_get_hash.md).

NOTE The compiler automatically replaces variable names that it detects cannot ever change while your game is running (i.e. they are _constant at compile time_) with their hash value. It can be useful to get the hash yourself if you only know the name of the variable that's accessed while your game is running (i.e. _at runtime_). See [Compiler Optimisations](../../../Settings/Runner_Details/Compiler_Optimisations.md).

#### Syntax:

struct\_set\_from\_hash(struct, hash, val);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to set |
| hash | Real | The hash of the variable to set (as returned by variable_get_hash) |
| val | Any | The value to assign to the struct variable |

#### Returns:

N/A

#### Example:

point = {x: 200, y: 100};
hash\_x = variable\_get\_hash("x");
repeat(1000)
{
    struct\_set\_from\_hash(data, hash\_x, random(room\_width));
}

The above code first creates a struct point with an x and y variable in it. Next, the hash for the variable name "x" is then retrieved using [variable\_get\_hash](variable_get_hash.md). After that, a repeat loop is executed a total of 1000 times. Every iteration of the repeat loop assigns a new random value to the point's x coordinate. This is done using struct\_set\_from\_hash to optimise this operation.