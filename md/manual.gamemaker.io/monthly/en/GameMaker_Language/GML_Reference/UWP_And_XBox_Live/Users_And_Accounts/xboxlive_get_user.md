---
title: "xboxlive_get_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_get_user.htm"
converted: "2025-09-14T04:00:09.150Z"
---

# xboxlive\_get\_user

With this function you can retrieve the user ID pointer for the indexed user. If the user does not exist, the function will return the constant pointer\_null instead. You can find the number of users currently logged in with the function [xboxlive\_get\_user\_count()](xboxlive_get_user_count.md).

**IMPORTANT**: This function should only be used with xboxlive\_get\_user\_count() - do not use this with gamepads. Use [xboxlive\_user\_for\_pad()](xboxlive_user_for_pad.md) instead.

#### Syntax:

xboxlive\_get\_user(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The index (an integer) to get the User ID from. |

#### Returns:

[Xbox User ID](xboxlive_get_user.md) or [pointer\_null](../../../GML_Overview/Data_Types.md)

#### Example:

for(var i = 0; i < xboxlive\_get\_user\_count(); ++i;)
{
    user\_id\[i\] = xboxlive\_get\_user(i);
}

The above loops through all the signed in users and stores their unique ID pointer in an array.