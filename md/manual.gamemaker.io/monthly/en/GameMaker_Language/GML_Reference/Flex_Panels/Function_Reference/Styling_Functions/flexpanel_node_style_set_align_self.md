---
title: "flexpanel_node_style_set_align_self"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_align_self.htm"
converted: "2025-09-14T03:59:57.407Z"
---

# flexpanel\_node\_style\_set\_align\_self

This function sets the alignSelf property of the given [Flex Panel Node](../flexpanel_create_node.md). You can pass a [Flex Panel Alignment Constant](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_align_items.md).

See: [Align Self](../../Flex_Panels_Styling.htm#h2)

#### Syntax:

flexpanel\_node\_style\_set\_align\_self(node, align);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| align | Flex Panel Alignment Constant | The alignment to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_align\_self(\_node, flexpanel\_align.center);

This sets the align self of a node to center.