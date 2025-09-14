---
title: "Method Variables"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Method_Variables.htm"
converted: "2025-09-14T03:59:29.372Z"
---

# Method Variables

A method variable is essentially a variable that has had a function assigned to it, "binding" the function to an instance or struct and enabling you to use the variable to refer to the function - much like you use a [runtime function name](Runtime_Functions.md) to refer to a built-in GML function. The variable used can be _local_, _instance_ or _global_ in scope (see [here](Variables_And_Variable_Scope.md) for more information on variable scope).

Also see: [Script Functions vs. Methods](Script_Functions_vs_Methods.md)

## Creating Methods

The syntax for creating a method variable is as follows:

name = function( parameter1, parameter2, ... )
{
    statement1;
    statement2;
    ...
}

or

function name( parameter1, parameter2, ... )
{
    statement1;
    statement2;
    ...
}

NOTE To create a function in GML Visual, use [Declare A New Function](../../Drag_And_Drop/Drag_And_Drop_Reference/Common/Declare_A_New_Function.md).

It is recommended that you should use the _first_ form for methods, and the second form for defining [script functions](Script_Functions.md), since the second form will also assign a script index to the function while the first form will be a "true" method. Using the second form introduces differences that are covered in [Overridden Script Functions](Script_Functions_vs_Methods.htm#h).

Defining a function in an Object's event using either syntax will make the function only available in the context of its instance (i.e. using the script function syntax will **not** make the function globally available unless it is in a Script asset).

NOTE You can check this by using both forms in a script and then calling the runtime function [typeof](../GML_Reference/Variable_Functions/typeof.md) on each of them. One will be classed as a "ref" - since it returns a script function reference - and the other will be classed as a "method".

NOTE A function defined in an Object's event using the script function syntax will be available to its instances throughout their lifetime, even when the event has not run yet. For example, defining a script function in the Alarm 0 event will make the function available to call in the Create event, regardless of when that alarm event runs (or whether it runs at all).

So, keep in mind that - in general - we will always be referring to functions that have _not_ been defined with a script index when we are talking about methods and method variables.

The syntax for defining a method inside a **struct literal** is similar to the first syntax above, however the \= is replaced by a : as required by struct literals:

struct =
{
    func : function( parameter1, parameter2, ... )
    {
        statement1;
        ...
    }
}

### Method Scoping

A method created in an instance or a struct will be **bound** to that instance or struct, which means that during the execution of that method, the [self](Instance%20Keywords/self.md) variable will refer to the instance or struct that the method is bound to, no matter where the method is being called from, and all variables will be read from and applied to that instance or struct. This bound instance or struct can be changed with the [method](../GML_Reference/Variable_Functions/method.md) function.

NOTE A function defined with the script function syntax will not be bound to its current context. Its [bound self](../GML_Reference/Variable_Functions/method_get_self.md) will return "undefined" until [changed](../GML_Reference/Variable_Functions/method.md).

Below you can see three simple examples of creating a method variable using different scopes:

// Local
var \_debug = function(message)
{
    show\_debug\_message(message);
}

// Instance
do\_maths = function(val1, val2, val3)
{
    return (val1 \* val2) - val3;
}

// Global
global.pd = function(\_x1, \_y1, \_x2, \_y2);
{
    return point\_distance(\_x1, \_y1, \_x2, \_y2);
}

Notice that in the above code, the various parameters that are given as inputs for the function are all named and these names are what should be used within the function to refer to the different inputs. Also note that you can use the [return](Language_Features/return.md) statement to return a value from a function for use elsewhere in your code, and that a function with _no_ return value defined, will return undefined by default.

While the variable will be in the chosen scope, the actual function will be bound to the scope that it was initially defined in. For example, [script functions](Script_Functions.md) are all global scope and "unbound" (i.e.: they are not associated with any instances), but if you have a script function that creates another function as a method variable within it and then you call this script function from an instance, the function used within the script will **be bound to the instance as a method**.

Once created, the method variable can be used just as you would a runtime function or a script function, for example:

create\_vec = function(\_x1, \_y1, \_x2, \_y2);
{
    var \_array;
    \_array\[0\] = point\_distance(\_x1, \_y1, \_x2, \_y2);
    \_array\[1\] = point\_direction(\_x1, \_y1, \_x2, \_y2);
    return \_array;
}

vec = create\_vec(x, y, mouse\_x, mouse\_y);

Variables created within a function will follow the same rules as normal and will be scoped according to the keyword used or the scope of the function call. In the above example, we use var so the array variable is in the _local_ scope of the function. If we didn't use the keyword, then the variable would have been created in the scope of the instance that created the function.

### Optional Arguments

Methods, just like script functions, can also take optional arguments that have default values for when they're not passed in:

create\_attachment = function(\_attachment, **\_x = x**, **\_y = y**)
{
    return instance\_create\_layer(\_x, \_y, layer, \_attachment);
}

The above function takes three arguments, where the last two are optional. If they are not passed in when the function is called, then they'll use the instance's x and y coordinates by default.

Note that if an argument is not passed in, and it does not have a default value, then it will be equal to undefined.

Methods can also make use of static variables, which maintain their values throughout every function call. Please [read this page](Functions/Static_Variables.md) for more information.

### Method Overriding

Methods created inside instances or structs can be overridden later by assigning a new function to the same variable, e.g. in the same event in a child object:

// obj\_parent Create event
say\_hello = function()
{
   show\_message("I am the parent!");
}

// obj\_child Create event
event\_inherited();

say\_hello = function()
{
   show\_message("I am the child!");
}

All calls to say\_hello in obj\_child will print "I am the child!".

Also see: [Overridden Script Functions](Script_Functions_vs_Methods.htm#h)

### Methods Are Structs

GameMaker stores methods as structs, where each "method struct" holds a reference to the script function to call and the struct or instance to which it is bound. You can get the script function behind a method by calling [method\_get\_index](../GML_Reference/Variable_Functions/method_get_index.md) and its bound struct or instance with [method\_get\_self](../GML_Reference/Variable_Functions/method_get_self.md).

**Methods being structs is irrelevant in most cases** as you would call them as functions and pass them into other functions that take methods - you would not use them as structs. However this detail can be important in a few edge cases, for example with the [Static Struct](Structs/Static_Structs.md), as each function in GameMaker has a static struct and each struct can have its own static struct that forms the [Static Chain](Structs/Static_Structs.htm#h). However the static struct functionality for method structs is **disabled** so you can directly access the static struct of the function behind it. Calling [static\_get](../GML_Reference/Variable_Functions/static_get.md) will give you the static struct for the function behind the method and calling [static\_set](../GML_Reference/Variable_Functions/static_set.md) on a method will do nothing.

## Function Reference

Below we list a few helper functions associated with method variables:

-   [is\_method](../GML_Reference/Variable_Functions/is_method.md)
-   [method](../GML_Reference/Variable_Functions/method.md)
-   [method\_get\_self](../GML_Reference/Variable_Functions/method_get_self.md)
-   [method\_get\_index](../GML_Reference/Variable_Functions/method_get_index.md)
-   [method\_call](../GML_Reference/Variable_Functions/method_call.md)