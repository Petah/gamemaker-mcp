---
title: "Global Variables"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Global_Variables.htm"
converted: "2025-09-14T03:59:29.696Z"
---

# Global Variables

A **global** variable is one that, once declared, belongs to no instance in particular and yet can be accessed by all. Just like [Local Variables](Local_Variables.md), global variables must be declared using an identifier, but unlike a local variable, a global variable remains in memory _until the end of the game_. So, you can create a global variable to keep track of (for example) the number of bullets that the player has and then just update this variable at different points in the game, from any place in your code and at any time. Any changes made to the variable are "global", in that all instances accessing the variable will be affected by the change. Let's have a look at an example:

global.food = 5;

We declare the food variable by first writing the global keyword and then a dot . to tell GameMaker that this variable is global in scope. We will need to use this form from now on any time we are required to access or to change this variable in any way.

So, we have created a new variable called food and we have declared it as global. Now, any instance, struct or function can use and change this variable in any way and all other instances will "see" this. For example we could have a different food object that the player collides with and in the collision event we have:

global.food +=1;

We also have another object that draws this value like this:

draw\_text(32, 32, "food = " + string(global.food));

With global variables we can change values and see those changes reflected in all instances of the objects that reference this variable. As with _local_ variables you have to take care not to name your global variables the same as any instance variables as that may cause you problems and make bugs creep into your games due to variable overlap, which can be a difficult issue to debug sometimes. In general you should have a single object that declares all your global variables at the very start of the game (for example, in the [Room Start Event](../../../../../../The_Asset_Editors/Object_Properties/Other_Events.md) of the first object instance placed in the first room of the game) or a single [script function](../Script_Functions.md) that declares them all together, as this gives you a handy place to go back and reference everything at once should you need to check a variable name or edit a value.

NOTE Inside the Script Editor you're in global scope, so the global. prefix can be omitted. For clarity's sake it can, however, be good to include it anyway.

## The Global Struct

Global variables are stored in a [struct](../Structs.htm#struct), which you can access like any other struct. To refer to this struct you use the global keyword.

For example, to show all global variables and [script functions](../Script_Functions.md) that you defined you can use the following code:

show\_debug\_message(global);

## Built-in Global Variables

GameMaker has a collection of "built-in" global variables too, so you should be aware of them as you may name one of your instance variables the same or wish to have your own global variable with the same name and wonder why you are getting errors! They are easy to spot, however, as they are shown in a different colour in the code editor and also come up in the auto-complete bar at the bottom. The majority of built-in global variables have very specific uses and are listed in the appropriate sections of the manual - however there are two important ones that are used frequently and aren't listed elsewhere:

-   [async\_load](Builtin_Global_Variables/async_load.md)
-   [event\_data](../../../../../../GameMaker_Language/GML_Reference/Game_Input/Gesture_Input/event_data.md)

There are also three **deprecated** built-in global variables which you should be aware of (these variables are only designed to support legacy projects from previous versions of GameMaker and should **_not be used in new projects_**):

-   [score](Builtin_Global_Variables/score.md)
-   [health](Builtin_Global_Variables/health.md)
-   [lives](Builtin_Global_Variables/lives.md)

Finally, there are two variables that can be used in script functions and methods:

-   [argument](Builtin_Global_Variables/argument.md)
-   [argument\_count](Builtin_Global_Variables/argument_count.md)

## globalvar

DEPRECATED The globalvar declaration is **deprecated** and only supported for legacy purposes. You should **always** explicitly refer to global scope using the global. prefix.

The second form for creating global variables is to declare them as such using the globalvar declaration, much as you would a [local variable](Local_Variables.md) using the var declaration.

This (deprecated) declaration would be used as follows:

globalvar food;
food = 5;

Once declared in this way the variable food is now considered global and requires no global. prefix - which also means that it's a lot harder to identify global variables in your code and it's also much easier to get variable overlap as you use the same variable name in different objects or from extensions that you've installed. Once declared in this way the global variable is accessed as follows:

food += 2;

or:

draw\_text(32, 32, "food = " + string(food));

As you can see, with nothing to show that the variable is global in scope you are potentially setting yourself up for many subtle problems to arise in your game, which is why this declaration should be avoided.

There are a few functions designed to help you when dealing with global variables, which you can find on the following page:

-   [Variable Functions](../../../../../../GameMaker_Language/GML_Reference/Variable_Functions/Variable_Functions.md)