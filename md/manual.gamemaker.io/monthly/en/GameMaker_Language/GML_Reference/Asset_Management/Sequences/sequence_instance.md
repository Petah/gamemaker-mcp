---
title: "sequence_instance"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_instance.htm"
converted: "2025-09-14T03:59:39.856Z"
---

# sequence\_instance

This is a **built-in variable** that is part of the [Built-In Instance Variables](../Instances/Instance_Variables/Instance_Variables.md) created for every object instance in your game. If the instance is being controlled by a sequence, this variable will hold the [sequence instance struct](Sequence_Structs/The_Sequence_Instance_Struct.md) for the Sequence controlling the instance, otherwise it will be undefined. This is a **read-only** variable and cannot be changed.

Note that this variable will become undefined after the controlling Sequence has ended, even if its Sequence Element still exists, and will get the struct again if that Sequence element is [replayed](../Rooms/Sequence_Layers/layer_sequence_play.md).

#### Syntax:

sequence\_instance

#### Returns:

[Sequence Instance Struct](Sequence_Structs/The_Sequence_Instance_Struct.md)

#### Example:

if (in\_sequence)
{
    sequence\_instance.speedScale = 2;
}

The above code checks the [in\_sequence](in_sequence.md) variable, and if it is true (meaning the instance is being controlled by a sequence) then it will change the speed scale of that Sequence to 2.