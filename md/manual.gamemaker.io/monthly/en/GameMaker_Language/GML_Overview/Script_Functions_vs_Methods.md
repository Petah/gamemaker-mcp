---
title: "Script Functions vs. Methods"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Script_Functions_vs_Methods.htm"
converted: "2025-09-14T03:59:29.454Z"
---

# Script Functions vs. Methods

This page covers essential information about using [script functions](Script_Functions.md) vs. [methods](Method_Variables.md).

## Basic Difference

A [script function](Script_Functions.md) is created with this syntax:

function name()
{
    code;
}

A [method variable](Method_Variables.md) is created with this syntax:

name = function()
{
    code;
}

You should use the first syntax in [Script assets](../../The_Asset_Editors/Scripts.md), to create global functions that can be called from anywhere in your game. Execution of script functions retains the scope that was in use when the function was called.

You should use the second syntax when creating functions in [structs/constructors](Structs.md) and instances. This syntax creates a method variable containing a function that is bound to the struct or instance that created the function and always uses that scope during execution.

## Direct Calls

You can call both script functions and methods directly by using parentheses (),  just like a [runtime function](Runtime_Functions.md):

// Create the function
function reset\_x()
{
    x = xstart;
}

// Call the function
reset\_x();

You can also use the function [script\_execute()](../GML_Reference/Asset_Management/Scripts/script_execute.md) to run a script function.

## Overridden Script Functions

Calls to script functions are optimised at a compiler level. This may result in function overrides not being respected if script functions are defined inside Objects.

Consider the following example:

// obj\_parent
function talk()
{
   say\_hello();
}
function say\_hello()
{
   show\_message("I am the parent!");
}

// obj\_child
event\_inherited();

function say\_hello()
{
   show\_message("I am the child!");
}

talk();

Since talk is called inside the child, you would expect it to call the overridden say\_hello from the child. However since the functions are defined with the script function syntax, it will instead call the parent's say\_hello and print "I am the parent!", as it calls the defined script function with that name directly without looking up the function assigned to the variable.

This is easily fixed by using the method variable syntax, i.e. say\_hello = function(), to define all your functions inside the Objects, as recommended at the start of this page. This way all calls are done through the method variable and the function assigned to the variable is called.

Alternatively, you can explicitly call the method variable using self, e.g. self.say\_hello() so it always calls whichever function is assigned to the variable at the time of the call, instead of the defined script function with the same name.

## Indirect Calls: Methods

You can store a reference to a method in another variable, to call it later through that different variable:

// Create method
reset\_alpha = function()
{
    image\_alpha = 1;
}

// Pass reference and call
temp\_1 = reset\_alpha;
temp\_1();

NOTE See how the code doesn't put () after reset\_alpha. That's because we're reading the method reference and not calling it.

In this example, calling temp\_1 will call reset\_alpha, as it stores a reference to that **method**.

You are completely fine to pass around a method reference in this way. When using script functions though, there is a caveat.

## Indirect Calls: Script Functions

You can also store a reference to a script function, in another variable:

// Create function
function reset\_x()
{
    x = xstart;
}

// Store reference
temp\_1 = reset\_x;

Now, you can call temp\_1 by doing this:

temp\_1();

However, since this variable refers to a **script function**, it first has to convert it into a **method**, and then call it.

This can easily result in increased memory usage, especially if you're calling it every frame, because the engine now has to create a new method every frame for this call.

So, what is the solution?

-   Use [script\_execute()](../GML_Reference/Asset_Management/Scripts/script_execute.md) to call the script function via its reference, which will not create a method.
-   Or, the better solution: convert your script function [into a method](../GML_Reference/Variable_Functions/method.md) when passing its reference.

To implement the second solution, your code would look like this:

temp\_1 = method(undefined, reset\_x);

This is creating a new method from the reset\_x script function, using [method()](../GML_Reference/Variable_Functions/method.md).

Calling temp\_1() now using parentheses will not increase memory usage, as the method is already created for you.

Again, this only applies if you're calling a script function **indirectly**, via a reference stored in a variable. Calling it directly doesn't cause such problems.