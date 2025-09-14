---
title: "xboxlive_user_for_pad"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_user_for_pad.htm"
converted: "2025-09-14T04:00:09.299Z"
---

# xboxlive\_user\_for\_pad

This function will return the User ID pointer associated with the given gamepad index value, or pointer\_null if no user is associated with it. Note that this function should only be used with gamepad indices, and **not** with [xboxlive\_get\_user\_count()](xboxlive_get_user_count.md).

#### Syntax:

xboxlive\_user\_for\_pad(pad\_index);

| Argument | Type | Description |
| --- | --- | --- |
| pad_index | Real | The index (an integer) of the gamepad slot to check |

#### Returns:

[Xbox User ID](xboxlive_get_user.md) or [pointer\_null](../../../GML_Overview/Data_Types.md)

#### Example:

for(var i = 0; i < 11; ++i;)
{
    var u\_id = xboxlive\_user\_for\_pad(i);
    if (u\_id != pointer\_null)
    {
        pad\_name\[i\] = xboxlive\_gamedisplayname\_for\_user(u\_id);
    }
    else
    {
        pad\_name\[i\] = "Press Play";
    }
}

The above code loops through all available pad slots and checks to see if there is a user ID pointer associated with it. If there is, an array is set with the user display name, otherwise the array is set to some default text.