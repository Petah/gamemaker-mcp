---
title: "typeof"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/typeof.htm"
converted: "2025-09-14T04:00:11.027Z"
---

# typeof

This function returns the data type of any given variable as a string.

The possible return values are listed in the table below:

| String | Description |
| --- | --- |
| "number" | The variable holds a real (floating point) number - this can include NaN and infinity |
| "string" | The variable holds a string |
| "array" | The variable references an array |
| "bool" | The variable holds a boolean (true / false) |
| "int32" | The variable holds a 32bit integer. This type isn't supported on HTML5. |
| "int64" | The variable holds a 64 bit integer |
| "ptr" | The variable holds a pointer |
| "undefined" | The variable is undefined |
| "null" | The variable holds a null value (this should not be seen normally) |
| "method" | The variable holds a function reference |
| "struct" | The variable holds a struct reference |
| "ref" | The variable holds a handle reference |
| "unknown" | Value is unknown. This should never be seen and signifies that something has gone wrong at the most basic level like a memory overwrite |

Please note that there are cases when this function may not return the correct value for a **method**. Consider the following two function definitions written in a [Script Asset](../../../The_Asset_Editors/Scripts.md):

a = function()
{
    // something
}

function b()
{
    // Something
}

Technically, these are both considered methods as they are binding a function to a variable, however calling [typeof](typeof.md) on function b will return "ref" and _not_ "method", while calling it on a will return "method". This is due to the fact that methods created like the one for b are assigned script references ([handles](../../GML_Overview/Data_Types.md)), since this is the way that the compiler recognises script functions.

#### Syntax:

typeof(variable);

| Argument | Type | Description |
| --- | --- | --- |
| variable | Any | The variable to get the data type of. |

#### Returns:

[String](../../GML_Overview/Data_Types.md) (see table above)

#### **Example:**

var \_str = typeof(global.ExtensionInput);
show\_debug\_message(" **global.ExtensionInput is a " + \_str);**

The above code gets the data type held by the given global variable and returns the string to a local variable which is then used to output a message to the console.