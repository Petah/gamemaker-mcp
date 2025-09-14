---
title: "Compiler Errors"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Errors/Compiler_Errors.htm"
converted: "2025-09-14T03:59:22.161Z"
---

# Compile Errors

The second type of error that can be reported for your game is the **compiler error**. A compiler error happens when your game encounters some type of error that the syntax checker may not have been able to detect - it's very easy to forget to declare a variable or mistakenly type a string as a real, for example - or when an error is related to how you have set up the compile tools from the [Platform Preferences](../../Setting_Up_And_Version_Information/Platform_Preferences.md) for the target platform. These errors will be caught by GameMaker as the game is being compiled and this information will also be shown in the [Compiler Error Output](../../Introduction/The_Output_Window.md), as shown below:

![Compile Errors](../../assets/Images/Scripting_Reference/Additional_Information/Errors_Compile_Output.png)

NOTE These errors don't usually pop up a window and will simply show "Build Failed" in the compiler output. If a window pops up it's usually a Runner Error, which is explained [here](Runner_Errors.md).

The compiler error messages will all follow the same format:

\[object\] - \[event\] - \[Line Number\]: \[error string\]

If the error is found in a script then it will simply be:

\[script\] - \[Line Number\]: \[error string\]

You can then double-click ![Icon LMB](../../assets/Images/Icons/Icon_LMB.png) on any of the compiler error entries to open the given asset at the position flagged as giving the error, and then you can use the information contained within the message to pinpoint exactly where in the object or script the error has occurred. However, sometimes these errors can seem a bit cryptic, so below you can find a complete list of all errors and a brief explanation of what they mean:

