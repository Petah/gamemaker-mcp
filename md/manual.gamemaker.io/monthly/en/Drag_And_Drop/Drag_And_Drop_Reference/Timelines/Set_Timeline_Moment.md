---
title: "Set Timeline Moment"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Timelines/Set_Timeline_Moment.htm"
converted: "2025-09-14T03:59:28.548Z"
---

# ![Set Timeline Moment Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Timelines/i_Timelines_Set_Timeline_Moment.png) Set Timeline Moment

This action be used to skip a timeline from the current moment to a new one. Timelines move forward through different "moments", and each moment typically takes up one game frame (like the Step Event of an object). Once a timeline has started it will progress through the moments until it reaches the end at which point it will either loop back to the first moment in the timeline or stop altogether. However, this linear approach to timelines can be modified using this action to set a different moment at any time, permitting you to create your own timeline loops, or to skip sections of a timeline under certain circumstances, etc... With this action you simply set the moment to jump to within the timeline and the next game frame will run that moment (note that you need to have assigned a timeline to the instance using the action [Set Instance Timeline](Set_Instance_Timeline.md)).

#### Action Syntax:

![Set Timeline Moment Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Timelines/a_Timelines_Set_Timeline_Moment.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Moment | The moment to set the assigned timeline to |

#### Example:

![Set Timeline Moment Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Timelines/e_Timelines_Set_Instance_Timeline.png)The above action block code will assign a timeline to the instance calling the actions as well as set the initial moment to 10 and then the timeline speed to 2.