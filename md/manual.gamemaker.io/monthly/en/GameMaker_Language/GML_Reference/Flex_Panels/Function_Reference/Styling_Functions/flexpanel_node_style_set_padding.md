---
title: "flexpanel_node_style_set_padding"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_padding.htm"
converted: "2025-09-14T03:59:57.736Z"
---

# flexpanel\_node\_style\_set\_padding

This function sets the padding for the given edge(s) of a [Flex Panel Node](../flexpanel_create_node.md). You can pass one of the following enum members for the edge:

| Constant | Property |
| --- | --- |
| flexpanel_edge.left | "paddingLeft" |
| flexpanel_edge.top | "paddingTop" |
| flexpanel_edge.right | "paddingRight" |
| flexpanel_edge.bottom | "paddingBottom" |
| flexpanel_edge.start | "paddingStart" |
| flexpanel_edge.end | "paddingEnd" |
| flexpanel_edge.horizontal | "paddingHorizontal" |
| flexpanel_edge.vertical | "paddingVertical" |
| flexpanel_edge.all_edges | "padding" |

See: [Padding](../../Flex_Panels_Styling.htm#h15)

#### Syntax:

flexpanel\_node\_style\_set\_padding(node, edge, size);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| edge | Flex Panel Edge Constant | The edge to set the padding for |
| size | Real | The size of the padding |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_padding(\_node, flexpanel\_edge.all\_edges, 10);

This sets the padding of a node for all its edges to 10px.