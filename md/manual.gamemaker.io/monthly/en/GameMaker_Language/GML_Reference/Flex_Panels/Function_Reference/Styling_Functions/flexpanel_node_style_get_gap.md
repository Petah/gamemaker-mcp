---
title: "flexpanel_node_style_get_gap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_gap.htm"
converted: "2025-09-14T03:59:57.202Z"
---

# flexpanel\_node\_style\_get\_gap

This function returns the gap of the given [Flex Panel Node](../flexpanel_create_node.md) for the specified gutter(s).

See: [Gap](../../Flex_Panels_Styling.htm#h11) / [flexpanel\_node\_style\_set\_gap](flexpanel_node_style_set_gap.md)

#### Syntax:

flexpanel\_node\_style\_get\_gap(node, gutter);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |
| gutter | Flex Panel Gutter Constant | The specific gap property to check. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_gap = flexpanel\_node\_style\_get\_gap(\_node, flexpanel\_gutter.all\_gutters);

This gets the general gap of a node and stores it in a local variable.