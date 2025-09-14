---
title: "debug_get_callstack"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/debug_get_callstack.htm"
converted: "2025-09-14T03:59:48.788Z"
---

# debug\_get\_callstack

This function generates an array of strings as the "callstack" where the current script is listed first, and then all the other scripts that were run in order for the current script to be executed. The exact string format will vary depending on the target platform chosen, but it will mostly have the script/event name, then a colon : and the line number, similar to this:

"gml\_Script\_script2:1"
"gml\_Script\_script1:32"
"gml\_Script\_script0:64"
"gml\_Object\_object0\_Create\_0:1"

The function allows for an optional argument to be passed in, which is the maximum depth of the returned callstack. This value is the number of scripts that are included in the returned array starting from the current script. If this argument is not specified, then the full callstack will be returned.

Note that the returned array will always contain 0 in its last position, after listing the callstack scripts.

#### Syntax:

debug\_get\_callstack(\[maxdepth\])

| Argument | Type | Description |
| --- | --- | --- |
| [maxdepth] | Real | OPTIONAL The maximum depth of the callstack that is returned |

#### Returns:

[Array](../../../../../../GameMaker_Language/GML_Overview/Arrays.md)

#### **Example:**

if (debug\_mode)
{
    if (keyboard\_check(vk\_escape))
    {
        var \_a = debug\_get\_callstack(4);
        for (var i = 0; i < array\_length(\_a); i++)
        {
            show\_debug\_message(\_a\[i\]);
        }
    }
}

The above code checks to see if debug mode is enabled and if it is, checks to see if a key is being held down. In that case, it outputs the current call stack to the console, with a maximum depth of 4.