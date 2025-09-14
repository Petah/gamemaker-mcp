---
title: "xboxlive_gamerscore_for_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_gamerscore_for_user.htm"
converted: "2025-09-14T04:00:09.095Z"
---

# xboxlive\_gamerscore\_for\_user

This function will return the XBox Live gamerscore for the given user ID pointer.

#### Syntax:

xboxlive\_gamerscore\_for\_user(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID (a pointer) to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

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