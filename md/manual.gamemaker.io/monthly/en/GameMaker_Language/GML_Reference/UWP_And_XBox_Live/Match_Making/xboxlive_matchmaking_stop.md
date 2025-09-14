---
title: "xboxlive_matchmaking_stop"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Match_Making/xboxlive_matchmaking_stop.htm"
converted: "2025-09-14T04:00:08.603Z"
---

# xboxlive\_matchmaking\_stop

This function can be used to end a matchmaking session for the given user.

#### Syntax:

xboxlive\_matchmaking\_stop(user\_id);

| Argument | Type | Description |
| --- | --- | --- |
| user_id | Xbox User ID | The user ID pointer to use |

#### Returns:

N/A

#### Example:

if !xboxlive\_user\_is\_signed\_in(user\_id\[0\])
{
    xboxlive\_matchmaking\_stop(user\_id\[0\]);
}

The above code will end the matchmaking session for the given user.