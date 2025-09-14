---
title: "flexpanel_node_style_set_position_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_position_type.htm"
converted: "2025-09-14T03:59:57.776Z"
---

# flexpanel\_node\_style\_set\_position\_type

This function sets the position property of the given [Flex Panel Node](../flexpanel_create_node.md). It can be one of the following enum members:

| Constant | Property Value |
| --- | --- |
| flexpanel_position_type.relative | "relative" |
| flexpanel_position_type.absolute | "absolute" |
| flexpanel_position_type.static | "static" |

See: [Position Type](../../Flex_Panels_Styling.htm#h17)

#### Syntax:

flexpanel\_node\_style\_set\_position\_type(node, position\_type);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| position_type | Flex Panel Position Type Constant | The position type to set |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_position\_type(\_node, flexpanel\_position\_type.absolute);
flexpanel\_node\_style\_set\_position(\_node, flexpanel\_edge.left, 20, flexpanel\_unit.point);
flexpanel\_node\_style\_set\_position(\_node, flexpanel\_edge.top, 40, flexpanel\_unit.point);

This sets a node's position type to absolute, and then sets the left position to 20px and top position to 40px.