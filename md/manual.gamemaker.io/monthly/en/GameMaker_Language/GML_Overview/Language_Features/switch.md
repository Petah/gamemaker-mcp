---
title: "switch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/switch.htm"
converted: "2025-09-14T03:59:29.237Z"
---

# switch

In a number of situations you want to let your instances perform different actions depending on a particular value. You can do this using a number of consecutive [if / else](If_Else_and_Conditional_Operators.md) statements, but when the possible choices gets above two or three it is usually easier to use the switch statement.

A switch statement has the following syntax:

switch (<expression>)
{
    case <constant1>:
        <code>
    break;

    case <constant2>:
        <code>
    break;

    // more cases (with breaks)

    default:
        <code>;
}

This works as follows:

-   First the expression is executed.
-   Next, its result is compared with the different constants after each of the case statements. When we say "constant" what we mean is that the value in the case cannot be a variable expression and must be a fixed value of any [data type](../Data_Types.md), like "fight" or 3 or the keyword [noone](../Instance_Keywords.md).
-   The execution begins from the first case statement with the matching value, _until a [break](break.md) statement is encountered_.
-   If no case statement has the matching value, then the default statement will be executed. It is not required to have a default statement, and if none is supplied then no action will be taken when there are no matching cases. The default statement can be placed anywhere in a switch block, however it's traditionally placed at the bottom, after all the cases.

NOTE The switch statement will continue to execute code within a case, until a break is encountered. If you do not use breaks at the end of your cases, it will cause the switch to "leak" to the next case, and even to a default section, if there are no breaks in the way. This can cause unintended behaviour as the execution of one case can result in multiple cases being executed, so ensure to use break where appropriate.

A simple example of using a switch statement would be something like this:

switch (player\_lives)
{
    case 3:
        draw\_sprite(20, 20, spr\_face\_healthy);
    break;

    case 2:
        draw\_sprite(20, 20, spr\_face\_hurt);
    break;

    case 1:
        draw\_sprite(20, 20, spr\_face\_fatal);
    break;

    default:
        draw\_sprite(20, 20, spr\_face\_fainted);
    break;
}

Note that multiple case statements can be used to execute the same statement, as the break is not always required for each and every case. If there is no break statement for a particular case, the execution simply continues with the code for the next case, e.g.:

switch (keyboard\_key)
{
    case vk\_left:
    case ord("A"):
        x -= 4;
    break;

    case vk\_right:
    case ord("D"):
        x += 4;
    break;

    case vk\_up:
    case ord("W"):
        y -= 4;
    break;

    case vk\_down:
    case ord("S"):
        y += 4;
    break;
}

The above code uses switch to check for a keyboard event and then compares that to each case listed. If it meets any of the required values then the corresponding code is executed. Note how the switch can check multiple cases and execute code until the next break, to permit various keys to be used to get the same result.

Each case can have its own code, so you can set up a sort of "inheritance" system where a case executes its own code and then the code for the next case as well.