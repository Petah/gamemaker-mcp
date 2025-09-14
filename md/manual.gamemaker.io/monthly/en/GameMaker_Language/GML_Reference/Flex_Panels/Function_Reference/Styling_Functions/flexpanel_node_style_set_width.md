---
title: "flexpanel_node_style_set_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_width.htm"
converted: "2025-09-14T03:59:57.790Z"
---

# flexpanel\_node\_style\_set\_width

This function sets the width property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Width and Height](../../Flex_Panels_Styling.htm#h19)

#### Syntax:

flexpanel\_node\_style\_set\_width(node, width, unit);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| width | Real | The width to set |
| unit | Flex Panel Unit Constant | The unit to use for the width |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_width(\_node, 100, flexpanel\_unit.percent);

This sets the width of a node to 100%.