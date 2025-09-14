---
title: "xboxlive_show_account_picker"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Users_And_Accounts/xboxlive_show_account_picker.htm"
converted: "2025-09-14T04:00:09.234Z"
---

# xboxlive\_show\_account\_picker

The function will open the XBox Account Picker screen so that the user can sign-in if they are not already signed in (if they are then the function will do nothing). Note that this function is only applicable when using the UWP build on PC and not Xbox, as to launch a game on Xbox the user has to have signed in already.

#### Syntax:

xboxlive\_show\_account\_picker();

#### Returns:

N/A

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