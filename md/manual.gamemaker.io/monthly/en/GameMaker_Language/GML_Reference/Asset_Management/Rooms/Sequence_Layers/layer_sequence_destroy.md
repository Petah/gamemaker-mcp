---
title: "layer_sequence_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_destroy.htm"
converted: "2025-09-14T03:59:36.607Z"
---

# layer\_sequence\_destroy

With this function you can destroy (remove from the room) a sequence element and its corresponding sequence instance.

You supply the sequence element ID as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) and the sequence will be destroyed.

The function frees the [sequence instance struct](../../Sequences/Sequence_Structs/The_Sequence_Instance_Struct.md) and all the structs under it. Any structs under the sequence instance struct that have been assigned to a variable are _not_ freed at that point, e.g. if you assigned one of the track structs under activeTracks to a variable then that struct will only be freed when the variable no longer references it.
The function also destroys all instances that were created for the sequence's object tracks. This also applies to instances created from an override object defined with [sequence\_instance\_override\_object](../../Sequences/sequence_instance_override_object.md).
Already existing instances that were provided as a replacement for an object index using [sequence\_instance\_override\_object](../../Sequences/sequence_instance_override_object.md) are _not_ destroyed automatically.

#### Syntax:

layer\_sequence\_destroy(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

N/A

#### Example 1:

var a = layer\_get\_all\_elements(layer);
for (var i = 0; i < array\_length(a); i++;)
{
    if layer\_get\_element\_type(a\[i\]) == layerelementtype\_sequence
    {
        layer\_sequence\_destroy(a\[i\]);
    }
}

The above code gets the IDs for all the elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sequence assets and if they are then they are destroyed.

#### Example 2:

var a = layer\_get\_all\_elements(layer);
var track\_struct;
for (var i = 0; i < array\_length(a); i++;)
{
    if layer\_get\_element\_type(a\[i\]) == layerelementtype\_sequence
    {
        var ins = layer\_sequence\_get\_instance(a\[i\]);
        track\_struct = ins.activeTracks\[0\];
        layer\_sequence\_destroy(a\[i\]);
    }
}
show\_debug\_message(track\_struct);

The above code gets the IDs for all the elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sequence assets. If they are, it then gets the instance struct using layer\_sequence\_get\_instance. Next it assigns the first element of the activeTracks array to a temporary variable track\_struct and it destroys the sequence afterwards.

After going through all the sequence elements and destroying them it shows a debug message with the contents of the variable track\_struct. While the sequences were destroyed, track\_struct still contains the struct of the first track of the last encountered sequence instance.