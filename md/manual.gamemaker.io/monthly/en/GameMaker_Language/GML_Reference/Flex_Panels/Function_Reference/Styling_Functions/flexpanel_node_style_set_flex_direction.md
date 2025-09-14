---
title: "flexpanel_node_style_set_flex_direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_direction.htm"
converted: "2025-09-14T03:59:57.528Z"
---

# flexpanel\_node\_style\_set\_flex\_direction

This function sets the flexDirection property of the given [Flex Panel Node](../flexpanel_create_node.md). It can be one of the following enum members:

| Constant | Property Value |
| --- | --- |
| flexpanel_flex_direction.column | "column" |
| flexpanel_flex_direction.row | "row" |
| flexpanel_flex_direction.column_reverse | "column-reverse" |
| flexpanel_flex_direction.row_reverse | "row-reverse" |

See: [Flex Direction](../../Flex_Panels_Styling.htm#h8)

#### Syntax:

flexpanel\_node\_style\_set\_flex\_direction(node, flex\_direction);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| flex_direction | Flex Direction Constant | The flex direction to set |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_flex\_direction(\_node, flexpanel\_flex\_direction.column);

This sets the flex direction of a node to column.