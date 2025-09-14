---
title: "draw_enable_drawevent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/draw_enable_drawevent.htm"
converted: "2025-09-14T03:59:55.582Z"
---

# draw\_enable\_drawevent

With this function you can choose to enable (true) or disable (false) the draw event for **all instances in the game**, thus giving you control over how and when things are drawn, which is useful if you wish to implement a "frame skip" technique. Note that this doesn't just prevent instances drawing to the screen, it suppresses the draw event completely meaning that care should be taken since any game logic that is present in that event will not be run either.

One important thing to understand about this function is that if you call it right at the start of the game, before the initial frame is rendered (i.e.: the Create Event of the first object in the first room of the game), then the game window **will not be rendered**. This could be useful for multiplayer projects that require a dedicated server which doesn't need to render anything, however keep in mind that this does **not** make it headless as GameMaker does not support that -- so you will not be able to run it on a server that does not have a graphical interface.

#### Syntax:

draw\_enable\_drawevent(enable);

| Argument | Type | Description |
| --- | --- | --- |
| Enable | Boolean | Set to true or false. |

#### Returns:

N/A

#### Example:

frame\_skip ++;
if (frame\_skip mod 5) == 0
{
    draw\_enable\_drawevent(true);
}
else
{
    draw\_enable\_drawevent(false);
}

The above code checks a variable and if it returns true, it enables the draw event, otherwise the draw event is disabled.