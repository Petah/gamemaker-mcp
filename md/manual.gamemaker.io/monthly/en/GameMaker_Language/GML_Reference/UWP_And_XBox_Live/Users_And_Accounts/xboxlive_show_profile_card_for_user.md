---
title: "xboxlive_show_profile_card_for_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_show_profile_card_for_user.htm"
converted: "2025-09-14T04:00:09.251Z"
---

# xboxlive\_show\_profile\_card\_for\_user

With this function you can request that the XBox shows the profile card for the target user ID pointer. The function requires both the user ID pointer for the user that is _requesting_ the information as well as the user ID pointer of the user to _target_ and get the profile card of.

#### Syntax:

xboxlive\_show\_profile\_card\_for\_user(requesting\_user\_id, target\_user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| requesting_user_id | Xbox User ID | The user ID (a pointer) of the requesting user |
| target_user_id | Xbox User ID | The user ID (a pointer) of the user to get the profile card of |

#### Returns:

N/A

#### Example:

if (gamepad(0, gp\_start))
{
    xboxlive\_show\_profile\_card\_for\_user(user\[0\], user\[1\]);
}

The above code checks for a gamepad button press and if one is detected it shows the profile card for the given user.