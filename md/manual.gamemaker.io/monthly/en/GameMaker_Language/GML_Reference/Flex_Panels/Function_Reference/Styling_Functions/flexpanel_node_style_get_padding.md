---
title: "flexpanel_node_style_get_padding"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_padding.htm"
converted: "2025-09-14T03:59:57.316Z"
---

# flexpanel\_node\_style\_get\_padding

This function returns the padding for the given edge(s) of a [Flex Panel Node](../flexpanel_create_node.md).

See: [Padding](../../Flex_Panels_Styling.htm#h15) / [flexpanel\_node\_style\_set\_padding](flexpanel_node_style_set_padding.md)

#### Syntax:

flexpanel\_node\_style\_get\_padding(node, edge);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |
| edge | Flex Panel Edge Constant | The edge to get the padding for. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_padding = flexpanel\_node\_style\_get\_padding(\_node, flexpanel\_edge.all\_edges);

This gets the general padding of a node and stores it in a local variable.