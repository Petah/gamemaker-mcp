---
title: "Constants"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Constants.htm"
converted: "2025-09-14T03:59:29.678Z"
---

# Constants

A constant is a type of variable that is set once at the start of the game and then never changes. In fact, constant values _cannot be changed after they have been declared_. This makes them ideal for holding values that are used throughout the game to identify special data.

Constants in GameMaker are global, i.e. they are accessible from any [Variable Scope](../Variables_And_Variable_Scope.htm#h) in the game, and note that unlike [Global Variables](../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md), they do not require use of the global. prefix.

In the GameMaker Language there are two types of user-defined constants: **enums** and **macros**, both of which are explained below. Also note that any value that is always the same is classed as a constant, regardless of the [data type](../Data_Types.md), for example, a string or the number 3.

NOTE The GameMaker Language also has a number of built-in constant values that are used to identify specific things. These are outlined on the appropriate pages for the runtime functions that require them in the [GML Code Reference](../../GML_Reference/GML_Reference.md) section and some general ones are mentioned at the bottom of this page.

## Enums

An enum is a **global identifier** that holds **a list of constant integer values**.

Enum is short for "enumerator"; it essentially permits you to create your own limited data type with a list of constant values. They have the following structure:

enum _<NAME>_
{
    _<MEMBER>_ \[= _<VALUE>_\],
    _<_MEMBER_\>_ \[= _<_VALUE_\>_\],
    // etc...
}

In the following example, we create an enum for the colours of the rainbow and assign it various constants and default values:

enum RAINBOW
{
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    INDIGO,
    VIOLET
}

The enum entries can only be **integer numbers** or **expressions with previous enums or built-in function calls that evaluate to an integer number**, and by default are numbered from 0 upwards, so our example given above would default to RED = 0, ORANGE = 1, YELLOW = 2, etc.

You can also assign custom values to the enum variables at the time of creation:

enum ENUM\_TEST
{
    VAL = 10
}

enum RAINBOW
{
    RED = 5,
    ORANGE = 5 \* 2,
    YELLOW = 15,
    GREEN = 20,
    BLUE = 25,
    INDIGO = 30,
    VIOLET = 35 \* ENUM\_TEST.VAL
}

Notice in the above example we use another enum to create an expression for "VIOLET". This only works if the enum being referenced was created _before_ the enum that is using it in an expression, but it will not work for user-created variables or functions, since the enum value must be able to be evaluated as a constant when the project is Compiling.

Also note that all enum values evaluate to **integer** values, and when you create your own you should be aware that _only integer values are permitted_ for enums to work. This value can be any integer number that a **floating point double precision** number can represent, including negative values.

To later access the value within a given enum type, use the point "." method, like this:

variable = <ENUM\_NAME>.<_ENUM\_MEMBER_\>;

As an example, let's use the "RAINBOW" enum that we created in the code above:

colour\_value = RAINBOW.GREEN \* RAINBOW.RED;

The colour\_value variable would now hold the value 100 (20 \* 5).

NOTE You _cannot_ modify the values for any enum constant after it has been created.

NOTE Enum values are stored as int64s, so running [is\_real](../../GML_Reference/Variable_Functions/is_real.md) on them will return false.

## Macros

A macro is a **global identifier** that holds an **expression** (which may be just a value).

You can see it as being similar to a variable, as it can hold any type of value (e.g. 10, "hello world", etc.). The main difference is that a macro **cannot be changed** at runtime once it's defined, as it needs to have a known value when your game is Compiling.

In addition to that, a macro can be an expression (e.g. sin(current\_time) + 10), which can then be used on its own in a statement, or as part of a larger expression. This does mean that the use of such a macro will not always be _constant_, as any function calls or identifiers included in the macro may return different values at different points in time in your game.

### Syntax

The syntax structure for a macro is as follows:

# macro _<NAME>_ _<VALUE>_

For example, say you define the following macro "TOTAL\_WEAPONS":

# macro TOTAL\_WEAPONS 10

Macro syntax...

The syntax shown above must be used correctly to define macros. You cannot use an equal sign (like in variables) or put a semicolon at the end (like in a regular statement). Doing so will cause your macro definition to become invalid.

For example, this is not a correct way to define a macro:

# macro TOTAL\_WEAPONS = 10;

Removing the equal sign and colon will make it a valid macro definition.

NOTE The recommended GML naming conventions recommend UPPERCASE\_NAMING for constants, however you may use lower case or any other naming conventions you like.

You could then use this in your code like this:

pos++;

if (pos >= TOTAL\_WEAPONS)
{
    pos = 0;
}

This may be in any object or script in your game, as a macro is **global** and can be used from anywhere.

Note that you would not be able to change the constant's value, so code like this will cause the game to crash:

TOTAL\_WEAPONS = 11;

You can define a macro anywhere in your code or in a script and it will be _pre-compiled_ and included in your game as if it was there from the start, but we recommend that you create a dedicated script asset and define all your macros in there. It will be easier to organise and debug later!

### Expression As Macro

As previously mentioned, a macro has the capability of holding an expression. This means if there's a function that you have to repeatedly call in your game with the same parameters, you can make it a macro:

# macro COL make\_colour\_hsv(irandom(255), 255, 255)

You would then call this macro something like this:

image\_blend = COL;

Using this code will make the image blend a different colour every time the macro is used.

You can also split macros over multiple lines using the \\ character to show where the line breaks are. An example would be something like:

# macro HELLO show\_debug\_message("Hello" + \\
string(player\_name) + \\
", how are you today?");