| Error | Description |
| --- | --- |
| Miscellaneous |
| No program to compile | A previous compile error has caused the compiler parse tree to not be created and thus the compiler has no program data to compile |
| Fatal Error while compiling [name] - bailing details below | This message simply means that some error has been discovered but the compiler cannot place what or where (if this happens consistently you may wish to contact support and supply the details that the compiler output window shows) |
| Recursive macro expansion is not supported | You have used recursive macros that refer to each other and constantly expand |
| Unable to find TextureGroup [group] | This error is usually only found from trying to run a malformed project file (if this happens consistently you may wish to contact support and supply the details that the compiler output window shows) |
| Wrong to convert [value] to number | You have tried to convert the given value, for example a string, into a number |
| Division by 0 | You have tried to divide a value by 0 |
| Invalid object id [object ID] used | You have tried to access an object using an ID value that is incorrect |
| Unclosed comment (/*) at end of script | You have created a script comment using/* [comment] */but have not supplied the closing comment tag |
| Invalid token | You have an invalid character in your game code, which can happen with foreign language characters or Unicode |
| Number [num] in incorrect format | The given number - shown in the error - is not the correct format for the function or operation being performed, for example you supply an integer when a pointer is required |
| Unexpected EOF encountered | You have reached the end of file unexpectedly while using the File Functions |
| Strings |
| Unable to Not a string | You have tried to use "!" (not) on a string |
| Unable to Negate a string | You have tried to negate a string, for examplestring = -string |
| Scripts, Functions and Arguments |
| Wrong number of arguments for function [function] | You have supplied too many or too few arguments for the given function |
| Failed to parse action_execute_script() - incorrect number of arguments received | The GML Visual action Execute Script has too many or too few arguments for the given script being called |
| Unknown function [function] check to see if script is empty | A script or function has been called that the compiler does not recognise (this error is usually thrown by empty script asset references since the compiler will strip out these assets on compile) |
| Function [function] expects n arguments, a provided | A function has been given the wrong number of arguments (n) when a certain number were expected (a) |
| Assignment of an empty value (function does not return anything?) | You have tried to assign a return value from a function when that function returns nothing |
| Unable to find function [function] | You have called an unknown function |
| Calling a function that needs an instance and no instance is available | The function or script being called is for acting on an instance, but at the time of running no instances exist |
| Calling a function that needs an other and no other is available | You have used the keyword other outside of the Collision Event or outside of a with statement |
| Argument naming error, n arguments but no reference found to a | You have given a number of arguments to a script, but fail to reference one of them in the script, for example, your script takes three arguments but you only use arguments n and a |
| Cannot compare arguments | You have tried to compare two different argument types, like a string and a real number |
| Unknown function or script [functions/script] | The compiler does not recognise the function or script being called |
| Cannot use resource name [resource] as it is not being exported | You have tried to access a resource that has not been flagged as part of the project for the platform being compiled to |
| Cannot use function/script name for a variable, using [functions/script] | You have tried to use either a function name or a script name as a variable, for example:string = "Hello World" |
| Cannot use an argument outside a script | The built-in argument variables can only be used inside a script but you have tried to use them elsewhere |
| No references to argument[num] but references argument[num] | You are using a reference to an argument that does not exist but that could map to another argument |
| Incorrect number of arguments for accessor | You have supplied the wrong number of arguments when using an accessor |
| Wrong type of arguments for (one of the below):/, div, mod, +, -, &&, \|\|, &, \|, ^, <<, >> | You have supplied the wrong type of argument for the expression being evaluated |
| Variables |
| Using uninitialized variable [var] | You have tried to use the named variable before it has been initialised |
| Variable [var] is read-only | You have tried to change the named variable when it cannot be changed |
| Unable to find variable named [var] | The named variable cannot be found in the current compile |
| Malformed variable reference | You have tried to reference a variable in the wrong way |
| Trying to set a read only variable [var] | You have tried to set a variable that is read only |
| Cannot re-declare a built-in variable | You have tried to declare a local variable using the same name as one of the built-in variables |
| Cannot use resource name for a variable | You have use the same name as a resource from the resource tree as a local variable |
| [Variable] is read-only | You have tried to use a variable that has been flagged as read only |
| Constants |
| Cannot set a constant [constant] to a value | You have tried to set a constant to a different value |
| Constant is invalid here | You have tried to use a constant somewhere that is not valid for the code being run |
| Cannot assign to [var] - it's a constant | You have tried to assign a new value to the named constant |
| Arrays |
| Array index should not be negative | You have tried to access, create, or set an array value using a negative array index |
| Malformed... |
| Malformed Conditional operator | You have used an erroneous conditional (ternary) operator or if statement, and not the format:[condition] ? [expression1] : [expression2]; |
| If requires a then statement | You have written an if statement and expression to evaluate, but not given any then part to run |
| malformed assignment statement | In the code you are using an assignment operator wrong |
| Malformedif / repeat / while / do / for / with / switch / break / continue / exitstatement | The structure of the given statement is incorrect. |
| Malformed post inc or dec statement | You have tried to use [var]++ or [var]-- in an illegal way |
| Malformed pre inc or dec statement | You have tried to use ++[var] or --[var] in an illegal way |
| Malformed global gml_pragma | You have created a wrong global string when using gml_pragma |
| Malformed PNGCrush gml_pragma | You have created a wrong string command for PNGCrush when using gml_pragma |
| Malformed Texgroup.Scale gml_pragma | You have create a wrong global string when using gml_pragma |
| Switch / Case |
| Default cannot be used multiple times in a switch | In your switch statement you have defined default: more than once |
| Clause expression type mismatch (clause expressions should all be the same type) | In your switch you are checking for two different constant case types, for example a string in one case and an integer in another |
| Case argument should be a constant | You have tried to use a value that does not evaluate to a constant within one of your switch cases |
| Statement in a switch MUST appear after case or default | You have added a statement to a switch outside of either a case: or default: call |
| Duplicate case statement found / original here | You have used the same case constant in two different places within a switch (note that the "original here" comment will be on another line and can be clicked to show the original case) |
| Expressions |
| No return value from expression (does expression have a return value?) | You have tried to assign a return value from an expression to a variable when the expression returns nothing |
| Expecting expression after the '.' | You have used the point "." notation erroneously and not added an expression afterwords correctly |
| Unexpected symbol [symbol] in expression | The expression uses a symbol that is not part of the accepted expression symbol set - the symbol in question will be shown |
| Unknown Operators |
| Unknown Pre operator | You have tried to use a symbol as a pre-operator when that symbol is not permitted, for example **[var] or >>[var] - only ++ and -- are acceptable |
| Unknown Post operator | You have tried to use a symbol as a post-operator when that symbol is not permitted, for example [var]** or [var]>> - only ++ and -- are acceptable |
| Unknown pragma [gml_pragma string] | You have used a pragma string that is unknown to the compiler |
| Unknown unary operator | You have tried to use an unknown symbol as a unary operator |
| Unknown binary operator | You have tried to use an unknown symbol as a binary operator |
| Unknown operator [operator] | You have tried to use an unknown symbol as an operator (the symbol will be shown in the error) |
| Break / Continue |
| Break used without context | You have not used break within a switch or a loop or any other permitted structure |
| Continue used without context | You have not used continue within the correct context |
| continue statement is not allowed at this point | You have used continue within a apart of your code where it is not permitted |
| Enums |
| enum num is invalid | The enum number is invalid for the enum |
| malformed enum | You have not created the enum correctly |
| enum [enum] has already been defined | You have tried to define an enum using the same name as another previously defined |
| malformed enum entry | The enum has an invalid entry |
| enum expression must be an integer constant | The enum entry does not evaluate as an integer constant |
| enum reference [key] does not exist in [enum] | You have tried to reference an enum entry using a key that has not previously been defined for that enum |
| Expected Symbols / Values |
| Symbol ( expectedSymbol ) expectedSymbol , or ) expectedSymbol { expectedSymbol } expectedSymbol , or } expectedSymbol : expectedSymbol ; expectedSymbol [ expectedsymbol ] expectedSymbol , or ] expected | You have not used a required symbol when writing your code |
| Expected id or string | You have used a value that is not either a layer ID or a layer name - as a string - in one of the Layer functions |
| keyword Until expected | You have created a do... until loop but neglected to supply an until expression |
| Function name expected | You have used something other than a function name in your code where a function should go |
| variable name expected | You have supplied a name that is not a variable name where one is expected |
| Assignment operator expected | You have created an assignment which expects an operator but none has been supplied |
| Android Exclusive |
| Android ARM ToolChain directory [dir] does not exist | The link given in the Android Preferences for the ARM toolchain is incorrect and does not exist. |
| Android MIPS ToolChain directory [dir] does not exist | The link given in the Android Preferences for the MIPS toolchain is incorrect and does not exist. |
| Android x86 ToolChain directory [dir] does not exist | The link given in the Android Preferences for the x86 toolchain is incorrect and does not exist. |
| Android NDK directory [dir] does not exist | The link given in the Android Preferences for the Android NDK is incorrect and does not exist. |
| Windows Exclusive |
| Configuration Problem : Windows Visual Studio Path needs to be set to point to Visual Studio (.bat) batch file. | The link given in the Windows Preferences for the Visual Studio (.bat) batch file is incorrect and does not exist. |