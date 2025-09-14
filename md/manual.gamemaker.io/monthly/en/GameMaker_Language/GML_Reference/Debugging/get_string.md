---
title: "get_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/get_string.htm"
converted: "2025-09-14T03:59:48.924Z"
---

# get\_string

This creates a pop-up window showing a standard message, with a button labelled "Ok", that prompts the user to input a string. The function will return the input string, _or_ the default value if nothing has been entered.

**NOTE** This function is for **debug use only** on the Windows target, but is **deprecated** on all other targets.

#### Syntax:

get\_string(str, def);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to show in the pop-up message. |
| def | String | The default string in the text box. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

global.test\_name = get\_string("Test highscore name:", "Anonymous");

The above code will prompt the user to give a name which will then be stored in the global variable "test\_name". If nothing is entered and the user just presses "Ok" then the default value, "Anonymous", will be returned.