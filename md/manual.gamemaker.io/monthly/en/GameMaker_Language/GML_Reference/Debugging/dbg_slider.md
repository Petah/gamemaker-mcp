---
title: "dbg_slider"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_slider.htm"
converted: "2025-09-14T03:59:48.560Z"
---

# dbg\_slider

This function creates a slider control for a [Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) value within the current debug section, with a minimum and maximum value.

You can also pass an array as the first argument, and the function will create a slider for each reference in the array.

Pressing CTRL+click on the slider will allow you to enter a number directly.

NOTE This debug control spans two columns.

#### Syntax:

dbg\_slider(ref\_or\_array, \[minimum, maximum, label, step\]);

| Argument | Type | Description |
| --- | --- | --- |
| ref_or_array | Reference or Array | A reference to a Real value, created using ref_create, or an array containing references |
| minimum | Real | OPTIONAL The minimum value that the slider can have |
| maximum | Real | OPTIONAL The maximum value that the slider can have |
| label | String | OPTIONAL The label to show next to the slider |
| step | Real | OPTIONAL The step size to use for the slider. Values <= 0 indicate no step. |

#### Returns:

N/A

#### Example 1: Basic Use

Create Event

my\_var = 7;
dbg\_slider(ref\_create(self, "my\_var"), 0, 10);

The above code is executed in an [object](../Asset_Management/Objects/Objects.md)'s Create event, or in any other event that isn't performed continuously. First, an [instance variable](../../../../../../GameMaker_Language/GML_Overview/Variables/Instance_Variables.md) my\_var is set. Then, a slider control is created using dbg\_slider. It receives a reference to the variable, returned by [ref\_create](../Variable_Functions/ref_create.md), and values of 0 and 10 for the minimum and maximum parameters. Dragging the slider changes the value of the instance's my\_var variable.

#### Example 2: Step Size

Create Event

my\_var = 1.2;
dbg\_slider(ref\_create(self, "my\_var"), 0, 10, "my\_var", 0.2);

The above code is executed in an [object](../Asset_Management/Objects/Objects.md)'s Create event, or in any other event that isn't performed continuously. An instance variable my\_var is initialised and a slider control is created. The slider receives a reference to the variable and its minimum and maximum value are set to 0 and 10 respectively. Dragging the slider changes the value of the my\_var variable in increments of 0.2.