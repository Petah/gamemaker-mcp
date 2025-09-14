---
title: "flexpanel_node_style_get_aspect_ratio"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_aspect_ratio.htm"
converted: "2025-09-14T03:59:57.054Z"
---

# flexpanel\_node\_style\_get\_aspect\_ratio

This function returns the aspectRatio property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Aspect Ratio](../../Flex_Panels_Styling.htm#h3) / [flexpanel\_node\_style\_set\_aspect\_ratio](flexpanel_node_style_set_aspect_ratio.md)

#### Syntax:

flexpanel\_node\_style\_get\_aspect\_ratio(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_aspect = flexpanel\_node\_style\_get\_aspect\_ratio(\_node);

This gets the aspect ratio of a node and stores it in a local variable.