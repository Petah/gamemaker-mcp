---
title: "xboxlive_user_is_remote"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_user_is_remote.htm"
converted: "2025-09-14T04:00:09.356Z"
---

# xboxlive\_user\_is\_remote

This function will check the given user ID and return true if the player is a remote player, or false otherwise.

#### Syntax:

xboxlive\_user\_is\_remote(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The ID pointer of the user to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

global.PlayerNum = 0;
global.Player\_ID = array\_create();
for(var i = 0; i < xboxlive\_get\_user\_count(); ++i;)
{
    var \_uid = xboxlive\_get\_user(i);
    if (xboxlive\_user\_is\_active(\_uid))
    {
        if (!xboxlive\_user\_is\_remote(\_uid))
        {
            global.Remote\_Player\_ID\[global.PlayerNum++\] = \_uid;
        }
    }
}

The above code loops through the user accounts and then checks to see if any of them are active. If they are, their user ID is added into a global array, only if they are not remote users.