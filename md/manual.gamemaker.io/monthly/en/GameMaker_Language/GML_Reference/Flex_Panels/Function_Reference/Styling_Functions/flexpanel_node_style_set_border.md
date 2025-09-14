---
title: "flexpanel_node_style_set_border"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_border.htm"
converted: "2025-09-14T03:59:57.437Z"
---

# flexpanel\_node\_style\_set\_border

This function sets the border for the given edge(s) of a [Flex Panel Node](../flexpanel_create_node.md).

See: [Border](../../Flex_Panels_Styling.htm#h16)

#### Syntax:

flexpanel\_node\_style\_set\_border(node, edge, size);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| edge | Flex Panel Edge Constant | The edge to set the border for |
| size | Real | The size of the border |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_border(\_node, flexpanel\_edge.all\_edges, 10);

This sets the border of a node for all its edges to 10px.