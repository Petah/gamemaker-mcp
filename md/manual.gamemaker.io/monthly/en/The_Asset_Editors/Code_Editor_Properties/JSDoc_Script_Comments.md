---
title: "JSDoc Comments"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Code_Editor_Properties/JSDoc_Script_Comments.htm"
converted: "2025-09-14T04:00:15.109Z"
---

# JSDoc Comments

If you wish your custom functions to have code completion and to show the required arguments in the code editor, then you need to add some [JSDoc style](https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html) comments. These comments are used to tell the auto-complete feature how the function should be used and filled out in [Code Editor 2 (Beta)](../The_Text_Editor.md).

## Format

The format for a typical function header would be to have the function name, the description of the function, and then the list of the different arguments (parameters) that the function takes, making sure to start each line with a triple forward slash "///" as that tells GameMaker to parse the comment as being JSDoc style. You can alternatively wrap your JSDoc comments in /\*\* ... \*/, with the /\*\* being on its own line.

The comments themselves need to be given an identifier (preceded by "@") and content. The available identifiers are as follows:

| Identifier | Content | Syntax |
| --- | --- | --- |
| @description / @desc | A general description of what the function does | @desc <Description goes> |
| @param / @parameter / @arg / @argument | Information on an argument, with an optional type in {} (or multiple acceptable types separated by , or \|) | @param {type,type} name <Parameter description> |
| @return / @returns | Type of data the function returns | @return {type,type} <Return description> |
| Feather only |
| @url | URL for the function, opens when you press F1 on the function name or use the RMB -> Go To Declaration option. | @url https://... |
| @pure | Marks the function as pure | @pure |
| @ignore | Hides the function from Feather's autocomplete | @ignore |
| @deprecated | Marks the function as deprecated | @deprecated |
| @context / @self | Sets the context for the function, which Feather auto-complete uses to provide contextual information. Can be an object or a constructor. | @self <object> |
| Legacy Code Editor only |
| @function / @func | The full function name including arguments | @func my_func(args) |

Descriptions in your JSDoc comments support [Markdown](https://www.markdownguide.org/basic-syntax/), which is used when your function info is displayed in a [Contextual Tooltip](Feather_Features.htm#h2).

If you haven't specified a type for your arguments or return value, and you're using [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md), it will assume a data type for them automatically, based on your function body.

See information on data types for @param and @return on [Feather Data Types](Feather_Data_Types.md).

## Auto-Generating JSDoc

You can auto-generate JSDoc in two ways:

-   By using [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md)'s [Quick Fixes](Feather_Features.htm#h1) menu (press CTRL/CMD + Q or click the ![](../../assets/Images/Icons/Icon_Feather.png) icon). The option is visible when your text cursor is placed on a function header (i.e. the line where the function's name is defined).
-   In [Code Editor 2 (Beta)](../The_Text_Editor.md), JSDoc comments can be auto-generated if its [preference](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md) ("**Autofill jsdoc header comments**") is enabled. To insert JSDoc, simply start writing a comment above your function header.

In both cases, when it can, Feather will automatically fill the data type of each parameter and the return value of the function, based on their usage in the function body.

See the following example, where the JSDoc comments were auto-filled by Feather and not manually modified:

![](../../assets/Images/The_IDE/Code%20Editor/JSDoc_AutoComments_CE2.png)It automatically inserted the correct data types for each parameter, as enemy\_obj is an object, num is a real and the function returns an array.

## Examples

To get an idea of how this would work when writing your own functions, let's take this basic example:

function is\_same\_object(\_id, \_obj)
{
    if (\_id.object\_index == \_obj)
    {
        return true;
    }
    else return false;
}

All this script does is check to see if an instance has the same object\_index as a given object and would be called simply as:

if (is\_same\_object(id, obj\_Player))
{
    instance\_destroy()
}

However, writing that into the code editor will show you the argument variable names directly (\_id and \_obj) which in most cases is not very descriptive. You can use JSDoc to define custom argument names and descriptions, along with information for the function as well:

/// @function                is\_same\_object(inst\_id, object\_id)
/// @description             Check if the given instance belongs to the given object.
/// @param {Id.Instance}     inst\_id    The unique instance ID value of the instance to check.
/// @param {Asset.GMObject}  object\_id  The object index to be checked against.
/// @return {Bool}

function is\_same\_object(\_inst\_id, \_object\_id)
{
    return \_inst\_id.object\_index == \_object\_id;
}

Now, when calling this function anywhere in your project, you will see the new argument names that were entered in the JSDoc comments:

![JSDoc Example](../../assets/Images/Scripting_Reference/Additional_Information/JavaDoc_Example.png)In the image above, the top part shows the function in the auto-complete and the bottom part shows how the argument helper at the bottom works. Note that both the optional "type" and the obligatory "description" parts of @param are not displayed by default in the IDE code complete, and to see them you must activate the options in the [GML Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/GML_Code_Preferences.md).

When using [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md), you will see detailed information on the function when you hover your mouse over it:

![](../../assets/Images/Asset_Editors/JSDoc_Feather_Info.png)You can wrap an argument name in \[\] brackets to indicate that it is optional. The code editor will then expect any number of arguments between the minimum required arguments and the total number of arguments.

For example, see the following function:

/// @function    animate\_position(end\_x, end\_y, start\_x, start\_y)
/// @desc        Animates the instance to ending point, from optional starting point
/// @arg end\_x
/// @arg end\_y
/// @arg \[start\_x\]
/// @arg \[start\_y\]

function animate\_position (x1, y1, x2, y2)
{
    // Function code
}

The start\_x and start\_y arguments are marked as optional, which means the code editor will now expect 2 to 4 arguments, as can be seen in the warning message:

![](../../assets/Images/Scripting_Reference/Additional_Information/JavaDoc_Optional.png)

NOTE You will get the same behaviour if you use optional arguments in the function declaration. See [script functions](../../GameMaker_Language/GML_Overview/Script_Functions.md) for more information.

Since scripts can have multiple functions in them, you can add JSDoc comments for each of them before its declaration:

![Multiple Functions With JSDoc Comments Example](../../assets/Images/Scripting_Reference/Additional_Information/JavaDoc_MultipleFunctions.png)