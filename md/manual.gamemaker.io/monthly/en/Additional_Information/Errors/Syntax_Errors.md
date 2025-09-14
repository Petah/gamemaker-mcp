---
title: "Syntax Errors (Feather Messages)"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Errors/Syntax_Errors.htm"
converted: "2025-09-14T03:59:22.340Z"
---

# Syntax Errors (Feather Messages)

The first level of error reporting when programming your games in GameMaker is in the code or GML Visual editor, and it's the syntax checker. As you write your code - or add your actions - GameMaker will check that it follows the established syntax for the language, and flag any issues that it finds so you can fix them before it comes to running the game or compiling an executable.

Syntax error checking happens differently depending on whether you have enabled [Feather](../../The_Asset_Editors/Code_Editor_Properties/Feather_Features.md) in the [Feather Settings](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md). It is enabled by default.

## Feather Messages (Feather enabled)

When Feather is enabled the Syntax Errors window is replaced by the Feather Messages window:

![](../../assets/Images/Scripting_Reference/Additional_Information/Output_Feather_Searchable_Sortable.png)The Feather Messages window lists the errors and warnings that Feather encounters in your code, as well as the suggestions that it gives when it finds certain specific code patterns. Which types of errors are shown here depends on the profile that you define in the [Feather Settings](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md) under Message Severity.

In this window the list of messages can be sorted ascending or descending by message code, by message text (alphabetically) or by resource (alphabetically by resource name). You can also search using the search box in the top right corner of the window.

Feather messages fall into three categories:

-   ![](../../assets/Images/Scripting_Reference/Additional_Information/i_Feather_Warning.png) **Warnings**: These are shown for possible errors, which, in most cases, won't stop the game from compiling, but might provoke runtime errors. The most common causes of these warnings is when a variable is used in an expression and it hasn't been defined yet anywhere else, or when a variable has been defined but hasn't been used.
-   ![](../../assets/Images/Scripting_Reference/Additional_Information/i_Feather_Error.png) **Errors**: These are problems that will not permit the game to compile, let alone run. These should be fixed before doing anything further with the code.
-   ![](../../assets/Images/Scripting_Reference/Additional_Information/i_Feather_Suggestion.png) **Suggestions**: These are suggestions for possible improvements to the code, related to a variety of things.

## Syntax Errors (Feather disabled)

![Syntax Errors Example](../../assets/Images/Scripting_Reference/Additional_Information/Errors_Syntax_Example.png)

These errors fall into two main categories:

-   ![Syntax Warning Icon](../../assets/Images/Scripting_Reference/Additional_Information/i_Error_SyntaxWarning.png) **Warnings**: These are shown for things that may be an error, but may not be, and probably won't stop the game from compiling, but might provoke runtime errors. The most common causes of these warnings is when a variable is used in an expression and it hasn't been defined yet anywhere else, or when a variable has been defined but hasn't been used.
-   ![Syntax Error Icon](../../assets/Images/Scripting_Reference/Additional_Information/i_Error_SyntaxError.png) **Errors**: These are problems that will not permit the game to compile, let alone run. These should be fixed before doing anything further with the code. The table below shows the most common causes of these.

Syntax errors will update as you write your code (there will be a short pause between typing something and any errors appearing in this window to prevent errors being reported for unfinished code), and will follow the format:

\[object\] - \[event\] - \[Line Number\] - \[Position In Line\]: \[error string\]

Or if the error is in a script, it will be:

\[script\] - \[Line Number\] - \[Position in line\]: \[error string\]

Double clicking ![Icon LMB](../../assets/Images/Icons/Icon_LMB.png) on any of the errors shown in the output console will take you to the line in the object event or script that has the error so you can edit it.

It should be noted that some of these errors will be shown at specific places in your code, but the actual error may be cause by something elsewhere, or one single issue may provoke multiple error messages:

![Multiple Syntax Errors](../../assets/Images/Scripting_Reference/Additional_Information/Error_MultipleSyntaxErrors.png)In the above image, all three ![Syntax Error Icon](../../assets/Images/Scripting_Reference/Additional_Information/i_Error_SyntaxError.png) errors have been provoked  by a single mistake - the use of a semi colon ";" instead of a comma "," at line 220 for the function variable\_instance\_exists().

### Syntax Error List

The table below lists the different syntax errors and their main causes:

