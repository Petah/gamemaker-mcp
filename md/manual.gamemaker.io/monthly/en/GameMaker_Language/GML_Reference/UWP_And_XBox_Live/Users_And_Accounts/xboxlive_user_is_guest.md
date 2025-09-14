---
title: "xboxlive_user_is_guest"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_user_is_guest.htm"
converted: "2025-09-14T04:00:09.342Z"
---

# xboxlive\_user\_is\_guest

This function will return true if the given user ID pointer is a guest user and false if they are not. You can get a User ID pointer with the function [xboxlive\_get\_user()](xboxlive_get_user.md).

#### Syntax:

xboxlive\_user\_is\_guest(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The ID pointer of the user to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if xboxlive\_user\_is\_guest(user\_id\[0\])
{
    global.user\_name\[0\] = "GUEST";
}
else
{
    global.user\_name\[0\] = xboxlive\_gamedisplayname\_for\_user(user\_id\[0\]);
}

The above stores the activating user ID pointer in a global variable.