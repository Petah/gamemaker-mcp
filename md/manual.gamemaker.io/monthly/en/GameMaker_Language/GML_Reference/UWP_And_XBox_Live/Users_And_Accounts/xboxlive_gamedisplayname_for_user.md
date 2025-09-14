---
title: "xboxlive_gamedisplayname_for_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_gamedisplayname_for_user.htm"
converted: "2025-09-14T04:00:09.057Z"
---

# xboxlive\_gamedisplayname\_for\_user

With this function you can retrieve the display name - as a string - from the user ID pointer given. Note that if the user is local then the returned value is simply a string of the their display name, but if it is a remote user then the string will be their gamertag which can then be used, for example, for muting/unmuting in voice chat.

#### Syntax:

xboxlive\_gamedisplayname\_for\_user(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The ID pointer of the user to check. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

for(var i = 0; i < xboxlive\_get\_user\_count(); ++i;)
{
    user\_id\[i\] = xboxlive\_get\_user(i);
    user\_name\[i\] = xboxlive\_gamedisplayname\_for\_user(user\_id\[i\]);
}

The above code gets the user ID pointer for each available user account and then stores the pointer along with the display name in two arrays.