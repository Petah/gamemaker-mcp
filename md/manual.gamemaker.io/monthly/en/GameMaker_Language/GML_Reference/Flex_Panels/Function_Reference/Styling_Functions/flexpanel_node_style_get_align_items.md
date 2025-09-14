---
title: "flexpanel_node_style_get_align_items"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_align_items.htm"
converted: "2025-09-14T03:59:57.023Z"
---

# flexpanel\_node\_style\_get\_align\_items

This function returns the alignItems property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Align Items](../../Flex_Panels_Styling.htm#h1) / [flexpanel\_node\_style\_set\_align\_items](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_align_items.md)

#### Syntax:

flexpanel\_node\_style\_get\_align\_items(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Alignment Constant](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_align_items.md)

#### Example:

var \_align\_items = flexpanel\_node\_style\_get\_align\_items(\_node);

This gets the align items value of a node and stores it in a local variable.