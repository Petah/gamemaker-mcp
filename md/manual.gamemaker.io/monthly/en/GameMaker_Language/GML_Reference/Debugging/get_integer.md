---
title: "get_integer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/get_integer.htm"
converted: "2025-09-14T03:59:48.910Z"
---

# get\_integer

This creates a pop-up window showing a custom message, with a button labelled "Ok", and prompts the user to input an integer value. The function will return the typed in integer, or the default value if nothing has been entered.

**NOTE** This function is for **debug use only** on the Windows target, but is **deprecated** on all other targets.

#### Syntax:

get\_integer(str, def);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to show in the pop-up message. |
| def | Real | The default value in the text box. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

global.level = get\_integer("Level to test?", 1);

The above code will display a message prompting the user to select a level for testing. The return value will be stored in the global variable "global.level".