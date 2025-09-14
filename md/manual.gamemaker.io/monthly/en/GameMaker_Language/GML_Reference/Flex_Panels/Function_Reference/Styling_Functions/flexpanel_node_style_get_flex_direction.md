---
title: "flexpanel_node_style_get_flex_direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_direction.htm"
converted: "2025-09-14T03:59:57.141Z"
---

# flexpanel\_node\_style\_get\_flex\_direction

This function returns the flexDirection property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Flex Direction](../../Flex_Panels_Styling.htm#h8) / [flexpanel\_node\_style\_set\_flex\_direction](flexpanel_node_style_set_flex_direction.md)

#### Syntax:

flexpanel\_node\_style\_get\_flex\_direction(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Direction Constant](flexpanel_node_style_set_flex_direction.md)

#### Example:

var \_flex\_direction = flexpanel\_node\_style\_get\_flex\_direction(\_node);

This gets the flex direction of a node and stores it in a local variable.