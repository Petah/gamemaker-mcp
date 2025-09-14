---
title: "xboxlive_sprite_add_from_gamerpicture"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_sprite_add_from_gamerpicture.htm"
converted: "2025-09-14T04:00:09.280Z"
---

# xboxlive\_sprite\_add\_from\_gamerpicture

With this function you can get the gamer picture for a given user ID pointer. The function works asynchronously, and will trigger an [Image Loaded](../../../../The_Asset_Editors/Object_Properties/Async_Events/Image_Loaded.md) asynchronous event to inform you that the function is finished (like with HTML5/URL calls to [sprite\_add()](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md)). The Asynchronous Image Loaded event will have a DS map stored in the built-in variable [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md). The map contains the following information:

-   "**filename**": The complete path to the file you requested.
-   "**id**": The ID of the resource that you have loaded. This will be the same as the variable that you have assigned the resource to.
-   "**status**": Returns a value of less than 0 for an error.

**NOTE**: When you dynamically load a sprite into your game at runtime, you must remember to remove it again using [sprite\_delete()](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_delete.md) when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.

#### Syntax:

xboxlive\_sprite\_add\_from\_gamerpicture(user\_id, imagesize, xorig, yorig);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID (a pointer) to get the gamer picture for |
| imagesize | Real | Size in pixels of the sprite to be returned |
| xorig | Real | Indicate the x position of the origin in the sprite |
| yorig | Real | Indicate the y position of the origin in the sprite |

#### Returns:

[Async Request ID](../../Asynchronous_Functions/Asynchronous_Functions.md)

#### Example:

var \_a = 0;
var \_num = xboxlive\_get\_user\_count();
for (var i = 0; i < \_num; ++i;)
{
    var \_uid = xboxlive\_get\_user(i);
    if (\_uid != pointer\_null)
    {
        global.UserName\[\_a\] = xboxlive\_gamedisplayname\_for\_user(\_uid);
        global.UserScore\[\_a\] = xboxlive\_gamerscore\_for\_user(\_uid);
        global.UserRep\[\_a\] = xboxlive\_reputation\_for\_user(\_uid);
        global.UserAvatar\[\_a\] = xboxlive\_sprite\_add\_from\_gamerpicture(\_uid, 256, 0, 0);
        ++a;
    }
}

The above code loops through the logged in users and stores their gamer data in various global arrays.