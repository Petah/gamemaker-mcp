---
title: "Script Functions And Variables"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Script_Functions.htm"
converted: "2025-09-14T03:59:29.433Z"
---

# Script Functions And Variables

Script assets are essentially a collection of one or more user-defined functions or variables that you write yourself as snippets of code in [The Script Editor](../../The_Asset_Editors/Scripts.md). The functions you define in a script can resolve expressions, return values or do anything else that the GameMaker Language permits, just like the built-in [Runtime Functions](Runtime_Functions.md).

Script functions should generally be used if you have a block of code that you use in more than one place or object, or when you want a block of code to be used across multiple objects in a modular fashion. Using scripts to define functions means that you can change the function just once when required and the change will be "picked up" by every object that has a call to the function.

Scripts can also be very handy from an organisational point of view, as they permit you to create groups of functions that belong to a certain category - for example, you might have several functions all related to collisions between instances in your game, so you would create a "Collision\_Functions" script and store all these functions together in it.

## Creating Functions

When creating a [Script Asset](../../The_Asset_Editors/Scripts.md) with functions in it, the functions can be created using the following formats:

function name( parameter1, parameter2, ... )
{
    statement1;
    statement2;
    ...
}

or:

name = function( parameter1, parameter2, ... )
{
    statement1;
    statement2;
    ...
}

TIP To create a function in GML Visual, use [Declare A New Function](../../Drag_And_Drop/Drag_And_Drop_Reference/Common/Declare_A_New_Function.md). Enable its "Temp" option to create a method variable (second syntax shown above).

In general, however, you would use the _first_ form for script functions as it will define the function as specifically being a script function, meaning that it will be **global** in [scope](Variables_And_Variable_Scope.md), be assigned a **script index**, and not require the global prefix to identify it since the compiler will recognise it as a script function.

Using the second form will instead generate a global scope [method variable](Method_Variables.md), and as such it will _not_ be recognised as a script function by the IDE and will require the use of the global prefix when being referenced in your code. Related: [Script Functions vs. Methods](Script_Functions_vs_Methods.md)

NOTE You can check this by using both forms in a script and then calling the runtime function [typeof()](../GML_Reference/Variable_Functions/typeof.md) on each of them. One will be classed as a "ref" - since it returns a script function reference - and the other will be classed as a "method".

This rule also applies when a function or method is created in an Object's event, however in that case the created script function (with the first syntax) will not be global and will only be available in the instance's context. See [Method Variables](Method_Variables.md) for more information.

## Parameters/Arguments

You can define your own parameters/arguments for a function, which will be available to the function as local variables and can be used for any purpose within that function:

function move(**spd, dir**)
{
    speed = **spd**;
    direction = **dir**;
}

This function takes two arguments and applies their values to the instance's speed and direction variables. It can now be called like any runtime function and arguments can be passed into it:

var \_mouse\_dir = point\_direction(x, y, mouse\_x, mouse\_y);

**move(4, \_mouse\_dir);**

## Index-Based Arguments

Arguments passed into a function can also be accessed through the argumentN variables (_argument0, argument1, etc._) or the [argument\[\]](Variables/Builtin_Global_Variables/argument.md) array (_argument\[0\], argument\[1\], etc._).

You can get the number of arguments passed into the function using [argument\_count](Variables/Builtin_Global_Variables/argument_count.md), thus allowing a variable number of arguments to be passed in.

function print(){
    var \_str = "";

    for (var i = 0; i < argument\_count; i ++)
    {
        \_str += string(argument\[i\]);
    }

    show\_debug\_message(\_str);
}

// In an object
print("Player : ", current\_time, " : ", id, " : fired");

This print() function loops through all the passed arguments, and adds them to a string variable. That string is then printed to the output log.

You can now call this function with as many strings as you like, which will all be joined together.

## Optional Arguments

