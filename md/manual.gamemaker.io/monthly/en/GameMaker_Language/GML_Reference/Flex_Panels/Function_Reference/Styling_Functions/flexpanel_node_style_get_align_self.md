---
title: "flexpanel_node_style_get_align_self"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_align_self.htm"
converted: "2025-09-14T03:59:57.035Z"
---

# flexpanel\_node\_style\_get\_align\_self

This function returns the alignSelf property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Align Self](../../Flex_Panels_Styling.htm#h2) / [flexpanel\_node\_style\_set\_align\_self](flexpanel_node_style_set_align_self.md)

#### Syntax:

flexpanel\_node\_style\_get\_align\_self(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Alignment Constant](flexpanel_node_style_set_align_items.md)

#### Example:

var \_align\_self = flexpanel\_node\_style\_get\_align\_self(\_node);

This gets the align self value of a node and stores it in a local variable.