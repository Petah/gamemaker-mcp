---
title: "Set Sequence Head"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Set_Sequence_Head.htm"
converted: "2025-09-14T03:59:27.836Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_set_head.png) Set Sequence Head

With this action you can set the playhead position of the given sequence element in the room to a specified frame. You supply the sequence element ID (as returned by the action [Create Sequence](Create_Sequence_Element.md)) and the new playhead position in frames. For information on the playhead, see [Using The Dope Sheet](../../../The_Asset_Editors/Sequence_Properties/Using_The_Dope_Sheet.md).

Note that the position is in _frames_ and if you set a value greater than the total number of frames (or less than 0) then the actual final playhead position will depend on the type of sequence playback that has been selected, following these rules:

-   **No looping**: The playhead will clamp to the end of the loop (or the beginning if the value given is negative)
-   **Looping**: The playhead will wrap back to the beginning of the sequence plus the extra frames, eg: if you set the playhead on a 30 frame sequence to a position of frame 45, the actual playhead position will end up being 15. If you give a negative value, then the sequence playhead will wrap in the reverse direction.
-   **Ping-pong looping**: The playhead will advance to the end and then go back the extra number of frames that are over the total frame length, reversing the direction of playback, eg: If the sequence is 30 frames and you set the playhead to 40, the final playhead position will be 20 and the direction will be reversed (going down to 0). Note that you should _never_ give a negative value for ping-pong playback of a sequence, as it may have undefined results.

Setting the head position in this way will not stop playback and the sequence will simply continue from the new playhead position unless it is paused.

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_set_head.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The ID of the sequence element to change the head position of. |
| Head (frames) | The new head position (in frames) for the sequence element. |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_head.png)The above action block retrieves the current head position of the sequence element ID stored in the variable "seq\_id". That value is then used to set the head position of the same sequence element, advancing it by 4 frames.