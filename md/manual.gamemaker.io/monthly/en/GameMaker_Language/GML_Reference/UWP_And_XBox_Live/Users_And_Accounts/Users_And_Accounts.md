---
title: "Users And Accounts"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/Users_And_Accounts.htm"
converted: "2025-09-14T04:00:09.024Z"
---

# Users And Accounts

This section is for users targeting the Xbox platforms and outlines the Xbox Live functions available for dealing with users and user accounts.

The Xbox One allows multiple users to sign in to a console simultaneously. Each user has a specific controller associated with them and any save game data is also user-specific. To make the most of this system, GameMaker introduces a number of Xbox One only functions related to the association between controllers and users, permitting you to query information about the user and also controlling how save data is handled on a per-user basis. You can find further developer information about this system from the official white paper on the [Microsoft developer site](https://developer.xboxlive.com/en-us/platform/development/education/Documents/Users,%20Controllers,%20and%20Pairing%20-%20Identity%20on%20Xbox%20One.aspx).

**NOTE**: Note that the User ID is unique to each individual and is perpetuated across different consoles, so if the same user signs in on two different devices this User ID will be the same.

The following functions exist for you to use with XBox Live accounts:

-   [x](xboxlive_user_is_signed_in.md)[boxlive\_user\_is\_signed\_in](xboxlive_user_is_signed_in.md)
-   [xboxlive\_user\_is\_signing\_in](xboxlive_user_is_signing_in.md)
-   [xboxlive\_gamertag\_for\_user](xboxlive_gamertag_for_user.md)
-   [xboxlive\_show\_account\_picker](xboxlive_show_account_picker.md)

The following functions are _only_ valid when targeting the XBox One using UWP with a valid [ID@XBox account](https://www.xbox.com/es-ES/developers/id):

-   [xboxlive\_get\_user\_count](xboxlive_get_user_count.md)
-   [xboxlive\_get\_user](xboxlive_get_user.md)
-   [xboxlive\_get\_activating\_user](xboxlive_get_activating_user.md)
-   [xboxlive\_user\_is\_guest](xboxlive_user_is_guest.md)
-   [xboxlive\_user\_is\_active](xboxlive_user_is_active.md)
-   [xboxlive\_user\_is\_remote](xboxlive_user_is_remote.md)
-   [xboxlive\_user\_id\_for\_user](xboxlive_user_id_for_user.md)
-   [xboxlive\_sponsor\_for\_user](xboxlive_sponsor_for_user.md)
-   [xboxlive\_set\_rich\_presence](xboxlive_set_rich_presence.md)
-   [xboxlive\_gamedisplayname\_for\_user](xboxlive_gamedisplayname_for_user.md)
-   [xboxlive\_user\_for\_pad](xboxlive_user_for_pad.md)
-   [xboxlive\_pad\_for\_user](xboxlive_pad_for_user.md)
-   [xboxlive\_pad\_count\_for\_user](xboxlive_pad_count_for_user.md)
-   [xboxlive\_agegroup\_for\_user](xboxlive_agegroup_for_user.md)
-   [xboxlive\_gamerscore\_for\_user](xboxlive_gamerscore_for_user.md)
-   [xboxlive\_show\_profile\_card\_for\_user](xboxlive_show_profile_card_for_user.md)
-   [xboxlive\_reputation\_for\_user](xboxlive_reputation_for_user.md)
-   [xboxlive\_sprite\_add\_from\_gamerpicture](xboxlive_sprite_add_from_gamerpicture.md)
-   [xboxlive\_generate\_player\_session\_id](xboxlive_generate_player_session_id.md)