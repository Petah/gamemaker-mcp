---
title: "If Collision Shape"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Collisions/If_Collision_Shape.htm"
converted: "2025-09-14T03:59:23.993Z"
---

# ![If Collision Shape Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/i_Collision_Shape.png) If Collision Shape

This action is used to check and see if there is a collision with an instance of the given object(s) within a given shaped area or along a line. You give the shape (rectangle, ellipse or line), the object to check for, and then supply the coordinates for the upper-left and lower-right corners of the shape being used, or in the case of a line, the start and end positions. These can be absolute positions within the game room, or positions relative to the instance performing the action. You can see how this works in the image below:

![Example of different collision shapes](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/collision_shape_example.png)As you can see, the results will depend on the collision mask of the instance being checked for, meaning the instance of the object you are looking for _must_ have a sprite assigned to the sprite\_index, or a sprite assigned to the mask\_index. If it does not then it will not be detected by these functions, regardless of whether it is drawing a sprite or not. It is worth noting that any instance that falls completely within the boundaries set for the ellipse or rectangle shape will also return a collision. The action will evaluate to true if a collision is detected, or false otherwise, although you can also check the **Not** flag to check if there is _not_ a collision with the given shaped area, and the action will then only evaluate as true if _no_ collisions are found, otherwise it will evaluate as false. You can also set the **Exclude Self** option to exclude the calling instance from the collision check.

Next you can check/uncheck the option to **Return List**. Checking this means the action will create and populate a [list](../Data_Structures/Data_Structure_Actions.md) data structure with _all_instances in collision with the shape and set the **Target** variable to the DS list ID. When unchecked, it will only set the **Target** variable to a value less than 0 when no collision is detected, or the unique ID value of _one_ of the instances in the collision (note that if multiple instances are in collision then you have no way of knowing which instance ID will be returned when not using a list).

If you have selected to return a list - and the Target variable is _not_ set to **Temp** - then you can also select the **Free Target** option. When set to true, then the list contained in the target variable will be destroyed and a new list created (and returned to the target variable) each time you call the action. In this way you can re-use the same variable without worrying about memory leaks, as, if you do _not_ check **Free Target** option, you become responsible for destroying the list before using the variable again in the action. Note that _regardless_ of whether this option is checked or not, if you have set the action to **Return List**, then the target variable will _always contain a list ID_, and as such, this will need to be freed when the instance is destroyed or the room ends (you can use the [**Clean Up**](../../../The_Asset_Editors/Object_Properties/Object_Events.md) event for this, for example, along with the [Free Data Structure](../Data_Structures/Free_Data_Structure.md) action). It is worth noting that you can set the **Free Target** option to use a pre-defined variable or an expression and so control when the list data structure is freed by setting the variable elsewhere (or having different outcomes for the expression) as long as it evaluates to true/false.

Finally, you supply the **Target** variable that you want to hold the returned value or list ID. If you flag the Target variable to hold the returned value as being a **Temp** (local) variable, then the action will create this variable to hold the return value _only_ until the end of the event, in this case the Free Target option does nothing and you will be responsible for destroying the DS list if that option has been checked. If no target variable is supplied and the **Return List** option is checked, no list will be created.

**IMPORTANT!** Collisions will only register for those instances that have a valid collision mask, ie: they have a sprite assigned to the sprite\_index, or a sprite assigned to the mask\_index. If the instances of the object being checked for in this action have no collision mask then the collision will not be detected, regardless of what the instance is drawing at the time.

Note that to add actions into an "if" block, they should be dropped to the _side_ of the action, as shown in the image below:

![If Collision Shape drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/If_Collision_Shape.png)

#### Action Syntax:

![If Collision Shape Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/a_Collision_Shape.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Shape | The shape to use |
| Object | The object or instance to check for collisions. You can click the  icon to add multiple objects to check collisions with. |
| x1 | The x position to start from |
| y1 | The y position to start from |
| x2 | The x position to end at |
| y2 | The y position to end at |
| Exclude Self | Whether the collision checker should ignore the current instance or not |
| Not | Used to invert the condition; only satisfies if a collision is not found |
| Return List | Whether a list of collisions should be returned in Target, or only the first collision |
| Free Target | Can be set to a variable or expression, or set to true/false to control freeing of the list memory when re-using a list variable |
| Target | The variable to target for the return value of the action |

#### Example:

![If Collision Shape Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Collisions/e_Collision_Shape.png)The above action block code checks for a collision with any instances of the object " obj\_Enemy" within a 100px circle around the calling instances position. The action generates a list of all instances found to be in collision and stores the list ID in the Target variable. If the action evaluates to true then the list is looped through and each instance with its ID stored in the list has its "hp" variable reduced by 1. The DS list is then freed.