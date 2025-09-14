---
title: "xboxlive_achievement_load_friends"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_achievement_load_friends.htm"
converted: "2025-09-14T04:00:08.692Z"
---

# xboxlive\_achievement\_load\_friends

This function will send a request to the server for information on all the logged in users friends and will trigger a callback [Social Asynchronous Event](../../../../../../../The_Asset_Editors/Object_Properties/Async_Events/Social.md) which contains the [async\_load](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map populated with the relevant key/value pairs. The _id_ key of this DS Map is used to identify the correct callback (there can be more than one trigger function for any given asynchronous event), and will be paired with the **constant** xboxlive\_achievement\_friends\_info as well as a number of other key/value pairs for each friend. The exact contents of the map are shown below:

-   "**id**" - For this function it should be xboxlive\_achievement\_friends\_info
-   "**FriendN**" - The name of the friend, where "N" is an integer value corresponding to their position within the friends list.
-   "**FriendidN**" - The unique user id of the friend, "N".

#### **Syntax:**

xboxlive\_achievement\_load\_friends();

#### Returns:

N/A

#### Extended Example:

The following code would probably be called after the player has logged into their game account to get a list of all that users friends:

xboxlive\_achievement\_load\_friends();

This will send off a request for the information on the users friends and generate an asynchronous callback with the special async\_load DS map containing the following data:

var ident = ds\_map\_find\_value(async\_load, "id");
if (ident == xboxlive\_achievement\_friends\_info)
{
    var numfriends = ds\_map\_find\_value(async\_load, "numfriends");
    global.numfriends = numfriends;
    for(var i=0; i < numfriends; i++;)
    {
        global.friendname\[i\] = ds\_map\_find\_value(async\_load, "Friend" + string(i));
        global.friendid\[i\] = ds\_map\_find\_value(async\_load, "Friendid" + string(i));
    }
}

The above code checks the returned DS Map in the **Social Asynchronous Event** and if its "id" matches the constant being checked, it then loops through the map storing all the different values in a number of arrays.