---
title: "flexpanel_node_style_set_direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_direction.htm"
converted: "2025-09-14T03:59:57.453Z"
---

# flexpanel\_node\_style\_set\_direction

This function sets the direction property of the given [Flex Panel Node](../flexpanel_create_node.md). It can be one of the following enum members:

| Constant | Property Value |
| --- | --- |
| flexpanel_direction.inherit | Inherit layout direction from parent |
| flexpanel_direction.LTR | "ltr" |
| flexpanel_direction.RTL | "rtl" |

See: [Layout Direction](../../Flex_Panels_Styling.htm#layout)

#### Syntax:

flexpanel\_node\_style\_set\_direction(node, direction);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| direction | Flex Panel Layout Direction Constant | The layout direction to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_direction(\_node, flexpanel\_direction.RTL);

This sets the layout direction of a node to right-to-left.