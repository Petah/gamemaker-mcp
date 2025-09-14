---
title: "flexpanel_node_style_get_flex"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_flex.htm"
converted: "2025-09-14T03:59:57.115Z"
---

# flexpanel\_node\_style\_get\_flex

This function returns the flex property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Flex](../../Flex_Panels_Styling.htm#h5) / [flexpanel\_node\_style\_set\_flex](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_flex.md)

#### Syntax:

flexpanel\_node\_style\_get\_flex(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_flex = flexpanel\_node\_style\_get\_flex(\_node);

This gets the flex value of a node and stores it in a local variable.