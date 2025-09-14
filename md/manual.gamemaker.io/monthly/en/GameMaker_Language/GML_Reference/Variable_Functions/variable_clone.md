---
title: "variable_clone"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_clone.htm"
converted: "2025-09-14T04:00:11.053Z"
---

# variable\_clone

This function clones the value you pass it and returns the new clone.

It clones nested structs and arrays up to a given depth (128 by default), which you can override by providing the optional depth parameter.

### Usage Notes

-   When cloning a struct created using a constructor, the new struct will also be an instance of the original constructor.
-   When cloning a struct that contains a method whose "self" exists in the struct being cloned, the clone of the method in the new struct will be rebound to the clone of the original "self" in the new struct, mirroring the relationships of the original.

    If the method's "self" does _not_ exist in the struct being cloned, the clone of the method is bound to the original "self".
-   The built-in [Data Structures](../Data_Structures/Data_Structures.md) and [Instances](../Asset_Management/Instances/Instances.md) are _not_ cloned; for this type of variable the actual value (data structure reference or instance handle, respectively) is copied.
-   Built-in structs, such as the structs related to sequences and animation curves, cannot be cloned using this function.

#### Syntax:

variable\_clone(value\[, depth\]);

| Argument | Type | Description |
| --- | --- | --- |
| value | Any | The value to clone |
| depth | Real | OPTIONAL The maximum depth level to clone the variable, in case this is e.g. a nested struct. The default is 128, the maximum possible value. |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable)

#### Example 1: Basic Use

var \_the\_original = {a: "some text", b: \[1, 2, 3, 4, 5\], c: 6};
var \_the\_clone = variable\_clone(\_the\_original);

The above code first defines a temporary struct variable \_the\_original. A clone is then created from this variable using variable\_clone. The new variable is stored in another variable \_the\_clone.

#### Example 2: Cloning Methods

the\_struct =
{
    my\_value: 12,
    my\_method: function() { show\_debug\_message($"My value is: {my\_value}"); }
}

the\_new\_struct = variable\_clone(the\_struct);
the\_new\_struct.my\_value = 24;

the\_struct.my\_method();
the\_new\_struct.my\_method();

The above code example shows an example where variable\_clone is used to copy a struct that contains a method.

First, a struct with two variables is defined: a variable my\_value that stores the value 12 and a variable my\_method that stores a method bound to this struct. The struct is stored in a variable the\_struct. Next, the struct is cloned, including the method it contains. Since the method is bound to the struct itself, its "self" exists in the struct being cloned and the "self" of its clone is rebound to the clone of the original "self" struct. The new struct's my\_value variable is then set to 24. Finally, the method of each struct is called. Calling the original struct's method outputs 12, calling the cloned struct's method outputs 24.