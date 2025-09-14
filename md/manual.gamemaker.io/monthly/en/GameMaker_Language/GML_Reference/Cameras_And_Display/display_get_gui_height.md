---
title: "display_get_gui_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_gui_height.htm"
converted: "2025-09-14T03:59:45.637Z"
---

# display\_get\_gui\_height

This function gets the height (in pixels) of the GUI as used in the [Draw GUI Event](../../../The_Asset_Editors/Object_Properties/Draw_Events.md).

NOTE When your [application\_surface](../Drawing/Surfaces/application_surface.md) is larger than the display's size (roughly), and you call this function before the current room's initialisation has finished, e.g. in a global script, a room's Creation Code or an instance's Create event, the value returned may not be accurate. For accurate results in such cases, call this in a Draw event.

#### Syntax:

display\_get\_gui\_height();

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

Draw GUI Event

var \_height = display\_get\_gui\_height();
var \_valign = draw\_get\_valign();
draw\_set\_valign(fa\_bottom);
draw\_text(5, \_height - 5, "I am drawn in the bottom-left corner of the GUI");
draw\_set\_valign(\_valign);

The above code draws a text in the GUI: it first gets the GUI height using display\_get\_gui\_height and then sets the vertical text alignment to fa\_bottom, then draws a line of text using [draw\_text](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) and finally resets the vertical text alignment to its previous value.