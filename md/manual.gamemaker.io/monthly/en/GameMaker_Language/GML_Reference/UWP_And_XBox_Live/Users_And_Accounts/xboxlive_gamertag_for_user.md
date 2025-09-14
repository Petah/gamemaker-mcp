---
title: "xboxlive_gamertag_for_user"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_gamertag_for_user.htm"
converted: "2025-09-14T04:00:09.110Z"
---

# xboxlive\_gamertag\_for\_user

This function will get the Gamer Tag for the currently signed-in user. Note that this function is _only valid if a user is signed in_ and as such you should do a check for this using the function [xboxlive\_user\_is\_signed\_in()](xboxlive_user_is_signed_in.md) before requesting the Gamer Tag. If you call this function when no user is signed in you will get an empty string"" returned.

#### Syntax:

xboxlive\_gamertag\_for\_user();

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