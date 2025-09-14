---
title: "flexpanel_node_style_set_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_position.htm"
converted: "2025-09-14T03:59:57.760Z"
---

# flexpanel\_node\_style\_set\_position

This function sets an inset position of the given [Flex Panel Node](../flexpanel_create_node.md). You must specify the edge to set the position for, the position value and the unit of the value (whether it's pixels or a percentage).

See: [Insets](../../Flex_Panels_Styling.htm#h12)

#### Syntax:

flexpanel\_node\_style\_set\_position(node, edge, value, unit);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| edge | Flex Panel Edge Constant | The edge to set the position for |
| value | Real | The value to use |
| unit | Flex Panel Unit Constant | The unit of the value |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_position\_type(\_node, flexpanel\_position\_type.absolute);
flexpanel\_node\_style\_set\_position(\_node, flexpanel\_edge.left, 20, flexpanel\_unit.point);
flexpanel\_node\_style\_set\_position(\_node, flexpanel\_edge.top, 40, flexpanel\_unit.point);

This sets a node's position type to absolute, and then sets the left position to 20px and top position to 40px.