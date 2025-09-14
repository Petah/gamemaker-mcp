---
title: "dbg_button"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_button.htm"
converted: "2025-09-14T03:59:48.317Z"
---

# dbg\_button

This function creates a button control within the current debug section. Clicking the button executes a [Function](../../GML_Overview/Script_Functions.md).

The current debug section is the one last created using [dbg\_section](dbg_section.md).

NOTE This control takes up a single column and can be shown on the same line with another single-column control using [dbg\_same\_line](dbg_same_line.md).

#### Syntax:

dbg\_button(label, ref\[, width, height\]);

| Argument | Type | Description |
| --- | --- | --- |
| label | String | The text label to show next to the button |
| ref | Reference or Script Function or Function | A Function or Script Function or a reference to one (created with ref_create) |
| width | Real | OPTIONAL The width of the button in pixels |
| height | Real | OPTIONAL The height of the button in pixels |

#### Returns:

N/A

#### Example 1: Basic Use

Create Event

my\_method = function()
{
    show\_debug\_message("Clicked the button!"
};
dbg\_button("Click me!", my\_method);

The above code creates a button control in an [object](../Asset_Management/Objects/Objects.md)'s Create event using dbg\_button. Since no calls are made to [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md) or [dbg\_section](dbg_section.md), the button is added to a new debug section named "Default" in a new debug view named "Default". Clicking the button calls a function that shows a debug message using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md).

#### Example 2: Extended Example

Script Asset

/// Script Asset

function script\_function()
{
    show\_message("Called the script function!");
}

Create Event

my\_method = function()
{
    show\_message("Called the method!");
}

ref\_to\_method = ref\_create(self, "my\_method");
ref\_to\_script\_function\_global = ref\_create(global, "script\_function");
func = script\_function;
ref\_to\_script\_function = ref\_create(self, "func");

dbg\_section("Function Calls");
dbg\_button("Call the Script Function", script\_function, 400);
dbg\_button("Call the Script Function through the Reference", ref\_to\_script\_function, 400);
dbg\_button("Call the Script Function through the Reference (Global)", ref\_to\_script\_function\_global, 400);
dbg\_button("Call the Method", my\_method, 400);
dbg\_button("Call the Method through the Reference", ref\_to\_method, 400);
dbg\_section("Game");
dbg\_button("End the Game", game\_end);

The code example above shows a variety of ways to add button controls that execute functions to the debug overlay.

First, a script function is defined in a script asset as well as a method in an object's Create event. Then, also in the Create event, various references to the script function and to the method are created. Note that in case of ref\_to\_script\_function, you can change the function to be executed by simply assigning a new value to the instance variable func. After that, two sections are added to the debug overlay. Several buttons are added to the first section, where each of them calls the script function or the method through a different path. One more button is added to the second section. Clicking this button executes the built-in function [game\_end](../General_Game_Control/game_end.md), which can be called because it takes no (mandatory) arguments.

When the code has executed, [The Debug Overlay](The_Debug_Overlay.md) is shown as any call to the dbg\_\* functions will bring up the overlay.