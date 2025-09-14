---
title: "flexpanel_node_style_get_direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_direction.htm"
converted: "2025-09-14T03:59:57.083Z"
---

# flexpanel\_node\_style\_get\_direction

This function returns the direction property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Layout Direction](../../Flex_Panels_Styling.htm#layout) / [flexpanel\_node\_style\_set\_direction](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_direction.md)

#### Syntax:

flexpanel\_node\_style\_get\_direction(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Layout Direction Constant](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_direction.md)

#### Example:

var \_layout\_direction = flexpanel\_node\_style\_get\_direction(\_node);

This gets the layout direction of a node and stores it in a local variable.