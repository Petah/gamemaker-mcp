---
title: "xboxlive_matchmaking_set_joinable_session"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Match_Making/xboxlive_matchmaking_set_joinable_session.htm"
converted: "2025-09-14T04:00:08.574Z"
---

# xboxlive\_matchmaking\_set\_joinable\_session

This function sets a (previously created) session to be available for other users to join through the system UI. A user only has one joinable session at once, and when they leave the session (or the session ends) this will be cleared, however you can clear it manually by passing -1 in for the session argument.

#### Syntax:

xboxlive\_matchmaking\_set\_joinable\_session(local\_user, session\_that\_is\_joinable);

| Argument | Type | Description |
| --- | --- | --- |
| local_user | Xbox User ID | The local user ID pointer. |
| session_that_is_joinable | Real | The session ID to make joinable, or -1. |

#### Returns:

N/A

#### Example:

if (global.session\_ID != -1)
{
    xboxlive\_matchmaking\_set\_joinable\_session(xboxlive\_user\_for\_pad(0), global.session\_ID);
}

The above code checks for a valid session ID value, and if one is detected it sets the session to be joinable.