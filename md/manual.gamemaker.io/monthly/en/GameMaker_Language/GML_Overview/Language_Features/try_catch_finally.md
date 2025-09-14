---
title: "try / catch / finally"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/try_catch_finally.htm"
converted: "2025-09-14T03:59:29.268Z"
---

# try / catch / finally

The try, catch and finally statements can be used in your game for error checking and permit you to test out blocks of code and control what happens if any [runtime exceptions](../../../Additional_Information/Errors/Runner_Errors.md) occur. Using these will prevent the exception ending the game and showing the standard error message to the user, but this means that you will have to handle what happens next in that case, like saving out log files - for example - and ending the game gracefully (note that if you choose to do nothing, your game may become unstable and not perform correctly).

At its most basic the try syntax is as follows:

try
{
    <statement1>;
    <statement2>;
    ...
}

However, having a try without anything to actually handle any exceptions the code may produce will not be very helpful, so we usually pair it with a catch, with the following syntax:

try
{
    <statement1>;
    <statement2>;
    ...
}
catch(<variable>)
{
    <statement1>;
    <statement2>;
    ...
}

What catch does is permit you to run extra code supplied in the following block when an exception from the previous try has been caught. If this is a runtime exception, then the supplied variable can be used to access a [struct](../Structs.md) which will contain the following information:

{
message : "",               // a string that is a short message for this exception
longMessage : "",           // a string that is a longer message for this exception
script : "",                // a string that describes where the exception came from
stacktrace : \[ "", "" \],    // an array of strings that is the stack frame the exception was generated
}

A simple example of use is shown below:

var a = 0, b = 0, c = 0;
try
{
    c = a div b;
}
catch( \_exception)
{
    show\_debug\_message(\_exception.message);
    show\_debug\_message(\_exception.longMessage);
    show\_debug\_message(\_exception.script);
    show\_debug\_message(\_exception.stacktrace);
}

It may be that you want to run some code regardless of whether an exception was thrown or not, and so for that you can add in a finally block. The finally syntax is:

finally
{
    <statement1>;
    <statement2>;
    etc...
}

It is worth noting that you can have any combination of these together, ie:

-   try / finally
-   try / catch
-   try / catch / finally

Note that within the finally block you _cannot_ use [break](break.md), [continue](continue.md), [exit](exit.md) or [return](return.md) statements as they have no meaning in this context and the compiler will generate an error if they are used.

Finally, you can also nest various try / catch / finally within each other, for example:

var a = 0, b = 0, c = 0;
try
{
    try
    {
        c = a div b;
    }
    finally
    {
        ++a;
    }
}
catch(\_exception)
{
    ++a;
    show\_debug\_message(\_exception.message);
    show\_debug\_message(\_exception.longMessage);
    show\_debug\_message(\_exception.script);
    show\_debug\_message(\_exception.stacktrace);
}
finally
{
    show\_debug\_message("a = " + string(a));
}

It is worth noting that you can take over the default GML error message and use your own handler code by calling the function [exception\_unhandled\_handler()](../../GML_Reference/Debugging/exception_unhandled_handler.md). This [runtime function](../Runtime_Functions.md) permits you to supply a custom [method](../Method_Variables.md) to use that will be called whenever any unhandled exceptions occur in your game.