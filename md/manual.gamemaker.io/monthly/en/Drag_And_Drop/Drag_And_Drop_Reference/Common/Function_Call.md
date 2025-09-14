---
title: "Function Call"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Function_Call.htm"
converted: "2025-09-14T03:59:24.189Z"
---

# ![Function Call Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Execute_Function.png) Function Call

This action can be used to call any [GML function](../../../GameMaker_Language/GML_Reference/GML_Reference.md) or any [user-defined function](Declare_A_New_Function.md). You give the function to call and then supply any additional _arguments_ that it requires, ie: any values (strings, integers, resource indices, etc...) that you wish to input into the function so that it can use them. You can add additional argument inputs by clicking the plus icon  ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png)beside the action, and you should ensure that your argument count matches that of the function being used (ie: if the function requires 3 arguments, you should supply 3 arguments). Some functions can also return a value for later use in the action block list, and so you can also specify the **target variable** that should store this return value, which can have been created previously or can be a new temporary local one (if you check the "**Temp**" check-box). Both the target and the argument fields can be left blank if they are not required.

#### Action Syntax:

![Function Call Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Execute_Function.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Function | The GML function to call. |
| Argument0 ... ArgumentX | The different arguments (values) that are to be passed to the function. |
| Target | The name of the variable that is to be targeted for any returned values (can be left blank). |

#### Example:

![Function Call Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Execute_Function.png)The above action block code checks to see if an instance of "obj\_Player" exists and if it does it calls the [point\_distance()](../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/point_distance.md) function, passing in the current instances x and y position, as well as the "obj\_player" x and y position. It will return the distance between the two points to the (previously created) dist instance variable, or set the variable to 0 if there is no instance of "obj\_Player" in the room.