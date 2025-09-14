---
title: "flexpanel_node_style_set_flex"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_flex.htm"
converted: "2025-09-14T03:59:57.485Z"
---

# flexpanel\_node\_style\_set\_flex

This function sets the flex property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Flex](../../Flex_Panels_Styling.htm#h5)

#### Syntax:

flexpanel\_node\_style\_set\_flex(node, flex);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| flex | Real | The flex value to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_flex(\_node, -1);

This sets the flex value of a node to -1, acting as the flex shrink value being set to 1.