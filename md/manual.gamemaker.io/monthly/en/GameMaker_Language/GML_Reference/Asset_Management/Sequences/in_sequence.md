---
title: "in_sequence"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/in_sequence.htm"
converted: "2025-09-14T03:59:39.777Z"
---

# in\_sequence

This is a **built-in variable** that is part of the [Built-In Instance Variables](../Instances/Instance_Variables/Instance_Variables.md) created for every object instance in your game. If the instance is being controlled by a sequence, this variable will return true, otherwise it will return false. This is a **read-only** variable and cannot be changed.

Note that this variable will become false after the controlling sequence has ended, even if its sequence element still exists, and will become true if that sequence element is [played again](../Rooms/Sequence_Layers/layer_sequence_play.md).

You can use this variable in your player (or CPU) controlled objects to make sure that they're only moved by code when they're not in a sequence. This can prove useful for cutscenes, when you need to use the same instances in a sequence (using the [sequence\_instance\_override\_object](sequence_instance_override_object.md) function) and you need to make sure that they can't be moved by their usual code while that cutscene is active.

#### Syntax:

in\_sequence

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!in\_sequence)
{
    x += move\_x;
    y += move\_y;
}

The above code checks the in\_sequence variable, and if it is false (meaning the instance is not being controlled by a sequence) then it adds move\_x and move\_y to the instance's position, making sure that it only moves when it's not in a sequence.