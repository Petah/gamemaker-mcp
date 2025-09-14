---
title: "flexpanel_node_style_set_flex_basis"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_basis.htm"
converted: "2025-09-14T03:59:57.510Z"
---

# flexpanel\_node\_style\_set\_flex\_basis

This function sets the flexBasis property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Flex Basis](../../Flex_Panels_Styling.htm#h7)

#### Syntax:

flexpanel\_node\_style\_set\_flex\_basis(node, value, unit);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| value | Real | The value to set |
| unit | Flex Panel Unit Constant | The unit of the value |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_flex\_basis(\_node, 60, flexpanel\_unit.point);

This sets the flex basis of a node to 60px.