---
title: "parameter_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/parameter_count.htm"
converted: "2025-09-14T04:00:04.744Z"
---

# parameter\_count

Command-line parameters are those extra commands that you can add to an exe to change how the program is run. You can find the number of parameters for the current game using this function, where the first parameter has index 1 and the last one has the index returned by the function (a value of 0 is special on that it is the filename of the game executable, including the path). It should be noted that this function will work for on the HTML5 platform, retrieving the URL parameters.

#### Syntax:

parameter\_count();

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

p\_num = parameter\_count();

The above code will store the number of command-line parameters that have been used for the game in the variable p\_num.