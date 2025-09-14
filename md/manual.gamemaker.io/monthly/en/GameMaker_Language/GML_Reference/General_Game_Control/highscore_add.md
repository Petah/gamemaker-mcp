---
title: "highscore_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/highscore_add.htm"
converted: "2025-09-14T04:00:00.380Z"
---

# highscore\_add

With this function you can add a name and a score to the internal global high score list. There is no need to check the value to see if it is high enough to enter into the score list as GameMaker will only store those values that are greater than the tenth position stored.

#### Syntax:

highscore\_add(str, numb);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string (name) to attribute the score to. |
| numb | Real | The number (score) to add. |

#### Returns:

N/A

#### Example:

if (lives == 0)
{
    highscore\_add(global.Name, score);
    score = 0;
    room\_goto(rm\_MainMenu);
}

The above code will check the lives and if they are set to 0, it will add the current score and the string held in the global variable "Name" into the high score list, before finally setting the score to 0 and sending the player to the room indexed in "rm\_MainMenu".