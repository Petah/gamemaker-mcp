---
title: "sequence_keyframe_new"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_keyframe_new.htm"
converted: "2025-09-14T03:59:39.893Z"
---

# sequence\_keyframe\_new

With this function you can create a new track keyframe [struct](../../../GML_Overview/Structs.md), supplying the type of track that the keyframe will be applied to. The type argument can be any one of the [Sequence Track Type Constant](Sequence_Structs/The_Track_Struct.htm#type)s [listed on this page](Sequence_Structs/The_Track_Struct.md).

The function will return a [track keyframe struct](Sequence_Structs/The_Keyframe_Struct.md) which can then have data added to it before being assigned to a [track struct](Sequence_Structs/The_Track_Struct.md).

#### Syntax:

sequence\_keyframe\_new(type);

| Argument | Type | Description |
| --- | --- | --- |
| type | Sequence Track Type Constant | The type of keyframe to create. |

#### Returns:

[Sequence Keyframe Struct](Sequence_Structs/The_Keyframe_Struct.md)

#### Example:

myseq = sequence\_create();
var mytracks = array\_create(1);
mytracks\[0\] = sequence\_track\_new(seqtracktype\_graphic);
var graphickeys = array\_create(1);
graphickeys\[0\] = sequence\_keyframe\_new(seqtracktype\_graphic);
graphickeys\[0\].frame = 0;
graphickeys\[0\].length = 1;
graphickeys\[0\].stretch = true;
graphickeys\[0\].disabled = false;
var graphickeydata = array\_create(1);
graphickeydata\[0\] = sequence\_keyframedata\_new(seqtracktype\_graphic);
graphickeydata\[0\].spriteIndex = spr\_Platform;
graphickeydata\[0\].channel = 0;
graphickeys\[0\].channels = graphickeydata;
mytracks\[0\].name = "TestGraphicTrack";
mytracks\[0\].keyframes = graphickeys;
myseq.tracks = mytracks;

The above code creates a new sequence and then creates a graphic asset track and sets some keyframe data on the track. This track is then assigned to the instance.