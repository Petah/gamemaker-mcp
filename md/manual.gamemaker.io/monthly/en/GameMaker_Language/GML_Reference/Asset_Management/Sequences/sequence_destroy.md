---
title: "sequence_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_destroy.htm"
converted: "2025-09-14T03:59:39.801Z"
---

# sequence\_destroy

With this function you can destroy a sequence object that has been created dynamically. You supply either the sequence object struct (as returned by the function [sequence\_create()](sequence_create.md)) or the sequence ID (as returned by the function [layer\_sequence\_get\_sequence()](../Rooms/Sequence_Layers/layer_sequence_get_sequence.md) or from the sequence instance struct property sequence). This function should be used whenever a dynamically created sequence is no longer required to free up the memory associated with it.

#### Syntax:

sequence\_destroy(sequence\_struct\_or\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sequence_struct_or_id | Sequence Asset or Sequence Object Struct | The sequence object struct or ID to destroy |

#### Returns:

N/A

#### Example:

if (sequence\_exists(my\_seq))
{
    sequence\_destroy(my\_seq);
}

The above code checks to see if the given sequence object exists and if it does it is destroyed.