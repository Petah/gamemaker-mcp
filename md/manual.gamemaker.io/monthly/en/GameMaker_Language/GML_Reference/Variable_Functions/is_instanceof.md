---
title: "is_instanceof"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_instanceof.htm"
converted: "2025-09-14T04:00:10.502Z"
---

# is\_instanceof

This function returns whether the given [struct](../../GML_Overview/Structs.md) is an "instance of" the given [constructor](../../GML_Overview/Structs.htm#constr). You can use this function to check if the constructor used to create your struct was the same one as you supplied in the second argument, or if it's a child constructor of your given constructor.

This means that if your struct was created from constructor B, and constructor B is a child of constructor A, calling is\_instanceof(struct\_of\_B, A) will return true.

This function works by checking the [Static Chain](../../GML_Overview/Structs/Static_Structs.htm#h) of your given struct to see if your given constructor is included anywhere in that chain. See: [Static Struct](../../GML_Overview/Structs/Static_Structs.md)

NOTE If you use [static\_set](static_set.md) to replace the static chain of a struct, it will modify the behaviour of this function on that struct, as it checks the static chain to determine inheritance. Using [static\_set](static_set.md) is not recommended aside from deserialisation cases where an anonymous struct is loaded back as part of a hierarchy.

#### Syntax:

is\_instanceof(struct, constructor);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct to check (the "instance") |
| constructor | Function | The constructor to check (is the struct an instance of this constructor?) |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

function item() constructor {}

function potion() : item() constructor {}

function enemy() constructor {}

var \_potion = new potion();

show\_debug\_message(is\_instanceof(\_potion, potion)); // true (1)
show\_debug\_message(is\_instanceof(\_potion, item)); // true (1)
show\_debug\_message(is\_instanceof(\_potion, enemy)); // false (0)

The above code shows three constructors: item, potion which is a child of item, and enemy, which is a separate constructor.

It creates a struct from the potion constructor. Using is\_instanceof(), we can check that the new struct:

-   is a potion
-   is an item
-   is not an enemy

This way you can check whether a struct "is" something, as **a potion is an item**, so it returns true for both constructors. However if wouldn't be true the other way around: **an item is not a potion**.