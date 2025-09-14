---
title: "argument_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/argument_count.htm"
converted: "2025-09-14T03:59:29.587Z"
---

# argument\_count

This **read-only** variable returns the number of "arguments" that are passed through to a [script function](../../Script_Functions.md) or a [method](../../Method_Variables.md). Normally used in conjunction with an argument array ([argument\[0...15\]](argument.md)) to permit varying input arguments for a given function.

#### Syntax:

argument\_count;

#### Returns:

[Real](../../Data_Types.md)

#### Example:

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

The above function joins all the arguments passed into the function as one string, and then prints that string to the output log.