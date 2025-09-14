---
title: "flexpanel_node_style_set_min_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_min_height.htm"
converted: "2025-09-14T03:59:57.702Z"
---

# flexpanel\_node\_style\_set\_min\_height

This function sets the minHeight property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Min/Max Width and Height](../../Flex_Panels_Styling.htm#h18)

#### Syntax:

flexpanel\_node\_style\_set\_min\_height(node, value, unit);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| value | Real | The value to use |
| unit | Flex Panel Unit Constant | The unit of the value |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_min\_height(\_node, 60, flexpanel\_unit.point);

This sets the minimum height of a node to 60px.