| Error | Type | Description |
| --- | --- | --- |
| Malformed reference [val] |  | This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the Help Menu) |
| Malformed hexadecimal character escape sequence |  | This can happen when you have used the hexadecimal value for an escape character in a string and this has the wrong format. |
| Unexpected node [val] |  | This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the Help Menu) |
| Exception while parsing [val] |  | This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the Help Menu) |
| Malformed id reference [val] |  |  |
| Unnecessary expression [val] used as a statement |  | This error occurs when the syntax checker detects an expression (shown in [val]) where it was expecting a statement. For example, the following code will throw the error as it's expecting the ternary operator ? but encounters 32:temp_x = x < (room_width / 2)  32: room_width - 32; |
| Malformed array reference [val] |  | This means you have tried to reference an array in an incorrect way, and [val] will show the reference. |
| Unexpected binary operator [val] |  | This error occurs when you use one of the bitwise operators in a place where it shouldn't be getting used, with [val] showing where. |
| Unterminated string literal |  | This error will occur when you open a string using @“ or “ but you do not close it before the end of code. |
| Single quotes no longer allowed for string |  | This error occurs when you try to use strings wrapped in single quotes, eg: 'Hello World', instead of double quotes, eg: "Hello World". |
| Unexpected syntax error |  | This error denotes a syntax error which the parser is not able to identify more specifically. |
| Got "[val1]", expected "[val2]" |  | This happens when the syntax checker expects some value or symbol but gets a different one, where [val1] is the current symbol or value, and [val2] is the expected symbol or value. For example:Got "{", expected "(" |
| Got "[val1]", expected "[val2]" or "[val3]" |  | As above, but for when there are multiple possible expected symbols. |
| Expected expression |  | This error occurs when the syntax checker expects an expression but one isn't given. |
| Empty [val] statement |  | This happens when you terminate a statement and leave it empty. For example, the following code will give the error (note the terminating semi-colon):if (x < 0); |
| Nested function calls are not allowed |  | This can happen when you are trying to nest function calls within a statement, eg:ds_list_find_value(list, 0)).sprite_index |
| Number of arguments for function [val1] expected [val2] got val[3] |  | This error tells you that you have not supplied the correct number of arguments to the function shown for [val1], which expects the number shown in [val2] but got those shown in [val3]. |
| Number of arguments for function [val1] expected [val2] - [val3] got [val4] |  | As above only for a range of arguments. |
| Duplicate enum entry found |  | This error tells you that you have duplicated an enum variable entry name |
| Duplicate enum found |  | This error tells you that you have defined two or more enums with the same name. |
| Missing variable name in globalvar |  | This tells you that you have used the globalvar declaration but omitted to supply a variable name. |
| Missing variable name in var |  | This tells you that you have used the var declaration but omitted to supply a variable name. |
| No matching #region found for #endregion |  | This error means you have declared an end region in your code, without defining a start region. |
| Unclosed #region found at end of script |  | This error means you have declared a region somewhere in the code but have not defined an end region anywhere for it. |
| Unexpected terminal operator [val] |  | This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the Help Menu) |
| Unexpected unary operator [val] |  | This happens when a unary operator (like +, -, =, etc...) has been found in your code at a place when it isn't expected, where [val] will show you the operator. |
| Unexpected ternary operator [val] |  | This error means you have used one of the parts of the ternary operator incorrectly somewhere in your code, where [val] shows the part that is in error. |
| Try needs to have catch or finally clause |  | This error means you have called the try function but have omitted to include a catch or finally clause. |
| Macro [val] already exists |  | You can get this error when you try to define a macro [val] with the same name as one that has been previously defined. |
| Malformed variable reference, got [val] |  | This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the Help Menu) |
| Assignment to multi-relational-equality expression - GML does not support multiple assignments in an expression |  | This error tells you there is an issue with a multi-operator assignment (also called a compound assignment) which is not supported by the GameMaker Language. This includes things like "*=" or "/=", etc... |
| Macro [val] is unused |  | This happens when the macro [val] is unused anywhere in your code. |
| Variable [val] only referenced once |  | This means that the given variable [val] is only referenced once in your code. |
| Unassigned variable [val] referenced |  | This means that the variable [val] has been referenced in your code, but has not been assigned a value anywhere previously. |
| Only functions that are declared as constructors can use inheritance |  | This error tells you that you have tried to use inheritance on a function which has not been declared as a constructor. |
| Unknown function attribute [val] |  | This error means that you have tried to use an invalid or unidentified function modifier ([val]) when declaring an in-kine function (a function modifier is something like the constructor keyword, which is supported). |
| Inherited argument \"[val]\" is not in function arguments |  | This error happens when you try to reference an argument in an inherited function that has not been declared in the parent function definition. |
| [val] Creation Code |  | This happens when you have an error [val] in the room creation code somewhere. |