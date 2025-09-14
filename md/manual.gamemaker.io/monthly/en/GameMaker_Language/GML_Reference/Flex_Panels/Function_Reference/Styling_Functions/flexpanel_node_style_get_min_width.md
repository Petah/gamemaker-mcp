---
title: "flexpanel_node_style_get_min_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_min_width.htm"
converted: "2025-09-14T03:59:57.302Z"
---

# flexpanel\_node\_style\_get\_min\_width

This function returns the minWidth property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Min/Max Width and Height](../../Flex_Panels_Styling.htm#h18) / [flexpanel\_node\_style\_set\_min\_width](flexpanel_node_style_set_min_width.md)

#### Syntax:

flexpanel\_node\_style\_get\_min\_width(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_min\_width = flexpanel\_node\_style\_get\_min\_width(\_node);

This gets the minimum width of a node and stores it in a local variable.