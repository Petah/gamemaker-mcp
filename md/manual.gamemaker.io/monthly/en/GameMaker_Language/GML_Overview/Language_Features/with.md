---
title: "with"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/with.htm"
converted: "2025-09-14T03:59:29.330Z"
---

# with

As indicated in the section [Addressing Variables in Other Instances](../Addressing_Variables_In_Other_Instances.md), it is possible to read and change the value of variables in instances and [structs](../Structs.md) other than the one currently executing any given code.

However, in a number of cases you want to do a lot more than just change a single variable within those other instances, and may want to perform more complex code actions that require multiple functions and lines of code, within the _scope_ of another instance or struct.

For example, imagine that you want to move all the instances of a ball object in your game 8 pixels down. You may think that this is achieved simply by the following piece of code:

obj\_ball.y = obj\_ball.y + 8;

But this is not correct, as the right-hand side of the assignment gets the value of the y coordinate of the first ball and adds 8 to it. Next this new value is set as the y coordinate of _all_ balls, so the result is that all balls get the same y coordinate, and even if you use the following:

obj\_ball.y += 8;

It will have exactly the same effect because it is simply an abbreviation of the first statement. So how _do_ we achieve something like this? This is why the with statement exists in GML.

## Syntax

The with statement takes the form:

with (<expression>)
{
    <statement>;
    <statement>;
    ...
}

The expression can take a number of different inputs:

-   One or more instances to perform the code on: a single [Object Instance](../../GML_Reference/Asset_Management/Instances/Instance_Variables/id.md) or an [Object Asset](../../../The_Asset_Editors/Objects.md) (which indicates that _all instances_ of this object in the room are to run the code block).
-   One or more structs, or the keyword global to access the [The Global Struct](../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md).
-   One of the special [keywords](../Instance_Keywords.md) (self, other, all or noone).

This will then change the [scope](../Variables_And_Variable_Scope.md) of the code within the curly brackets { } from the instance, struct or function that executes the with to the instance (or instances or struct) given in the expression.

Once the expression has set the scope of the with, the statement will then be executed for each of the indicated instances or structs, as if it is the current scope (i.e. self). So, returning to our original problem, to move all instances of the ball object 8 pixels down you would type:

with (obj\_ball)
{
    y += 8;
}

Since we passed it an **object handle** (obj\_ball), it executes the block code for all instances of that object. If you were to pass a specific **instance handle**, the code would execute only for that instance.

If you want to execute multiple statements, just include them in the curly brackets, the same as you would around any other code block. So for example, to move all the balls in our example to a random position and give them a random speed and direction, you would use:

with (obj\_ball)
{
    x = random(room\_width);
    y = random(room\_height);
    speed = 1 + random(2);
    direction = random(360);
}

NOTE Instances in a room are created in a certain [order](file:///Users/gurpreetsingh/GameMaker-Manual/Manual/contents/The_Asset_Editors/Room_Properties/Room_Properties.htm#creation_order), and their Create events are also executed as they are created one-by-one. This means that you must be careful when running a with() statement on a different instance that has not been created yet, as that will cause the statement to not execute as expected.

For example: let's say **ObjectA** is created before **ObjectB**, and you have the following code in **ObjectA**'s Create event:

with (ObjectB) myValue = 10;

**ObjectA** is created first and its Create event runs, where you would expect it to set the value in **ObjectB**. However you will instead find that nothing happens. This is because no instances of ObjectB have been created yet, so the with() statement does not execute at all.

## With as a Loop

The with statement essentially performs a loop. Depending on the result of the expression, the statements inside the curly brackets { } will either be not executed at all, executed a single time or multiple times:

-   When with receives noone, it executes 0 times, i.e. it runs the code for "no one".
-   When it receives an [Object Instance](../../GML_Reference/Asset_Management/Instances/Instance_Variables/id.md), a [Struct](../Structs.md) or one of the keywords self, other or global, it runs the code once, for the instance or struct being referenced.
-   When it receives an [Object Asset](../../../The_Asset_Editors/Objects.md) or the keyword all, it runs the code multiple times: every iteration of the loop will run on one instance of the object or on all instances, respectively.

Because with behaves as a loop, you can use the special [break](break.md) and [continue](continue.md) statements in it as well. Using break will immediately exit the with code block and move on to any code that is in the event or function after the with should have finished, e.g.:

var \_count = 0;
with (obj\_enemy)
{
    if (++\_count > 10)
    {
        break;
    }
    hp = 100;
}

The above code loops through the instances in the room of an object obj\_enemy and sets the variable hp to 100 for the first 10 it finds. If any more than 10 instances exist, the with code will call break and end.

An example of using continue in a with loop would be:

with (obj\_enemy\_parent)
{
    if (invulnerable == true)
    {
        continue;
    }
    hp -= 25;
}

This code will loop through all instances with the parent obj\_enemy\_parent, then checks each instance to see if the invulnerable instance variable is true or not. If it is, the continue keyword ends the current iteration of the loop and moves on to the next available instance, otherwise it removes 25 from the hp variable. This will repeat until all instances with that parent have been checked.

## Specific Uses

### The "other" Instance or Struct

As mentioned above, within the statement(s), the indicated instance or struct has become the target (self) instance that runs the code block, which means that the original instance (that contains the with and the entire code block) has become the [other](../Instance_Keywords.md) instance.

So - for example - to move all balls to the position of the current instance that actually contains the code, you can type this:

with (obj\_ball)
{
    x = other.x;
    y = other.y;
}

### Executing Code in a New Instance

with (instance\_create\_layer(x, y, "Instances", obj\_ball))
{
    speed = other.speed;
    direction = other.direction;
}

The above code will create an instance of obj\_ball and assign it the speed and direction of the instance that runs the whole code block.

TIP If you simply need to assign values to the new instance's variables, you can pass them through thevar\_struct parameter of [instance\_create\_layer](../../GML_Reference/Asset_Management/Instances/instance_create_layer.md) / [instance\_create\_depth](../../GML_Reference/Asset_Management/Instances/instance_create_depth.md).

### Instance Checking Functions

Quite a few [instance functions](../../GML_Reference/Asset_Management/Instances/Instances.htm#general) return either an [Object Instance](../../GML_Reference/Asset_Management/Instances/Instance_Variables/id.md) or noone. This makes them convenient to use in combination with the with statement:

with (instance\_nearest(x, y, obj\_ball))
{
    instance\_destroy();
}

The above code will destroy the instance of obj\_ball nearest to the instance running the code. When no instance is found, the function returns noone so that the code inside the with is not executed.

### Assigning Struct Variables

with (clone\_struct)
{
    xx = other.x;
    yy = other.y;
    spd = other.speed;
    dir = other.direction;
}

The above code uses with to target a struct and set the given struct member variables to the values stored in the instance variables from the instance calling the code.

### Local Variable to Cross Scopes

var \_inst = noone;
with (obj\_ball)
{
    if (str > other.str)
    {
        \_inst = id;
    }
}

if (\_inst != noone)
{
    target = \_inst;
}

The above code is slightly more complex than previous ones due to it using a [local variable](../Variables_And_Variable_Scope.md). This variable is **local** to either the _event_ or the _script_ _function_ and not to the instance or struct and so can be used and accessed by all instances that are referenced within the code block. So, in the code above we have set a local variable to the special keyword noone and then use the with construction to have every instance of obj\_ball check their str variable against that of the instance running the code block. If the value of the variable is larger, then they store their unique ID in the inst local variable, meaning that at the end of the code, only the instance with a value greater than the calling instance (or the keyword noone if none are larger) will be stored in the local variable \_inst.