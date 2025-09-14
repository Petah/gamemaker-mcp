---
title: "Runner Errors"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Errors/Runner_Errors.htm"
converted: "2025-09-14T03:59:22.253Z"
---

# Runner Errors

Even after syntax checking in the code editor and then having the compiler check your code for [compiler errors](Compiler_Errors.md), there are still occasions when something can go wrong. In most cases this will throw a Virtual Machine (VM) runner error (also called a **runtime exception**) which looks like this:

![Runner Error Window](../../assets/Images/Scripting_Reference/Additional_Information/Error_Report.png)

Caption

Runner errors are generally more serious than compile errors as it means that there is something seriously wrong with your code that neither the code editor nor the compiler have been able to detect, and as such you should pay attention to all such errors. When one occurs, you can use the **Copy** button on the pop-up to copy the error to the clipboard which you can then paste into a text file (or wherever) for future reference.

The structure of this error is as follows:

-   ![Error Object And Event](../../assets/Images/Scripting_Reference/Additional_Information/Error_Text_ObjectEvent.png)
    This shows the Event that the error has occurred in as well as the Object (where applicable).
-   ![Error Text Information](../../assets/Images/Scripting_Reference/Additional_Information/Error_Text_Information.png)
    This shows the actual error.  So, it shows the _scope_ of the error and the type of error it is. The first value in the brackets will be the instance ID of the instance that was running the code - or it could be one of the special values listed in the table below - and the second is an internal value that GameMaker uses for identifying bugs and can be ignored. In the case of the image above, it's saying that the variable \_image has not been set (ie: does not exist before being accessed) on the object obj\_EA\_DEMO\_Control.
-   ![Error Line Number Position](../../assets/Images/Scripting_Reference/Additional_Information/Error_LineNumber.png)
    This shows the line number that the error occurs on as well as a snippet of code showing the position. Note that this is not always 100% accurate due to the way the game is compiled, but it should be enough to help you find exactly where the issue is.

As mentioned above, certain error messages will be identify the scope not by an instance ID value, but rather by a _negative_ value. These values can be used to pinpoint the exact nature of the error and what it refers to with the following values possible:

| Prefix | Scope |
| --- | --- |
| -1 | Self |
| -2 | Other |
| -3 | All |
| -4 | Noone |
| -5 | Global |
| -6 | Not Specified |
| -7 | Local |

The possible errors from the VM runner are as follows:

| Error | Message | Operation | Description |
| --- | --- | --- | --- |
| DoSet | Invalid comparison type | Data Types | This denotes that the runner has tried to compare two incompatible data types, like a real number with a string. |
| DoConv | Execution Error | Data Types | This denotes an error in the conversion of one data-type into another. |
| Argument Type | (function) argument (index) incorrect type (wrong_type) expecting a (expected_type) | Data Types | A value with the wrong data type was passed as an argument to the function at (index) (where an index of 1 is the first argument). A value of wrong_type was given but it should be one of expected_type instead. |
|  |
| DoAdd | Execution Error | Maths | Something has gone wrong when using the addition (+) expression. |
| DoMul | Execution Error | Maths | Something has gone wrong when using the multiplication (*) expression. |
| DoSub | Execution Error | Maths | Something has gone wrong when using the subtraction (-) expression. |
| DoSub | Execution Engine - Cannot operate on string type | Maths | You are trying to subtract the wrong type of variables (for example subtract a string from a real). |
| DoDiv | Execution Error | Maths | Something has gone wrong when using the division (/ or div) expression. |
| DoDiv | Execution Engine - Cannot operate on string type | Maths | You are trying to divide the wrong type of variables (for example divide a string by a real). |
| DoDiv | Divide by zero | Maths | You are attempting to divide by 0 (note this will only happen when using integer division, dividing a (non-zero) real by 0 will give infinity as an answer, dividing zero by zero will give NaN as an answer). You can check for these values with (is_infinity) and (is_nan) |
| DoMod | Execution Error | Maths | Something has gone wrong when using the modulo (mod) expression. |
| DoMod | Execution Engine - Cannot operate on string type | Maths | You are trying to use modulo (mod) on the wrong type of variables (for example mod a string by a real). |
|  |
| DoAnd | Execution Error | Bitwise | Something has gone wrong when using the bitwise "and" (&) expression. |
| DoAnd | Execution Engine - Cannot operate on string type | Bitwise | You are trying to use bitwise "and" (&) on the wrong type of variables (for example trying to "and" a string with a real). |
| DoOr | Execution Error | Bitwise | Something has gone wrong when using the bitwise "or" (\|) expression. |
| DoOr | Execution Engine - Cannot operate on string type | Bitwise | You are trying to use "or" (\|) on the wrong type of variables (for example trying to "or" a string with a real). |
| DoXor | Execution Error | Bitwise | Something has gone wrong when using the bitwise "xor" (^) expression. |
| DoXor | Execution Engine - Cannot operate on string type | Bitwise | You are trying to use "xor" (^) on the wrong type of variables (for example trying to "xor" a string with a real). |
| DoShl | Execution Error | Bitwise | Something has gone wrong when bitshifting left (<<) a value. |
| DoShl | Execution Engine - Cannot operate on string type | Bitwise | You are trying to left bitshift (<<) the wrong type of variables (for example trying to bitshift a string). |
| DoShr | Execution Error | Bitwise | Something has gone wrong when bitshifting right (>>) a value. |
| DoShr | Execution Engine - Cannot operate on string type | Bitwise | You are trying to right bitshift (>>) the wrong type of variables (for example trying to bitshift a string). |
|  |
| DoNeg | Execution Error | Negate | You are trying to turn a variable type into a negative when this type does not permit such an operation. |
| DoNot | Execution Error | Negate | You are trying to "not" a variable type when this type does not permit such an operation. |
|  |
| Push | Execution Error - Variable Index out of range (var) | Stack | The variable being accessed is out with the established range for the runner. |
| Push | Variable Get (var) | Stack | The given variable has not been defined or is unknown. |
| Pop | Variable Index out of range (var) | Stack | The variable being accessed is out with the established range for the runner. |
| Pop | Variable Get (var) | Stack | The given variable has not been defined or is unknown. |
|  |
| With | Cannot use global in with statement | With | You have tried to use "global" as a variable within a "with" statement, ie:with (global)   {   //do something;   } |
| With | Cannot use local in with statement | With | You have tried to use "local" as a variable within a "with" statement, ie:with (local)   {   //do something;   } |
|  |
| DoCall | Execution Engine type error | Engine | This is an undefined error within the Virtual Machine. You should file a bug report should this happen (see: The Help Menu for details on how to do this. |
| Stack Overflow | - | Engine | A stack overflow occurs when too much memory is used on the call stack and when your game attempts to use more space than is available on the call stack (that is, when it attempts to access memory beyond the call stack's bounds, which is essentially a buffer overflow), the stack is said to overflow, resulting in a program crash. Restart your computer and GameMaker and if the error persists please get in touch with support and/or file a bug (as explained above). |
|  |
| Read Variable | Variable not set before reading it | Variable Initialisation | You are trying to access a variable that hasn't been set (i.e. initialised) yet. Assign a value to it first before trying to read it, e.g. variable = 100;. Only declaring a variable, using e.g. var variable; will also throw this error. |