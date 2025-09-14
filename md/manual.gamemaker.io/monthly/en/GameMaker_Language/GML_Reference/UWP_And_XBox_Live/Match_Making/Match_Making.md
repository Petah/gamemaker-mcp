---
title: "Match Making"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Match_Making/Match_Making.htm"
converted: "2025-09-14T04:00:08.440Z"
---

# Matchmaking

Matchmaking (multiplayer) for Xbox Live and UWP requires a bit of configuration, via setup of session templates and matchmaking hoppers on the Xbox Developer Portal. GameMaker supports this through the use of the UWP target and permits you to do the following:

-   Create a multiplayer session
-   Find (and/or join) a multiplayer session
-   Be notified when relevant players join or leave a session, as well as receive their network connection details
-   Be notified when the session host migrates to a different user
-   Get a list of users in the session
-   Leave a session

To create a multiplayer session, you need to specify what **Session Template** is going to be used. These session templates are defined on the XDP, but an example is shown below:

Session Name: MatchSession
Contract Version: 107
Session Template (JSON text):
{
    "constants": {
        "system": {
            "version": 1,
            "maxMembersCount": 12,
            "capabilities": {
        },
            "memberInitialization": {
                "externalEvaluation": false,
                "membersNeededToStart": 1
            }
        },
        "custom": {}
    }
}

A description of the fields can be found in "Session Overview" in the XDK help file. Note that we currently don't support setting session parameters dynamically from GameMaker.

Along with the session template, a matchmaking hopper must also be set up to allow the session to be found (this is also done on the XDP). Hoppers are used to define rules which are used when matching players. As with session parameters, we don't currently support setting hopper parameters dynamically from GameMaker: Studio. See the "SmartMatch Matchmaking Configuration" section in the XDK help file for further details.

The following functions are available for Xbox Live matchmaking (note that you will also need to use the GameMaker [Networking Functions](../../Networking/Networking.md) for the connections etc...):

-   [xboxlive\_matchmaking\_start](xboxlive_matchmaking_start.md)
-   [xboxlive\_matchmaking\_stop](xboxlive_matchmaking_stop.md)
-   [xboxlive\_matchmaking\_create](xboxlive_matchmaking_create.md)
-   [xboxlive\_matchmaking\_find](xboxlive_matchmaking_find.md)
-   [xboxlive\_matchmaking\_session\_get\_users](xboxlive_matchmaking_session_get_users.md)
-   [xboxlive\_matchmaking\_join\_session](xboxlive_matchmaking_join_session.md)
-   [xboxlive\_matchmaking\_session\_leave](xboxlive_matchmaking_session_leave.md)

GameMaker provides an extra set of matchmaking functions for you to use to invite other players on the network to join a session, or for you to accept an invitation to join someone else's session. The functions available are:

-   [xboxlive\_matchmaking\_send\_invites](../../../../../../../GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Match_Making/xboxlive_matchmaking_send_invites.md)
-   [xboxlive\_matchmaking\_set\_joinable\_session](xboxlive_matchmaking_set_joinable_session.md)
-   [xboxlive\_matchmaking\_join\_invite](xboxlive_matchmaking_join_invite.md)

When the player accepts an invitation from another player, one of two things happens:

-   If your game is currently running, you will receive a [Social Asynchronous Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/Social.md) with [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map containing the following keys/values:

    -   "**id**" - This will be set to MATCHMAKING\_INVITATION.
    -   "**invitation\_id**" - This is the unique session ID value
    -   "**invitation\_host**" - This is the unique session ID value for the session host

    You should save the ID and Host values then leave any sessions you need to, and call the function xboxlive\_matchmaking\_join\_invite(), passing in as arguments the invitation ID and invitation host values in a Step event.
-   If your game is not currently running, it will be started by the OS. You will receive the same type of **Social Asynchronous Event** with the same keys set as those listed above. Save them to variables, then connect to Xbox Live matchmaking and finally call xboxlive\_matchmaking\_join\_invite().

Once you have called xboxlive\_matchmaking\_join\_invite() the user will attempt to join the session and you will receive Asynchronous Social Events as if you had called xboxlive\_matchmaking\_find() on this session.