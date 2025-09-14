---
title: "Error Reporting"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Error_Reporting.htm"
converted: "2025-09-14T03:59:22.053Z"
---

# Error Reporting

This section covers all the errors you may get for your game's GML code.

The first form of error reporting is the [Syntax Error](Errors/Syntax_Errors.md). This is an error in your code that GameMaker has caught before you have tried to compile it and these will be shown in the IDE, either in the code editor or in the [Syntax Errors Output Window](../Introduction/The_Output_Window.md):

![Syntax Error Example](../assets/Images/Scripting_Reference/Additional_Information/Errors_Syntax.png)The next level of error reporting is the [Compiler Error](Errors/Compiler_Errors.md). These types of errors are more general than runner errors and may be due to some subtle error in the game code, which cause the it crash while it's Compiling, before it even gets a chance to run. These too will be reported in the Compiler Errors Output Window:

![Compile Error Example](../assets/Images/Scripting_Reference/Additional_Information/Errors_Compile_Output.png)If the game compiles and an error occurs, you'll get a [Runner Error](Errors/Runner_Errors.md). This type of error will show an onscreen message, much like the one shown below:

![Error Report Example](../assets/Images/Scripting_Reference/Additional_Information/Error_Report.png)Most runner error messages follow the same outline, with a message stating the type of error, the instance and event in which the error was encountered, then a series of runner details that explain the error in a lot more depth and, finally, a list of all the declared global, instance and local variables in your game at that point. At the very bottom is the **Abort** button which will abort the game, as well as the **Copy** button (which copies the error into the clipboard) and the **Clear** button which clears the error messages from the window. The information provided by the error reporting here is very important as it detects and reports the large, syntax related bugs that are going to cause your finished game to crash, but note that it won't report more subtle bugs, nor does it give feedback on performance... for that you need to use the [Debugger](../../../../IDE_Tools/The_Debugger.md).

The following pages outline all the different Syntax, Runner, and Compiler errors that you can get and what they mean:

-   [Syntax Errors](Errors/Syntax_Errors.md)
-   [Runner Errors](Errors/Runner_Errors.md)
-   [Compiler Errors](Errors/Compiler_Errors.md)