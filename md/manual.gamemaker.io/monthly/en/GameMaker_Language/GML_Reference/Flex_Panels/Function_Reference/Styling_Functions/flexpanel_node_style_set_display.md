---
title: "flexpanel_node_style_set_display"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_display.htm"
converted: "2025-09-14T03:59:57.473Z"
---

# flexpanel\_node\_style\_set\_display

This function sets the display property of the given [Flex Panel Node](../flexpanel_create_node.md). It can be one of the following enum members:

| Constant | Property Value |
| --- | --- |
| flexpanel_display.flex | "flex" |
| flexpanel_display.none | "none" |

See: [Display](../../Flex_Panels_Styling.htm#h4)

#### Syntax:

flexpanel\_node\_style\_set\_display(node, display);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| display | Flex Panel Display Type Constant | The display type to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_display(\_node, flexpanel\_display.none);

This sets the display mode of a node to none, effectively disabling it.