---
title: "view_current"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_current.htm"
converted: "2025-09-14T03:59:44.612Z"
---

# view\_current

This **read only** variable is only valid in the [**Draw Event**](../../../../The_Asset_Editors/Object_Properties/Draw_Events.md) and returns the current view port being rendered. The return value will change during the draw event when you have various views as the draw event is called _once for each view port in succession_. So when (for example) you are using view port\[0\] and view port\[1\] in your game room, the draw event for _ALL_ instances will be run twice, once for each port, and with this variable you can check to see what view is currently being drawn. In general, this is used to only render specific details to a single port when multiple view ports are visible in the room at the same time. See the example code below.

#### Syntax:

view\_current;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (view port index from 0 to 7)

#### Example:

if (view\_current == 0)
{
    var xx = camera\_get\_view\_x(view\_camera\[0\]);
    var yy = camera\_get\_view\_y(view\_camera\[0\]);
    draw\_text(xx + 32, yy + 32, "Player 1");
}
else
{
    var xx = camera\_get\_view\_x(view\_camera\[1\]);
    var yy = camera\_get\_view\_y(view\_camera\[1\]);
    draw\_text(xx + 32, yy + 32, "Player 2");
}

The above code checks to see which view is currently being drawn and then draws a different text to each view based on the return value.