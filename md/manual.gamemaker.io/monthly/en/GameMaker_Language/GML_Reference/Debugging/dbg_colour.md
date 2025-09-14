---
title: "dbg_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_colour.htm"
converted: "2025-09-14T03:59:48.356Z"
---

# dbg\_colour

This function creates a colour control within the current debug section.

The control takes the value of a [Colour](../Drawing/Colour_And_Alpha/Colour_And_Alpha.md) variable and shows the R, G and B component:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_colour_control.png)You can change the R, G and B value by double-clicking on the value and entering a new value. You can also click the square on the right that shows the colour to bring up a colour picker dialog to select a new colour.

You can pass an array as the first argument, in which case the function will create a new colour control for each reference in the array.

NOTE The value is an RGB colour value, _without_ an alpha component.

NOTE This debug control spans two columns.

#### Syntax:

dbg\_colour(ref\_or\_array, \[label\]);

| Argument | Type | Description |
| --- | --- | --- |
| ref_or_array | Reference or Array | A reference created using ref_create to a Colour variable, or an array containing references |
| label | String | OPTIONAL A label to show next to the colour control |

#### Returns:

N/A

#### Example:

Create Event

my\_view = dbg\_view($"Settings for {id}", true);
my\_section = dbg\_section("Colours");
dbg\_colour(ref\_create(self, "image\_blend"), "Blend Colour");

Clean Up Event

dbg\_section\_delete(my\_section);
dbg\_view\_delete(my\_view);

The code above is added to an [object](../Asset_Management/Objects/Objects.md)'s Create event. Every [instance](../../../Quick_Start_Guide/Objects_And_Instances.md) of this object that executes the code creates a new debug view using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md), stores it in an instance variable my\_view and adds a section named "Colours" to it using [dbg\_section](dbg_section.md), stored in a variable my\_section. Each of them then adds a colour control using dbg\_colour that changes that instance's [image\_blend](../Asset_Management/Sprites/Sprite_Instance_Variables/image_blend.md) colour.

In the Clean Up event, every instance of this object deletes its debug view and section that it created (my\_view and my\_section respectively).