If an argument is not given to a function, its value will be undefined. You can use this to define _optional_ arguments, and check whether an argument is passed in or not by checking if it is equal to undefined. However, you can also explicitly define a default value for an argument which will be used instead of undefined when it is not passed in.

You can assign such a default value to a parameter using the equal (\=) sign, making it an optional variable:

function move(spd, **dir = 90**)
{
    speed = spd;
    direction = dir;
}

If the dir argument is not passed in when calling the above function, then its value will default to 90, moving the instance in an upward direction.

TIP You can omit arguments from function calls and they will default to undefined (or the default value for that argument as defined by the function).

For example, writing my\_func(0,,,1) is the same as writing my\_func(0, undefined, undefined, 1).

---

The default value of an optional variable can be an expression. When defining such a default value, you can call functions, use variables of any types and do anything you otherwise can in an expression in GML Code.

Note that such an expression will only be executed if its optional argument is not provided in the function call. See the following example of a logging function:

function log(text = "Log", object = object\_index, time = date\_datetime\_string(date\_current\_datetime()))
{
    var \_string = "\[" + string(time) + "\] ";
    \_string += object\_get\_name(object) + ": ";
    \_string += text;

    show\_debug\_message(\_string);
}

This function takes three arguments, where the first argument defaults to a string constant, the second argument defaults to an instance variable (in the scope of the calling instance) and the third argument defaults to an expression calling a function to retrieve the current date and time. This function can now be called with up to three arguments, as seen in the following example:

log();
// Prints: \[09-Jun-21 12:34:37 PM\] Object1: Log

log("Player Shot", obj\_player, 10);
// Prints: \[10\] obj\_player: Player Shot

## JSDoc

We also recommend that you add comments to define the properties of the function (see the section on [JSDoc Comments](../../The_Asset_Editors/Code_Editor_Properties/JSDoc_Script_Comments.md) for more details), such that a simple script would look like this:

/// @function                 log(message);
/// @param {string}  message  The message to show
/// @description              Show a message whenever the function is called.

function log(message)
{
    show\_debug\_message(message);
}

Additional functions for the script can be added using the same format as shown above, one after the other within the script asset.

![Multiple Functions In One Script](../../assets/Images/Scripting_Reference/GML/Overview/Multiple_Functions_Scripts.png)

## Return Value

Functions in scripts can also return a value, just as runtime functions can, and as such they can be used in expressions. For this you would use the [return](Language_Features/return.md) statement:

return <expression>;

It should be noted that the **_execution of the function ends at the return statement_**, meaning that any code which comes after **return** has been called _will not be run_. Here is a short example function from a function called "sqr\_calc" which calculates the square of whatever value is passed to it, and in case the given value is not a real number, it uses **return** to end the function early so the actual calculation never runs:

/// @function           sqr\_calc(val);
/// @param {real}  val  The value to calculate the square of
/// @description        Calculate the square of the given value

function sqr\_calc(val)
{
    if (!is\_real(val))
    {
        return 0;
    }

    return (val \* val);
}

Note that if you create a script function with _no_ return value then in your code check for one, you will get the value undefined by default.

To call a script function from within a piece of code, just use it the same way as when calling any runtime function - that is, write the function name with the parameter values in parentheses. So, the above script would be called like this:

if (keyboard\_check\_pressed(vk\_enter))
{
    val = sqr\_calc(amount);
}

NOTE When using your own functions from scripts in the code editor, you can press ![F1 Icon](../../assets/Images/Icons/Icon_f1.png) or click the middle mouse button  ![MMB Icon](../../assets/Images/Icons/Icon_MMB.png)on the function name to open the script that contains it for editing directly.

## Script Names vs. Function Names

It is important to understand that script _names_ are **independent of the functions that they contain**, so you can name your scripts in a more "common sense" way, i.e.: all your AI functions could go in a script "Enemy\_AI" and contain functions like ai\_target\_pos(), ai\_alert\_level(), ai\_state(), etc.

