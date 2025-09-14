---
title: "return"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/return.htm"
converted: "2025-09-14T03:59:29.219Z"
---

# return

The return statement has the following syntax:

return (<expression>);

You only use the return statement in [script functions](../Script_Functions.md) and [methods](../Method_Variables.md), and it is used to return a value from the function to be used in further code or function calls. It should be noted that the _execution of the function ends at the return statement_, meaning that any code which comes after return has been called will not be run. Here is a short example script function called sqr\_calc which calculates the square of whatever value is passed to it, and it includes error catching in case the parameter that it is passed is not a real number:

/// @function            sqr\_calc(val);
/// @param {real}  val   The value to calculate the square of
/// @description         Calculate the square of the given value

function sqr\_calc(value)
{
    if (!is\_real(value))
    {
        return 0;
    }
    else
    {
        return (value \* value);
    }
}

To call a function from within a piece of code, just use it the same way as when calling runtime functions - that is, write the function name with the parameter values in parentheses. So, the above function would be called like this:

if (keyboard\_check\_pressed(vk\_enter))
{
    val = scr\_sqr(amount);
}

Here the variable val will either be 0 (because the variable amount is not a real number) or the total for value \* value.