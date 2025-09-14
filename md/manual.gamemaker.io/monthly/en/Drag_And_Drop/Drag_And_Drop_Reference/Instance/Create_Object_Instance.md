---
title: "Create Instance"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Create_Object_Instance.htm"
converted: "2025-09-14T03:59:25.926Z"
---

# ![Create Object INstance Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Create.png) Create Instance

With this action you can create an instance of any object from [The Asset Browser](../../../Introduction/The_Asset_Browser.md). You give the name of the object and an x/y position within the room where it is to be created as well as the name of the layer to create the instance on (it must be an **Instance Layer**). You can tick the "relative" flags to position the instance relative to the instance running the action code blocks. Whenever you create an instance in the game, it is given a unique ID value with which you can then identify the instance in further actions, therefore this action permits you to define a "Target" variable to hold this ID value (as shown in the example below).

NOTE The target can be flagged as a temporary (local) variable, which will be created for the action and can be used in all subsequent actions.

#### Action Syntax:

![Create Object Instance Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Create.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Object | The name of the object to create an instance of. |
| x | The x position in the room to create the instance (can be relative to the calling instance). |
| y | The y position in the room to create the instance (can be relative to the calling instance). |
| Layer | The name (a string) of the instance layer to create the instance on. |
| Target | The variable to target for the return value. |

#### Example:

![Create Object Instance Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Create.png)The above action block code creates a new instance and stores its unique ID value in a temporary variable. This variable is then used in the [Apply To...](../Common/Apply_To...md) action to set some properties of the instance created.