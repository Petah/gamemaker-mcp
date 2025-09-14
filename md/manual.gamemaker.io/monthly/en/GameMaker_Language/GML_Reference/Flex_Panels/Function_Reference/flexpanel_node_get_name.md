---
title: "flexpanel_node_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_name.htm"
converted: "2025-09-14T03:59:57.936Z"
---

# flexpanel\_node\_get\_name

This function returns the name set for the given node. Will return [undefined](../../../GML_Overview/Data_Types.md) if no name was set.

This is originally set either through the name property in the [initial struct](flexpanel_create_node.md) or through [flexpanel\_node\_set\_name](flexpanel_node_set_name.md).

#### Syntax:

flexpanel\_node\_get\_name(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to get the name of |

#### Returns:

[String](../../../GML_Overview/Data_Types.md) or [undefined](../../../GML_Overview/Data_Types.md)

#### Example:

var \_name = flexpanel\_node\_get\_name(\_node);

This gets the name of the node \_node and stores it in a local variable.