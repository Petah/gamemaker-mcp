---
title: "new"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/new.htm"
converted: "2025-09-14T03:59:29.188Z"
---

# new

The new operator can be used to create a struct with a function which is called with the given arguments. The function can then populate the struct with variables from the arguments - much like the create event of an instance will set the initial variables for the instance - and then the new operator will return the struct. Before using this operator it is important to note that the function given _must be flagged as a constructor function_ otherwise the new operator will not create the struct (the code example below shows this, and for more information, please see the page on [Structs](../Structs.md)).

NOTE You can check a struct to find out which function was used to create it using the runtime function [instanceof()](../../GML_Reference/Variable_Functions/instanceof.md).

This operator has the following syntax:

<variable> = new <function> (<argument>, <argument>, ...);

When you use the new operator along with a function, it will return a struct reference which is stored in the given variable, permitting you to access the struct and any variables that were created within it by the function.

The following example shows a function that has been defined to use as a constructor:

function init\_struct(\_a, \_b, \_c) constructor
{
    a = \_a;
    b = \_b;
    c = \_c;
}

This function can then be used along with the new operator to create a struct and populate it with the variables set to the values of the arguments used in the function, like this:

mystruct = new init\_struct(10, 100, "Hello World");

It is important to note that calling new on any function that has _not_ been flagged as a constructor will cause a [runtime exception](../../../Additional_Information/Errors/Runner_Errors.md).