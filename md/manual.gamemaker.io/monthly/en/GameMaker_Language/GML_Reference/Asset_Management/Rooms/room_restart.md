---
title: "room_restart"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_restart.htm"
converted: "2025-09-14T03:59:39.320Z"
---

# room\_restart

This function will restart the current room, as if it had just been entered. Note that the room will not restart until the end of the event where the function was called, so any code after this has been called will still run if in the same event. This function will also trigger the **Room End** event.

NOTE You will not be able to [create new instances](../Instances/instance_create_layer.md) of objects in the same event after this function is called. There is one exception: if the object you're creating an instance of is already [marked persistent](../../../../The_Asset_Editors/Objects.md), or its [persistent](../Instances/Instance_Variables/persistent.md) variable is set to true in the [variable struct](../Instances/instance_create_layer.md) passed into the instance\_create\_\*() function, it will be created.

In the latter case (making the new instance persistent through the variable struct), the [Variable Definitions](../../../../The_Asset_Editors/Object_Properties/Object_Variables.md) for that instance will not be executed.

#### Syntax:

room\_restart();

#### Returns:

N/A

#### Example:

if lives < 1 room\_restart();

The above code checks to see if the variable "lives" is less than 1 and if it is it will restart the room.