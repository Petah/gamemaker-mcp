---
title: "room_goto_next"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_goto_next.htm"
converted: "2025-09-14T03:59:39.186Z"
---

# room\_goto\_next

With this function you can make your game go to the next one as listed in the [Room Manager](../../../../Settings/The_Room_Manager.md) at the time the game was compiled. If this room does not exist, an error will be thrown and the game will be forced to close. Note that the room will not change until the end of the event where the function was called, so any code after this has been called will still run if in the same event.

NOTE You will not be able to [create new instances](../Instances/instance_create_layer.md) of objects in the same event after this function is called. There is one exception: if the object you're creating an instance of is already [marked persistent](../../../../The_Asset_Editors/Objects.md), or its [persistent](../Instances/Instance_Variables/persistent.md) variable is set to true in the [variable struct](../Instances/instance_create_layer.md) passed into the instance\_create\_\*() function, it will be created.

In the latter case (making the new instance persistent through the variable struct), the [Variable Definitions](../../../../The_Asset_Editors/Object_Properties/Object_Variables.md) for that instance will not be executed.

#### Syntax:

room\_goto\_next();

#### Returns:

N/A

#### Example:

if (room\_exists(room\_next(room)))
{
    room\_goto\_next();
}

The above code will check to see if there is another room after the current one and if so it will go to that room.