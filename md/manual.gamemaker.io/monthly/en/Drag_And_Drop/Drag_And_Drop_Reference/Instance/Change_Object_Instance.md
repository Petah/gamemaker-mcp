---
title: "Change Instance"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Change_Object_Instance.htm"
converted: "2025-09-14T03:59:25.906Z"
---

# ![Change Object INstance Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Change.png) Change Instance

With this action you can change one instance into another instance. You need to specify the object that the instance it change into another instance of, and the action will change the instance, performing the Destroy Event and the Clean Up Event of the initial instance and the Create Event of the new instance. Note that if you do not specify a direction or a speed, etc., then the new instance will "inherit" these values. For example, if the initial instance has an image\_angle (rotation) of 180, travels at 2px per game tick and has an image\_speed (animation speed) of 0.5, then the instance it changes into will maintain these values unless explicitly set in the Create event of the new instance.

It is worth noting that changing the instance means that you _can perform no further actions with that instance until the next game tick_, in particular trying to access variables, etc. as that will cause an error. Basically, you change the instance but it is not actually available until the end of the current step, so to access any of the variables it contains directly (for example, calling inst\_changed.x) will not work.

#### Action Syntax:

![Change Object Instance Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Change.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Object | The name of the object to change to an instance of. |

#### Example:

![Change Object Instance Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Change.png)The above action block code checks for a mouse press and if one is detected then it changes the instance into different one.