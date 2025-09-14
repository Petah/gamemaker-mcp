---
title: "If Object At Place"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Collisions/If_Object_At_Place.htm"
converted: "2025-09-14T03:59:24.015Z"
---

# ![If Object At Place Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/i_Collision_At.png) If Object At Place

This action is used to check and see if there is a collision with one or more instances of the given object(s) with the current instance placed at a point in the room, based on the collision mask of the calling instance. The action will evaluate to true if a collision is detected, or false otherwise.

You give the object to check for and the position to "place" the instance to perform the check - which can be an absolute position in the room or a position relative to the instance - and you can also check the **Not** flag to check if there is _not_ a collision at the given position, in which case the action will then only evaluate as true if _no_ collisions are found, otherwise it will evaluate as false.

After giving the object and position, you can check/uncheck the option to **Return List**. Checking this means the action will create and populate a [list](../Data_Structures/Data_Structure_Actions.md) data structure with _all_ instances in collision with the instance and set the **Target** variable to the DS list ID. When unchecked, it will only set the **Target** variable to a value less than 0 when no collision is detected, or the unique ID value of _one_ of the instances in the collision (note that if multiple instances are in collision then you have no way of knowing which instance ID will be returned when not using a list).

If you have selected to return a list - and the Target variable is _not_ set to **Temp** - then you can also select the **Free Target** option. When set to true, then the list contained in the target variable will be destroyed and a new list created (and returned to the target variable) each time you call the action. In this way you can re-use the same variable without worrying about memory leaks, as, if you do _not_ check **Free Target** option, you become responsible for destroying the list before using the variable again in the action. Note that _regardless_ of whether this option is checked or not, if you have set the action to **Return List**, then the target variable will _always contain a list ID_, and as such, this will need to be freed when the instance is destroyed or the room ends (you can use the [**Clean Up**](../../../The_Asset_Editors/Object_Properties/Object_Events.md) event for this, for example, along with the [Free Data Structure](../Data_Structures/Free_Data_Structure.md) action). It is worth noting that you can set the **Free Target** option to use a pre-defined variable or an expression and so control when the list data structure is freed by setting the variable elsewhere (or having different outcomes for the expression) as long as it evaluates to true/false.

Finally, you supply the **Target** variable that you want to hold the returned value or list ID. If you flag the Target variable to hold the returned value as being a **Temp** (local) variable, then the action will create this variable to hold the return value _only_ until the end of the event, in this case the Free Target option does nothing and you will be responsible for destroying the DS list if that option has been checked. If no target variable is supplied and the **Return List** option is checked, no list will be created.

**IMPORTANT!** Collisions will only register for those instances that have a valid collision mask, i.e. they have a sprite assigned to the sprite\_index, or a sprite assigned to the mask\_index. If **either** of the instances in the collision have no collision mask then the collision will not be detected, regardless of what the instance is drawing at the time.

Note that to add actions into an "if" block, they should be dropped to the _side_ of the action, as shown in the image below:

![If Object At Place drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/If_Collision_At.png)

#### Action Syntax:

![If Object At Place Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/a_Collision_At.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Object | The object or instance to check for collisions. You can click the  icon to add multiple objects to check collisions with. |
| X | The x position to check |
| Y | The y position to check |
| Not | Used to invert the condition; only satisfies if a collision is not found |
| Return List | Whether a list of collisions should be returned in Target, or only the first collision |
| Free Target | Can be set to a variable or expression, or set to true/false to control freeing of the list memory when re-using a list variable |
| Target | The variable to target for the return value of the action |

#### Example:

![If Object At Place Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/e_Collision_At.png)This examples creates a bouncing collision behaviour for the object instance.

The first action checks for a collision with any instances of the object "obj\_Enemy" at the position where the instance is going to move _horizontally_, and if one is found, it reverses the horizontal speed of the instance, so e.g. if it's going right, it goes left.

Then it similarly checks for instances of "obj\_Enemy" at the position where it will move _vertically_, and if an instance is found there, it reverses the vertical speed of the instance.