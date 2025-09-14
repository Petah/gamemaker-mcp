---
title: "Static Variables"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Functions/Static_Variables.htm"
converted: "2025-09-14T03:59:28.854Z"
---

# Static Variables

An interesting feature of [script functions](../Script_Functions.md) and [method variables](../Method_Variables.md) is that they can have **static variables**.

A static variable is defined the first time the function is called and will maintain its value from then onward. It can only be changed inside the original function, and returning it will simply give you a copy of its value - essentially the shared static variable can only be changed by the function that contains it.

WARNING Static Variables cannot be declared outside of functions.

To create a static variable you need to define it using the static keyword, as shown in this simple example:

counter = function()
{
    static num = 0;
    return num++;
}

In the above example, the variable num is a static variable, and so will be defined as 0 the first time the function is called, but every time the function is called after that, the variable initialisation will be ignored. So, if you then call this function like this:

repeat (10)
{
    show\_debug\_message(counter());
}

The output will be:

0
1
2
3
4
5
6
7
8
9

If you didn't use the static keyword here the output would simply be 0 for every iteration of the loop, since the variable num will be getting defined as 0 every time the function is called before being returned.

### Initialisation Order

When a function is called, its static variables are initialised first, before the rest of the function body is executed.

This mean it's possible to access a static variable before the line where it's defined, as it would have already been initialised, even in the first call:

function static\_test()
{
    show\_debug\_message(static\_variable);
    static static\_variable = 1000;
}

However, it is not recommended to do this, and [Feather](../../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md) will show a GM2043 warning if you try to access a static variable before its initialisation line.

This also means you cannot have conditionally defined static variables, as they will always exist throughout the function body. For example, if you have a static variable initialised inside an if condition block, it will be initialised at the top regardless of the condition's result.

## Statics with Constructors

You can also use static variables in [constructor functions](../Structs.htm#constr). These functions are used to create new structs that contain the variables defined within the function.

Static variables in constructors are only initialised once for that constructor, and **they are not duplicated** for each new struct made from the constructor.

This means that no matter how many structs you create from a constructor, they will all **share the same value** for each static variable they have.

function weapon() constructor
{
    static number\_of\_weapons = 0;
    number\_of\_weapons++;
}

var \_weapon1 = new weapon();
var \_weapon2 = new weapon();

show\_debug\_message(\_weapon1.number\_of\_weapons); // Prints 2

In the example above, the weapon constructor holds a static variable called number\_of\_weapons, which is shared across all of its structs. With each new call to the weapon constructor, the number\_of\_weapons value goes up by 1.

After being called twice, the value of that variable becomes 2, which can be read from any of its structs, or from the constructor directly by writing weapon.number\_of\_weapons.

### Statics in Parent-Child Constructors

Generally, static variables are scoped to the function you define them in. In a hierarchy of constructors, a static variable is scoped to the constructor you define it in using the static keyword:

function item() constructor
{
    static number = 0;
}
function weapon() : item() constructor
{
    static types = \["sword", "bow", "hammer"\];
}

my\_weapon = new weapon();

Here the static variable number belongs to item and the static variable types belongs to weapon.

You can access both static variables through structs created from weapon:

show\_debug\_message(my\_weapon.number); // 0
show\_debug\_message(my\_weapon.types);  // \["sword", "bow", "hammer"\]

NOTE In more complex constructor hierarchies you might need to traverse the [Static Chain](../Structs/Static_Structs.htm#h).

### Initialisation Order

When using inheritance with constructors, any static variables in the child constructor will only be initialised once the parent constructor function has been completely executed. See the following example:

function parent() constructor
{
    static value = 10;
    show\_debug\_message(value);
}

function child() : parent() constructor
{
    static value = 20;
    show\_debug\_message(value);
}

var \_child = new child();

Calling the child() constructor prints this to the output log:

10
20

The first value is from the parent constructor, and the second is from the child constructor. This shows that the child's static variable value was not initialised until the parent constructor was finished.

## Accessing Static Variables

You can read a static value for a function using the <function\_name>.<static\_variable> syntax.

Say, for a function called counter, you have a static variable count. You can access that by typing counter.count after its first call.

function counter() {
    static count = 0;
    return count ++;
}

repeat (10)
{
    counter()
}

show\_debug\_message(counter.count);

WARNING You can't access a static variable from a function that was never called, as static variables are initialised on the first call to a function. Trying to do so will give you an error and crash your game.

For constructors, you can access static variables from the constructor function directly, or from any of the structs created from the constructor:

function weapon() constructor
{
    static number\_of\_weapons = 0;
    number\_of\_weapons ++;
}

var \_weapon1 = new weapon();
var \_weapon2 = new weapon();

show\_debug\_message(weapon.number\_of\_weapons);   // Accessing from constructor directly
show\_debug\_message(\_weapon1.number\_of\_weapons); // Accessing from a struct
show\_debug\_message(\_weapon2.number\_of\_weapons); // Accessing from a struct

All three show\_debug\_message() calls above would print the same value, as they are reading the exact same variable.

Just like with regular functions, you can't access a static variable from a constructor if that constructor was never called.

### Static Struct

All static variables belonging to a function are stored in a struct, which you can retrieve using [static\_get](../../GML_Reference/Variable_Functions/static_get.md). You can modify the static struct of a function to change the static variables it has using [static\_set](../../GML_Reference/Variable_Functions/static_set.md), however this function is only provided for use with structs for deserialisation purposes.

Static structs have most of their use with structs created from constructors. See: [Static Struct](../Structs/Static_Structs.md)

## Static Methods

You can also use the static keyword within a function to create a **static function**, which - like with variables - simply means that the function will only be defined once, which is the first time the function is called, for example:

function Vector2(\_x, \_y) constructor
{
    x = \_x;
    y = \_y;

    static Add = function( \_other )
    {
        x += \_other.x;
        y += \_other.y;
    }
}

In the above example, the [constructor function](../Structs.htm#constr) Vector2 can be used to create a struct, and the struct will have some variables, one of which is the method variable Add. Since this variable has been defined as static, the function it contains will only be initialised _once_ the first time the Vector2 function is called, and all further structs created with this constructor will reference the function Add that was created initially, instead of creating a new function for each struct (for more information on structs and the constructor keyword please see [Structs & Constructors](../Structs.md)).