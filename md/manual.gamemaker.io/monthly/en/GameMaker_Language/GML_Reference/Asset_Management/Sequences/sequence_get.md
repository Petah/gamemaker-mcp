---
title: "sequence_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_get.htm"
converted: "2025-09-14T03:59:39.829Z"
---

# sequence\_get

With this function you can retrieve the [Sequence Object Struct](Sequence_Structs/The_Sequence_Object_Struct.md) from a sequence asset. You supply the asset for the sequence as defined in [The Asset Browser](../../../../Introduction/The_Asset_Browser.md), and the function will return the sequence object struct that can then be accessed, or -1 if the sequence doesn't exist or the asset index given is not a sequence.

#### Syntax:

sequence\_get(sequence\_index);

| Argument | Type | Description |
| --- | --- | --- |
| sequence_index | Sequence Asset | The sequence asset as defined in the Asset Browser |

#### Returns:

[Sequence Object Struct](Sequence_Structs/The_Sequence_Object_Struct.md) or -1

#### Example:

var \_seq = sequence\_get(seq\_Logo);
seq.loopmode = seqplay\_pingpong;

The above code retrieves the sequence object struct from the sequence object "seq\_Loop" and then sets the loop mode for the sequence (all subsequently created sequence instances will now use this loop mode).