---
title: "xboxlive_matchmaking_session_leave"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Match_Making/xboxlive_matchmaking_session_leave.htm"
converted: "2025-09-14T04:00:08.561Z"
---

# xboxlive\_matchmaking\_session\_leave

This function causes the user who created or found the specified session to leave it. You can get the session ID pointer from the [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map that is returned in the [Asynchronous Social Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/Social.md) when you created or found a session (see [xboxlive\_matchmaking\_create()](xboxlive_matchmaking_create.md) for more details).

#### Syntax:

xboxlive\_matchmaking\_session\_leave(session\_id);

| Argument | Type | Description |
| --- | --- | --- |
| session_id | Real | The Session ID pointer of the session to leave. |

#### Returns:

N/A

#### Example:

if (gamepad\_button\_check\_pressed(0, gp\_start))
{
    xboxlive\_matchmaking\_session\_leave(global.SessionID);
}

The above code checks for a gamepad button press and if one is detected then the user will logged out of the given matchmaking session.