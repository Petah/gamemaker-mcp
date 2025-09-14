---
title: "weak_ref_any_alive"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/weak_ref_any_alive.htm"
converted: "2025-09-14T04:00:00.119Z"
---

# weak\_ref\_any\_alive

With this function you can check the weak reference to various [structs](../../GML_Overview/Structs.md) to see if it they are still "alive" or not. You supply an array of weak references to check (each weak reference should have been created using the function [weak\_ref\_create](weak_ref_create.md)), and the function will return true if _**any**_ of the structs are still being referenced somewhere or false if they are not and have been garbage collected. Note that if you supply an array where any of the values are not a weak references, the function will return undefined.

Note that the function also takes two optional arguments, where the first permits you to supply an initial index into the array to check from, as well as an argument to set the number of positions (length) from that index to check. If specified, only the array indices within those parameters will be checked.

#### Syntax:

weak\_ref\_any\_alive(array, \[index\], \[length\])

| Argument | Type | Description |
| --- | --- | --- |
| array | Array of Struct Weak References | Array containing weak references to the structs that you want to check. |
| index | Real | OPTIONAL The index into the array to start checking from |
| length | Real | OPTIONAL The number of positions, starting from the given index, to check for |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md) (or undefined)

#### Example:

if weak\_ref\_any\_alive(inventory\_ref\_array)
{
    instance\_destroy(obj\_Inventory\_Control);
}

The above code checks an array of weak references and if any are still alive then an instance is destroyed.