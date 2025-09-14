---
title: "flexpanel_node_style_get_margin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_margin.htm"
converted: "2025-09-14T03:59:57.247Z"
---

# flexpanel\_node\_style\_get\_margin

This function returns the margin for the given edge(s) of a [Flex Panel Node](../flexpanel_create_node.md).

See: [Margin](../../Flex_Panels_Styling.htm#h14) / [flexpanel\_node\_style\_set\_margin](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_margin.md)

#### Syntax:

flexpanel\_node\_style\_get\_margin(node, edge);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |
| edge | Flex Panel Edge Constant | The edge to get the margin for. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_margin = flexpanel\_node\_style\_get\_margin(\_node, flexpanel\_edge.all\_edges);

This gets the general margin of a node and stores it in a local variable.