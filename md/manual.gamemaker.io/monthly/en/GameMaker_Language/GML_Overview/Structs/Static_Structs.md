---
title: "Static Struct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Structs/Static_Structs.htm"
converted: "2025-09-14T03:59:29.493Z"
---

# Static Struct

Every function has a "static struct", where its static variables are stored. You can get that struct using [static\_get](../../GML_Reference/Variable_Functions/static_get.md):

function counter()
{
    static count = 0;
    return count ++;
}

repeat (10) counter();

// Get static struct of counter()
var \_static\_counter = static\_get(counter);

// Both of these read the same variable
show\_debug\_message(counter.count); // 10
show\_debug\_message(\_static\_counter.count); // 10

This is also true for [constructor functions](../Structs.htm#constr). Each constructor has a static struct, where its static variables and static methods are stored.

Every struct created from the constructor accesses its static variables from that static struct.

WARNING You can't access a static variable from a function that was never called, as static variables are initialised on the first call to a function. Trying to do so will give you an error and crash your game.

## Static Chain

When you use constructor inheritance, those constructors form a "static chain" - a chain of static structs where each child links to its parent.

For example, let's say you have a constructor item, and a constructor potion which is a child of item:

function item() constructor {}

function potion() : item() constructor {}

var \_potion = new potion();

You can get the static struct of potion using static\_get(potion) - this is where the static variables for potion are stored. Let's call this static\_potion.

Now, if you call static\_get(static\_potion), you will get the static struct for item! This is the same struct you would get from static\_get(item).

function item () constructor {}
function potion () : item () constructor {}

var \_potion = new potion();
var \_static\_potion = static\_get(potion);

show\_debug\_message(static\_get(item) == static\_get(\_static\_potion)); // true (1)

This is because item is the parent of the potion constructor, so the static struct for item is linked to the static struct for potion.

The static structs of the top-level constructor functions, i.e. those that don't have a parent constructor, share the same parent struct. This struct is the "root" static struct, which has undefined as its parent struct:

var \_static\_item = static\_get(item);         // the static struct of item
var \_root = static\_get(\_static\_item);        // the static struct of all top-level static structs
var \_must\_be\_undefined = static\_get(\_root);  // undefined

This shared struct is the root parent struct of _all_ structs and defines the default toString function that's called when the struct is converted to string.

This means that you can get the full static chain of a struct as follows:

static\_chain = \[\];
var \_node = static\_get(potion);                        // the static struct to start at
while (!is\_undefined(\_node))
{
    array\_push(static\_chain, \_node);
    \_node = static\_get(\_node);
};

array\_foreach(static\_chain, show\_debug\_message);       // output the path to the root struct

## Same Variable Name in Parent & Child Constructor

As static variables belong to the constructor in which they're defined, it is possible to define a static variable in a child constructor with the same name as a static variable of the parent constructor. For example:

function shape () constructor
{
    static count = 0;
    count++;

    static shapes = \[\];
    array\_push(shapes, self);
}
function rectangle () : shape () constructor
{
    static count = 0;
    count++;
}
function square () : rectangle () constructor
{
    static count = 0;
    count++;
}
function ellipse () : shape () constructor
{
    static count = 0;
    count++;
}

Each shape now has its own count static variable that keeps track of the number of items of that shape. Child shapes will increment the count of their parent shapes as well, as they run their parents' constructors in addition to their own.

s1 = new shape();        // Added 1 shape
s2 = new rectangle();    // Added 1 rectangle (and therefore also 1 shape)
s3 = new square();       // Added 1 square (and therefore also 1 rectangle and 1 shape)
s4 = new ellipse();      // Added 1 ellipse (and therefore also 1 shape)

show\_debug\_message($"Number of shapes: {shape.count}");          // 4
show\_debug\_message($"Number of rectangles: {rectangle.count}");  // 2
show\_debug\_message($"Number of squares: {square.count}");        // 1
show\_debug\_message($"Number of ellipses: {ellipse.count}");      // 1

## How the Dot Operator Looks Up a Variable Name

Let's say you're looking for a specific variable in a struct, using the dot operator (i.e. struct.variable\_name).

If the struct contains a non-static variable with that name, the dot operator returns that variable. If it doesn't, the dot operator returns the first variable in the static chain with that name, checking the current static struct, and then traversing back the entire static chain, if needed, until a variable with that name is encountered. If the variable name cannot be found anywhere in the static chain, GameMaker will throw an error.

For example:

function root() constructor
{
    static show = function()
    {
        show\_debug\_message("root");
    }
}

function child() : root() constructor { }

function child\_with\_static\_func() : root() constructor
{
    static show = function()
    {
        show\_debug\_message("child\_with\_static\_func");
    }
}

function child\_with\_func() : root() constructor
{
    show = function()
    {
        show\_debug\_message("child\_with\_func");
    }
}

child1 = new child();
child1.show();

child2 = new child\_with\_static\_func();
child2.show();

child3 = new child\_with\_func();
child3.show();

The following happens in the above code:

-   child1 is a child, which has no show() method of its own but inherits from root. root.show() is called and "root" is output.
-   child2 is a child\_with\_static\_func, which has a static show() method. This method is called, which outputs "child\_with\_static\_func".
-   child3 is a child\_with\_func, which inherits from root but also has its own (non-static) show() method. It calls its own show() method, outputting "child\_with\_func".

## Parent's Static Variable or Method

In certain situations you may want to access a static variable or method of the parent constructor from within the child constructor. To achieve this, you can go up the static chain and access the parent's static variable:

function parent() constructor
{
    static init = function() { show\_debug\_message("Parent Innit?"); }
}

function child() : parent() constructor
{
    static init = function()
    {
        var \_static = static\_get(self);
        var \_static\_parent = static\_get(\_static);
        \_static\_parent.init(); // Calls the parent's init()

        show\_debug\_message("Child Innit!");
    }
}

## Checking Inheritance

You can use [is\_instanceof](../../GML_Reference/Variable_Functions/is_instanceof.md) to check if a struct belongs to the given constructor, or has the constructor as a parent.

This is done by checking if your struct has the given constructor's static struct anywhere in its static chain.

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

## Changing The Static Struct

The function [static\_set](../../GML_Reference/Variable_Functions/static_set.md) lets you change the static struct of another struct. This way you can make changes to a struct's "static chain".

The recommended use-case for this function is deserialisation. If you're loading structs from JSON, those structs won't belong to any constructors, however you can change that by using [static\_set](../../GML_Reference/Variable_Functions/static_set.md) to "apply" a constructor to a struct, so that that struct receives its shared static variables and you can run [is\_instanceof](../../GML_Reference/Variable_Functions/is_instanceof.md) to check its kind.

var \_potion = json\_parse(\_json\_string);

show\_debug\_message(is\_instanceof(\_potion, potion)); // false (0)

var \_static\_potion = static\_get(potion);
static\_set(\_potion, \_static\_potion);

show\_debug\_message(is\_instanceof(\_potion, potion)); // true (1)

In the code above, upon loading the potion struct from a JSON string, it's only created as a simple struct and doesn't belong to a constructor, nor does it have any static variables.

After applying the static struct for potion to it (which is a constructor), it becomes an instance of potion (as tested with is\_instanceof()) and also gets any static variables and static methods contained in the potion constructor.