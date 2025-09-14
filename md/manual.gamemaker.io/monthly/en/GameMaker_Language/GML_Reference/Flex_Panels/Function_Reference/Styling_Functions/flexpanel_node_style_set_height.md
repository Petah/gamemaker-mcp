---
title: "flexpanel_node_style_set_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_height.htm"
converted: "2025-09-14T03:59:57.622Z"
---

# flexpanel\_node\_style\_set\_height

This function sets the height property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Width and Height](../../Flex_Panels_Styling.htm#h19)

#### Syntax:

flexpanel\_node\_style\_set\_height(node, height, unit);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| height | Real | The height to set |
| unit | Flex Panel Unit Constant | The unit to use for the height |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_height(\_node, 100, flexpanel\_unit.percent);

This sets the height of a node to 100%.