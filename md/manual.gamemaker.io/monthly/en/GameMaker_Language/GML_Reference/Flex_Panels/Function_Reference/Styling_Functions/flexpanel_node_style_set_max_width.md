---
title: "flexpanel_node_style_set_max_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_max_width.htm"
converted: "2025-09-14T03:59:57.684Z"
---

# flexpanel\_node\_style\_set\_max\_width

This function sets the maxWidth property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Min/Max Width and Height](../../Flex_Panels_Styling.htm#h18)

#### Syntax:

flexpanel\_node\_style\_set\_max\_width(node, value, unit);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| value | Real | The value to use |
| unit | Flex Panel Unit Constant | The unit of the value |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_max\_width(\_node, 400, flexpanel\_unit.point);

This sets the maximum width of a node to 400px.