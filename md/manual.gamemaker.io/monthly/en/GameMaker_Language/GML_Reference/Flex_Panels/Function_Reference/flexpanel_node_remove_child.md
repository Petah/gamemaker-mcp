---
title: "flexpanel_node_remove_child"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_remove_child.htm"
converted: "2025-09-14T03:59:58.054Z"
---

# flexpanel\_node\_remove\_child

This function removes a node from its parent's child list. This will not remove the node from memory, so if you do not need it anymore, you must also [delete it](flexpanel_delete_node.md).

After this, the child node will no longer be included in the layout tree where it was present, and effectively becomes the "root" of its own tree. You must either use this detached node on its own for [calculations](../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_calculate_layout.md), insert it somewhere else in the same tree where it was, or place it in an entirely different tree.

#### Syntax:

flexpanel\_node\_remove\_child(root, node);

| Argument | Type | Description |
| --- | --- | --- |
| root | Flex Panel Node | The parent node |
| node | Flex Panel Node | The child node to remove from the parent |

#### Returns:

N/A

#### Example:

var \_node = flexpanel\_node\_get\_child(n\_root, 0);
flexpanel\_node\_remove\_child(n\_root, \_node);

This gets the first child from the node n\_root and removes it from its parent.