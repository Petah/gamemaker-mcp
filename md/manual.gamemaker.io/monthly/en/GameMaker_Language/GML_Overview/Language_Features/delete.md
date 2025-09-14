---
title: "delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/delete.htm"
converted: "2025-09-14T03:59:29.107Z"
---

# delete

The delete operator is used to **de-reference** a [struct](../Structs.md) and has the following syntax:

delete <variable>;

You call the delete operator along with the variable that holds a struct and it will remove the specific _reference_ to the struct stored in the given variable (a reference is simply a value that points to the memory area that is storing the struct and its contents). If this reference was the last reference to the struct in your game, then the garbage collector will remove the struct from memory in its next iteration.

NOTE delete can only be used along with variables, and _not_ expressions.

By default, structs with no further references in code will be garbage collected automatically in the steps following their use, but it is good practice to use this operator to flag them explicitly for the garbage collector to remove from memory at the very start of the following step, freeing the memory quickly and more efficiently.

The following example shows a struct being created - for example in the Create Event of an instance:

mystruct =
{
    a : 0,
    b : 100,
    c : "Hello World"
}

This struct will then be used in the instance events as usual, before finally being flagged for garbage collection in the [Clean Up](../../../The_Asset_Editors/Object_Properties/Object_Events.md) event, like this:

delete mystruct;