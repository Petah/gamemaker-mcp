---
title: "flexpanel_node_get_struct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_struct.htm"
converted: "2025-09-14T03:59:57.980Z"
---

# flexpanel\_node\_get\_struct

This function returns all the properties of the given node and its children as a struct.

This struct follows the [structure described here](../Flex_Panels_Styling.md) and can be passed into [flexpanel\_create\_node](flexpanel_create_node.md) to create a new layout tree using the same properties.

#### Syntax:

flexpanel\_node\_get\_struct(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to get the struct for |

#### Returns:

[Struct](../../../../../../../GameMaker_Language/GML_Overview/Structs.md)

#### Example:

var \_struct = flexpanel\_node\_get\_struct(\_node);
var \_new\_node = flexpanel\_create\_node(\_struct);

This gets the struct for the node \_node and creates a new node using the same data.