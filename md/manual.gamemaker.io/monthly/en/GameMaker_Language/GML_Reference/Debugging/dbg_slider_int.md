---
title: "dbg_slider_int"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_slider_int.htm"
converted: "2025-09-14T03:59:48.576Z"
---

# dbg\_slider\_int

This function creates a slider control for an integer [Real](../../GML_Overview/Data_Types.md) value within the current debug section, with a minimum and maximum value.

Moving the slider "truncates" the referenced variable (i.e. sets its fractional part to zero) and changes its integer part in steps of 1.

You can also pass an array as the first argument, and the function will create a slider for each reference in the array.

Pressing CTRL+click on the slider will allow you to enter a number directly.

NOTE This debug control spans two columns.

#### Syntax:

dbg\_slider\_int(ref\_or\_array, \[minimum, maximum, label, step\]);

| Argument | Type | Description |
| --- | --- | --- |
| ref_or_array | Reference or Array | A reference to a Real value, created using ref_create, or an array containing references |
| minimum | Real | OPTIONAL The minimum value that the slider can have |
| maximum | Real | OPTIONAL The maximum value that the slider can have |
| label | String | OPTIONAL The label to show next to the slider |
| step | Real | OPTIONAL The step size to use for the slider. Values <= 0 indicate no step. The value you pass is truncated to an integer, e.g. 0.7 becomes 0, 4.3 becomes 4, etc.NOTE The step size doesn't set the number to add. Rather, it sets the values that can be selected to be a multiple of the step. For example, if the starting value is 5 and the step is set to 2, the values "left" and "right" of it won't be 3 and 7, they will be 4 and 6. Both 4 and 6 are multiples of the step and so are valid values, while 3 and 7 aren't. |

#### Returns:

N/A

#### Example:

Create Event

my\_var = 127;
dbg\_slider\_int(ref\_create(self, "my\_var"), 0, 200, "Variable");

The above code is executed in an [object](../Asset_Management/Objects/Objects.md)'s Create event, or in any other event that isn't performed continuously. First, an [instance variable](../../GML_Overview/Variables/Instance_Variables.md) my\_var is set. Then, an integer slider control is created using dbg\_slider\_int. The function receives a reference to the variable, returned by [ref\_create](../Variable_Functions/ref_create.md), values of 0 and 200 for the minimum and maximum parameters and a label "Variable". Dragging the slider changes the value of the instance's my\_var variable in steps of 1.