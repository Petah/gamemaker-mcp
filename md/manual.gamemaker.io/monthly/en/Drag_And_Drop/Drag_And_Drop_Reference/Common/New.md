---
title: "New Struct"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/New.htm"
converted: "2025-09-14T03:59:24.302Z"
---

# ![New Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_New.png) New Struct

This action is **only** used when creating structs using a function that has been flagged as a **constructor** function (see [Declare A New Function](Declare_A_New_Function.md) for more information). This action takes the function method for a previously defined function, as well as a number of arguments, which you can expand to add more if required using the ![Expand Arguments Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) icon on the left. These arguments should correspond to the inputs required by the function, and will be used to populate the struct that is being created. The struct will be returned to the target variable, which can be flagged as a temporary local variable or not.

#### Action Syntax:

![New Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_New.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Function | The name of the script or user-defined function to call. |
| Argument0 ... Argument3 | The different arguments (values) that are to be passed to the script or function (unused arguments can be left blank) |
| Target | The name of the variable that is to be targeted for any returned values (can be left blank) |

#### Extended Example:

![New Exmaple 1](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Declare_Function_3.png)The above action block code would probably go in the **Create Event** of an instance, and declares a new constructor function init\_char\_struct with four arguments: \_str1, \_str2, \_val1 and \_val2. These arguments are then used to populate the given variables within the struct that the function is creating. You would then call the function using the New Struct action in any subsequent event, like this:

![New Exmaple 2](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Declare_Function_4.png)The function is called and it will return a new struct to the array "char", and the struct will be populated with the variables "name", "location", "hp" and "mana", set to the values used for the corresponding arguments in the function.