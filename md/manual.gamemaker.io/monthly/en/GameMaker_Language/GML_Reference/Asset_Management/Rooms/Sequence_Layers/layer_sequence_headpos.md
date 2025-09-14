---
title: "layer_sequence_headpos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_headpos.htm"
converted: "2025-09-14T03:59:36.816Z"
---

# layer\_sequence\_headpos

With this function you can set the playhead position of a sequence element to a specific frame. You supply the sequence element ID as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) along with the new position to set. Note that the position is in _frames_ and if you set a value greater than the total number of frames (or less than 0) then the actual final playhead position will depend on the type of sequence playback that has been selected, following these rules:

-   **No looping**: The playhead will clamp to the end of the loop (or the beginning if the value given is negative)
-   **Looping**: The playhead will wrap back to the beginning of the sequence plus the extra frames, eg: if you set the playhead on a 30 frame sequence to a position of frame 45, the actual playhead position will end up being 15. If you give a negative value, then the sequence playhead will wrap in the reverse direction.
-   **Ping-pong looping**: The playhead will advance to the end and then go back the extra number of frames that are over the total frame length, reversing the direction of playback, eg: If the sequence is 30 frames and you set the playhead to 40, the final playhead position will be 20 and the direction will be reversed (going down to 0). Note that you should _never_ give a negative value for ping-pong playback of a sequence, as it may have undefined results.

Setting the head position in this way will not stop playback and the sequence will simply continue from the new playhead position unless it is paused.

#### Syntax:

layer\_sequence\_headpos(sequence\_element\_id, position)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |
| position | Real | The position within the sequence (in frames) to set the playhead position to (can be a decimal value) |

#### Returns:

N/A

#### Example:

var a = layer\_get\_all\_elements(layer);
for (var i = 0; i < array\_length(a); i++;)
{
    if layer\_get\_element\_type(a\[i\]) == layerelementtype\_sequence
    {
        layer\_sequence\_headpos(a\[i\], 0)
    }
}

The above code gets the IDs for all the elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sequence assets and if they then their playhead position is set to 0.