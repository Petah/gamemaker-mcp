---
title: "xboxlive_user_id_for_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_user_id_for_user.htm"
converted: "2025-09-14T04:00:09.312Z"
---

# xboxlive\_user\_id\_for\_user

This function converts the User ID pointer into a string.

#### Syntax:

xboxlive\_user\_id\_for\_user(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The ID pointer of the user to check. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var \_uid = xboxlive\_user\_for\_pad(0);
uid\_string = xboxlive\_user\_id\_for\_user(\_uid);

The above code gets the user ID pointer for the user assigned to the gamepad \[0\] slot, and then saves that user ID as a string to an instance variable.