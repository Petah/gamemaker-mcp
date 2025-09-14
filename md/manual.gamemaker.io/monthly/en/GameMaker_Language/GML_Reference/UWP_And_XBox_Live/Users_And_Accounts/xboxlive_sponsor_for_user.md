---
title: "xboxlive_sponsor_for_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_sponsor_for_user.htm"
converted: "2025-09-14T04:00:09.264Z"
---

# xboxlive\_sponsor\_for\_user

This function retrieves the ID of the given user's sponsor.

#### Syntax:

xboxlive\_sponsor\_for\_user(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The ID pointer of the user to check. |

#### Returns:

[Xbox Sponsor ID](xboxlive_sponsor_for_user.md)

#### Example:

var \_uid = xboxlive\_user\_for\_pad(0);
sponsor = xboxlive\_sponsor\_for\_user(\_uid);

The above code gets the user ID pointer for the user assigned to the gamepad \[0\] slot, and then uses that ID to retrieve the users sponsor ID.