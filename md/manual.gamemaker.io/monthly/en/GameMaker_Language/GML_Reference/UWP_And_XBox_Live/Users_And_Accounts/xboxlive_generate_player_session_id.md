---
title: "xboxlive_generate_player_session_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_generate_player_session_id.htm"
converted: "2025-09-14T04:00:09.123Z"
---

# xboxlive\_generate\_player\_session\_id

This function will generate a unique string (containing a GUID) for the current player session. This can then be used with the function [xboxlive\_fire\_event()](../Stats_And_Leaderboards/xboxlive_fire_event.md).

#### Syntax:

xboxlive\_generate\_player\_session\_id();

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

if (!xboxlive\_user\_is\_signed\_in())
{
    if (!xboxlive\_user\_is\_signing\_in())
    {
        xboxlive\_show\_account\_picker();
    }
}
else
{
    global.GamerTag = xboxlive\_gamertag\_for\_user();
}

The above code checks to see if a user is signed-in to XBox Live and if they are signed-in, the code will get the gamertag for the user and store it in a global variable for future use. If they are not signed-in then the code checks to see if they are in the process of signing-in, in which case nothing further will happen, and if they are not, then it will open the account picker, prompting them to sign-in.