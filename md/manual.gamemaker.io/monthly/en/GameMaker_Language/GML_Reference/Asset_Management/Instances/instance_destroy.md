---
title: "instance_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_destroy.htm"
converted: "2025-09-14T03:59:33.872Z"
---

# instance\_destroy

You call this function whenever you wish to "destroy" an instance, normally triggering a [Destroy Event](../../../../The_Asset_Editors/Object_Properties/Object_Events.md) and also a [Clean Up Event](../../../../The_Asset_Editors/Object_Properties/Object_Events.md). This will remove it from the room until the room is restarted (unless the room is persistent). Calling the function with no arguments will simply destroy the instance that is currently in scope and running the code, but you can provide an optional "id" argument and target a specific instance by using the instance [id](Instance_Variables/id.md) handle, or you can target all instances of a particular object by using an [object\_index](../Objects/object_index.md). For example:

instance\_destroy(other);      // destroy the "other" instance in a Collision Event
instance\_destroy(obj\_Bullet); // destroy ALL instances of the object "obj\_Bullet"

The second _optional_ flag permits you to "switch off" the Destroy Event for the instance being destroyed. By default the Destroy Event will _always_ be performed, but if you set this flag to false then you can make the instance destroy itself and skip performing that event.

**IMPORTANT!** This will skip the Destroy Event, but the Clean Up event will still be called.

It is worth noting that when you destroy an instance, its destroy event is called _immediately_ after the code or action that calls the destroy function. Also, although the destroy event is performed, the instance _is not immediately removed from the game_, and it will continue to perform the code contained in the current event. Only when the current event is over will it be removed from the game.

So, if you have, for example, this code:

if (hp <= 0) instance\_destroy();
score += 10;

The variable "score" will be incremented _even though the instance\_destroy function has been called_, and the instance will finally be removed from your game at the end of the event. Be careful of this, as if you have (for example) created a dynamic resource for the instance, like a data structure, and then have destroyed that resource in the destroy event, if there are any references to it after the destroy function or action has been performed then you will get an "unknown resource" error, as the destroy event removed it from the game.

#### Syntax:

instance\_destroy(\[id, execute\_event\_flag\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | Object Instance or Object Asset | OPTIONAL The instance ID to destroy, or the object asset to destroy instances of (optional, default is the calling instance) |
| execute_event_flag | Boolean | OPTIONAL Set to true or false to perform the Destroy event or not (optional, default is true) |

#### Returns:

N/A

#### Example:

if (bbox\_right < 0 || bbox\_left > room\_width || bbox\_bottom < 0 || bbox\_top > room\_height)
{
    instance\_destroy(id, false);
}

The above code will destroy the instance running the code without calling the Destroy Event if the instance is outside the room bounds.