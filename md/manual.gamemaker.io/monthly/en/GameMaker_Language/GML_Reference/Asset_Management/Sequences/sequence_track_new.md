---
title: "sequence_track_new"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sequences/sequence_track_new.htm"
converted: "2025-09-14T03:59:39.926Z"
---

# sequence\_track\_new

With this function you can create a new sequence track [struct](../../../GML_Overview/Structs.md), supplying the type of asset or parameter track that you wish to make.

The type argument can be any of the _asset_ or _parameter_ track constants under the [Sequence Track Type Constant](Sequence_Structs/The_Track_Struct.htm#type). seqtracktype\_message and seqtracktype\_moment cannot be used, as they refer to special tracks.

The function will return a sequence [track struct](Sequence_Structs/The_Track_Struct.md) which can then have data added to it before being assigned to a [sequence object](Sequence_Structs/The_Sequence_Object_Struct.md).

#### Syntax:

sequence\_track\_new(type)

| Argument | Type | Description |
| --- | --- | --- |
| type | Sequence Track Type Constant | The type of track to create (except seqtracktype_message and seqtracktype_moment) |

#### Returns:

[Sequence Track Struct](Sequence_Structs/The_Track_Struct.md)

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