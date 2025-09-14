---
title: "flexpanel_node_style_get_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_height.htm"
converted: "2025-09-14T03:59:57.214Z"
---

# flexpanel\_node\_style\_get\_height

This function returns the height property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Width and Height](../../Flex_Panels_Styling.htm#h19) / [flexpanel\_node\_style\_set\_height](flexpanel_node_style_set_height.md)

#### Syntax:

flexpanel\_node\_style\_get\_height(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_height = flexpanel\_node\_style\_get\_height(\_node);

This gets the height of a node and stores it in a local variable.