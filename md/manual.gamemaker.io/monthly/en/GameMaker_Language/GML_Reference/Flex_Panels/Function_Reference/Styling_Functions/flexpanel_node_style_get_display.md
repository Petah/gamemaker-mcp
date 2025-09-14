---
title: "flexpanel_node_style_get_display"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_display.htm"
converted: "2025-09-14T03:59:57.099Z"
---

# flexpanel\_node\_style\_get\_display

This function returns the display property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Display](../../Flex_Panels_Styling.htm#h4) / [flexpanel\_node\_style\_set\_display](flexpanel_node_style_set_display.md)

#### Syntax:

flexpanel\_node\_style\_get\_display(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Display Type Constant](flexpanel_node_style_set_display.md)

#### Example:

var \_display = flexpanel\_node\_style\_get\_display(\_node);

This gets the display mode of a node and stores it in a local variable.