---
title: "flexpanel_node_style_get_border"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_border.htm"
converted: "2025-09-14T03:59:57.070Z"
---

# flexpanel\_node\_style\_get\_border

This function returns the border for the given edge(s) of a [Flex Panel Node](../flexpanel_create_node.md).

See: [Border](../../Flex_Panels_Styling.htm#h16) / [flexpanel\_node\_style\_set\_border](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_border.md)

#### Syntax:

flexpanel\_node\_style\_get\_border(node, edge);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |
| edge | Flex Panel Edge Constant | The edge to get the border for. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_border = flexpanel\_node\_style\_get\_border(\_node, flexpanel\_edge.all\_edges);

This gets the general border of a node and stores it in a local variable.