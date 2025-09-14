---
title: "xboxlive_matchmaking_join_invite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Match_Making/xboxlive_matchmaking_join_invite.htm"
converted: "2025-09-14T04:00:08.497Z"
---

# xboxlive\_matchmaking\_join\_invite

This function can be called to process a join invitation once you have successfully called [xboxlive\_matchmaking\_start()](xboxlive_matchmaking_start.md). You supply the local UserID and the the invitation values (ID and host ID) which were returned when the invitation was received, along with the name of the Session Template that you created (a string). It will then join the user to the session they've been invited to, and you will receive Social Asynchronous Events as if you had called [xboxlive\_matchmaking\_find()](xboxlive_matchmaking_find.md).

#### Syntax:

xboxlive\_matchmaking\_join\_invite(user\_who\_received\_invite, invitation\_id, invitation\_host, sda\_template\_name);

| Argument | Type | Description |
| --- | --- | --- |
| user_who_received_invite | Xbox User ID | The local user ID pointer. |
| invitation_id | Real | The invitation ID. |
| invitation_host | Real | The invitation host ID. |
| sda_template_name | String | The session template name. |

#### Returns:

N/A

#### Example:

var userID = xboxlive\_user\_for\_pad(global.PadIndex);
xboxlive\_matchmaking\_join\_invite(userID, global.InviteID, global.InviteHost, global.SessionTemplate);

The above gets the user ID for the given gamepad and then attaempt to join the session that they have been invited to.