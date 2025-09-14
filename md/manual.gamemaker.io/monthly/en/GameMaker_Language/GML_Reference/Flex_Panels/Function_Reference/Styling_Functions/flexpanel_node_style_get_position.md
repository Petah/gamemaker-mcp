---
title: "flexpanel_node_style_get_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_position.htm"
converted: "2025-09-14T03:59:57.335Z"
---

# flexpanel\_node\_style\_get\_position

This function returns the inset position for the given edge of a [Flex Panel Node](../flexpanel_create_node.md).

See: [Insets](../../Flex_Panels_Styling.htm#h12) / [flexpanel\_node\_style\_set\_position](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_position.md)

#### Syntax:

flexpanel\_node\_style\_get\_position(node, edge);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |
| edge | Flex Panel Edge Constant | The edge to get the inset for. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_left = flexpanel\_node\_style\_get\_position(\_node, flexpanel\_edge.left);

This gets the left inset position of a node and stores it in a local variable.