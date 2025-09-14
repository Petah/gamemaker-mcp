---
title: "room_goto"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_goto.htm"
converted: "2025-09-14T03:59:39.171Z"
---

# room\_goto

This function permits you to go to any room in your game project, whether created using code or in the Asset Browser. You supply the room index (stored in the variable for the room name, or as a variable returned from the function [room\_add()](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_add.md)). Note that the room will not change until the end of the event where the function was called, so any code after this has been called will still run if in the same event. This function will also trigger the **Room End** event.

NOTE You will not be able to [create new instances](../Instances/instance_create_layer.md) of objects in the same event after this function is called. There is one exception: if the object you're creating an instance of is already [marked persistent](../../../../The_Asset_Editors/Objects.md), or its [persistent](../Instances/Instance_Variables/persistent.md) variable is set to true in the [variable struct](../Instances/instance_create_layer.md) passed into the instance\_create\_\*() function, it will be created.

In the latter case (making the new instance persistent through the variable struct), the [Variable Definitions](../../../../The_Asset_Editors/Object_Properties/Object_Variables.md) for that instance will not be executed.

NOTE Room IDs are not based on their order in the Asset Browser or the Room Manager, and so you should avoid supplying a number value directly. Instead, use the room constant for the asset you want to reference (which is simply its name) or retrieve it through a function.

#### Syntax:

room\_goto(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The index of the room to go to. |

#### Returns:

N/A

#### Example:

switch (global.level)
{
    case 0: room\_goto(rm\_level1); break;
    case 1: room\_goto(rm\_level2); break;
    case 2: room\_goto(rm\_level3); break;
}

The above code will check a global variable and change room based on the value that it holds.