This is purely cosmetic, in that splitting a macro like this will have no effect over the result of the final macro when used, and is simply to provide support for multi-line text on macros that have longer lines of code.

### Configuration Override

One very important feature of macros is that they can be defined for use with specific [Configurations](../../../Settings/Configurations.md), meaning you can override the value of a macro when running in a given configuration.

For example, say you have a configuration for Android ads and another for iOS ads, then you could define a single macro to hold the required app ID value, and override it for each configuration:

# macro AD\_ID ""
# macro Android:AD\_ID "com.yoyogames.googlegame"
# macro iOS:AD\_ID "com.yoyogames.appstoregame"

Configurations do not necessarily have to be named after a platform. You might e.g. also have a specific configuration for a demo version of your game:

# macro DemoVersion:AD\_ID ""

As you can see, you give the config name first then a colon : and then the macro name and override value. Note that you cannot have any white-space between the colon : and either the config name nor the macro name otherwise you will get an error.

Macro overrides are inherited by child configurations. Say you have the following configuration set-up:

![](../../../assets/Images/Settings/Configs_Children.png)Here, any macro overrides set for MobileAds will be inherited by MobileNoAds, and you can override an inherited value by setting a macro for that child configuration.

## Built-In Constants

The following table shows a list of the built-in constants that can be returned by some functions and operations in your projects:

| Constant | Description |
| --- | --- |
| pointer_null | This constant indicates that the pointer is not pointing to anything meaningful (the same as NULL in C++ or null in C#).This value is falsy. |
| pointer_invalid | This constant simply means that the value is not a valid pointer |
| undefined | This constant is returned when a function has to return something but has no appropriate or "correct" value to return.This value is falsy. |
| NaN | This constant that can be returned when the compiler cannot evaluate the results of an operation as a number - for example, 0 / 0 cannot be defined as a real number, and is therefore represented by NaN |
| infinity | This constant  refers to a number that is considered infinite, such as the result you would get when dividing any floating point value by zero, e.g. 1.0/0. |
| true | This constant represents the value 1, which is what GameMaker will evaluate as a boolean "true" (note that any value equal to or greater than 1 will evaluate as true). |
| false | This constant represents the value 0, which is what GameMaker will evaluate as a boolean "false" (note that any value less than or equal to 0 will evaluate as false). |
| pi | This constant represents the value of pi: 3.141592653589793280..., although the exact value will depend on various factors like the OS or the platform being targeted. |

See [Equality Table](../../../Additional_Information/Type_Tables.htm#h) for information on equality comparisons for a few of the constants listed above.