---
title: "xboxlive_user_is_signing_in"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_user_is_signing_in.htm"
converted: "2025-09-14T04:00:09.383Z"
---

# xboxlive\_user\_is\_signing\_in

The function will check to see if a user is in the process of signing-in and return true if that is the case and false otherwise.

#### Syntax:

xboxlive\_user\_is\_signing\_in();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

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