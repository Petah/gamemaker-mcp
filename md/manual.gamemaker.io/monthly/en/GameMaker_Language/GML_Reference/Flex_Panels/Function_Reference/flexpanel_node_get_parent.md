---
title: "flexpanel_node_get_parent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_parent.htm"
converted: "2025-09-14T03:59:57.966Z"
---

# flexpanel\_node\_get\_parent

This function returns the parent node of the given node, or [undefined](../../../GML_Overview/Data_Types.md) if it has no parent.

#### Syntax:

flexpanel\_node\_get\_parent(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to get the parent of |

#### Returns:

[Flex Panel Node](flexpanel_create_node.md) or [undefined](../../../GML_Overview/Data_Types.md)

#### Example:

var \_parent = flexpanel\_node\_get\_parent(\_node);

This gets the parent of the node \_node and stores it in a local variable.