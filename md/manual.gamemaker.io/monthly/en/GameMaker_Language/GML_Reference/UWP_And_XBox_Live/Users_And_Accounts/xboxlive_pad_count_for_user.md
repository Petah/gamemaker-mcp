---
title: "xboxlive_pad_count_for_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_pad_count_for_user.htm"
converted: "2025-09-14T04:00:09.175Z"
---

# xboxlive\_pad\_count\_for\_user

With this function you can find out how many pad "slots" are active for the current user (see [xboxlive\_pad\_for\_user()](xboxlive_pad_for_user.md) for further details).

#### Syntax:

xboxlive\_pad\_count\_for\_user(user\_id, slot);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID (a pointer) to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

global.slots\[0\] = xboxlive\_pad\_count\_for\_user(user\_id\[0\])

The above code stores the number of pads associated with the given user ID pointer.