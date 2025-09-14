---
title: "xboxlive_get_savedata_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Saving_Data/xboxlive_get_savedata_user.htm"
converted: "2025-09-14T04:00:08.646Z"
---

# xboxlive\_get\_savedata\_user

This function returns the user ID pointer currently associated with file saving (or the constant pointer\_null if no user ID is currently being used). See [xboxlive\_set\_savedata\_user()](xboxlive_set_savedata_user.md) for further details.

#### Syntax:

xboxlive\_get\_savedata\_user();

#### Returns:

[Xbox User ID](../Users_And_Accounts/xboxlive_get_user.md) or [pointer\_null](../../../GML_Overview/Data_Types.md)

#### Example:

if (xboxlive\_get\_savedata\_user() != user\_id\[0\])
{
    xboxlive\_set\_savedata\_user(user\_id\[0\]);
}

The above code checks to see if a user is currently assigned as the save target, and if they are not then they are assigned.