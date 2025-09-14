---
title: "ref_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/ref_create.htm"
converted: "2025-09-14T04:00:10.868Z"
---

# ref\_create

This function creates a reference to a [Variable](../../GML_Overview/Variables_And_Variable_Scope.md) in a struct or instance.

You provide the struct or instance that the variable belongs to, _or_ a reference to it, and the name of the variable (**as a string**), _or_ reference to a variable that stores the name or index.

For [Arrays](../../GML_Overview/Arrays.md), an index can be provided as the third argument that tells which index to create a reference to.

More complex references can be created. For the full list of possibilities, see the examples.

NOTE The value can be changed through the reference in [The Debug Overlay](../Debugging/The_Debug_Overlay.md).

WARNING You _cannot_ create references to [Local Variables](../../GML_Overview/Variables/Local_Variables.md), since they exist only temporarily and cannot be referenced.

#### Syntax:

ref\_create(dbgrefOrStruct, dbgrefOrIndex\[, index\]);

| Argument | Type | Description |
| --- | --- | --- |
| dbgrefOrStruct | Reference or Struct | The struct or instance containing the variable to reference, or a reference to it. self / other / global are also accepted. |
| dbgrefOrIndex | Reference or String | The name of the variable as a string, or a reference to it |
| index | Real | OPTIONAL The index in the array, if what's referenced is an array |

#### Returns:

[Reference](ref_create.md)

#### Example 1: Basic Reference to an Instance Variable

text = "This is some text";
ref\_to\_text = ref\_create(self, "text");

The code above first creates an instance variable text in the Create event and then creates a reference to it using ref\_create, that's stored in the variable ref\_to\_text.

#### Example 2: Basic Reference to an Array Index

array = \[1, 2, 3, 4, 5\];
ref\_to\_index = ref\_create(self, "array", 2);

The code above first creates an array array with 5 elements in the instance executing the code. It then creates a reference to index 2 (the third element) using ref\_create. The reference is stored in a new instance variable ref\_to\_index.

#### Example 3: Complex Reference

the\_struct = {a: "text", b: 485};
ref\_to\_struct = ref\_create(self, "the\_struct");
ref\_to\_struct\_var = ref\_create(ref\_to\_struct, "a");

The above code first creates a struct the\_struct in the instance executing the code that has two variables. It then creates a reference to that struct using ref\_create that is then passed as the dbgrefOrStruct parameter to the next call to ref\_create. This last call to ref\_create creates a reference to the struct's variable a and stores it in a variable ref\_to\_struct\_var. The struct itself is passed to the function _indirectly_, using the reference stored earlier in the variable ref\_to\_struct.

#### Example 4: Complex Array Reference

array = \[3, 4, 1, 7, 8, 2\];
index = 4;
ref\_to\_array = ref\_create(self, "array");
ref\_to\_index = ref\_create(self, "index");
ref\_to\_array\_at\_index = ref\_create(ref\_to\_array, ref\_to\_index);

The above code creates a reference to an array array where both the first parameter to ref\_create (the array to reference) and the second parameter (serving as the index into the array) are themselves references. This means that if you assign a different value to the variable index later on, the array element indexed by ref\_to\_array\_at\_index also changes to the new value set. If you assign an entirely new array to the instance variable array, ref\_to\_array\_at\_index will reference the element at the same index in that array.