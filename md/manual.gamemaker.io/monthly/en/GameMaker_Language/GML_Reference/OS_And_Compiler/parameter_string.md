---
title: "parameter_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/parameter_string.htm"
converted: "2025-09-14T04:00:04.760Z"
---

# parameter\_string

Command-line parameters are those extra commands that you can add to an exe to change how the program is run and with this function you can get the chosen command-line parameter as a string. You can find the number of parameters for the current game using the function [parameter\_count](parameter_count.md), where the first parameter has index 1 and the last one has the index returned by the function (a value of 0 is special on that it is the filename of the game executable, including the path). It should be noted that this function will work for on the HTML5 platform, retrieving the URL parameters.

#### Syntax:

parameter\_string(n);

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

var p\_num;
p\_num = parameter\_count();
if (p\_num > 0)
{
    var i;
    for (i = 0; i < p\_num; i += 1)
    {
        p\_string\[i\] = parameter\_string(i + 1);
    }
}

The above code will get the number of command-line parameters, and if there is 1 or more it will loop through them and store them as strings in an array.