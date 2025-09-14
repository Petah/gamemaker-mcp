---
title: "flexpanel_node_style_get_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_width.htm"
converted: "2025-09-14T03:59:57.362Z"
---

# flexpanel\_node\_style\_get\_width

This function returns the width property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Width and Height](../../Flex_Panels_Styling.htm#h19) / [flexpanel\_node\_style\_set\_width](../../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_width.md)

#### Syntax:

flexpanel\_node\_style\_get\_width(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_width = flexpanel\_node\_style\_get\_width(\_node);

This gets the width of a node and stores it in a local variable.