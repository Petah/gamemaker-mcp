---
title: "flexpanel_node_style_get_flex_shrink"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_shrink.htm"
converted: "2025-09-14T03:59:57.171Z"
---

# flexpanel\_node\_style\_get\_flex\_shrink

This function returns the flexShrink property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Flex Shrink](../../Flex_Panels_Styling.htm#h10) / [flexpanel\_node\_style\_set\_flex\_shrink](flexpanel_node_style_set_flex_shrink.md)

#### Syntax:

flexpanel\_node\_style\_get\_flex\_shrink(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_flex\_shrink = flexpanel\_node\_style\_get\_flex\_shrink(\_node);

This gets the flex shrink value of a node and stores it in a local variable.