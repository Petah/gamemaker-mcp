---
title: "static_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/static_set.htm"
converted: "2025-09-14T04:00:10.910Z"
---

# static\_set

This function is used to change the [static struct](../../GML_Overview/Structs/Static_Structs.md) of a struct. You supply the struct to modify, and the new static struct to apply to the struct. You can get the static struct of any struct or function using [static\_get](static_get.md).

This will override the static chain for the struct, which is used to determine which constructor(s) a struct belongs to, using [is\_instanceof](is_instanceof.md).

WARNING It's not recommended to use this function aside from deserialisation use-cases, where you need to load a struct and apply a constructor to it. See: [Changing The Static Struct](../../GML_Overview/Structs/Static_Structs.htm#h1)

NOTE You cannot pass another function to this function. Methods, however, are stored as structs (see: [Methods Are Structs](../../GML_Overview/Method_Variables.htm#h)) but the static struct functionality is **disabled** for them, so this function will do nothing when a method is passed.

#### Syntax:

static\_set(struct, static\_struct);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct to set the static struct for |
| static_struct | Struct | The new static struct to use for the struct |

#### Returns:

N/A

#### Example 1: Basic Use

var \_potion = json\_parse(\_json\_string);

show\_debug\_message(is\_instanceof(\_potion, potion)); // false (0)

var \_static\_potion = static\_get(potion);
static\_set(\_potion, \_static\_potion);

show\_debug\_message(is\_instanceof(\_potion, potion)); // true (1)

In the code above, upon loading the potion struct from a JSON string, it's only created as a simple struct and doesn't belong to a constructor, nor does it have any static variables.

After applying the static struct for potion to it (which is a constructor), it becomes an instance of potion (as tested with is\_instanceof()) and also gets any static variables and static methods contained in the potion constructor.

#### Example 2: Assigning a Static Struct to a Pure Data Struct

function vec2(\_x, \_y) constructor
{
    x = \_x;
    y = \_y;

    static add = function(\_vecb)
    {
        x += \_vecb.x;
        y += \_vecb.y;
    }

    // ...
}

var \_a = new vec2(10, 10);
var \_b = {x: 4, y: 9};

static\_set(\_b, static\_get(vec2));

\_b.add(\_a);

show\_debug\_message(\_b);

The code above first defines a constructor function to create vec2 structs. The constructor function assigns the parameters \_x and \_y to the struct's x and y variables respectively. It also defines a static add function (and possibly many others, indicated by the // ... comment), which can be used by all structs that have this constructor's static struct as their static struct.

Two struct variables are then defined: \_a is created using the vec2 constructor function and gets an (x, y) of (10, 10), \_b is created as a basic struct with just two variables: x set to 4 and y set to 9.

The struct variable \_b is then assigned the static struct of vec2 using static\_set, this turns \_b into a vec2 struct, making the static variables and functions of vec2 available to \_b. After that, \_a is added to \_b by calling the add function on \_b. \_b is then shown using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md). This debug output will show { x : 14, y : 19 }.