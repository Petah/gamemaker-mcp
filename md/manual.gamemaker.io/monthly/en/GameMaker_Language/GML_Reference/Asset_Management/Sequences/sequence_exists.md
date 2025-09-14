---
title: "sequence_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_exists.htm"
converted: "2025-09-14T03:59:39.813Z"
---

# sequence\_exists

With this function you can check to see if a sequence object exists or not. You supply either the sequence object struct (as returned by the function [sequence\_create()](sequence_create.md) or [sequence\_get()](sequence_get.md)) or the sequence ID (as returned by the function [layer\_sequence\_get\_sequence()](../Rooms/Sequence_Layers/layer_sequence_get_sequence.md) or from the sequence instance struct property sequence, or the index from the asset browser) and the function will return true if the sequence object exists or false if it does not.

#### Syntax:

sequence\_exists(sequence\_struct\_or\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sequence_struct_or_id | Sequence Asset or Sequence Object Struct | The sequence to check for, can be the asset reference itself or its Sequence object struct. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (sequence\_exists(my\_seq))
{
    sequence\_destroy(my\_seq);
}

The above code checks to see if the given sequence object exists and if it does it is destroyed.