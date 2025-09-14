---
title: "flexpanel_node_remove_all_children"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_remove_all_children.htm"
converted: "2025-09-14T03:59:58.039Z"
---

# flexpanel\_node\_remove\_all\_children

This function removes all direct children from the given node (but doesn't [delete](flexpanel_delete_node.md) them).

Read [flexpanel\_node\_remove\_child](flexpanel_node_remove_child.md) for information on how it affects each child node.

#### Syntax:

flexpanel\_node\_remove\_all\_children(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node from which all children will be removed |

#### Returns:

N/A

#### Example:

flexpanel\_node\_remove\_all\_children(n\_root);

This removes all children from the node n\_root.