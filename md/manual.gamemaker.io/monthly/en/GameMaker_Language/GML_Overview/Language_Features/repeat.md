---
title: "repeat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/repeat.htm"
converted: "2025-09-14T03:59:29.205Z"
---

# repeat

The GameMaker Language has a number of ways that you can perform _loops_, ie: have a statement or statements iterate over itself a certain number of times. The simplest of these is the repeat statement, which has the form:

repeat (<expression>)
{
    <statement>;
    <statement>;
    ...
}

With repeat the given statement is repeated the number of times indicated by the rounded value of the expression. For example, the following creates five balls at random positions:

repeat (5)
{
    instance\_create\_layer(random(400), random(400), "Instances", obj\_ball);
}

This can be very useful to avoid typing out the same code multiple times, or for using arrays, or for counting through a number of operations etc... You are not limited to using a single statement either, and can repeat multiple statements by enclosing them within curly brackets {}. For example:

var \_x = 32;
repeat (global.p\_lives)
{
    draw\_sprite(spr\_heart, 0, \_x, 32);
    \_x += sprite\_get\_width(spr\_heart);
}

The above example repeats the statements in the curly brackets for however many iterations the "lives" global variable has, and each iteration draws the heart sprite at the \_x position, then moves the position along a bit based on the heart sprite width.

**When should you use a repeat loop?** Anytime that you want to repeat over one or more statements a fixed number of times without any specific need to maintain a count of the iterations.

It is worth noting that you can use the special [break](break.md) and [continue](continue.md) statements within a **repeat** loop too. Using break will immediately exit the loop and move on to any code that is in the event or function after the loop should have finished, eg:

var i = 0;
var temp = 0;
repeat (10)
{
    temp += array\[i\];
    if (temp > max\_total)
    {
        break;
    }
    else
    {
        i += 1;
    }
}

The above code loops through 10 [array](../Arrays.md) values and adds them to a local variable. If the total of the local variable is greater than the given value for max\_total, then the loop is terminated using break, otherwise the loop will continue.

An example of using continue in a repeat loop would be:

repeat(10)
{
    var \_x = random(room\_width);
    var \_y = random(room\_height);
    if (instance\_position(\_x, y, obj\_Enemy)
    {
        continue;
    }
    instance\_create\_layer(\_x, \_y, "Instances", obj\_Enemy);
}

This code will repeat 10 times, generating a random room position then checking if an instance of the object obj\_Enemy exists at that position. If it does, the current loop iteration is terminated using continue and a new iteration is started, and if it doesn't then an instance of the object obj\_Enemy is created at the random position.

For more examples of loop functions please see the sections on [while](while.md), [do... until](do___until.md), and [for](for.md).