However, you can still name a script the same as a function that you define in it and call the script, e.g. if you want one function per script (which can be useful for making reusable libraries so all functions are shown in the Asset Browser). When doing this, it is important to understand how script references behave to avoid code errors, due to the way GameMaker stores asset references.

For example, consider this code, called from an instance's event:

function indirectCall(func, arg)
{
    func(arg);
}

indirectCall(myscript, arg);

The above code is attempting to call a script called myscript within a method, which in this case will fail. This is because the inline function is actually using the _index_ for the script asset and **not** actually calling the script function - e.g.: if the script index resolves to "4", essentially the function is calling 4(arg), which makes no sense.

Here are two things you can do to work around this:

1.  Convert the script index into a [method](../GML_Reference/Variable_Functions/method.md) before passing it as an argument
2.  Use [script\_execute](../GML_Reference/Asset_Management/Scripts/script_execute.md) to call the passed script reference

Both ways are shown below:

// 1
function indirectCall(func, arg)
{
    func(arg);
}

indirectCall(method(undefined, myscript), arg);

// 2
function indirectCall(func, arg)
{
    script\_execute(func, arg);
}

indirectCall(myscript, arg);

NOTE Keep in mind that if your script is **completely empty**, it will not be loaded into the compiled game and will become non-existent; meaning that trying to reference such a script asset will crash your game. Note that this only applies to scripts that are completely empty, so even if your script only contains comments, it will still be included in the compiled game.

## Script Scope

This leads us to the final and most important thing to know about scripts and the functions they contain: scripts are parsed on a **global** level and will be **compiled at the very start of the game**. This means that _technically_ all functions in a script are "unbound" [method variables](Method_Variables.md), and any variables declared outside of a function in the script will be considered [global variables](../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md). For example, consider this script:

function Foo()
{
    // Do something
}
blah = 10;
function Bar()
{
    // Do something else
}

In the above case, not only have we defined the functions Foo and Bar but also the variable blah and all of them are considered to have been created in the **global** scope. The functions don't need the global keyword to be recognised as the compiler understands that these functions are part of the script, but if you wanted to access blah then you would need to do:

val = global.blah;

That said, we recommend that you **always explicitly type global variables** when creating them in scripts to prevent any issues later. Scripts are also an ideal place to define any **Macros** or **Enums** ([constants](Variables/Constants.md)), as adding them to a script outside of a function also means that they will be created for use before the game code actually starts running. Below is an example of a script that is creating different global scope values for a game:

/// Initialise All Global Scope Values And Constants
global.player\_score = 0;
global.player\_hp = 100;
global.pause = false;
global.music = true;
global.sound = true;

enum rainbowcolors
{
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
}

# macro weapon\_num 3
# macro weapon\_gun 0
# macro weapon\_bomb 1
# macro weapon\_knife 2

Note how all these constants are set up outside of any function call, meaning they will be initialised before everything else and at a _global_ scope. This means that if you want to use a script to initialise variables on an _instance_ scope then you must wrap them in a function, for example:

/// @function                init\_enemy();
/// @description             Initialise enemy instance vars

function init\_enemy()
{
    hp = 100;
    dmg = 5;
    mana = 50;
}

So, scripts can be used to generate macros, enums and global variables before the game starts so they are ready for use at any time, and they can also be used to create "unbound" methods (user-defined functions) that can be used in your game like GML runtime functions.

One final thing to note about script functions is that if you are developing for **Web** (i.e.: targeting **HTML5**), then there is an additional function protocol that you can use when adding functions to scripts, which is to prefix a function name with gmcallback\_, for example:

gmcallback\_create\_button

Using the above function name would mean that the function gmcallback\_create\_button() will not be obfuscated and so can be used in JavaScript extensions and other areas of your game, for example, when using the [clickable\_\*](../GML_Reference/Web_And_HTML5/Web_And_HTML5.md) functions.

## Static Variables

Functions can also make use of static variables, which maintain their values throughout every function call. Please [read this page](Functions/Static_Variables.md) for more information.