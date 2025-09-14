---
title: "flexpanel_node_get_child_hash"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_child_hash.htm"
converted: "2025-09-14T03:59:57.906Z"
---

# flexpanel\_node\_get\_child\_hash

This function is the same as [flexpanel\_node\_get\_child](flexpanel_node_get_child.md), but it takes either the name of the child to look for or a [hash](../../Variable_Functions/variable_get_hash.md) of its name.

#### Syntax:

flexpanel\_node\_get\_child\_hash(node, hash\_or\_name);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The parent node from which the child will be retrieved |
| hash_or_name | String or Real | The name of the child or a hash of its name |

#### Returns:

[Flex Panel Node](flexpanel_create_node.md)

#### Example:

Create Event

hash = variable\_get\_hash("weap");

Any Event

var \_node = flexpanel\_node\_get\_child\_hash(n\_root, hash);

In the Create event, this gets the hash of the string "weap" and stores it in a variable. At a later point in time, it uses that hash to get a child node named "weap" from the node n\_root.