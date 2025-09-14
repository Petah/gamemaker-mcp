---
title: "Variables And Variable Scope"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables_And_Variable_Scope.htm"
converted: "2025-09-14T03:59:29.752Z"
---

# Variables And Variable Scope

Variables are the basic unit for most programming operations. Like any programming language, **GML** uses them.

They are used to store information in the device's memory for later (or instant) use, and given a name so you can refer to them in [runtime](Runtime_Functions.md) and [script functions](Script_Functions.md).

A variable in **GML** can store many different [Data Types](Data_Types.md), like a real number (e.g.: 100, 2.456575, \-56, etc.), a string (e.g.: "Hello world!"), an integer (e.g.: 1, 556, \-7), or a boolean (true or false), as well as other things:

var \_num = 126.4545;
var \_str = "Hello World";
new\_num = \_num \* 100;
global.my\_string = \_str + " I said";

You can also use variables to hold the values returned from functions, for example:

var \_id = instance\_nearest(x, y, obj\_Tree);
root = sqrt(1000);
global.str = string\_upper("Hello World");

So, a variable is something that we can name and use to store a value for later use in one or more operations.

A good "real world" example of a variable is the speed of something, e.g. the speed of a car. A car's speed is clearly _variable_, because at some point in time the car will be standing still (i.e. its speed is equal to 0), at another point in time the car will be driving (i.e. its speed is greater than 0). When the car accelerates or slows down, its speed changes. So it makes sense that if you want to store the car's speed in a GameMaker game that you store it in a **variable**. In the game, you'd e.g. set the variable to 0 when the game starts and change it whenever you want the car to change its speed.

## Variable Assignment

In GML, like in many programming languages, you first have to create a variable "assignment" before you can use it. This basically means that you tell the computer the name you wish to use for the variable and assign it an initial value. The variable is then given a place in memory to store the value or perform operations on it. A variable assignment takes the form:

<variable> = <expression>;

An expression can be a simple value but can also be more complicated, so, rather than assigning a value to a variable, you can also add a value to the current value of the variable using +=, for example:

a = 100;   // Assigning a simple value
b = 200;
c = 300;
a += b;    // Assigning with operation
a = b + c; // Assigning with expression

NOTE The GameMaker Language will also accept := for assignments, although this is not typically the most common way to do it:

<variable> := <expression>;

Similarly, you can subtract using \-=, multiply using \*=, divide using /=, or use bitwise operators using |=, &=, or **^=**. You can also add or subtract _one_ from a value using **++**, **\--**. For further information see the section on [Expressions And Operators](Expressions_And_Operators.md).

Note that you _cannot_ do the following (or any variation):

a = b = c = 4;

And instead it should be done as:

a = 4;
b = 4;
c = 4;

## Naming Rules

When forming variables in **GML** they must have a name that starts with a letter or the underscore symbol \_ and can contain only letters, numbers, and the underscore symbol \_ with a maximum length of 64 symbols. So, valid variable names are things like fish, foo\_bar, num1, or \_str, while invalid ones would be 6fish, foo bar, or \*num.

You cannot use the names of your assets (e.g. Sprites, Scripts, etc.) for your variables, unless you specify an instance or struct (or keywords like [global](../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md), [self](Instance_Keywords.md)) before such a name, e.g. if you have a script called Script1, a variable called Script1 can be defined as self.Script1 = <value>; in an instance or a struct. Doing this explicitly defines the scope of such a variable. For more information, see the section below.

## Variable Scope

Every variable in GameMaker belongs to a scope. When any code is being executed, it has a "current scope" which determines what variables are accessible (i.e. to be read and modified).

The scope of a variable is determined by where you first define the variable, and from that point on, the variable belongs to that scope.

### Types of Scope

By default, when you assign variables in [Object Events](../../The_Asset_Editors/Object_Properties/Object_Events.md), they're created as **instance** variables, however there are actually five main identifier types you can program with GameMaker, each with its own **scope**.

The different kinds of identifiers and their scopes are all outlined in the following pages:

-   [Global Variables](../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md)
-   [Constants](Variables/Constants.md)
-   [Instance Variables](Variables/Instance_Variables.md)
-   [Static Variables](Functions/Static_Variables.md)
-   [Local Variables](Variables/Local_Variables.md)

Scopes are not entirely separated and some scopes are always accessible from other scopes. In case of an [Object Event](../../The_Asset_Editors/Object_Properties/Object_Events.md) being executed, the following rules will apply:

-   **Global variables and constants** are always available.
-   **The instance variables for the current instance** are available while in the scope of that instance.
    -   The same applies to **struct variables** while in the scope of a struct, and the **static variables of a function** while that function is being executed.
-   **Any local variables initialised in the current event or function call** are available only till the end of the event or call.

### Changing Scope

You can change the current scope temporarily to access variables from different scopes. This can mainly be done in two ways:

-   The dot operator, e.g. a.b, which means "the variable b of the scope a".
-   The [with](Language_Features/with.md) statement, e.g. with(a) {b = 10;}, which means "execute the following lines of code in the scope of a".

The variable a can be either an instance or a struct. You can also use one of the [Instance Keywords](Instance_Keywords.md) or the global keyword.

Rules for the current scope changing are documented in [When 'self' changes](Instance%20Keywords/self.htm#h).

## Built-in Variables

The GameMaker Language has multiple different built-in variables that can have any of the above-mentioned scopes (except _local_). These variables are special as they are included by default as part of the objects and the rooms in the game world. Some built-in global variables are listed in the section mentioned above, and the different parts of the manual for sprites, rooms, objects, etc., also outline the built-in variables available in each case.

Examples of built-in instance variables are:

-   [sprite\_index](../GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md)
-   [path\_scale](../GML_Reference/Asset_Management/Paths/Path_Variables/path_index.md)
-   [speed](../GML_Reference/Asset_Management/Instances/Instance_Variables/speed.md)

And examples of built-in global variables are:

-   [view\_xport](../GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_xport.md)
-   [instance\_count](../GML_Reference/Asset_Management/Instances/instance_count.md)
-   [room](../GML_Reference/Asset_Management/Rooms/room.md)

Most built-in variables can be changed and set like other variables, and some can even be [Arrays](Arrays.md), only you don't have to set them to create them like you would a regular variable as they will already be initialised to a default value.

## Variable Functions

Finally, there are a number of functions that are dedicated to setting, getting or checking variables in some way, available from the following page:

-   [Variable Functions](../GML_Reference/Variable_Functions/Variable_Functions.md)