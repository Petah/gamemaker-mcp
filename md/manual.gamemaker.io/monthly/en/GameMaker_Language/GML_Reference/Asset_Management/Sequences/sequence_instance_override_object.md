---
title: "sequence_instance_override_object"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_instance_override_object.htm"
converted: "2025-09-14T03:59:39.875Z"
---

# sequence\_instance\_override\_object

With this function you can override (replace) all instances of an object used in a sequence with another one or override a single instance of an object with an existing instance.

You supply the sequence instance struct ID (as returned when the sequence instance was created in the room or by using one of the room layer functions - see [here](../Rooms/Sequence_Layers/Sequence_Layers.md)), as well as the object index (as defined in the asset browser) for the object that you want to override. Finally you give an object index or an instance ID to use as the object that is going to override the sequence (supplying an instance ID will simply use the object that the instance was created from as the override). Note that this can only be done on sequence instances (not sequence objects) and must be done before the sequence starts to play, otherwise it won't work.

IMPORTANT If you use this function with a sequence instance that has multiple object tracks of the same object asset and you provide an instance ID as the second argument then only the first instance is replaced with the given instance. The other object tracks will not get an instance.

IMPORTANT If you provide an existing instance ID the instance will stay on the layer it is already on. The instance isn't moved to the layer that the sequence instance/element is on. This is different from creating a sequence instance on a layer using [layer\_sequence\_create](../Rooms/Sequence_Layers/layer_sequence_create.md), where all instances are added to the layer with the sequence element.

#### Syntax:

sequence\_instance\_override\_object(sequence\_instance\_struct, object\_id, instance\_or\_object\_id);

| Argument | Type | Description |
| --- | --- | --- |
| sequence_instance_struct | Sequence Instance Struct | The sequence instance struct to modify. |
| object_id | Object Asset | The object index of the object within the sequence to override. |
| instance_or_object_id | Object Asset or Object Instance | The object index or instance ID to use to override the sequence objects. |

#### Returns:

N/A

#### Example 1: Replace an object ID with another object ID

var \_seq = layer\_sequence\_create("Background", 0, 0, seq\_AnimatedBackground);
var \_seq\_inst = layer\_sequence\_get\_instance(\_seq);
sequence\_instance\_override\_object(\_seq\_inst, obj\_Trees\_Winter, obj\_Trees\_Summer);

The above code creates a new sequence instance on the given layer and then modifies it so that all instances of the object "obj\_Trees\_Winter" are replaced by instances of the object "obj\_Trees\_Summer".

#### Example 2: Replace the first instance of an object ID with an instance ID

var \_seq = layer\_sequence\_create("Background", 0, 0, seq\_AnimatedBackground);
var \_seq\_inst = layer\_sequence\_get\_instance(\_seq);
var \_inst = instance\_find(obj\_Tree\_Christmas, 0);
if (\_inst != noone)
{
    sequence\_instance\_override\_object(\_seq\_inst, obj\_Trees\_Winter, \_inst);
}

The above code creates a new sequence instance on the "Background" layer. It then tries to find an instance of "obj\_Tree\_Christmas" using instance\_find. If an instance of this object is found it then replaces the first instance of object "obj\_Trees\_Winter" in the sequence by this instance using sequence\_instance\_override\_object. All other object tracks with "obj\_Trees\_Winter" as the object will _not_ have an instance.