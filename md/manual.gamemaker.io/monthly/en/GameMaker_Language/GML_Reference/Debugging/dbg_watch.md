---
title: "dbg_watch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_watch.htm"
converted: "2025-09-14T03:59:48.745Z"
---

# dbg\_watch

This function creates a watch for a variable within the current debug section.

You can also pass an array as the first argument, and the function will create a watch for each reference in the array.

This is simply used to monitor a variable's value, and cannot be used to change it. Look at the Debug View [Function Reference](The_Debug_Overlay.htm#func_ref) for controls that allow variable modification.

Each value is converted to a [String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) and displayed.

NOTE This debug control spans two columns.

#### Syntax:

dbg\_watch(ref\_or\_array, \[label\]);

| Argument | Type | Description |
| --- | --- | --- |
| ref_or_array | Reference or Array | A reference to a variable, created using ref_create, or an array containing references |
| label | String | OPTIONAL The label to show |

#### Returns:

N/A

#### Example:

Create Event

counter = 0;

dbg\_watch(ref\_create(self, "counter"), "Counter");

Step Event

counter += 1;

The above code first initialises a variable counter in the Create event. It then adds a watch for this variable using dbg\_watch.

In the Step event, the counter is incremented, a change that will be shown by the watch.