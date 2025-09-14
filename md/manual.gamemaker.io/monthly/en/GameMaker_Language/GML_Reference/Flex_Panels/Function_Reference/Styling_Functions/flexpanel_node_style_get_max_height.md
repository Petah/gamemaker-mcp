---
title: "flexpanel_node_style_get_max_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_max_height.htm"
converted: "2025-09-14T03:59:57.259Z"
---

# flexpanel\_node\_style\_get\_max\_height

This function returns the maxHeight property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Min/Max Width and Height](../../Flex_Panels_Styling.htm#h18) / [flexpanel\_node\_style\_set\_max\_height](flexpanel_node_style_set_max_height.md)

#### Syntax:

flexpanel\_node\_style\_get\_max\_height(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_max\_height = flexpanel\_node\_style\_get\_max\_height(\_node);

This gets the maximum height of a node and stores it in a local variable.