---
title: "sequence_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_create.htm"
converted: "2025-09-14T03:59:39.788Z"
---

# sequence\_create

With this function you can create a new sequence object which you can then add tracks to. The function returns a [struct](../../../GML_Overview/Structs.md) which you can then access to setup the new sequence you have created. The contents of this struct are detailed on [this page](Sequence_Structs/The_Sequence_Object_Struct.md). The sequence object struct can then be used to create instances of the sequence on a room layer using the function [layer\_sequence\_create()](../Rooms/Sequence_Layers/layer_sequence_create.md). Note that when creating sequence objects in this way you should remove them again by calling the function [sequence\_destroy()](sequence_destroy.md) when they are no longer required, otherwise you will have a memory leak which can slow down and eventually crash your game.

#### Syntax:

sequence\_create();

#### Returns:

[Sequence Object Struct](Sequence_Structs/The_Sequence_Object_Struct.md)

#### Example:

myseq = sequence\_create();
myseq.length = 120;
myseq.loopmode = seqplay\_pingpong;

The above code creates a new sequence object struct and sets its playback length and loop mode.