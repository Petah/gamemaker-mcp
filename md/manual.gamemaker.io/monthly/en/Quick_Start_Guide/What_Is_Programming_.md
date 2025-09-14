---
title: "What Is Programming?"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/What_Is_Programming_.htm"
converted: "2025-09-14T04:00:13.232Z"
---

# What Is Programming?

In the [previous section](Quick_Start_Guide.md), we outlined how GameMaker works to create your game, but regardless of the sprites, objects or rooms that you have added, nothing will happen unless you have **programmed** it to happen. But, what is a program?

In the general sense, a program is simply a set of instructions (or **statement**s) that you give to the computer to tell it to perform certain tasks. These tasks can vary greatly from simply telling the computer to draw something to the screen, to calculating a value based on some user input and then reacting to it, but in all cases it's a logical structure that will give some result. In the previous page we talked about moving an instance of an object to the right by 2 pixels, so let's have a look at the actual program that would do that:

In GML Visual it would look like this:

![GML VisualExample](../assets/Images/QS_Guide/QS_DnD_Example.png)

And using GML Code, it would look like this:

x = x + 2;

To understand what's going on above, we must first talk about **Variables**, and then we'll go on to discuss **Functions** and finally **Conditionals** as these three things are generally what makes up the bulk of any program.

[VariablesVariables](What_Is_Programming_.htm#)

Variables are the cornerstone of programming, along with **functions** (which we'll cover briefly in a moment). A variable is simply a _named value_, and in the case above the variable is called "x". Now, "x" can be any value, like -126, or 583, or even 1.56378, but the actual value of "x" is irrelevant as it can vary (hence the name "variable"). What is important is that we take "x" and add 2 to it. It's worth noting that in this case "x" is a **built-in variable**, which means that it's a variable that is create by GameMaker for all objects, but you can create your own variables too.

To create a variable, it must be **declared** before it can be used. Declaring a variable is telling GameMaker that this new variable exists and it has an initial value. To declare a variable you would simply do something like this:

![Declare GML VisualVariables](../assets/Images/QS_Guide/QS_DnD_Declare.png)

or:

points = 0;

Once a variable has been declared, then it can be used in further programmed code or actions. The great thing about variables is that it permits you to "re-use" a value in multiple places, without actually having to worry about what the value is. For example, say you have a "damage" variable and you use it in various places to tell GameMaker to deal a certain amount of damage to other objects in the game. We may declare "damage" as 20, but later on decide that this is too great a value and want to change it to 10. If we'd used the value 20 instead of a variable, we'd need to go through all our code or actions and change 20 to 10, which is time consuming and error prone. However, using a variable means we only have to change it _once_ to 10 when we declare it and the rest of the code or actions will use this new value.

It is worth noting that there are many different types of variables, and each one has slightly different ways it can be used. We won't be covering this here, but you can find out more information from the [GameMaker Language Overview](../GameMaker_Language/GML_Overview/Variables_And_Variable_Scope.md) section of the manual.

However, variables are only the first part of the story. The next part is the use of Functions...

[FunctionsFunctions](What_Is_Programming_.htm#)

The next main important part of programming is the use of **functions** along with variables. A function is simply an instruction to the computer to do something, and it can have input values as well as output values (ie: you can give a value to it, and it will do some operation and then return a different value), although not all functions require input, nor do they have an output. To better understand this, let's look at a built-in function in GameMaker.

The function we'll look at is [instance\_number()](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_number.md), which in GML Visual is the [Get Instance Count](../Drag_And_Drop/Drag_And_Drop_Reference/Instance/Get_Instance_Count.md) action. This function/action will retrieve the number of instances of a given object in the game room, and you would use it like this:

![Get Instance Count GML VisualAction](../assets/Images/QS_Guide/QS_DnD_GetInstanceCount.png)

or:

number = instance\_number(obj\_Enemy);

In both of the above examples, the function takes an object ID as its input value (the **argument** or **parameter**) and will give an output value (the **return** value), which is the number of instances of the given object present in the room when the function/action was called. Note that we use a variable to store the returned value, the variable "number". This variable can be declared before this code is run, or it will be considered as being declared when the code is run and the return value from the function/action assigned to it.

It is worth noting that you are not just limited to using the built-in GameMaker Language or GML Visual actions and you can actually construct your own functions to use to extend what is possible when programming (you can find out more about this [here](../GameMaker_Language/GML_Overview/Script_Functions.md) for GML and [here](../Drag_And_Drop/Drag_And_Drop_Overview/Action_Block_Functions.md) for GML Visual).

You can do a lot with functions and variables, however they would be pretty much useless without the final important piece of the programming story, **conditionals**...

[ConditionalsConditionals](What_Is_Programming_.htm#)

A large part of programming is made up of asking questions. These questions are generally simple ones that can evaluate to either true or false, and are called **conditionals** (and the values of true and false are called **boolean** values). The most common and widely used conditional is the question "if", which is used to check if something is true or false and then act accordingly. A simple example would be removing a character from the game if their health goes below zero, which in plain language would be expressed as:

if the character variable "hp" is less than or equal to zero, then destroy it.

To make the above into code we'd have this:

![GML VisualConditional](../assets/Images/QS_Guide/QS_DnD_Conditional.png)

or:

if (hp <= 0)
{

    instance\_destroy();

}

So, above we ask the question "if the hp variable is less than or equal to 0" and then if that evaluates to true we call the function [instance\_destroy()](../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_destroy.md) or the action [Destroy Object Instance](../Drag_And_Drop/Drag_And_Drop_Reference/Instance/Destroy_Object_Instance.md). Note that the "then" (if something... then something...) is _implicit_ and you don't need to add it, and also note that in the GML code we use braces {} to "block off" the code we want to be executed when the " if" evaluates to true (in GML Visual this is symbolised by dropping the actions to the _right_ of the "If" action). Anything added between the braces will only run if the " if" evaluates to true, so you can have more than one statement run in a single "block".

One more thing to note when using the "if" conditional is that we can add an "else" statement to it too, so the conditional would then become "if something evaluates to true then do something, _else_ do something different". In this way way can deal with a conditional expression returning true _or_ false. Let's give an example of that too:

![GML VisualIf... Else.. Example](../assets/Images/QS_Guide/QS_DnD_IfElse.png)

or:

if (countdown <= 0)
{

    instance\_create\_layer(x, y, "Instances", obj\_Bullet);

    countdown = 30;

}
else
{

    countdown = countdown - 1;

}

The above code translates into plain language as:

if the countdown variable is less than or equal to zero then:

    create an instance of the object "obj\_Bullet" at the current x/y position on the layer "instances",

    reset the countdown variable to 30.

else:

    subtract one from the countdown variable.

Don't worry too much about the actual instance creation part of the above code, as we'll cover that in more detail in the following sections. The important thing to understand here is that you can create conditional expressions that check if something is true or false and have your program respond in different ways. This may seem a very simple thing, but it's actually incredibly powerful and will form the basis for almost everything you do when programming in GameMaker.

So, to answer our question of "What is programming?", we can say that **programming** is using a combination of **statements**  \- which can use **variable**s to form **expression**s, **functions** to perform tasks, and **conditional**s to ask questions - and then run these statements concurrently to achieve an objective. Below you can see a slightly more complex program in GML Visual and GML. Can you guess what it does?

![GML VisualFinal Code Example](../assets/Images/QS_Guide/QS_DnD_FinalCode.png)

or:

if (mouse\_check\_button\_pressed(mb\_left) == true)
{

    x = mouse\_x

    y = mouse\_y

    image\_blend = c\_red;

}
else
{

    if (mouse\_check\_button\_released(mb\_left) == true)
    {

        image\_blend = c\_white;

    }

}

[SpoilerSpoiler](What_Is_Programming_.htm#)The above code first checks for a mouse button being pressed (the **left** mouse button, which is defined using the constant " mb\_left"), and if it has been pressed, then it moves the instance running the code to the current mouse position (defined using the built-in variables " mouse\_x" and " mouse\_y") and also sets the instance blend colour to **red**. If the mouse button has not been pressed, then it checks to see if the mouse button has been **released**, and if it has it resets the instance blend colour to white (note that again, we use some built-in **constants** \- " c\_red" and " c\_white" - to define the colours easily).

Hopefully you'll now have a bit more of an idea of what programming is all about, so let's move on to explore the GameMaker IDE and see how to add assets like _sprites_ and _objects_ and other important resources that your game will need.