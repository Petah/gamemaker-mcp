---
title: "display_get_gui_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_gui_width.htm"
converted: "2025-09-14T03:59:45.649Z"
---

# display\_get\_gui\_width

This function gets the width (in pixels) of the GUI as used in the [Draw GUI Event](../../../../../../The_Asset_Editors/Object_Properties/Draw_Events.md).

NOTE When your [application\_surface](../Drawing/Surfaces/application_surface.md) is larger than the display's size (roughly), and you call this function before the current room's initialisation has finished, e.g. in a global script, a room's Creation Code or an instance's Create event, the value returned may not be accurate. For accurate results in such cases, call this in a Draw event.

#### Syntax:

display\_get\_gui\_width();

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

Draw GUI Event

var \_width = display\_get\_gui\_width();
var \_halign = draw\_get\_halign();
draw\_set\_halign(fa\_right);
draw\_text(\_width - 5, 5, "This text is drawn in the top-right corner of the GUI");
draw\_set\_halign(\_halign);

The above code draws a text in the GUI: it first gets the GUI width using display\_get\_gui\_width and then sets the horizontal text alignment to fa\_right, then draws a line of text using [draw\_text](../Drawing/Text/draw_text.md) and finally resets the horizontal text alignment to its previous value.