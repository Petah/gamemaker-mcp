---
title: "do / until"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/do___until.htm"
converted: "2025-09-14T03:59:29.126Z"
---

# do / until

A do statement is another way of iterating over one or more statements multiple times, and is really a "do... until" statement as you cannot have one without the other since you are telling GameMaker to do something until a specific expression returns true. It has this form:

do
{
    <statement>;
    <statement>;
    ...
}
until (<expression>);

The statement (which can be a code block of multiple statements within curly brackets {}) is executed until the expression is found to be true, and the initial statement is **always executed at least once**. Below you can find an example of a typical way to use do... until:

do
{
    x = random(room\_width);
    y = random(room\_height);
}
until (place\_free(x, y));

The above code tries to place the current object at a free position and will set the x and y variables at least once, and then perform as many iterations as required until the place\_free() expression returns true.

**When should you use a do / until loop?** It should be used any time you want to repeat one or more statements, but don't actually know how many times it has to repeat, and want to ensure that the statements are run _at least once_ before the loop ends.

You can also use the [break](break.md) and [continue](continue.md) statements within your do loops. Using break will immediately exit the loop and move on to any code that is in the event or function after the loop should have finished, e.g.:

var \_id = noone;
do
{
    \_id = list\[| 0\];
    if (instance\_exists(\_id))
    {
        break;
    }
    ds\_list\_delete(list, 0);
}
until (ds\_list\_empty(list));

target = \_id;

In the above code, we create a local variable and set it to hold the keyword [noone](../Instance%20Keywords/noone.md). We then perform a do / until loop checking the first position of a DS list to see if it holds a valid instance ID, and if it does then we break the loop, otherwise the value for the list position is deleted. After the loop is terminated (either by the break or because the list is empty) the local variable value is then assigned to the instance variable target.

An example of using continue in a do / until loop would be:

do
{
    var \_x = random(room\_width);
    var \_y = random(room\_height);

    if (instance\_position(\_x, \_y, obj\_Enemy))
    {
        continue;
    }

    instance\_create\_layer(\_x, \_y, "Instances", obj\_Enemy);
}
until (instance\_number(obj\_Enemy) >= 10);

This code will generate a random room position then check if an instance of the object obj\_Enemy exists at that position. If it does, the current loop iteration is terminated using continue and a new iteration is started, and if it doesn't then an instance of the object obj\_Enemy is created at the random position. The loop will only terminate when there are 10 or more instances of the object in the room.

One final note: be careful with your do loops, as you can easily make them loop forever, in which case your game will hang and not react to any user input anymore and they will have to force close it.

For more examples of loop keywords please see the sections on [repeat](repeat.md), [while](while.md), and [for](for.md).