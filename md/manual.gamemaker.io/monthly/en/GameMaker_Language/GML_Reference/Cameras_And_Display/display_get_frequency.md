---
title: "display_get_frequency"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_frequency.htm"
converted: "2025-09-14T03:59:45.625Z"
---

# display\_get\_frequency

This function returns the frequency (or refresh rate) of the display that the game is being played on. It will return a real value as frames-per-second, so for example if your monitor is 60hz you will get 60, if it's running at 144hz then you will get 144, and so on.

NOTE This function is not supported on HTML5.

#### Syntax:

display\_get\_frequency();

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var \_freq = display\_get\_frequency();

if (\_freq >= 240)
{
    game\_set\_speed(240, gamespeed\_fps);
}
else if (\_freq >= 120)
{
    game\_set\_speed(120, gamespeed\_fps);
}
else if (\_freq >= 60)
{
    game\_set\_speed(60, gamespeed\_fps);
}
else
{
    game\_set\_speed(30, gamespeed\_fps);
}

The above code gets the frequency of the display, and runs some conditions to set the game running at 240, 120, 60 or 30 fps. This means that if your display is 90hz the game will run at 60 fps, if it's 144hz then it will run at 120 fps, etc. Of course, you can pass the frequency of the display directly into [game\_set\_speed()](../General_Game_Control/game_set_speed.md) so it's used as the game's frame rate.