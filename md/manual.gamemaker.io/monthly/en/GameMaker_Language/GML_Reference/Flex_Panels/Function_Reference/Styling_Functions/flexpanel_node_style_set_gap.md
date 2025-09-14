---
title: "flexpanel_node_style_set_gap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_gap.htm"
converted: "2025-09-14T03:59:57.606Z"
---

# flexpanel\_node\_style\_set\_gap

This function sets the gap size of the given [Flex Panel Node](../flexpanel_create_node.md). You must supply the gutter where the gap is applied:

| Constant | Property |
| --- | --- |
| flexpanel_gutter.all_gutters | "gap" |
| flexpanel_gutter.row | "gapRow" |
| flexpanel_gutter.column | "gapColumn" |

See: [Gap](../../Flex_Panels_Styling.htm#h11)

#### Syntax:

flexpanel\_node\_style\_set\_gap(node, gutter, size);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| gutter | Flex Panel Gutter Constant | The gutter to set |
| size | Real | The gutter size |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_gap(\_node, flexpanel\_gutter.all\_gutters, 10);

This sets the gap of a node for all gutters to 10px.