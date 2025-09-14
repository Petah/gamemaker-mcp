---
title: "sequence_get_objects"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_get_objects.htm"
converted: "2025-09-14T03:59:39.842Z"
---

# sequence\_get\_objects

With this function you can retrieve an [array](../../../GML_Overview/Arrays.md) of all the object indices that have instances being created within the given sequence. You supply either the sequence object struct (as returned by the function [sequence\_create()](sequence_create.md) or [sequence\_get()](sequence_get.md)) or the sequence ID (as returned by the function [layer\_sequence\_get\_sequence()](../Rooms/Sequence_Layers/layer_sequence_get_sequence.md) or from the sequence instance struct property sequence) and the function will return an array, where each item in the array is an [object\_index](../Objects/object_index.md) for the different objects being used by the sequence to create instances.

#### Syntax:

sequence\_get\_objects(sequence\_struct\_or\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sequence_struct_or_id | Sequence Asset or Sequence Object Struct | The sequence object struct or ID to get the objects from. |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

var \_seq = sequence\_get(seq\_Logo);
obj\_array = sequence\_get\_objects(\_seq);

The above code gets the struct for a sequence object and then retrieves the objects that it uses and stores the array in a variable.