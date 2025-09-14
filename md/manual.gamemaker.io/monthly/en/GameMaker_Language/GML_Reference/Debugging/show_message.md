---
title: "show_message"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/show_message.htm"
converted: "2025-09-14T03:59:49.050Z"
---

# show\_message

This function creates a pop-up message box which displays the given string and a button marked "Ok" to close it.

**NOTE** This function is for **debug use only** on the Windows target, but is **deprecated** on all other targets.

#### Syntax:

show\_message(str);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to show in the pop-up message. |

#### Returns:

N/A

#### Example:

var tot = 0;
for (var i = 0; i < 10; i += 1)
{
    tot += inv\[i\];
}
show\_message("Total = " + string(tot));

The above code will loop through the values stored in the array "inv" and add them to the variable "tot" before showing a message with the total.