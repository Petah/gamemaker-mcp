---
title: "show_question"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/show_question.htm"
converted: "2025-09-14T03:59:49.065Z"
---

# show\_question

This function creates a pop-up message box with two buttons for "Yes" and "No". It returns true or false depending on which one of the two buttons the user presses.

**NOTE** This function is for **debug use only** on the Windows target, but is **deprecated** on all other targets.

#### Syntax:

show\_question(str);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to show in the pop-up question. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (score > 500) && debug\_mode
{
    if show\_question("Continue to next room?")
    {
        room\_goto(rm\_Level2);
    }
    else game\_end();
}

The above code will check the score and if it is over 500, it will ask the user if they wish to continue or not and if the "yes" button is clicked it will go to another room, but if the "no" button is selected it will end the game.