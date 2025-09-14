---
title: "flexpanel_node_style_set_align_content"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_align_content.htm"
converted: "2025-09-14T03:59:57.379Z"
---

# flexpanel\_node\_style\_set\_align\_content

This function sets the alignContent property of the given [Flex Panel Node](../flexpanel_create_node.md). You can pass a [Flex Panel Justify Content Constant](flexpanel_node_style_set_justify_content.md).

See: [Align Content](../../Flex_Panels_Styling.htm#h)

#### Syntax:

flexpanel\_node\_style\_set\_align\_content(node, align);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| align | Flex Panel Justify Content Constant | The alignment to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_align\_content(\_node, flexpanel\_justify.space\_between);

This sets the align content of a node to space-between.