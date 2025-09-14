---
title: "Pause Sequence"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Pause_Sequence.htm"
converted: "2025-09-14T03:59:27.789Z"
---

# ![Pause Sequence Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_pause.png) Pause Sequence

With this action you can pause a playing sequence. You supply the sequence element ID (as returned by the action [Create Sequence](Create_Sequence_Element.md)), and the action will pause it playing.

#### Action Syntax:

![Pause Sequence Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_pause.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The ID of the sequence element to pause. |

#### Example:

![Pause Sequence Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_play.png)The above action block code checks to see if a global variable is true. If it is then the sequence element referenced in the variable "my\_seq" is paused, otherwise it is set to play.