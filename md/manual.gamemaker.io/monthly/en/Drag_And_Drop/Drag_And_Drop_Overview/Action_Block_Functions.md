---
title: "Action Block Script Functions"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Overview/Action_Block_Functions.htm"
converted: "2025-09-14T03:59:23.116Z"
---

# Action Block Script Functions

One of the most important assets in [The Asset Browser](../../Introduction/The_Asset_Browser.md) is the [Script](../../The_Asset_Editors/Scripts.md) asset. Scripts are special assets in that they are essentially "containers" for user-defined functions and are not themselves actually called by you directly in your games. All scripts are **global** in scope and will be run automatically by GameMaker when your game starts, so you can use them to define global variables and functions that you want to use throughout your game.

Each GML Visual script can have one or more user-defined functions added to it, and these functions are created using the action [Declare A New Function](../Drag_And_Drop_Reference/Common/Declare_A_New_Function.md):

![Declare A New Function Syntax](../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Declare_Function.png)The functions you define here will be global in scope and act much like any built-in GML Visual action, i.e.: they can take different values - or none at all - called arguments (or parameters), and then perform a task, returning a value or returning nothing as required. You would then call the function in your games using the [Function Call](../Drag_And_Drop_Reference/Common/Function_Call.md) ![Function Call Icon](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/i_Execute_Function.png) action, which looks like this:

![Function Call Syntax](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Common_Execute_Function.png)To create a GML Visual script, you simply use the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) anywhere in [The Asset Browser](../../Introduction/The_Asset_Browser.md) and select **Create** then **Script**. This will create a new GML Visual script and open the editor window:

![D&D Script editor](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Scripts.png)You can name the script by right clicking ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) on it in [The Asset Browser](../../Introduction/The_Asset_Browser.md) and selecting **Rename** (or by using a slow double left click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png)), but note that the script name must conform to the general rules for assets, so they must start with a letter and only contain letters, numbers or the "\_" under-bar symbol. Your script will also be pre-populated with a [Declare A New Function](../Drag_And_Drop_Reference/Common/Declare_A_New_Function.md) action, ready for you to fill it out, and you can add more function declarations as required (a single script can hold multiple functions, which is useful for grouping functions with similar or connected usage together).

As mentioned above, you can pass a number of arguments to a function, and it will use these to perform the task you have written it for. To understand this better, take - for example - any of the built-in actions and think about how it works... you place it in an event and supply a number of values and it will make your instance do something. User-defined functions are exactly the same, with the only difference being that _you_ write them.

When defining a new function, you give it a name and also define the name of any arguments it takes, if it takes any (functions can take no arguments or multiple arguments depending on what you require). If you give argument names, then these will be used in the actions that the function calls as **local variables** holding the function input values.

It is also good practice to add in a comment for the action that explains what it does, following the [JS Doc rules](../../The_Asset_Editors/Code_Editor_Properties/JSDoc_Script_Comments.md). For example, consider this function set\_vec():

![D&D Function Example With Comments](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_FunctionExample.png)To call the script above you would simply use the [Function Call](../Drag_And_Drop_Reference/Common/Function_Call.md) action, like this:

![Call A Function From A Script](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Declare_Function_2.png)Not only can you pass arguments into a function, but you can also ask a function to return a value (using the [Return](../Drag_And_Drop_Reference/Common/Return.md) ![Return Action Icon](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/i_Return.png) action), so you can use them to (for example) build calculating methods or give back an instance ID after a complex collision detection or any number of things. Please note, however, that using return **ends the function**, and so no actions placed after it has been used will be executed, and this means that a certain amount of thought has to go into how your functions are structured.

Below is a GML Visual function that returns a value:

![D&D Script Return Example](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Script_Example_Return.png)

The function above simply checks all the instances in a room to see what their object\_index is and if one of them is the player object the function will return true (ending the function call) or false. You would call this function like this:

![Call D&D Script With Return Value](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Script_Call_Return.png)So, we call the function and have it create a temporary (local) variable to store the returned value (which in this case is either true or false), and then this variable is checked and an action taken.

You can also make arguments optional and define a default value, so in case they are not provided in a function call the default value will be used instead. See the action's [Extended Example 2](../Drag_And_Drop_Reference/Common/Declare_A_New_Function.htm#h) for more information.

When making functions for your GML Visual scripts you can use all the same actions as you would when adding actions into an object event, and you can even call functions from within functions, and in this way create more "modular" action code. Building scripts with functions in this way can save you a lot of time creating the same action sequences and can also help make your action sequences easier to read and easier to debug.