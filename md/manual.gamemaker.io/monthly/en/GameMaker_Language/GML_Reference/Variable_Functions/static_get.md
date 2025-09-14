---
title: "static_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/static_get.htm"
converted: "2025-09-14T04:00:10.888Z"
---

# static\_get

This function returns the [Static Struct](../../GML_Overview/Structs/Static_Structs.md) for the given function or struct.

When a struct is passed, the return value will be depend on the struct itself:

-   **For a method**: Returns the static struct for the function behind the method and **not** the method struct itself (methods are stored as structs, see: [Methods Are Structs](../../GML_Overview/Method_Variables.htm#h)).
-   **For a struct created from a constructor using the [new](../../GML_Overview/Language_Features/new.md) keyword**: Returns the static struct for the constructor that was used to create the struct (or a different struct if it was changed after creation using [static\_set](static_set.md)).
-   **For a static struct**: Returns the parent static struct in the [Static Chain](../../GML_Overview/Structs/Static_Structs.htm#h). When using constructor inheritance, static structs are chained, i.e. you can get the static struct of a static struct, if the constructor has a parent constructor.
-   **For any other struct**: Returns this struct's "parent" struct, which links the struct to the "root" struct.
-   **For the "root" struct**: Returns undefined

See: [Static Struct](../../GML_Overview/Structs/Static_Structs.md)

#### Syntax:

static\_get(struct\_or\_func\_name);

| Argument | Type | Description |
| --- | --- | --- |
| struct_or_func_name | Struct, Function or Method | The struct, function or method for which to get the static struct |

#### Returns:

[Struct](../../GML_Overview/Structs.md) or [undefined](../../GML_Overview/Data_Types.md) (for the root struct)

#### Example 1:

function counter()
{
    static count = 0;
    return count ++;
}

repeat (10) counter()

// Get static struct of counter()
var \_static\_counter = static\_get(counter);

// Both of these read the same variable
show\_debug\_message(counter.count); // 10
show\_debug\_message(\_static\_counter.count); // 10

The above code creates a function counter() with a static variable. The function is called repeatedly so its static variable's value is increased.

The static struct for that function is then returned, and stored in a variable (\_static\_counter). Then it prints the static variable from the function, by first reading it from the function directly (counter.count) and then reading it from the static struct (\_static\_counter.count). Both print the same value, as they refer to the exact same variable.

#### Example 2: Going Up in the Static Chain

function item() constructor
{
    static hello = function()
    {
        show\_debug\_message("Hello World!");
    }
}
function potion() : item() constructor {}

my\_potion = new potion();
var \_static\_potion = static\_get(my\_potion);
var \_static\_parent = static\_get(\_static\_potion);
\_static\_parent.hello();

The above code first creates two constructors: a parent constructor item with a single static function hello and a child constructor potion. It then creates a new potion and stores it in a variable my\_potion. Next, a call to static\_get is made to get the static struct of my\_potion. The returned static struct, stored in a temporary variable \_static\_potion, is part of the static chain. From this point, all further calls to static\_get will move up in the static chain. Another call to static\_get is made, which returns the static of item and stores it in another temporary variable \_static\_parent. Finally, this struct's hello method is called.