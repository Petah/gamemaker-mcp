---
title: "flexpanel_node_style_set_margin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_margin.htm"
converted: "2025-09-14T03:59:57.651Z"
---

# flexpanel\_node\_style\_set\_margin

This function sets the margin for the given edge(s) of a [Flex Panel Node](../flexpanel_create_node.md).

See: [Margin](../../Flex_Panels_Styling.htm#h14)

#### Syntax:

flexpanel\_node\_style\_set\_margin(node, edge, size);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| edge | Flex Panel Edge Constant | The edge to set the margin of |
| size | Real | The size of the margin |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_margin(\_node, flexpanel\_edge.all\_edges, 10);

This sets the margin of a node for all its edges to 10px.